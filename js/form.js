var botaoAdicionar = document.querySelector("#adicionar-paciente");


botaoAdicionar.addEventListener("click", function() {
    event.preventDefault();
    var form = document.querySelector("#adiciona-form");
    var paciente = obterFormularioPacientes(form);

    var dadosValidados = validaDadosForm(paciente);

    if(dadosValidados.length > 0){
        adicionaErros(dadosValidados);
        return;
    }


    paciente.peso = trocaVirgulaPorPonto(paciente.peso);     
    paciente.altura = trocaVirgulaPorPonto(paciente.altura);
    paciente.gordura = trocaVirgulaPorPonto(paciente.gordura);



    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagemDeErro = document.querySelector(".lista-de-erros");
        mensagemDeErro.innerHTML = "";
})

function adicionaPacienteNaTabela(paciente){
    
    

    

    var pacientesTr = document.createElement("tr");

    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    pacientesTr.classList.add("paciente");

    nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura")
    imcTd.classList.add("info-imc");


    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacientesTr.appendChild(nomeTd);
    pacientesTr.appendChild(pesoTd);
    pacientesTr.appendChild(alturaTd);
    pacientesTr.appendChild(gorduraTd);
    pacientesTr.appendChild(imcTd);

    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacientesTr);

    atualizaDadosImc();

}

function trocaVirgulaPorPonto(dado){
    if(dado.indexOf(',') != -1){
        dado = parseFloat(dado.replace(',', '.'));
        return dado;
    }
    else{
        return dado;
    }
}
function obterFormularioPacientes(form){
    var pacienteObj = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: 0
    }
    return pacienteObj;
} 
function validaDadosForm(obj){
    var erros = [];

    if(obj.nome == ""){
        erros.push("Nome inválido.");
    }
    if(obj.altura<=0 || obj.altura>=10 || obj.altura == ""){
        erros.push("Altura inválida.");
    }
    if(obj.peso<=0 || obj.peso>= 1000 || obj.peso == ""){
        erros.push("Peso inválido.");
    }
    if(obj.gordura<0 || obj.gordura == ""){
        erros.push("Gordura inválida.");
    }
    return erros;
}
function adicionaErros(erro){
    var ul = document.querySelector(".lista-de-erros");
    ul.innerHTML = "";
    erro.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}