(function () {
    'use strict';
    angular
        .module('hid.reset-password')
        .service('resetPasswordService', resetPasswordService);

    resetPasswordService.$inject = [
        'resetPasswordDataService',
        'requestHandlerHelper',
        'formHelper'
    ];

    function resetPasswordService(resetPasswordDataService,
                                  requestHandlerHelper,
                                  formHelper) {

        this.resetPassword = resetPassword;
        this.requestResetPassword = requestResetPassword;

        function resetPassword(form, model) {
            return requestHandlerHelper.handleRequest(resetPasswordDataService.resetPassword(model))
                .catch(function (model) {
                    return formHelper.assignErrors(form, model);
                });
        }

        function requestResetPassword(form, model) {
            return requestHandlerHelper.handleRequest(resetPasswordDataService.requestResetPassword(model))
                .catch(function (model) {
                    return formHelper.assignErrors(form, model);
                });
        }
    }
})();
