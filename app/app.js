'use strict';

/* App Module */


var phonecatAnimations = require("./animations.js");
var phonecatControllers = require("./controllers.js");
var phonecatFilters = require("./filters.js");
var phonecatServices = require("./services.js");

var phonecatApp = angular.module('myApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);



phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/phones', {
      templateUrl: 'phone-list/phone-list.html',
      controller: 'PhoneListCtrl'
    }).
    when('/phones/:phoneId', {
      templateUrl: 'phone-detail/phone-detail.html',
      controller: 'PhoneDetailCtrl'
    }).
    otherwise({
      redirectTo: '/phones'
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