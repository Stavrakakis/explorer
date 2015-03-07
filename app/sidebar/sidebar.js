(function() {

    'use strict';

    define(['angular'],
        function(angular) {

            angular.module('explorer.sidebar', [])
                .controller('Sidebar', [Sidebar]);

            function Sidebar() {

                var vm = this;

                vm.message = 'Sidebar';
            }

        });
})();
