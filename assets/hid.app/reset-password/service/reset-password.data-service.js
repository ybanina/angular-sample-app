(function () {
    'use strict';
    angular
        .module('hid.reset-password')
        .service('resetPasswordDataService', resetPasswordDataService);

    resetPasswordDataService.$inject = [
        'resetPasswordTransport',
        'resetPasswordMapper',
        'requestResetPasswordMapper'
    ];

    function resetPasswordDataService(resetPasswordTransport,
                                      resetPasswordMapper,
                                      requestResetPasswordMapper) {

        this.resetPassword = resetPassword;
        this.requestResetPassword = requestResetPassword;

        function resetPassword(model) {
            var data = resetPasswordMapper.mapTo(model);
            return resetPasswordTransport.resetPassword(data)
                .catch(function (response) {
                    return resetPasswordMapper.mapValidation(model, response.data.validationMessages);
                })
        }

        function requestResetPassword(model) {
            var data = requestResetPasswordMapper.mapTo(model);
            return resetPasswordTransport.requestResetPassword(data)
                .catch(function (response) {
                    return requestResetPasswordMapper.mapValidation(model, response.data.validationMessages);
                })
        }
    }
})();
