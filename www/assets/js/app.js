(function() {
	//ngSanitize needed for using ng-bind-html
	var app = angular.module('gameshop', ['ngSanitize', 'ui.router', 'uiGmapgoogle-maps', 'gameshopdata']);

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'pages/home.html'
			})
			.state('nosotros', {
				url: "/nosotros",
				templateUrl: "pages/nosotros.html",
				controller: "MapController as mapCtrl"
			})
			.state('productos', {
				abstract: true,
				templateUrl: "pages/productos.html"
			})
			.state('productos.productos', {
				url: "/productos",
				views: {
					"productos@productos": {
						templateUrl: "pages/productos-productos.html",
						controller: "ProductosController as productosCtrl"
					}
				}
			})
			.state('productos.productos.categoria', {
				url: "/:category",
				views: {
					"productos@productos": {
						templateUrl: "pages/productos-categoria.html",
						controller: "ProductosCategoriaController as productosCategoriaCtrl"
					}
				}
			})
			.state('productos.productos.categoria.producto', {
				url: "/:productUrl",
				views: {
					"productos@productos": {
						templateUrl: "pages/productos-detalle.html",
						controller: "ProductosProductoController as productoCtrl"
					}
				}
			});
	});

	app.controller('MapController', ['$scope', function($scope) {
		var gameshop_coords = { latitude: -32.950539, longitude: -60.644869};
		$scope.map = { center: gameshop_coords,
					   zoom: 15,
					   options: {
					   	    disableDefaultUI: true,
    						mapTypeId: google.maps.MapTypeId.ROADMAP
					   }};
		$scope.marker = {
			id : 1,
			coords : gameshop_coords,
			options: { title: 'GAMESHOP'}
		}
	}]);

	app.controller('IndexController', function($scope, contentdata) {
		$scope.bestSellers = contentdata.getBestSellers();
		$scope.recommendations = contentdata.getRecommended();
	});

	app.controller('CarouselController', function($scope, contentdata) {
		$scope.slides = contentdata.getSlides();
	});

	app.controller('ProductosController', function($scope, contentdata) {
		$scope.juegos = contentdata.getProducts();
	});

	app.controller('ProductosCategoriaController', function($scope, $stateParams, contentdata) {
		$scope.category = contentdata.getCategory($stateParams.category);
		$scope.juegos = contentdata.getProductsByCategory($stateParams.category);
	});

	app.controller('ProductosProductoController', function($scope, $stateParams, contentdata) {
		$scope.producto = contentdata.getProduct($stateParams.productUrl);
	})

	app.controller('ContactFormController', function($scope, $http) {
		$scope.success = false;
		$scope.error = false;
		$scope.sending = false;
		$scope.sendMessage = function(message) {
			$scope.sending = true;
			$http({
				method: 'POST',
				url: 'processForm.php',
				data: $.param(message),
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			})
			.success(function(data) {
				$scope.sending = false;
				message.name = '';
				message.email = '';
				message.question = '';
				message.honeypot = '';
				if (data.success) {
					$scope.success = true;
				}
				else {
					$scope.error = true;
				}

				setTimeout(function() {$scope.success = false; $scope.error = false;}, 1000);
			});
		}

	})

	app.controller('MenuController', function($scope, $location, $anchorScroll) {
		$scope.goContactForm = function() {
			$location.hash('contactForm');
			$anchorScroll();
		}
	});

	app.directive('categoryMenu', function() {
		return {
			restrict: 'E',
			templateUrl: 'directive_templates/category-menu.html',
			controller: function($scope, contentdata){
				$scope.categories = contentdata.getCategories();
			},
			controllerAs: 'categoriesCtrl'
		};
	});

	// taken from 
	// http://jasonwatmore.com/post/2014/08/01/AngularJS-directives-for-social-sharing-buttons-Facebook-Like-GooglePlus-Twitter-and-Pinterest.aspx
	app.directive('fbLike', [
      '$window', '$rootScope', function ($window, $rootScope) {
          return {
              restrict: 'A',
              scope: {
                  fbLike: '=?'
              },
              link: function (scope, element, attrs) {
                  if (!$window.FB) {
                      // Load Facebook SDK if not already loaded
                      $.getScript('//connect.facebook.net/es_LA/sdk.js', function () {
                          $window.FB.init({
                              //appId: $rootScope.facebookAppId,
                              xfbml: true,
                              version: 'v2.0'
                          });
                          renderLikeButton();
                      });
                  } else {
                      renderLikeButton();
                  }
 
                  var watchAdded = false;
                  function renderLikeButton() {
                      if (!!attrs.fbLike && !scope.fbLike && !watchAdded) {
                          // wait for data if it hasn't loaded yet
                          var watchAdded = true;
                          var unbindWatch = scope.$watch('fbLike', function (newValue, oldValue) {
                              if (newValue) {
                                  renderLikeButton();
                                   
                                  // only need to run once
                                  unbindWatch();
                              }
                               
                          });
                          return;
                      } else {
                          element.html('<div class="fb-like"' + (!!scope.fbLike ? ' data-href="' + scope.fbLike + '"' : '') + ' data-layout="standard" data-action="recommend" data-show-faces="true" data-share="true"></div>');
                          $window.FB.XFBML.parse(element.parent()[0]);
                      }
                  }
              }
          };
      }
    ]);

	app.filter('trustAsResourceUrl', ['$sce', function($sce) {
		return function(val) {
			return $sce.trustAsResourceUrl(val);
		}
	}]);

})();