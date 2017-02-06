'use strict';

describe('Controller: FindEventCtrl', function () {

  // load the controller's module
  beforeEach(module('programmingsiteApp'));

  var FindEventCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FindEventCtrl = $controller('FindEventCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FindEventCtrl.awesomeThings.length).toBe(3);
  });
});
