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
                templateUrl: "module/tabs.html"
            })
            .state("tabs.index", {
                url:"/index",
                templateUrl: "module/tab.index/index.html",
                controller:'IndexCtrl'
            })
            .state("tabs.view", {
                url:"/view",
                templateUrl: "module/tab.view/view.html"
            })
            .state("single", {
                url:"/single",
                templateUrl: "module/single/single.html"
            });
        $urlRouterProvider.otherwise('/home');
    });
})
