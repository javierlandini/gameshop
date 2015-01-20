(function() {
	var app = angular.module('gameshopdata', []);

	app.factory('contentdata', function() {
			var service = {};
			var categories = [
			{
				tid: 1,
				name: 'Juegos PlayStation 3',
				icon: 'ion-ios-play'
			},
			{
				tid: 2,
				name: 'Juegos PlayStation 4',
				icon: 'ion-ios-play'
			},			
			{
				tid: 3,
				name: 'Consolas',
				icon: 'ion-ios-game-controller-a'
			},
			{
				tid: 4,
				name: 'Accesorios',
				icon: 'ion-ios-game-controller-a'
			},
			{
				tid: 5,
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
			'BATTLEFIELD-4': {
				nid: 1,
				tid: 1,
				categoryName: 'Juegos PlayStation 3',
				class: 'mas-vendidos',
				icon: 'ion-android-star',
				productMake: '',
				trailer: '//www.youtube.com/embed/P9fK77eE7fs',
				productUrl: 'BATTLEFIELD-4',
				title: 'BATTLEFIELD 4',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonecodadvance.jpg',
				description: '<p>La famosa saga de acción bélica creada por DICE y EA. El estudio responsable apuesta por reafirmar los pilares de la franquicia, y por seguir ampliándolos con una nueva campaña ambientada en un creíble conflicto con oriente, y por la fuerza de un cooperativo de leyenda. El desarrollo a caballo entre la actual generación y la próxima garantiza un apartado gráfico y tecnológico de infarto.</p><p>Plataforma:PlayStation 3</p><p>También para:PC  Xbox 360  Xbox One  PS4</p><p>Desarrollador:DICE</p><p>Distribuidor:EA</p><p>Género:Acción, Primera persona (FPS) (Bélico)</p><p>Jugadores:1-24 (Competitivo: Sí / Cooperativo: Sí)</p><p>Duración:6-8 horas + Multijugador</p><p>Idioma:Textos: Español, Voces: Español</p><p>Lanzamiento:31 de octubre de 2013 (Pegi: +18)</p>'
			},
			'lego-movie-videogame': {
				nid: 2,
				tid: 1,
				categoryName: 'Juegos PlayStation 3',
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
				categoryName: 'Juegos PlayStation 3',
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
				categoryName: 'Juegos PlayStation 3',
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
				categoryName: 'Juegos PlayStation 3',
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
				categoryName: 'Juegos PlayStation 3',
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
				categoryName: 'Juegos PlayStation 3',
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
				categoryName: 'Juegos PlayStation 3',
				class: 'mas-vendidos',
				icon: 'ion-android-star',
				productMake: '',
				trailer: '',
				productUrl: 'need-for-speed-rivals',
				title: 'Need for Speed rivals',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/nfsrivalps4(21_01_2014).jpg',
				description: ''
			},
			'DIABLO-III-Lord-of-terror': {
				nid: 9,
				tid: 5,
				categoryName: 'Figuras de acción',
				class: '',
				icon: '',
				productMake: '',
				trailer: '',
				productUrl: 'DIABLO-III-Lord-of-terror',
				title: 'DIABLO III Lord of terror',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonecodadvance.jpg',
				description: ''
			},
			'SAW-III-Jigsaw-Killer': {
				nid: 10,
				tid: 5,
				categoryName: 'Figuras de acción',
				class: '',
				icon: '',
				productMake: '',
				trailer: '',
				productUrl: 'SAW-III-Jigsaw-Killer',
				title: 'SAW III Jigsaw Killer',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonecodadvance.jpg',
				description: ''
			},
			'GOD-OF-WAR-Hades': {
				nid: 11,
				tid: 5,
				categoryName: 'Figuras de acción',
				class: '',
				icon: '',
				productMake: '',
				trailer: '',
				productUrl: 'GOD-OF-WAR-Hades',
				title: 'GOD OF WAR Hades',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonecodadvance.jpg',
				description: ''
			},
			'The-dream-master-Freddy': {
				nid: 12,
				tid: 5,
				categoryName: 'Figuras de acción',
				class: '',
				icon: '',
				productMake: '',
				trailer: '',
				productUrl: 'The-dream-master-Freddy',
				title: 'The dream master Freddy',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonecodadvance.jpg',
				description: ''
			},
			'World-of-Warcraft': {
				nid: 13,
				tid: 5,
				categoryName: 'Figuras de acción',
				class: '',
				icon: '',
				productMake: '',
				trailer: '',
				productUrl: 'World-of-Warcraft',
				title: 'World of Warcraft',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonecodadvance.jpg',
				description: ''
			},
			'ASSASSINS-CREED-Haytham-Kenway': {
				nid: 14,
				tid: 5,
				categoryName: 'Figuras de acción',
				class: '',
				icon: '',
				productMake: '',
				trailer: '',
				productUrl: 'ASSASSINS-CREED-Haytham-Kenway',
				title: 'ASSASSIN´S CREED Haytham Kenway',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonecodadvance.jpg',
				description: ''
			},
			'METAL-GEAR-SOLID-V-GROUND-ZEROES-Solid-Snake': {
				nid: 15,
				tid: 5,
				categoryName: 'Figuras de acción',
				class: '',
				icon: '',
				productMake: '',
				trailer: '',
				productUrl: 'METAL-GEAR-SOLID-V-GROUND-ZEROES-Solid-Snake',
				title: 'METAL GEAR SOLID V GROUND ZEROES Solid Snake',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonecodadvance.jpg',
				description: ''
			},
			'BREAKING-BAD-Heisenberg': {
				nid: 16,
				tid: 5,
				categoryName: 'Figuras de acción',
				class: '',
				icon: '',
				productMake: '',
				trailer: '',
				productUrl: 'BREAKING-BAD-Heisenberg',
				title: 'BREAKING BAD Heisenberg',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonecodadvance.jpg',
				description: ''
			},
			'PREDATORS': {
				nid: 17,
				tid: 5,
				categoryName: 'Figuras de acción',
				class: '',
				icon: '',
				productMake: '',
				trailer: '',
				productUrl: 'PREDATORS',
				title: 'PREDATORS',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonecodadvance.jpg',
				description: ''
			},
			'DRAGON-BALL-Z-Goku-ssj': {
				nid: 18,
				tid: 5,
				categoryName: 'Figuras de acción',
				class: '',
				icon: '',
				productMake: '',
				trailer: '',
				productUrl: 'DRAGON-BALL-Z-Goku-ssj',
				title: 'DRAGON BALL Z Goku ssj',
				thumb: 'http://www.the-best.com.ar/wp-content/uploads/catablog/thumbnails/xonecodadvance.jpg',
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