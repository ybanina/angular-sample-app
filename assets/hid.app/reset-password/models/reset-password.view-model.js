(function () {
    'use strict';
    angular
        .module('hid.reset-password')
        .factory('ResetPasswordViewModel', getFactory);

    getFactory.$inject = ['ValidationViewModel'];

    function getFactory(ValidationViewModel) {
        ResetPasswordViewModel.prototype = Object.create(ValidationViewModel.prototype);

        return ResetPasswordViewModel;

        function ResetPasswordViewModel() {
            ValidationViewModel.call(this);

            this.token = '';

            this.changePassword = {
                "password" : '',
                "passwordVerify" : ''
            }
        }
    }
})();