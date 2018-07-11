(function () {
    'use strict';
    
    angular
        .module('hid.position')
        .factory('PositionViewModel', getFactory);
    
    getFactory.$inject = ['ValidationViewModel'];
    
    function getFactory(ValidationViewModel) {
        PositionViewModel.prototype = Object.create(ValidationViewModel.prototype);

        return PositionViewModel;
        
        function PositionViewModel() {
            ValidationViewModel.call(this);

            this.id = null;
            this.name = '';
            this.description = '';
            this.parentPosition = '';
            this.kpis = [];
        }
    }
})();