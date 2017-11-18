(function () {
    'use strict';

    angular.module('myApp').service('DataService', function ($http) {
        var service = this;

        service.getData = function() {
            var response = $http({
                method: "GET",
                url: "https://api.coinmarketcap.com/v1/ticker/?limit=10"
            });

            return response;
        }

    });

})()