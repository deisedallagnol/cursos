Namespace
O JavaScript possui um escopo global, que quando em navegadores é window
Os padrões que vimos até então poluem o escopo global da aplicação com a definição de uma série de variáveis. Uma solução é a criação de um namespace de uso específico para os módulos.

window.App = {
  modules: {}
};
App.modules.counter = (function () {
  /* ... */
})();
App.modules.slider = (function () {
  /* ... */
})();

/*http://tableless.com.br/modularizacao-em-javascript/
http://ericdouglas.github.io/2014/10/05/instrucoes-e-programacao-modular-parte-1/

*/