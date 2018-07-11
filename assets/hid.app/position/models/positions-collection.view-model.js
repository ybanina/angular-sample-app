(function () {
    'use strict';

    angular
        .module('hid.position')
        .factory('PositionsCollectionViewModel', getFactory);

    getFactory.$inject = [
        'CollectionViewModel',
        'PositionsCollectionFilterViewModel',
        'positionsCollectionFilterMapper'
    ];

    function getFactory(CollectionViewModel,
                        PositionsCollectionFilterViewModel,
                        positionsCollectionFilterMapper) {
        PositionsCollectionViewModel.prototype = Object.create(CollectionViewModel.prototype);

        return PositionsCollectionViewModel;

        function PositionsCollectionViewModel() {
            CollectionViewModel.call(this);
            this.filter = new PositionsCollectionFilterViewModel();
            this.filterMapper = positionsCollectionFilterMapper;
        }
    }
})();