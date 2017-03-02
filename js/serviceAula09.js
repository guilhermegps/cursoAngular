app.service('operacoesService', function(){
  console.log('Criou o operacoesService');

  this.somar = function(valor1, valor2){
    return valor1 + valor2;
  };

  this.subtrair = function(valor1, valor2){
    return valor1 - valor2;
  };
});
