(function () {
    'use strict';
    angular
        .module('hid.position', [
            'hid.core.shared'
        ])
        .config(applicationConfig)
        .run(applicationRun);

    applicationConfig.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];
    applicationRun.$inject = [];

    function applicationConfig($stateProvider,
                               $urlRouterProvider) {
        $stateProvider
            .state({
                name: 'root.positions',
                url: '/positions',
                views: {
                    'content-view': {
                        template: require('./views/positions.html'),
                    }
                }
            })
            .state({
                name: 'root.positions.list',
                url: '/list',
                views: {
                    'content-view': {
                        template: require('./views/positions-list.html'),
                        controller: 'positionController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state({
                name: 'root.positions.update',
                url: '/update/{positionId}',
                views: {
                    'content-view': {
                        template: require('./views/position-update.html'),
                        controller: 'positionUpdateController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state({
                name: 'root.positions.update.position',
                url: '/position',
                views: {
                    'position-update-tabs': {
                        template: require('./views/position-update-page.html'),
                        controller: 'positionUpdateController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state({
                name: 'root.positions.update.kpi',
                url: '/kpi',
                views: {
                    'position-update-tabs': {
                        template: require('./views/position-update-kpi.html'),
                        controller: 'positionUpdateController',
                        controllerAs: 'vm'
                    }
                }
            });
        $urlRouterProvider.when('/positions', '/positions/list');
        $urlRouterProvider.when('/positions/update/{positionId}', '/positions/update/{positionId}/position');
    }

    function applicationRun() {
    }

    require('./components/position-select/position-select.component');
    require('./constants/position.constant');
    require('./controllers/position.controller');
    require('./controllers/position-update.controller');
    require('./enums/position-update-tabs.enum');
    require('./mappers');
    require('./models');
    require('./services/position.data-service');
    require('./services/position.service');
    require('./transports/position.transport');
    require('./values/position-update-tabs.option')
})();