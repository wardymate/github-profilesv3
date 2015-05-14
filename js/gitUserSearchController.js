githubUserSearch.controller('GitUserSearchController', ['Search', '$resource', function(Search, $resource) {

  var self = this;
  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      });
  };

}]);