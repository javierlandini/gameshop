(function() {
	var app = angular.module('gameshopdata', []);

	app.factory('contentdata', function() {
			var service = {};
			var categories = [
			{
				tid: 1,
				name: 'Juegos',
				icon: 'ion-ios-play'
			},
			{
				tid: 2,
				name: 'Consolas',
				icon: 'ion-ios-game-controller-a'
			},
			{
				tid: 3,
				name: 'Accesorios',
				icon: 'ion-ios-game-controller-a'
			},
			{
				tid: 4,
				name: 'Figuras de acción',
				icon: 'ion-ios-body'
			}];

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

			service.getCategory = function getCategory(categoryName) {
				for (var i = 0; i < categories.length; i++) {
					if (categories[i].name == categoryName) {
						return categories[i];
					}
				}
			}

			service.getCategories = function getCategories() {
				return categories;
			}

			service.getSlides = function getSlides() {
				return slides;
			}

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
})();