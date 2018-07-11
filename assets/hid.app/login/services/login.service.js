(function () {
    'use strict';
    angular
        .module('hid.login')
        .service('loginService', loginService);

    loginService.$inject = [
        'loginDataService',
        'requestHandlerHelper'
    ];

    function loginService(loginDataService,
                          requestHandlerHelper) {
        this.login = login;

        function login(model) {
            return requestHandlerHelper.handleRequest(loginDataService.login(model));
        }
    }
})();
