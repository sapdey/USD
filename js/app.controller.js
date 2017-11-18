(function () {
'use strict';
    
    angular.module('myApp')
    .controller('MainController', function(DataService, $interval){
        var vm = this;
        vm.series = ["Crypto currencies in USD"];
        vm.data = function() {
            var promise = DataService.getData();

            promise.then(function(response){
                vm.value = response.data.map(value => value.price_usd)
                vm.labels = response.data.map(value => value.name);
            })
            .catch(function(error){
                console.log(error);
            });
        }
        $interval(vm.data, 300000);
    });

})()