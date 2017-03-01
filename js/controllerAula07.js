app.controller("controllerAula07", function($scope){
  $scope.nomes = ['Guilherme', 'Daniel', 'Thiago', 'Pedro', 'João'];

  $scope.pessoas = [];

  $scope.pessoas.push({nome: 'Guilherme', idade: 23, status: true});
  $scope.pessoas.push({nome: 'teste', idade: 55, status: false});

  $scope.adiciona = function(){
    let nome = document.getElementById('nome');
    let idade = document.getElementById('idade');

    $scope.pessoas.push({nome: nome.value, idade: idade.value, status: false});
    nome.value = '';
    idade.value = '';
  };

  console.log($scope.pessoas);
});
