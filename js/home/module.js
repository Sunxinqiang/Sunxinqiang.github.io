/**
 * Created by sunxinqiang on 2017/5/11.
 */
define(['angular'],function (angular) {
    var module = angular.module('homeModule',[]);
    module.controller('homeCtrl',['$rootScope','$scope',
    function($rootScope,$scope){

        $scope.val = '';
        $scope.home = {
            leftData:[
                    {title:'JavaScript',val:[
                            {state:'原型',url:""},
                            {state:'闭包',url:""},
                            {state:'作用域',url:""}]},
                    {title:'Angular',val:[
                            {state:'$scope',url:""},
                            {state:'$$parse',url:""},
                            {state:'页签test',url:"tabs"},
                            {state:'timer',url:'timer'}
                    ]}
                ]
            }
        }]);
    return module;
});

