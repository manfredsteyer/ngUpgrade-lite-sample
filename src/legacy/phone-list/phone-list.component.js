'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'legacy/phone-list/phone-list.template.html',
    controller: ['Phone', 'subService',
      function PhoneListController(Phone, subService) {
        this.phones = Phone.query();
        this.orderProp = 'age';
        console.debug(subService.add(1,2));
      }
    ]
  });
