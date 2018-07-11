(function () {
    'use strict';
    angular
        .module('hid.reset-password', [
            'hid.core.shared'
        ])
        .config(applicationConfig)
        .run(applicationRun);

    applicationConfig.$inject = [
        '$stateProvider'
    ];
    applicationRun.$inject = [
        '$rootScope'
    ];

    function applicationConfig($stateProvider) {
        $stateProvider
            .state({
                name: 'publicRoot.request-reset-password',
                url: '/reset/password/request',
                views: {
                    'content-view': {
                        template: require('./views/request-reset-password.html'),
                        controller: 'requestResetPasswordController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state({
                name: 'publicRoot.reset-password-suspend',
                url: '/reset/password/suspend',
                views: {
                    'content-view': {
                        template: require('./views/reset-password-suspend.html')
                    }
                }
            })
            .state({
                name: 'publicRoot.reset-password',
                url: '/reset/:password?token',
                params: {
                    password: 'password'
                },
                views: {
                    'content-view': {
                        template: require('./views/reset-password.html'),
                        controller: 'resetPasswordController',
                        controllerAs: 'vm'
                    }
                }
            });

    }

    function applicationRun($rootScope) {
        $rootScope.isLoading = false;
    }

    require('./constants/reset-password');
    require('./controllers/request-reset-password.controller');
    require('./controllers/reset-password.controller');
    require('./mappers/reset-password.mapper');
    require('./mappers/reset-password-request.mapper');
    require('./models/reset-password.view-model');
    require('./models/reset-password-request.view-model');
    require('./service/reset-password.data-service');
    require('./service/reset-password.service');
    require('./transport/reset-password.transport');
})();