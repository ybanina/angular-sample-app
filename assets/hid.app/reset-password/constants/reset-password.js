(function () {
    'use strict';
    angular
        .module('hid.reset-password')
        .constant('resetPasswordEndpoints', {
            requestResetPassword: '/api/user/reset-password/request',
            resetPassword: '/api/user/reset-password'
        });
})();
