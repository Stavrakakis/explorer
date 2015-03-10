(function() {

    'use strict';

    define(['angular'],
        function(angular) {

            angular.module('explorer.sidebar', [])
                .controller('Sidebar', [Sidebar]);

            function Sidebar() {

                var sidebar = this;

                sidebar.title = 'Sidebar';
            }

        });
})();
