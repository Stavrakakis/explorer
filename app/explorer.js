(function() {

    'use strict';
    define(
        [
            'angular',
            'angularUiRouter',
            'app/sidebar/sidebar'
        ],
        function(angular, angularUiRouter, sidebar) {

            return angular.module('explorer', [
                    'ui.router',
                    'explorer.sidebar'
                ])
                .config(['$stateProvider', function($stateProvider) {


                }]);
        });
})();
