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
        app_run: 'application/app_run',

        home: 'home/module',
        tabs: 'tabs/module',
        timer: 'timer/module',
        inputs: 'inputs/module'
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

require(['ready','angular', 'ui_router', 'app_route','app','app_run','home','tabs','timer','inputs'],
    function(ready,angular) {
        angular.bootstrap(document, ['myApp']);
        document.body.addEventListener('touchstart', function(){ });
    });