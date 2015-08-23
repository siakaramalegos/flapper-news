angular.module('flapperNews')
.factory('posts', [
  '$http',
  function($http){
    var o = {
      posts: [
        {title: 'post 1', upvotes: 5, comments: []},
        {title: 'post 2', upvotes: 1, comments: []},
        {title: 'post 3', upvotes: 10, comments: []},
        {title: 'post 4', upvotes: 3, comments: []},
        {title: 'post 5', upvotes: 8, comments: []}
      ]
    };
    o.getAll = function(){
      return $http.get('/posts.json').success(function(data){
        angular.copy(data, o.posts);
      });
    };
    o.create = function(post){
      return $http.post('/posts.json', post).success(function(data){
        o.posts.push(data);
      });
    };
  return o;
}]);