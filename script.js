window.onload = function() {

  document.forms.formCadastro.onsubmit = validaForm;

  const reseta = document.getElementById("limpar");
  reseta.addEventListener("click", limpa);

  const enviar = document.getElementById("enviar");
  enviar.addEventListener("click", limpa);

}

function limpa() {
  document.location.reload(true);
}
function block() {
  const nome = document.querySelector("#nome").disabled = true;

  const email = document.querySelector("#email").disabled = true;

  const telefone = document.querySelector("#telefone").disabled = true;

  const radio = document.querySelectorAll('input[name="radio-pergunta"]');
  for (let i = 0; i < radio.length; i++) {
    radio[i].disabled = true;
  }

  const nodeCheckBox = document.getElementsByName("checkBoxSites");
  for (let i = 0; i < nodeCheckBox.length; i++) {
    nodeCheckBox[i].disabled = true;
  }

}


function validaForm(e) {
  let form = e.target;
  let formValido = true;
  e.preventDefault();

  const nodeCheckBox = document.getElementsByName("checkBoxSites");
  const radio = document.getElementsByName("radio-pergunta");
  const spans = document.querySelectorAll(".span");



  if (validaCheckBox(nodeCheckBox) == false) {
    for (let i = 0; i < nodeCheckBox.length; i++) {
      nodeCheckBox[i].style.outline = "1.8px solid red";
    }
    formValido = false;
    spans[4].textContent = "Selecione pelo menos um";

  }

  function validaCheckBox(nodeCheckBox) {
    let verifica = false;

    for (let i = 0; i < nodeCheckBox.length - 1; i++) {
      if (nodeCheckBox[i].checked) {
        verifica = true;
      }
    }

    if (nodeCheckBox[4].checked && verifica == true) {
      return false;
    }
    if (nodeCheckBox[4].checked && verifica == false) {
      return true;
    }

    return verifica;

  }

  function validaRadio(radio) {
    for (let check of radio) {
      if (check.checked) {
        return true;
      }
    }
    return false;
  }

  if (validaRadio(radio) == false) {
    for (let i = 0; i < radio.length; i++) {
      radio[i].style.outline = "1.8px solid red";
    }
    formValido = false;
    spans[3].textContent = "Escolha uma opção";
  }

  if (validaNome(form.nome.value) == false) {

    form.nome.style.border = "3px solid red";
    formValido = false;
    spans[0].textContent = "Digite NOME e SOBRENOME";
  }

  if (form.email.value == "") {

    form.email.style.border = "3px solid red";
    formValido = false;
    spans[1].textContent = "Digite um email";
  }

  function validaNome(nome) {
    var valida = /[A-z-áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ][ ][A-z-áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/;
    return valida.test(nome);
  }

  if (validaTelefone(form.telefone.value) == false) {
    telefone.style.border = "3px solid red";
    formValido = false;
    spans[2].textContent = "Digite com - e () Ex:(31)3534-2323";
  }

  function validaTelefone(phone) {
    var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
    return regex.test(phone);
  }


  function exibeResposta() {
    document.querySelector("#resposta-user").style.display = "block";
    const respostas = document.querySelectorAll("#resposta-user > p");

    respostas[0].textContent = form.nome.value;
    respostas[1].textContent = form.email.value;
    respostas[2].textContent =
      form.telefone.value;
    respostas[3].textContent = document.querySelector('input[name="radio-pergunta"]:checked').value;

    const respCheckBox = document.querySelectorAll(".respCheckBox > p");
    var j = 0;
    for (let i = 0; i < nodeCheckBox.length; i++) {
      if (nodeCheckBox[i].checked) {
        respCheckBox[j].textContent = nodeCheckBox[i].value;
        j++;
      }
    }
  }



  if (!formValido) {
    e.preventDefault();
  } else {
    e.preventDefault();
    block();
    exibeResposta();


  }
  const alterar = document.getElementById("alterar");
  alterar.addEventListener("click", free);
  function free() {

    const nome = document.querySelector("#nome");
    nome.ariaDisabled = false;

    const email = document.querySelector("#email").disabled = false;

    const telefone = document.querySelector("#telefone").disabled = false;

    const radio = document.querySelectorAll('input[name="radio-pergunta"]');
    for (let i = 0; i < radio.length; i++) {
      radio[i].disabled = false;
    }

    const nodeCheckBox = document.getElementsByName("checkBoxSites");
    for (let i = 0; i < nodeCheckBox.length; i++) {
      nodeCheckBox[i].disabled = false;
    }

  }


}