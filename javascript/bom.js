/*objeto location contém várias propriedades como:
href = 
pathname =
replace = altera o endereço
*/
window.location.href
window.location.pathname
window.location.reload();
window.location.replace('http://www.google.com.br');

function digaNome(){
  var nome = prompt("Olá! Qual é o seu nome?", "seu nome");
  document.getElementById("msg").innerHTML="Seja bem vindo " + nome;
  
}
