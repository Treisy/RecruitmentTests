/**
 * Created by treisyjimenez on 22/8/15.
 */

'use strict';

var app = angular.module('Songs', ['Songs.directives', 'pascalprecht.translate']);

var appDirectives = angular.module('Songs.directives', []);

app.config(function ($locationProvider, $translateProvider){
    $translateProvider.useStaticFilesLoader({
        prefix: 'traduction/lang-',
        suffix: '.json'
    })

        .preferredLanguage('en');

    $locationProvider.html5Mode({
        enable: true,
        requireBase: false
    });

});