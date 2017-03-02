function ControllerAula10($scope, $filter /*retornaOiFilter*/){
  console.log('Iniciou o Controler Aula10');

  //console.log(retornaOiFilter('Teste'));

  console.log(
    $filter('retornaOi')('Funfou')
  );

  $scope.pessoa = {
    nome: 'Paiva',
    idade: '23'
  }
}

app.controller('ControllerAula10', ControllerAula10); // Uma forma diferente de criar o controller
