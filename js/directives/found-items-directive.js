(function(){
'use strict'
  angular.module('NarrowItDownApp')
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective(){
    var ddo = {
      restrict: 'E',
      scope: {
        foundItems: "<",
        onRemove: "&"
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundItemsDirCtrl',
      bindToController: true,
      templateUrl: './templates/found-items-directive.html'
    };
    return ddo;
  }

  //controler definition
  FoundItemsDirectiveController.$inject = [];
  function FoundItemsDirectiveController(){
    var foundItemsDirCtrl = this;
  };

})();
