var appSaudacao = angular.module('moduloSaudacao', []);

appSaudacao.filter('ola', function(){
  return function(nome) {
    return "Olá " + nome + ".\n";
  }
});
