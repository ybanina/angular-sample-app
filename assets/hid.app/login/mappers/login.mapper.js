(function () {
    'use strict';
    angular
        .module('hid.core.shared')
        .service('loginMapper', getService);

    getService.inject = [];

    function getService() {
        LoginMapper.prototype.mapTo = mapTo;
        LoginMapper.prototype.mapValidation = mapValidation;

        return new LoginMapper();

        function LoginMapper() {
        }

        function mapTo(model) {
            var data = {};

            data.identity = model.login;
            data.credentials = model.password;
            data.remember_me = model.rememberMe;

            return data;
        }

        function mapValidation(model, data) {
            return model;
        }
    }
})();
