(function () {
    'use strict';
    angular
        .module('hid.login')
        .constant('loginEndpoints', {
            login: '/api/user/login'
        });
})();
