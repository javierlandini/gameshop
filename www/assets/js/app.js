(function() {
	var app = angular.module('gameshop', []);
	app.controller('IndexController', function() {
		this.bestSellers = bestSellers;
		this.recommendations = recommendations;
	});
	app.controller('CategoriesController', function() {
		this.categories = categories;
	});
	app.controller('CarouselController', function() {
		this.slides = slides;
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
})();