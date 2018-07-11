(function () {
    'use strict';
    angular
        .module('hid.position')
        .service('positionsCollectionMapper', getService);

    getService.inject = [
        'CollectionMapper',
        'positionMapper'
    ];

    function getService(CollectionMapper,
                        positionMapper) {
        PositionsCollectionMapper.prototype = Object.create(CollectionMapper.prototype);

        return new PositionsCollectionMapper();

        function PositionsCollectionMapper() {
            CollectionMapper.call(this);
            this.itemMapper = positionMapper;
        }
    }
})();
