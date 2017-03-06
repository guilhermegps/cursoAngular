var app = angular.module('app', ['ngSanitize']);

function ControllerAula12($scope, $filter){
  console.log('Iniciou o Controler Aula12');

  $scope.mostrar = true;

  $scope.variavelHTML = "<h1>Seja bem vindo ao nosso site!</h1>";

  $scope.minhaClass = "";

  $scope.variavelCloak = "Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto"

  $scope.minhaImagem = "img1.png";
}

app.controller('ControllerAula12', ControllerAula12);
