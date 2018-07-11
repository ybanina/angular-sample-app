(function () {
    'use strict';
    angular
        .module('hid.core.shared')
        .service('resetPasswordMapper', getService);

    getService.inject = [
        'mappersHelper'
    ];

    function getService(mappersHelper) {
        ResetPasswordMapper.prototype.mapTo = mapTo;
        ResetPasswordMapper.prototype.mapValidation = mapValidation;

        return new ResetPasswordMapper();

        function ResetPasswordMapper() {
        }

        function mapTo(model) {
            var data = {};

            data.token = model.token;
            data.changePassword = model.changePassword;

            return data;
        }

        function mapValidation(model, validationErrors) {
            validationErrors = validationErrors || {};

            mappersHelper.setModelErrors(model, 'token', validationErrors['token']);
            mappersHelper.setModelErrors(model, 'password', validationErrors['changePassword']['password']);
            mappersHelper.setModelErrors(model, 'passwordVerify', validationErrors['changePassword']['passwordVerify']);

            return mappersHelper.getValidationResult(model);
        }
    }
})();
