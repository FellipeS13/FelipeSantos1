let reclamacao = [];

function salvar() {
  let email = document.getElementById("floatingInput").value;
  let nome = document.getElementById("floatingPassword").value;
  let reclama = document.getElementById("floatingTextarea").value;
  

  let insatisfacao = {
    dado1: email,
    dado2: nome,
    dado3: reclama
  };
  reclamacao.push(insatisfacao);
}
console.log(reclamacao)