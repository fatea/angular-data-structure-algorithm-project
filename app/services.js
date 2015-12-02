
"use strict";
var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);

phonecatServices.factory('Map', ['$http',
  function($http){
    //var list = [];
    return $http.get('data_structures/Distance.txt');
    /*
    return $http.get('data_structures/Distance.txt').success(
      function(data){
        angular.forEach(data.split('\n'), function(line,index){
          list.push(line);
        });
      }
    );*/

    /*return $http('data_structures/:name.txt',{}, {
      //query: {method:'GET', params:{name: 'Distance'}, isArray:false}

    });*/

  }

] );