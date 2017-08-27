/**
 * Created by sunxinqiang on 2017/5/9.
 */
// var myApp = angular.module("myApp", ['ui.router']);
define(['app'],function (app) {
    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                // abstract: true,
                url: "/home",
                templateUrl: "html/home.html",
                controller: 'homeCtrl'
            })
            .state("background", {
                url: "/background",
                templateUrl: "hjx/background.html",
                controller: 'BackgroundCtrl'
            })
            .state("tabs", {
                url: "/tabs",
                templateUrl: "html/tabs.html",
                controller: 'tabCtrl'
            })
            .state("tabs.index", {
                url:"/index",
                templateUrl: "html/tabs.index.html"
                // controller:'IndexCtrl'
            })
            .state("tabs.view", {
                url:"/view",
                templateUrl: "html/tabs.view.html"
            })
            .state("tabs.item3", {
                url:"/item3",
                templateUrl: "html/tabs.item3.html"
            })
            .state("timer", {
                url:"/timer",
                templateUrl: "html/timer.html",
                controller: 'timerCtrl'
            }).state("inputs", {
                url:"/inputs",
                templateUrl: "html/inputs.html",
                controller: 'inputsCtrl'
            });
        $urlRouterProvider.otherwise('/home');
    });
})
