(function() {

    'use strict';
    define([
        'angular'
    ], function(angular, angularRoute, view1, view2) {

        return angular.module('insight.explorer', [])
            .config([function() {
                console.log('creating main module');

            }]);
    });
})();
