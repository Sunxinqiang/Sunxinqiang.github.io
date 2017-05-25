/**
 * Created by sunxinqiang on 2017/5/25.
 */
define(['angular'], function (angular) {
    var module = angular.module('timerModule',[]);
    module.controller('timerCtrl',['$scope','$state','$timeout','$interval',
        function ($scope,$state,$timeout,$interval) {
        $scope.timer = {};
        $scope.timer2 = {};
        function getTimer(start,end) {
            var startLong = (new Date(start).getTime())-(new Date().getTime());
            $timeout(function(){
                startActivity(end);
            },startLong);
            $timeout(function(){
                startActivityTwo(end);
            },startLong);
        }

        function getNumberToTow(num) {
            var result = new Array();
            if((num+'').length==1){
                result.push(0+'');
                result.push(num+'');
            }else{
                result = (num+'').split('');
            }
            return result;
        }
            function startActivity(end) {
                var timeNow = new Date().getTime();
                var timeEnd = new Date(end).getTime();
                if(timeEnd>timeNow){
                    var timeLeft = timeEnd-timeNow;
                    var h = timeLeft/(1000*60*60);
                    var hTemp = getNumberToTow(Math.floor(h));
                    var m = (h-Math.floor(h))*60;
                    var mTemp = getNumberToTow(Math.floor(m));
                    var s = (m - Math.floor(m))*60;
                    var sTemp = getNumberToTow(Math.floor(s));
                    $scope.timer = {
                        h1 : hTemp[0],
                        h2 : hTemp[1],
                        m1 : mTemp[0],
                        m2 : mTemp[1],
                        s1 : sTemp[0],
                        s2 : sTemp[1]
                    }
                    $timeout(function(){
                        startActivity(end);
                    },1000);
                }else{
                    $scope.timer = {
                        h1 : 0,
                        h2 : 0,
                        m1 : 0,
                        m2 : 0,
                        s1 : 0,
                        s2 : 0
                    }
                }
            }

            // ************************ $interval****************
            function startActivityTwo(end) {
                $interval(function(end){
                    var timeNow = new Date().getTime();
                    var timeEnd = new Date(end).getTime();
                    if(timeEnd>timeNow){
                        var timeLeft = timeEnd-timeNow;
                        var h = timeLeft/(1000*60*60);
                        var hTemp = getNumberToTow(Math.floor(h));
                        var m = (h-Math.floor(h))*60;
                        var mTemp = getNumberToTow(Math.floor(m));
                        var s = (m - Math.floor(m))*60;
                        var sTemp = getNumberToTow(Math.floor(s));
                        $scope.timer2 = {
                            h1 : hTemp[0],
                            h2 : hTemp[1],
                            m1 : mTemp[0],
                            m2 : mTemp[1],
                            s1 : sTemp[0],
                            s2 : sTemp[1]
                        }
                    }else{
                        $scope.timer2 = {
                            h1 : 0,
                            h2 : 0,
                            m1 : 0,
                            m2 : 0,
                            s1 : 0,
                            s2 : 0
                        }
                    }
                },1000,null,null,end);

            }

        var now = new Date();
        getTimer(now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate()+' 00:00:00',
            now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate()+' 23:59:59');
    }]);
    return module;
});