app.filter('retornaOi', function(){
  return function(nome) {
    return 'Oi ' + nome + '!';
  }
});
