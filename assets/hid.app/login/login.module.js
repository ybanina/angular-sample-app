(function () {
    'use strict';

     angular.module('hid.login', [
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
                name: 'publicRoot.login',
                url: '/login',
                views: {
                    'content-view': {
                        template: require('./views/login.html'),
                        controller: 'loginController',
                        controllerAs: 'vm'
                    }
                }
            });
    }

    function applicationRun($rootScope) {
        $rootScope.isLoading = false;
    }

    require('./controllers/login.controller');
    require('./constants/login.constant');
    require('./mappers/login.mapper');
    require('./models/login.view-model');
    require('./services/login.data-service');
    require('./services/login.service');
    require('./transports/login.transport');
})();