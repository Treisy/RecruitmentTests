/**
 * Created by treisyjimenez on 22/8/15.
 */

'use strict';

appDirectives.directive('listSongs', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'views/listSongs.html',
        controller: function($scope, $http) {
            //Get all the songs
            $http.get('../songs', {

            }).success(function (data) {
                $scope.list = data;
            });

            //Listening the event from the search
            $scope.$on('ListSongs', function(event, songs){
               $scope.list = songs;
            });

            //Open a new tab for the song
            $scope.openTab = function (url) {
                window.open(url);
            };

        },
        link: function(scope, element, attrs) {

        }
    };
});