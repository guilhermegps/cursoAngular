app.controller('ControllerAula13', function($scope){

});

app.directive('ngOla', function(){
  return {
    restrict: 'AEC', // A - atributo; E - Elemento; C - Classe
    scope: {
      ngNome: '@'
    },
    template: '<h1>Olá {{ngNome}}!</h1>',
    controller: ['$scope', function($scope){
      $scope.digaOla = function(nome){
        alert(`Olá ${nome}!`)
      }
    }],
    link: function(scope, iElement, iAttrs){
      scope.digaOla(iAttrs.ngNome);
    }
  }
});
