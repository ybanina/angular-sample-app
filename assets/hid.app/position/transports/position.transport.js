(function () {
    'use strict';

    angular
        .module('hid.position')
        .service('positionTransport', positionTransport);

    positionTransport.$inject = [
        '$http',
        '$q',
        'positionEndpoints',
        'transportHelper'
    ];

    function positionTransport($http,
                               $q,
                               positionEndpoints,
                               transportHelper) {
        this.createPosition = createPosition;
        this.updatePosition = updatePosition;
        this.deletePosition = deletePosition;
        this.getPosition = getPosition;
        this.getPositions = getPositions;
        this.getAllPositions = getAllPositions;

        function createPosition(data) {
            return $http.post(positionEndpoints.position, data).then(function (resource) {
                return transportHelper.getResourceData(resource);
            });
        }

        function updatePosition(data, id) {
            return $http.put(positionEndpoints.position + '/' + id, data).then(function (resource) {
                return transportHelper.getResourceData(resource);
            });
        }

        function deletePosition(id) {
            return $http.delete(positionEndpoints.position + '/' + id).then(function (resource) {
                return transportHelper.getResourceData(resource);
            })
        }

        function getPosition(id) {
            return $http.get(positionEndpoints.position + '/' + id).then(function (resource) {
                var promises = _getPositionEmbedded(resource);

                return $q.all(promises).then(function () {
                    return transportHelper.getResourceData(resource);
                })
            });
        }

        function getPositions(params) {
            return transportHelper.loadCollection(positionEndpoints.positionsList, 'position', params, true);
        }

        function _getPositionEmbedded(resource) {
            var promises = [];

            if (resource.$has('parent_position')) {
                promises.push(resource.$request().$get('parent_position').then(function (parentPosition) {
                    resource['parent_position'] = parentPosition;
                }))
            }

            if (resource.$has('kpi_collection')) {
                promises.push(resource.$request().$get('kpi_collection').then(function (kpi_collection) {
                    resource['kpi_collection'] = kpi_collection;
                }))
            }

            return promises.length > 0 ? promises : [];
        }

        function getAllPositions() {
            var params = {
                limit: 500
            };

            return transportHelper.getAllList($http.get(positionEndpoints.positionsList, params), 'position');
        }
    }
})();