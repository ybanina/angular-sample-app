(function () {
    'use strict';
    angular
        .module('hid.login')
        .service('loginDataService', loginDataService);

    loginDataService.$inject = [
        'mappersHelper',
        'loginTransport',
        'loginMapper'
    ];

    function loginDataService(mappersHelper,
                              loginTransport,
                              loginMapper) {
        this.login = login;

        function login(model) {
            var data = loginMapper.mapTo(model);
            return loginTransport.login(data)
                .catch(function (response) {
                    if (response.data) {
                        return mappersHelper.getValidationResult(response.data.detail);
                    }
                })
        }
    }
})();
