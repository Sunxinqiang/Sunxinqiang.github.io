/**
 * Created by sunxinqiang on 2017/5/24.
 */
define(['angular'],function (angular) {
    var module = angular.module('tabModule',[]);
    module.controller('tabCtrl',['$rootScope','$scope','$state',
        function($rootScope,$scope,$state){
            $scope.chooseTabs = {};
            $scope.tabList = [];
            $scope.chooseNow = '';
            $scope.tabs = {
                goItem: function (title) {
                    $scope.chooseNow = title;
                    if($scope.tabList.indexOf(title)==-1){
                        $scope.tabList.push(title);
                    }
                    if(!$scope.chooseTabs[title]){
                        $scope.chooseTabs[title]= {};
                    }
                    $state.go('tabs.'+title);
                },
                close: function (title,event) {
                    event.stopPropagation();
                    $scope.chooseTabs[title] = '';
                    if($scope.tabList.indexOf(title)-1>=0){
                        $scope.chooseNow = $scope.tabList[$scope.tabList.indexOf(title)-1];
                    }else{
                        $scope.chooseNow = $scope.tabList[1];
                    }
                    $scope.tabList.splice($scope.tabList.indexOf(title),1);
                    if($scope.chooseNow){
                        $state.go('tabs.'+$scope.chooseNow);
                    }else{
                        $state.go('tabs');
                    }
                },
                titleClick: function (title) {
                    $scope.chooseNow = title;
                    $state.go('tabs.'+title);
                }
            }

        }]);
    return module;
});

