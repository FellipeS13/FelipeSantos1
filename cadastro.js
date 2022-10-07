let cadastro = [];

function salvar() {
  let nome = document.getElementById("nme").value;
  let usuario = document.getElementById("usu").value;
  let senha = document.getElementById("pass").value;
  let confSenha = document.getElementById("pass2").value;

  let cadastrar = {
    dado1: nome,
    dado2: usuario,
    dado3: senha,
    dado4: confSenha,
  };
  cadastro.push(cadastrar);
}
console.log(cadastro)