(function() {
	var app = angular.module('gameshop', ['ui.router', 'uiGmapgoogle-maps']);

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
						templateUrl: "pages/productos-productos.html"
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
				url: "/lego-movie-videogame",
				views: {
					"productos@productos": {
						templateUrl: "pages/productos-detalle.html"
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
			1: {
				nid: 1,
				tid: 1,
				title: 'Call of Duty',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonecodadvance.jpg',
			},
			2: {
				nid: 2,
				tid: 1,
				title: 'Lego Movie',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/ps4legomovie.jpg',
			},
			3: {
				nid: 3,
				tid: 1,
				title: 'Batman',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonebatknight.jpg',
			},
			4: {
				nid: 4,
				tid: 1,
				title: 'Lego Marvel',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/legomarvelps4(21_01_2014).jpg',
			},
			5: {
				nid: 5,
				tid: 1,
				title: 'FIFA 14',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/fifa14(21_01_2014).jpg',
			},
			6: {
				nid: 6,
				tid: 1,
				title: 'Injustice',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/injusticeps4(21_01_2014).jpg',
			},
			7: {
				nid: 7,
				tid: 1,
				title: 'NBA2K15',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/ps4nba2k15.jpg',
			},
			8: {
				nid: 8,
				tid: 1,
				title: 'Need for Speed rivals',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/nfsrivalps4(21_01_2014).jpg',
			}};

			service.getProduct = function getProduct(nid) {
				return productos[nid];
			}

			service.getProductsByCategory = function getProductsByCategory(categoryName) {
				if (categoryName == 'Juegos') {
					return productos;	
				}
				else {
					return {};
				}
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

	app.controller('IndexController', function() {
		this.bestSellers = bestSellers;
		this.recommendations = recommendations;
	});

	app.controller('CarouselController', function() {
		this.slides = slides;
	});

	app.controller('ProductosCategoriaController', function($scope, $stateParams, contentdata) {
		$scope.title = $stateParams.category;
		$scope.juegos = contentdata.getProductsByCategory($stateParams.category);
	});

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