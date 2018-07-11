(function () {
    'use strict';
    angular
        .module('hid.position')
        .component('positionSelect', {
            template: require('./position-select.html'),
            bindings: {
                model: '=',
                title: '@',
                placeholder: '@',
                name: '@',
                isDisabled: '<',
                user: '=',
                exclude: '<',
            },
            controller: 'positionSelectController',
            controllerAs: 'vm'
        });

    require('./position-select.controller');
})();
