// File: app/scripts/main.js 'use strict';

(function(){
	'use strict';
	angular
		.module('blog.services',['ngResource'])
		.constant('BaseUrl','http://jsonplaceholder.typicode.com');
		

	/* @ngInject */
	function Post ($resource, BaseUrl) {
		return $resource(BaseUrl + '/posts/:postId',
			{ postId: '@_id' }
		);
	}
	/* @ngInject */
	function Comment ($resource, BaseUrl) {
		return $resource(BaseUrl + '/comments/:postId',
			{ commentId: '@_id' }
		);
	}
	/* @ngInject */
	function User ($resource, BaseUrl) {
		return $resource(BaseUrl + '/users/:userId',
			{ userId: '@_id' }
		);
	}
	
	angular
		.factory('Post',Post)
		.factory('Comment',Comment)
		.factory('User',User);
})();
