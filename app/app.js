'use strict';

/* App Module */


var phonecatAnimations = require("./animations.js");
var controllers = require("./controllers.js");
var phonecatFilters = require("./filters.js");
var phonecatServices = require("./services.js");

//console.log('shiyixiaaaaaa');


var phonecatApp = angular.module('myApp', [
  'ngRoute',
  'phonecatAnimations',
  'controllers',
  'phonecatFilters',
  'phonecatServices'
]);



phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/index', {
      templateUrl: 'index.html',
      controller: 'mapControl'
    }).
    otherwise({
      redirectTo: '/404'
    });
  }]);





/*


var angular = require('angular');
//require('./angular-animate.min');
//require('./baseService');
//require('../back-to-top/back-to-top.js');
var phonecatApp = angular.module('myApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);
phonecatApp.controller('phonecatControllers', require('./controllers.js'));


module.exports = app;

*/