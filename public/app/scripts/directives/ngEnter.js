/**
 * Created by treisyjimenez on 23/8/15.
 */

'use strict';

appDirectives.directive('ngEnter', function() {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});