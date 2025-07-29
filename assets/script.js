let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let mensagem = document.querySelector("#mensagem");
let nomeOK = false;
let emailOK = false;
let mensagemOK = false;
let mapa = document.querySelector("#iframe-mapa");

function validaNome() {
  let txtNome = document.querySelector("#txtNome");

  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome inválido";
    txtNome.style.color = "red";
    nomeOK = false;
  } else {
    txtNome.innerHTML = "Nome válido";
    txtNome.style.color = "orange";
    nomeOK = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
    emailOK = false;
  } else {
    txtEmail.innerHTML = "E-mail válido";
    txtEmail.style.color = "orange";
    emailOK = true;
  }
}

function validaMensagem() {
  let txtMensagem = document.querySelector("#txtMensagem");

  if (mensagem.value.trim().length === 0 || mensagem.value.length > 300) {
    txtMensagem.innerHTML = "Digite entre 1 e 300 caracteres";
    txtMensagem.style.color = "red";
    txtMensagem.style.display = "block";
    mensagemOK = false;
  } else {
    txtMensagem.style.display = "none";
    mensagemOK = true;
  }
}

function enviar() {
  if (nomeOK == true && emailOK == true && mensagemOK == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha o formulário corretamente antes de enviar...");
  }
}

function mapaZoom() {
  mapa.style.transform = "scale(1.3)";
}

function mapaNormal() {
  mapa.style.transform = "scale(1)";
}
