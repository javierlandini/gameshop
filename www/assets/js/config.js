(function() {
	var app = angular.module('config', []);

	app.constant('CONFIG', {
		'name': 'dev',
		'apiBaseUrl': 'http://api.gameshop.localhost:8000/data/'
	});	
})();