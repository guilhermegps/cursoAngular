app.controller("controllerAula08", function($scope){

  $scope.estados = ['GO', 'DF', 'CE', 'MG', 'AM', 'PE'];

  $scope.pessoa = novaPessoa();
  $scope.pessoas = [];

  $scope.salvarPessoa = function(pessoa){
    $scope.pessoas.push(
      JSON.parse(JSON.stringify(pessoa)) // Gambirra para faze um clone (deep copy) do objeto
    );

    $scope.pessoa = novaPessoa();
    $scope.frm.$setUntouched(); // Seta o foco fora do formulário
    $scope.frm.$setPristine(); // Volta ao estado original do formulário
  }

  console.log($scope.pessoa);
});

function novaPessoa(){
  return {
    nome: '',
    email: '',
    sexo: 'm',
    estado: 'DF'
  };
}
