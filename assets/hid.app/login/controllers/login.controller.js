(function () {
    'use strict';
    angular
        .module('hid.login')
        .controller('loginController', getController);

    getController.$inject = [
        '$scope',
        'LoginViewModel',
        'RegistrationViewModel',
        'loginService',
        'coreSharedService',
        '$state',
        '$window'
    ];

    function getController($scope,
                           LoginViewModel,
                           RegistrationViewModel,
                           loginService,
                           coreSharedService,
                           $state,
                           $window) {
        var vm = this;
        vm.tabItem = "login";
        vm.loginViewModel = new LoginViewModel;
        vm.registrationViewModel = new RegistrationViewModel;

        vm.onLoginSubmit = onLoginSubmit;
        vm.onRegistrationSubmit = onRegistrationSubmit;
        vm.tabs = tabs;

        activate();

        function activate() {

        }

        function onLoginSubmit() {
            return loginService.login(vm.loginViewModel)
                .then(function () {
                    coreSharedService.getCurrentUser().then(function (user) {
                        $state.go('root.review.tasks', {'userId': user.id});
                    })
                })
                .catch(function (message) {
                    $window.alert(message);
                })
        }

        function onRegistrationSubmit() {
            coreSharedService.register(vm.registerForm, vm.registrationViewModel).then(function () {
                vm.tabItem = 'login';
            })
        }

        function tabs(item) {
            vm.tabItem = item;
        }
    }
})();