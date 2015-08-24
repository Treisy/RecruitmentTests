/**
 * Created by treisyjimenez on 22/8/15.
 */

'use strict';

appDirectives.directive('listSongs', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'views/listSongs.html',
        controller: function($scope, SongsService){
            $scope.list = SongsService.list();

            $scope.openTab = function(url) {
                window.open(url);
            };

            $scope.selectButton = function(data){
              console.log(data);
            };

            $scope.selectFriday = function(datos) {
                console.log(datos);
            };
        },
        link: function(scope, element, attrs) {

        }
    };
});