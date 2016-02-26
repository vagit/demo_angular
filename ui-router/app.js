var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home'); // Set route definition that will be used on route change when no route definition is matches

    $stateProvider

        // HOME STATES AND NESTED VIEWS
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })

        .state('home.list', {
            url: '/list',
            templateUrl: 'partials/home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldenoodle'];
            }
        })

        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS
        .state('about', {

        });
});