(function () {
    'use strict';
    angular
        .module('hid.core.shared')
        .service('requestResetPasswordMapper', getService);

    getService.inject = [
        'mappersHelper'
    ];

    function getService(mappersHelper) {
        RequestResetPasswordMapper.prototype.mapTo = mapTo;
        RequestResetPasswordMapper.prototype.mapValidation = mapValidation;

        return new RequestResetPasswordMapper();

        function RequestResetPasswordMapper() {
        }

        function mapTo(model) {
            var data = {};

            data.email = model.email;

            return data;
        }

        function mapValidation(model, validationErrors) {
            validationErrors = validationErrors || {};

            mappersHelper.setModelErrors(model, 'email', validationErrors['email']);

            return mappersHelper.getValidationResult(model);
        }
    }
})();
