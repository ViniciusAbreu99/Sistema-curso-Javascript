var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista";


atualizaDadosImc();

function imc(pacientesLista){
    for(var i = 0; i< pacientesLista.length; i++){

        var paciente = pacientesLista[i];
    

        var tdPeso = paciente.querySelector(".info-peso");
        var tdAltura = paciente.querySelector(".info-altura");
        var tdImc = paciente.querySelector(".info-imc");

        var peso = tdPeso.textContent;
        var altura = tdAltura.textContent;
        var imc = peso/(altura * altura);

        var dadosValidados = validaDadosImc(peso, altura);

        if(dadosValidados == ("peso inválido" || "altura inválida")){
            tdImc.textContent = dadosValidados;
            paciente.classList.add("paciente-invalido");
        }
        else{
            tdImc.textContent = imc.toFixed(2);
        }
    }
}
function validaDadosImc(peso , altura){
    if(peso>=1000 || peso<=0){
        return "peso inválido";
    }
    if(altura>=10 || altura<=0){
        return "altura inválida";
    }
}


function atualizaDadosImc(){
    var pacientes = document.querySelectorAll(".paciente")
    imc(pacientes);
}