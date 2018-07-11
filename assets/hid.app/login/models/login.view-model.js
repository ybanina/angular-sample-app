(function () {
    'use strict';
    angular
        .module('hid.login')
        .factory('LoginViewModel', getFactory);

    getFactory.$inject = [];

    function getFactory() {
        return LoginViewModel;

        function LoginViewModel() {
            this.login = '';
            this.password = '';
            this.rememberMe = true;
        }
    }
})();
