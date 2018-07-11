(function () {
    'use strict';
    angular
        .module('hid.login')
        .service('loginTransport', loginTransport);

    loginTransport.$inject = [
        '$q',
        '$http',
        'loginEndpoints',
        'transportHelper'
    ];

    function loginTransport($q,
                            $http,
                            loginEndpoints,
                            transportHelper) {
        this.login = login;

        function login(data) {
            return $http.post(loginEndpoints.login, data).then(function (resource) {
                    return transportHelper.getResourceData(resource);
                })
                .catch(function (response) {
                    if (response.data && response.data.validationMessages && response.data.validationMessages.length > 0) {
                        response.data.detail = response.data.validationMessages[0]
                    }

                    return $q.reject(response);
                })
        }
    }
})();
