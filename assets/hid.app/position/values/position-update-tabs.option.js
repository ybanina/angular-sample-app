(function () {
    'use strict';

    angular
        .module('hid.position')
        .service('positionUpdateTabsOption', positionUpdateTabsOption);

    positionUpdateTabsOption.$inject = [
        'positionUpdateTabsEnum'
    ];

    function positionUpdateTabsOption(positionUpdateTabsEnum) {
        var options = [];

        options[positionUpdateTabsEnum.position] = {
            heading: 'Position',
            route: 'root.positions.update.position'
        };

        options[positionUpdateTabsEnum.kpi] = {
            heading: 'KPI',
            route: 'root.positions.update.kpi'
        };

        return options;
    }
})();
