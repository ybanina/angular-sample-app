(function () {
    'use strict';

    angular
        .module('hid.position')
        .controller('positionUpdateController', getController);

    getController.$inject = [
        '$state',
        '$stateParams',
        'PositionViewModel',
        'positionService',
        'positionUpdateTabsOption',
        'entityNamesConstant',
        'positionUpdateTabsEnum'

    ];

    function getController($state,
                           $stateParams,
                           PositionViewModel,
                           positionService,
                           positionUpdateTabsOption,
                           entityNamesConstant,
                           positionUpdateTabsEnum) {
        var vm = this;

        vm.position = new PositionViewModel();
        vm.activeTab = positionUpdateTabsEnum.position;
        vm.entityNamesConstant = entityNamesConstant;
        vm.tabData = positionUpdateTabsOption;

        vm.onUpdateSubmit = onUpdateSubmit;
        vm.onUpdateSubmitCancel = onUpdateSubmitCancel;

        activate();

        function activate() {
            loadPosition();
        }

        function loadPosition() {
            return positionService.getPosition($stateParams.positionId)
                .then(function (position) {
                    vm.position = position;
                });
        }

        function onUpdateSubmit() {
            return positionService.updatePosition(vm.updatePositionForm, vm.position)
                .then(function () {
                    loadPosition();
                });
        }

        function onUpdateSubmitCancel() {
            $state.go('root.positions');
        }
    }
})();