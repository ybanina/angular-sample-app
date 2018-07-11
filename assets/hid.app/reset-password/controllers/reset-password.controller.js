(function () {
    'use strict';
    angular
        .module('hid.reset-password')
        .controller('resetPasswordController', getController);

    getController.$inject = [
        'ResetPasswordViewModel',
        'resetPasswordService',
        '$state',
        '$window',
        '$stateParams'
    ];

    function getController(ResetPasswordViewModel,
                           resetPasswordService,
                           $state,
                           $window,
                           $stateParams) {
        var vm = this;
        vm.resetPasswordViewModel = new ResetPasswordViewModel;
        vm.onResetPasswordSubmit = onResetPasswordSubmit;

        activate();

        function activate() {

        }

        function onResetPasswordSubmit() {
            if ($stateParams.token) {
                vm.resetPasswordViewModel.token = $stateParams.token;
            }

            return resetPasswordService.resetPassword(vm.resetPasswordForm, vm.resetPasswordViewModel).then(function () {
                $state.go('publicRoot.login')
            });
        }
    }
})();