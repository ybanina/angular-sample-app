(function () {
    'use strict';

    angular
        .module('hid.position')
        .constant('positionEndpoints', {
            position: '/api/position',
            positionsList: '/api/position'
        });
})();