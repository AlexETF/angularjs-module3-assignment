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
      link: FoundItemsDirectiveLink,
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundItemsDirCtrl',
      bindToController: true,
      templateUrl: './templates/found-items-directive.html'
    };
    return ddo;
  }

  //kontroler definition
  FoundItemsDirectiveController.$inject = [];
  function FoundItemsDirectiveController(){
    var foundItemsDirCtrl = this;

    var loadedFirstTime = false;
    foundItemsDirCtrl.displayMessage = function(){
      if(!loadedFirstTime){

      }else{
        loadedFirstTime = true;
      }
      return foundItemsDirCtrl.message;
    }

  };

  //link definition
  function FoundItemsDirectiveLink(scope, element, attrs, controller){

  };

})();
