(function () {
    'use strict';
    angular
        .module('hid.position')
        .controller('positionController', getController);

    getController.$inject = [
        'rootScopeService',
        'PositionsCollectionFilterViewModel',
        'PositionsCollectionViewModel',
        'PositionViewModel',
        'positionService',
        'coreSharedService',
        'entityNamesConstant',
        '$state'
    ];

    function getController(rootScopeService,
                           PositionsCollectionFilter,
                           PositionsCollectionViewModel,
                           PositionViewModel,
                           positionService,
                           coreSharedService,
                           entityNamesConstant,
                           $state) {

        var vm = this;

        vm.positionsCollectionFilter = new PositionsCollectionFilter();
        vm.positionsCollection = new PositionsCollectionViewModel();
        vm.positionViewModel = null;
        vm.editPositionViewModel = null;
        vm.entityNamesConstant = entityNamesConstant;
        vm.isRequesting = rootScopeService.isRequesting;

        vm.onCreateSubmit = onCreateSubmit;
        vm.onEditPosition = onEditPosition;
        vm.onCreateNewPosition = onCreateNewPosition;
        vm.onCreateNewPositionCancel = onCreateNewPositionCancel;
        vm.onFilterUpdated = onFilterUpdated;
        vm.onPaginationChange = onPaginationChange;

        activate();

        function activate() {
            coreSharedService.getCurrentUser().then(function (user) {
                if (!user.isAdmin) {
                    $state.go('root.review');
                }
            });

            loadPositions();
        }

        function onPaginationChange() {
            loadPositions();
        }

        function onCreateNewPosition() {
            vm.positionViewModel = new PositionViewModel();
        }

        function onCreateNewPositionCancel() {
            vm.positionViewModel = null;
        }

        function loadPositions() {
            vm.positionsCollection.filter = angular.copy(vm.positionsCollectionFilter);
            positionService.getPositions(vm.positionsCollection);
        }

        function onCreateSubmit() {
            return positionService.createPosition(vm.createPositionForm, vm.positionViewModel)
                .then(function () {
                    vm.positionViewModel = null;
                    loadPositions();
                });
        }

        function onEditPosition(position) {
            vm.positionsCollection.list.forEach(function (item) {
                item.editMode = false;
            });

            vm.editPositionViewModel = angular.copy(position);
            position.editMode = true;
        }

        function onFilterUpdated() {
            vm.positionsCollection.pagination.current = 1;
            loadPositions();
        }
    }
})();