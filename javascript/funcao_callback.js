/*
Uma função no JavaScript é um objeto, isso quer dizer que a gente pode passar uma 
função como parâmetro para outra função. Quando passamos uma função como parâmetro 
para outra, a função passada como parâmetro é uma função de callback.

podemos passar um parametro qualquer, textos, numeros, ou podemos também passar o 
nome de uma função como parametro, então os parametros de uma função aceitam, textos, numeros, 
e outras funções..

var nomefuncao = function(parametro_qualquer, parametro_nome_funcao){
	parametro_nome_funcao(parametro_qualquer)
}
var umafuncaodeparametro = function(parametro_qualquer){
	console.log(parametro_qualquer);
}
nomefuncao('um texto de parametro', umafuncaodeparametro);
*/


var pessoa = function(nome, dizerOla) {
    dizerOla(nome);
}
var olaNoConsole = function(nome) {
    console.log(nome); // 
}

var olaNoAlerta = function(nome) {
    alert(nome); // 
}
pessoa('Deise', olaNoConsole);