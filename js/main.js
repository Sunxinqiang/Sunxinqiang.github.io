/**
 * Created by sunxinqiang on 2017/5/9.
 */
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        ready: 'public/ready',
        angular: 'public/angular',
        ui_router: 'public/angular-ui-router',
        app_route: 'application/app_route',
        app: 'application/app',

        home: 'home/module'
    },
    shim: {
        'angular': {
          exports: 'angular'
        },
        'ui_router': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['angular']
            //Once loaded, use the global 'Backbone' as the
            //module value.
            // exports: 'Backbone'
        },
        'app_route': {
            deps: ['angular']
        }
    }
});

// Start the main app logic.
require(['ready','angular', 'ui_router', 'app_route','app','home'],
    function(ready,angular) {
        angular.bootstrap(document, ['myApp']);
        document.body.addEventListener('touchstart', function(){ });
    });