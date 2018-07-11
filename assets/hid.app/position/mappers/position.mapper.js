(function () {
    'use strict';

    angular
        .module('hid.position')
        .service('positionMapper', getService);

    getService.$inject = [
        'PositionViewModel',
        'kpiMapper',
        'mappersHelper'
    ];

    function getService(PositionViewModel,
                        kpiMapper,
                        mappersHelper) {
        PositionMapper.prototype.mapTo = mapTo;
        PositionMapper.prototype.mapFrom = mapFrom;
        PositionMapper.prototype.mapValidation = mapValidation;

        return new PositionMapper();

        function PositionMapper() {

        }

        function mapTo(model) {
            var data = {};

            data['name'] = model.name;
            data['description'] = model.description;

            if (model.parentPosition) {
                data['parent_position'] = model.parentPosition.id;
            }

            return data;
        }

        function mapFrom(data) {
            var model = new PositionViewModel();

            model.id = mappersHelper.mapToInteger(data['id']);
            model.name = mappersHelper.mapToString(data['name']);
            model.description = mappersHelper.mapToString(data['description']);
            model.parentPosition = data['parent_position'] ? mapFrom(data['parent_position']) : null;
            model.kpis = data['kpi_collection'] ? mappersHelper.mapArray(data['kpi_collection'], kpiMapper.mapFrom) : [];

            return model;
        }


        function mapValidation(model, validationErrors) {
            validationErrors = validationErrors || {};

            mappersHelper.setModelErrors(model, 'name', validationErrors['name']);
            mappersHelper.setModelErrors(model, 'parentPosition', validationErrors['parent_position']);

            return mappersHelper.getValidationResult(model);
        }
    }
})();