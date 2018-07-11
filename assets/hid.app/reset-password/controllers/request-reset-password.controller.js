(function () {
    'use strict';
    angular
        .module('hid.reset-password')
        .controller('requestResetPasswordController', getController);

    getController.$inject = [
        '$state',
        'ResetPasswordRequestViewModel',
        'resetPasswordService'
    ];

    function getController($state,
                           ResetPasswordRequestViewModel,
                           resetPasswordService) {
        var vm = this;
        vm.resetPasswordRequestViewModel = new ResetPasswordRequestViewModel;
        vm.onRequestResetPasswordSubmit = onRequestResetPasswordSubmit;

        activate();

        function activate() {

        }

        function onRequestResetPasswordSubmit() {
            return resetPasswordService.requestResetPassword(vm.requestResetPassword, vm.resetPasswordRequestViewModel)
                .then(function () {
                    $state.go('publicRoot.reset-password-suspend');
                });
        }
    }
})();