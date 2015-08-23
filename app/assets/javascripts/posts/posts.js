angular.module('flapperNews')
.factory('posts', [function(){
  var o = {
    posts: [
      {title: 'post 1', upvotes: 5, comments: []},
      {title: 'post 2', upvotes: 1, comments: []},
      {title: 'post 3', upvotes: 10, comments: []},
      {title: 'post 4', upvotes: 3, comments: []},
      {title: 'post 5', upvotes: 8, comments: []}
    ]
  };
  return o;
}]);