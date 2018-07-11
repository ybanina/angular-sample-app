(function () {
    'use strict';
    angular
        .module('hid.position')
        .factory('PositionsCollectionFilterViewModel', getFactory);

    getFactory.$inject = [];

    function getFactory() {
        return PositionsCollectionFilterViewModel;
        function PositionsCollectionFilterViewModel() {
            this.search = '';
        }
    }
})();