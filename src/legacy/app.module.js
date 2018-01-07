'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]);

angular.module('phonecatApp').component('angularJsComponent', {
  template: '<h2 class="alert alert-info">I am an AngularJS 1.x Component</h2>'
})