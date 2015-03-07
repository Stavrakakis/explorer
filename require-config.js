(function() {

    'use strict';

    var allTestFiles = [];

    if (window.__karma__) {
        var TEST_REGEXP = /spec\.js$/;
        var pathToModule = function(path) {
            return path.replace(/^\/base\/app\//, '').replace(/\.js$/, '');
        };
        Object.keys(window.__karma__.files).forEach(function(file) {
            if (TEST_REGEXP.test(file)) {
                // Normalize paths to RequireJS module names.
                allTestFiles.push(pathToModule(file));
            }
        });
    }

    require.config({
        paths: {
            angular: 'lib/angular/angular',
            angularUiRouter: 'lib/angular-ui-router/release/angular-ui-router',
            angularMocks: 'lib/angular-mocks/angular-mocks',
            text: 'lib/requirejs-text/text'
        },
        shim: {
            'angular': {
                'exports': 'angular'
            },
            'angularUiRouter': ['angular'],
            'angularMocks': {
                deps: ['angular'],
                'exports': 'angular.mock'
            }
        },
        priority: [
            "angular"
        ],
        deps: window.__karma__ ? allTestFiles : [],
        callback: window.__karma__ ? window.__karma__.start : null,
        baseUrl: window.__karma__ ? '/base/app' : '',
    });

    require([
        'angular',
        'app/explorer'
    ], function(angular, app) {

        var $html = angular.element(document.getElementsByTagName('html')[0]);

        angular.element().ready(function() {

            angular.bootstrap(document, ['explorer']);
        });
    });

})();
