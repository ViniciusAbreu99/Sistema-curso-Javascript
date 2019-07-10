var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var consultaApi = new XMLHttpRequest();

    consultaApi.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    consultaApi.addEventListener("load", function(){
        if(consultaApi.status == 200){
            var resposta = consultaApi.responseText;
            var pacientes = JSON.parse(resposta);
        
            pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
            });
        }
        else{
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }  
    });
    consultaApi.send();
})