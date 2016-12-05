(function(){
'use strict'
  angular.module('NarrowItDownApp')
  .controller('NarrowItDownController', NarrowItDownController);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var narrowItDownCtrl = this;
    narrowItDownCtrl.found = [];
    narrowItDownCtrl.searchTerm = '';
    narrowItDownCtrl.message = "";
    narrowItDownCtrl.isSuccessAlert = false;
    narrowItDownCtrl.isNotFoundAlert = false;

    narrowItDownCtrl.searchItems = function(searchTerm){
      if(searchTerm === ""){
        narrowItDownCtrl.found = [];
        configureAlertMessage(narrowItDownCtrl.found);
      }else{
        MenuSearchService.getMatchedMenuItems(searchTerm).then(function(foundData){
          narrowItDownCtrl.found = foundData;
          configureAlertMessage(narrowItDownCtrl.found);
        });
      }
    };

    narrowItDownCtrl.onRemove = function(index){
      narrowItDownCtrl.found.splice(index, 1);
      configureAlertMessage(narrowItDownCtrl.found);
    };

    function configureAlertMessage(items){
      if(items.length > 0){
        narrowItDownCtrl.message = "Found " + items.length + " menu items";
        narrowItDownCtrl.isSuccessAlert = true;
        narrowItDownCtrl.isNotFoundAlert = false;
      }else{
        narrowItDownCtrl.message = "Not found !";
        narrowItDownCtrl.isSuccessAlert = false;
        narrowItDownCtrl.isNotFoundAlert = true;
      }
    }
  };
})();
