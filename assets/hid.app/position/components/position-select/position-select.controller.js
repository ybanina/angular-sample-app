(function () {
    'use strict';
    angular
        .module('hid.position')
        .controller('positionSelectController', getController);

    getController.$inject = [
        'positionService',
        'PositionsCollectionViewModel',
        'PositionsCollectionFilterViewModel'
    ];

    function getController(positionService,
                           PositionsCollectionViewModel,
                           PositionsCollectionFilterViewModel) {
        var vm = this;

        vm.entities = null;
        vm.name = vm.name || vm.entityName;
        vm.searchString = "name";

        vm.loadEntities = loadEntities;
        vm.$onInit = $onInit;

        function $onInit() {
            vm.entities = new PositionsCollectionViewModel();
            vm.entities.filter = new PositionsCollectionFilterViewModel();
            vm.entities.getEntities = positionService.getPositions;
        }

        function loadEntities(select) {
            vm.entities.filter.search = select.search;
            vm.entities.getEntities(vm.entities).then(function () {
                if (vm.exclude) {
                    var index = vm.entities.list.findIndex(function (position) {
                        return position.id === vm.exclude;
                    });
                    if (index > -1) {
                        vm.entities.list.splice(index, 1);
                    }
                }
            });
        }
    }
})();