(function () {
    'use strict';
    angular
        .module('hid.position')
        .service('positionsCollectionFilterMapper', getService);

    getService.inject = [];

    function getService() {
        PositionsCollectionFilterMapper.prototype.mapTo = mapTo;

        return new PositionsCollectionFilterMapper();

        function PositionsCollectionFilterMapper() {
        }

        function mapTo(model) {
            var data = {};

            if (model.search !== '') {
                data.name = model.search;
            }

            return data;
        }
    }
})();
