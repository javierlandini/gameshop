(function() {
	//ngSanitize needed for using ng-bind-html
	var app = angular.module('gameshop', ['ngSanitize', 'ui.router', 'uiGmapgoogle-maps']);

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

	app.factory('contentdata', function() {
			var service = {};
			var categories = [
			{
				tid: 1,
				name: 'Juegos',
			},
			{
				tid: 2,
				name: 'Consolas',
			},
			{
				tid: 3,
				name: 'Accesorios',
			},
			{
				tid: 4,
				name: 'Figuras de acción',
			}];

			var productos = {
			'call-of-duty': {
				nid: 1,
				tid: 1,
				categoryName: 'Juegos',
				class: 'mas-vendidos',
				icon: 'ion-android-star',
				productMake: '',
				trailer: '',
				productUrl: 'call-of-duty',
				title: 'Call of Duty',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonecodadvance.jpg',
				description: ''
			},
			'lego-movie-videogame': {
				nid: 2,
				tid: 1,
				categoryName: 'Juegos',
				class: '',
				icon: '',
				productMake: 'Warner Bros. Interactive Entertainment',
				trailer: 'http://www.youtube.com/embed/N6ArFXI6nI0?rel=0',
				productUrl: 'lego-movie-videogame',
				title: 'Lego Movie Videogame',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/ps4legomovie.jpg',
				description: '<p>Únete a Star-Lord, Rocket, Groot, Gamora y Drax en una aventura totalmente nueva, Marvel Guardianes de la Galaxia: El Arma Universal. ¡Sé parte de la batalla para ayudar a los Guardianes a recuperar las cinco piezas del Arma Universal y evitar que caiga en manos del malvado Ronan el Acusador!</p><p>Únete a Star-Lord, Rocket, Groot, Gamora y Drax en una aventura totalmente nueva, Marvel Guardianes de la Galaxia: El Arma Universal. ¡Sé parte de la batalla para ayudar a los Guardianes a recuperar las cinco piezas del Arma Universal y evitar que caiga en manos del malvado Ronan el Acusador!</p>'
			},
			'batman': {
				nid: 3,
				tid: 1,
				categoryName: 'Juegos',
				class: '',
				icon: '',
				productMake: '',
				trailer: '',
				productUrl: 'batman',
				title: 'Batman',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonebatknight.jpg',
				description: ''
			},
			'lego-marvel': {
				nid: 4,
				tid: 1,
				categoryName: 'Juegos',
				class: 'mas-vendidos',
				icon: 'ion-android-star',
				productMake: '',
				trailer: '',
				productUrl: 'lego-marvel',
				title: 'Lego Marvel',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/legomarvelps4(21_01_2014).jpg',
				description: ''
			},
			'fifa-14': {
				nid: 5,
				tid: 1,
				categoryName: 'Juegos',
				class: '',
				icon: '',
				productMake: '',
				trailer: '',
				productUrl: 'fifa-14',
				title: 'FIFA 14',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/fifa14(21_01_2014).jpg',
				description: ''
			},
			'injustice': {
				nid: 6,
				tid: 1,
				categoryName: 'Juegos',
				class: 'recomendados',
				icon: 'ion-android-happy',
				productMake: '',
				trailer: '',
				productUrl: 'injustice',
				title: 'Injustice',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/injusticeps4(21_01_2014).jpg',
				description: ''
			},
			'nba-2k15': {
				nid: 7,
				tid: 1,
				categoryName: 'Juegos',
				class: '',
				icon: '',
				productMake: '',
				trailer: '',
				productUrl: 'nba-2k15',
				title: 'NBA2K15',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/ps4nba2k15.jpg',
				description: ''
			},
			'need-for-speed-rivals': {
				nid: 8,
				tid: 1,
				categoryName: 'Juegos',
				class: 'mas-vendidos',
				icon: 'ion-android-star',
				productMake: '',
				trailer: '',
				productUrl: 'need-for-speed-rivals',
				title: 'Need for Speed rivals',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/nfsrivalps4(21_01_2014).jpg',
				description: ''
			}};

			service.getProducts = function getProducts() {
				return productos;
			}

			service.getProduct = function getProduct(url) {
				return productos[url];
			}

			service.getProductsByCategory = function getProductsByCategory(categoryName) {

				var ret = [];

				for (var p in productos) {
					if (productos.hasOwnProperty(p)) {
						if (productos[p].categoryName == categoryName) {
							ret.push(productos[p]);
						}
					}
				}

				return ret;
			}

			service.getBestSellers = function getBestSellers() {
				var ret = [];

				for (var p in productos) {
					if (productos.hasOwnProperty(p)) {
						if (productos[p].class == 'mas-vendidos') {
							ret.push(productos[p]);
						}
					}
				}

				return ret;
			}

			service.getRecommended = function getRecommended() {
				var ret = [];

				for (var p in productos) {
					if (productos.hasOwnProperty(p)) {
						if (productos[p].class == 'recomendados') {
							ret.push(productos[p]);
						}
					}
				}

				return ret;
			}

			return service;
	});

	app.controller('MapController', ['$scope', function($scope) {
		$scope.map = { center: { latitude: -32.950270, longitude: -60.645720}, 
					   zoom: 15,
					   options: {
					   	    disableDefaultUI: true,
    						mapTypeId: google.maps.MapTypeId.ROADMAP
					   }};
		$scope.marker = {
			id : 1,
			coords : { latitude: -32.950270, longitude: -60.645720},
			options: { title: 'GAMESHOP'}
		}
	}]);

	app.controller('IndexController', function($scope, contentdata) {
		$scope.bestSellers = contentdata.getBestSellers();
		$scope.recommendations = contentdata.getRecommended();
	});

	app.controller('CarouselController', function() {
		this.slides = slides;
	});

	app.controller('ProductosController', function($scope, contentdata) {
		$scope.juegos = contentdata.getProducts();
	});

	app.controller('ProductosCategoriaController', function($scope, $stateParams, contentdata) {
		$scope.title = $stateParams.category;
		$scope.juegos = contentdata.getProductsByCategory($stateParams.category);
	});

	app.controller('ProductosProductoController', function($scope, $stateParams, contentdata) {
		$scope.producto = contentdata.getProduct($stateParams.productUrl);
	})

	app.directive('categoryMenu', function() {
		return {
			restrict: 'E',
			templateUrl: 'directive_templates/category-menu.html',
			controller: function(){
				this.categories = categories;		
			},
			controllerAs: 'categoriesCtrl'
		};
	});

	app.filter('trustAsResourceUrl', ['$sce', function($sce) {
		return function(val) {
			return $sce.trustAsResourceUrl(val);
		}
	}]);

	var bestSellers = [
	{
		id: 1,
		title: 'Call of Duty',
		thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonecodadvance.jpg',
	},
	{
		id: 2,
		title: 'Lego Movie',
		thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/ps4legomovie.jpg',
	},
	{
		id: 3,
		title: 'Batman',
		thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonebatknight.jpg',
	},
	{
		id: 4,
		title: 'Lego Marvel',
		thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/legomarvelps4(21_01_2014).jpg',
	},
	{
		id: 5,
		title: 'FIFA 14',
		thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/fifa14(21_01_2014).jpg',
	},
	{
		id: 6,
		title: 'Injustice',
		thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/injusticeps4(21_01_2014).jpg',
	},
	{
		id: 7,
		title: 'NBA2K15',
		thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/ps4nba2k15.jpg',
	},
	{
		id: 8,
		title: 'Need for Speed rivals',
		thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/nfsrivalps4(21_01_2014).jpg',
	}
	];

	var recommendations = [
	{
		id: 1,
		title: 'Garden Warfare',
		thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/ps4plants.jpg',
	},
	{
		id: 2,
		title: 'Rayman Legends',
		thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/ps4raymanlegend.jpg',
	},
	{
		id: 3,
		title: 'Spiderman 2',
		thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/ps4spidermanama2.jpg',
	},
	{
		id: 4,
		title: 'Sleeping Dogs',
		thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/103725b.jpg',
	}
	];

	var categories = [
	{
		tid: 1,
		name: 'Juegos',
	},
	{
		tid: 2,
		name: 'Consolas',
	},
	{
		tid: 3,
		name: 'Accesorios',
	},
	{
		tid: 4,
		name: 'Figuras de acción',
	},
	];

	var slides = [
	{
		nid: 1,
		title: 'BATTLEFIELD',
		img: 'assets/img/carousel_1.jpg',
	},
	{
		nid: 2,
		title: 'HALO',
		img: 'assets/img/carousel_2.jpg',
	},
	{
		nid: 3,
		title: 'DEAD RISING',
		img: 'assets/img/carousel_3.jpg',
	},
	];

	var productos = [

	];
})();