/*Declarando váriaveis*/
var nome = "Deise";

/*Concatenando váriaveis*/
var texto = "Olá";
var texto2 = "Mundo";

var resultado = texto + texto2;

/*Concatenando variáveis com html*/

var resultado2 = texto + "<br>";

/*Concatenando a mesma variável*/
var teste = "Olá";
teste += " Mundo";

/*Recuperando o valor e colocando de volta*/
var produto = document.getElementById('lista_produtos').innerHTML += "Novo produto";