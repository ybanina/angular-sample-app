(function () {
    'use strict';
    angular
        .module('hid.reset-password')
        .factory('ResetPasswordRequestViewModel', getFactory);

    getFactory.$inject = ['ValidationViewModel'];

    function getFactory(ValidationViewModel) {
        ResetPasswordRequestViewModel.prototype = Object.create(ValidationViewModel.prototype);

        return ResetPasswordRequestViewModel;

        function ResetPasswordRequestViewModel() {
            ValidationViewModel.call(this);

            this.email = '';
        }
    }
})();
