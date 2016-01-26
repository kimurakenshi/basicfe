(function () {

  angular.module('basicApp',['ngRoute'])

    .controller('appCtrl', function ($scope) {
        $scope.title = 'Some title';
    });

})();