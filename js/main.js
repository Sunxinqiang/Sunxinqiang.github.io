/**
 * Created by sunxinqiang on 2017/5/9.
 */
requirejs.config({
    baseUrl: 'js',
    paths: {
        ready: 'public/ready',
        angular: 'public/angular',
        ui_router: 'public/angular-ui-router',
        app_route: 'application/app_route',
        app: 'application/app',

        home: 'home/module',
        tabs: 'tabs/module',
        timer: 'timer/module'
    },
    shim: {
        'angular': {
          exports: 'angular'
        },
        'ui_router': {
            deps: ['angular']
        },
        'app_route': {
            deps: ['angular']
        }
    }
});

require(['ready','angular', 'ui_router', 'app_route','app','home','tabs','timer'],
    function(ready,angular) {
        angular.bootstrap(document, ['myApp']);
        document.body.addEventListener('touchstart', function(){ });
    });