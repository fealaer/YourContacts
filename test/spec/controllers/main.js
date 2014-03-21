'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mainApp'));

  var MainCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    scope.contacts = [
      {
        name: 'Eka',
        surname: 'Pusheva',
        phoneNumber: '+79260000001',
        group: 'family'
      },
      {
        name: 'Alexandr',
        phoneNumber: '+79255000000',
        group: 'family'
      },
      {
        name: 'Alexandr',
        phoneNumber: '+79250000000'
      },
      {
        name: 'Lena',
        surname: 'Pusheva',
        phoneNumber: '+79250000001'
      }
    ];
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of contacts to the scope', function () {
    expect(scope.contacts.length).toBe(4);
  });

  it('should has list of sort by variants', function () {
    expect(scope.sortByVariants.length).toBe(4);
  });

  it('should has list of languages to translate interface', function () {
    expect(scope.langVariants.length).toBe(2);
  });

  it('should has correctly working method makeTitle', function () {
    expect(scope.makeTitle(scope.contacts[0])).toBe('Eka Pusheva (family)');
    expect(scope.makeTitle(scope.contacts[1])).toBe('Alexandr (family)');
    expect(scope.makeTitle(scope.contacts[2])).toBe('Alexandr');
    expect(scope.makeTitle(scope.contacts[3])).toBe('Lena Pusheva');
  });

  it('should has properly working method sortBy', function () {
    angular.forEach(scope.sortByVariants, function (sortVariant) {
      scope.sortBy(sortVariant);
      expect(scope.sort).toBe(sortVariant.sort);
      expect(scope.reverse).toBe(false);
      expect(sortVariant.selected).toBe(true);
      scope.sortBy(sortVariant);
      expect(scope.sort).toBe(sortVariant.sort);
      expect(scope.reverse).toBe(true);
      expect(sortVariant.selected).toBe(true);
    });
  });

});
