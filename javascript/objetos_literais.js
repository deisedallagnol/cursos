var guitarras = {
  modelo1: 'music man',
  modelo2: 'ibanez',
  modelo3: 'prs',
  cordas: [ 'elixir', 'daddario' ]
};
 
// Se quisermos então saber o valor do modelo2...
guitarras.modelo2 //ou
guitarras['modelo2'] // -> 'ibanez'
 
// O valor do segundo item do array "cordas"
guitarras.cordas[1] // -> 'daddario'
 
// uma peculiaridade dessa notação: podemos passar um valor
// contido em uma variável como a chave para buscar um item/propriedade
var modeloPreferido = 'modelo1';
guitarras[modeloPreferido] // -> 'music man'

//para saber quantas cordas tem
guitarras.cordas.length