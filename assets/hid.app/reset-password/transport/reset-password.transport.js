(function () {
    'use strict';
    angular
        .module('hid.reset-password')
        .service('resetPasswordTransport', resetPasswordTransport);

    resetPasswordTransport.$inject = [
        '$http',
        'resetPasswordEndpoints'
    ];

    function resetPasswordTransport($http,
                                    resetPasswordEndpoints) {

        this.resetPassword = resetPassword;
        this.requestResetPassword = requestResetPassword;

        function resetPassword(data) {
            return $http.post(resetPasswordEndpoints.resetPassword, data);
        }

        function requestResetPassword(data) {
            return $http.post(resetPasswordEndpoints.requestResetPassword, data);
        }
    }


})();
