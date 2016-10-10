(function() {
  'use strict';

  angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache','ui.grid'])
      .controller('AppCtrl', AppCtrl);

  function AppCtrl($scope,$http,$timeout) {
    $scope.currentNavItem = 'page2';
    $scope.pages = [{tab:'page 1',id:1,isLoaded:false},{tab:'page 2',id:2,isLoaded:false},{tab:'page 3',id:3,isLoaded:false}];

    $scope.loadData = function(page){
      $timeout(function(){
      page.gridOptions = getOptions();
      $http.get('http://ui-grid.info/data/100.json').success(function(data){
        console.log('Getting data');
        page.gridOptions.data = data;
        page.isLoaded = true;
      });
      },3000);
    }
    function getOptions(){
     return {
    enableSorting: true,
    columnDefs: [
      { field: 'name',displayName:'Primary Name' },
      { field: 'gender' },
      { field: 'company', enableSorting: false }
    ],
    onRegisterApi: function( gridApi ) {
      $scope.grid1Api = gridApi;
    }
  };
    }



  }
})();


/**
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/
