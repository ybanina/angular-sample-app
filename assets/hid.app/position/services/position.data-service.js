(function () {
    'use strict';

    angular
        .module('hid.position')
        .service('positionDataService', positionDataService);

    positionDataService.$inject = [
        'positionTransport',
        'mappersHelper',
        'positionMapper',
        'employeeMapper',
        'positionsCollectionMapper'
    ];

    function positionDataService(positionTransport,
                                 mappersHelper,
                                 positionMapper,
                                 employeeMapper,
                                 positionsCollectionMapper) {
        this.createPosition = createPosition;
        this.updatePosition = updatePosition;
        this.deletePosition = deletePosition;
        this.getPosition = getPosition;
        this.getPositions = getPositions;
        this.getAllPositions = getAllPositions;

        function createPosition(model) {
            var data = positionMapper.mapTo(model);

            return positionTransport.createPosition(data)
                .catch(function (response) {
                    return positionMapper.mapValidation(model, response.data.validationMessages);
                })
        }

        function updatePosition(model) {
            var data = positionMapper.mapTo(model);

            return positionTransport.updatePosition(data, model.id)
                .catch(function (response) {
                    return positionMapper.mapValidation(model, response.data.validationMessages);
                })
        }

        function getPosition(id) {
            return positionTransport.getPosition(id).then(function (data) {
                return positionMapper.mapFrom(data);
            })
        }

        function deletePosition(id) {
            return positionTransport.deletePosition(id).then(function (data) {
                return data;
            })
        }

        function getPositions(collection) {
            var params = collection.getParams();
            return positionTransport.getPositions(params).then(function (data) {
                return positionsCollectionMapper.mapExistingFrom(collection, data);
            })
        }

        function getAllPositions(collection) {
            return positionTransport.getAllPositions().then(function (data) {
                collection.list = mappersHelper.mapArray(data, positionMapper.mapFrom);
                return collection;
            })
        }
    }

})();