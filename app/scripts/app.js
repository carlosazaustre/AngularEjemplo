// File: app/scripts/main.js 'use strict';

(function(){
	'use strict';
	angular.module('blog',['ngRoute','blog.controllers','blog.services']);
	

	function config($locationProvider, $routeProvider) {

		// Permite que las URLs no lleven el caracter
		// # al inicio (utilizado por defecto por angular)
		$locationProvider.html5Mode(true);

		$routeProvider
			.when('/', {
				templateUrl: 'views/post-list.tpl.html',
				controller: 'PostListCtrl',
				controllerAs: 'postlist'
			})
			.when('/:postId', {
				templateUrl: 'views/post-detail.tpl.html',
				controller: 'PostDetailCtrl',
				controllerAs: 'postdetail'
			})
			.when('/new', {
				templateUrl: 'views/post-create.tpl.html',
				controller: 'PostCreateCtrl',
				controllerAs: 'postcreate'
			});
	}
	angular.config(config);
})();