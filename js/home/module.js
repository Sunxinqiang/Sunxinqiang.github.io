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
                            {state:'设计模式',url:""}
                    ]},
                    {title:'Angular',val:[
                            {state:'$scope',url:""},
                            {state:'$$parse',url:""},
                            {state:'页签test',url:"tabs"},
                            {state:'timer',url:'timer'},
                            {state:'inputTest',url:'inputs'}
                    ]}
                ]
            }
        $scope.goJsDesign = function(){
            location.href = 'jsDesign/chapter1/chapter1.html';
        }
        $scope.goCanvas = function(){
            location.href = 'canvas/view/index.html';
        }
    }]);

    return module;
});

