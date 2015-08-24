/**
 * Created by treisyjimenez on 22/8/15.
 */

'use strict';

var app = angular.module('Songs', ['Songs.services', 'Songs.directives', 'ngRoute', 'pascalprecht.translate']);

var appServices = angular.module('Songs.services', []);
var appDirectives = angular.module('Songs.directives', []);

app.config(function ($routeProvider, $locationProvider, $translateProvider){
    $translateProvider.useStaticFilesLoader({
        prefix: 'traduction/lang-',
        suffix: '.json'
    })

        .preferredLanguage('en');

    $locationProvider.html5Mode({
        enable: true,
        requireBase: false
    });

    //$routeProvider
    //    .when('/', {
    //       templateUrl: index.html
    //    });
});