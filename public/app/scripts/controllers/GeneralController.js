/**
 * Created by treisyjimenez on 23/8/15.
 */
'use strict';

app.controller('GeneralController', function($scope, $http){
    //Function to search
    $scope.search = function () {
        var input = document.getElementById('txtSearch').value;

        if (input !== '') {
            $http.get('../songs/' + input, {

            }).success(function (data) {
                $scope.$broadcast('ListSongs', data);
            });
        } else {
            $http.get('../songs' + input, {

            }).success(function (data) {
                $scope.$broadcast('ListSongs', data);
            });
        }
    };

});

