/* declarando funções */
function fale(frase){
	alert(frase);
	/*todo a programação vai aqui dentro*/
}

/* outra maneira de declarar funções */
 var fale = function(frase){
 	alert(frase);
 }

 /*usando (chamando a função) a função*/
 fale('Olá mundo!');

 /* os nomes das variáveis declaradas na funcção
não podem ter o mesmo nome dos parâmetros(argumentos, atributos).
 */





function debitaCartao(tempo, saldo){
	var valor_minuto = 0.25;
	var tempo_gasto = tempo * valor_minuto;

	if(tempo_gasto < saldo){
		var saldo_final = saldo - tempo_gasto;
		alert("Você gastou: " + tempo_gasto + " O seu saldo atual é de: " + saldo_final);
	}
}

function verificaSaldo(saldo){
	if(saldo > 0){
		alert('ok faça a ligação.');
	}else{
		alert('Saldo insuficiente para completar esta ligação.');
	}
}


















