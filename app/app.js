var app = angular.module('voTweet', [
    'ngRoute', 'chart.js'
    ]);

app.config(function($routeProvider){
    $routeProvider
    .when('/vistaInicio', {
        templateUrl: 'vistas/vistaInicio.html',
        controller: 'VistaPrincipalCtrl'
      })
    ;
    /*.when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
    .when('/us', {
            templateUrl:'views/us.html',
            controller:'UsCtrl'
    })
    .when('/graphic',{
      templateUrl: 'views/graphic.html',
      controller: 'GraphicCtrl'
    })
    .when('/graph',{
      templateUrl: 'views/graph.html',
      controller: 'GraphCtrl'
    })
    .when('/map',{
      templateUrl: 'views/map.html',
      controller: 'MapCtrl'
    })
    .when('/tweets',{
      templateUrl: 'views/tweets.html',
      controller: 'TweetsCtrl'
    })
    .when('/graphiccompare',{
      templateUrl:'views/graphiccompare.html',
      controller: 'GraphicCompareCtrl'
    });*/
});