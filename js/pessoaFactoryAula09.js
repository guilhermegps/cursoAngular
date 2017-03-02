app.factory('Pessoa', function(){
  var Pessoa = function(){
    this.nome = 'Guilherme';
    this.idade = 23;

    this.cumprimentar = function(){
      return 'Olá'+this.nome+"!";
    }
  }

  return Pessoa;
});
