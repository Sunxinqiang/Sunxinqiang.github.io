/**
 * Created by sunxinqiang on 2017/5/24.
 */
define(['angular'],function (angular) {
    var module = angular.module('inputsModule',[]);
    module.controller('inputsCtrl',['$rootScope','$scope','$state',
        function($rootScope,$scope,$state){
            $scope.amount = 33.33;
            $scope.amount_cheep = 0;
            $scope.amount_last = 0;
            $scope.cheepChange = function(){
                var numTemp = ($scope.amount_cheep+'').split('.')[1];
                if(numTemp&&numTemp.length>2){
                    var amount_str = $scope.amount_cheep+'';
                    var len = amount_str.length;
                    $scope.amount_cheep = amount_str.substr(0,len-(numTemp.length-2))-0;
                }
                $scope.amount_last = $scope.amount.sub($scope.amount_cheep);
            }

        }]);
    return module;
});

