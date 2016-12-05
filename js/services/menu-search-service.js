(function(){
'use strict'

  angular.module('NarrowItDownApp')
  .service('MenuSearchService', MenuSearchService);

  MenuSearchService.$inject = ['$http', 'RestMenuService'];
  function MenuSearchService($http, RestMenuService){
    var menuSearchService = this;
    //retrieves menu items
    menuSearchService.getMatchedMenuItems = function(searchTerm){
      return $http({
        method: 'GET',
        url: (RestMenuService + "menu_items.json")
      }).then(function (result) {
        var menu_items = result.data.menu_items;
        //filter items and return the result
        return filterMenuItems(menu_items, searchTerm);
      });
    };
    //function for filtering menu items by search term
    function filterMenuItems(items, searchTerm){
      return items.filter(function (item){
        return item.description.toUpperCase().includes(searchTerm.toUpperCase());
      });
    };
  };
})();
