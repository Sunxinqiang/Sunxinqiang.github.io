/**
 * Created by sunxinqiang on 2017/5/11.
 */
define(['angular'],function (angular) {
    var module = angular.module('homeModule',[]);
    module.controller('homeCtrl',['$scope',function($scope){
        $scope.val = 123123;
        $scope.home = {
            leftData:[
                {title:'JavaScript',val:['原型','闭包','作用域']},
                {title:'Angular',val:['$scope','$$parse']}
            ]
        }
    }]);
    return module;
});