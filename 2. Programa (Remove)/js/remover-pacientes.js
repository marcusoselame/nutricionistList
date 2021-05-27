var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){

	var alvoEvento = event.target;
	var paiDoAlvo = alvoEvento.parentNode // tr = paciente = remover

	paiDoAlvo.classList.add("fadeOut")

	setTimeout(function(){

		paiDoAlvo.remove();


	}, 400);
	
})
