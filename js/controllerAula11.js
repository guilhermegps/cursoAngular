angular.module('app', ['ngRoute'])

.controller('ControllerAula11', function($scope, $route, $routeParams, $location){
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
})

.controller('ControllerInicial', function($scope){
  console.log('Entrou no ControllerInicial');
})

.controller('ControllerPagina1', function($scope){
  console.log('Entrou no ControllerPagina1');
})

.controller('ControllerPagina2', function($scope, $routeParams){
  $scope.parametros = $routeParams;
  console.log('Entrou no ControllerPagina2');
  console.log('Id do produto: '+$scope.parametros.idproduto);
})

.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl : 'inicialAula11.html',
    controller : 'ControllerInicial'
  })
  .when('/Pagina1', {
    templateUrl : 'pagina1Aula11.html',
    controller : 'ControllerPagina1'
  })
  .when('/Pagina2/:idproduto', {
    templateUrl : 'pagina2Aula11.html',
    controller : 'ControllerPagina2'
  })
  .otherwise({
    redirectTo : '/'
  });

  $locationProvider.html5Mode(true);
});
