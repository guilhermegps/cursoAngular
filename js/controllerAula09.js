app.controller('aula09Ctrl1Controller', function($scope, operacoesService, Pessoa){
  $scope.pessoa = new Pessoa();

  console.log(operacoesService.somar(5, 3));
});

app.controller('aula09Ctrl2Controller', function($scope, operacoesService, Pessoa){
  $scope.outrapessoa = new Pessoa();
  $scope.outrapessoa.nome = 'João';
  $scope.outrapessoa.idade = 49;

  console.log(operacoesService.subtrair(2, 15));
});
