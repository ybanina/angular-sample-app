(function () {
    'use strict';

    angular
        .module('hid.position')
        .service('positionService', positionService);

    positionService.$inject = [
        'PositionsCollectionViewModel',
        'positionDataService',
        'requestHandlerHelper',
        'formHelper'
    ];
    
    function positionService(PositionsCollectionViewModel,
                             positionDataService,
                             requestHandlerHelper,
                             formHelper) {

        this.createPosition = createPosition;
        this.updatePosition = updatePosition;
        this.deletePosition = deletePosition;
        this.getPosition = getPosition;
        this.getPositions = getPositions;
        this.getAllPositions = getAllPositions;

        function createPosition(form, model) {
            return requestHandlerHelper.handleRequest(positionDataService.createPosition(model))
                .catch(function (model) {
                    return formHelper.assignErrors(form, model);
                });
        }

        function updatePosition(form, model) {
            return requestHandlerHelper.handleRequest(positionDataService.updatePosition(model))
                .catch(function (model) {
                    return formHelper.assignErrors(form, model);
                });
        }

        function getPosition(id){
            return requestHandlerHelper.handleRequest(positionDataService.getPosition(id));
        }

        function deletePosition(id) {
            return requestHandlerHelper.handleRequest(positionDataService.deletePosition(id));
        }

        function getPositions(collection) {
            return requestHandlerHelper.handleRequest(positionDataService.getPositions(collection));
        }

        function getAllPositions() {
            var positions = new PositionsCollectionViewModel();
            return requestHandlerHelper.handleRequest(positionDataService.getAllPositions(positions));
        }
    }
})();