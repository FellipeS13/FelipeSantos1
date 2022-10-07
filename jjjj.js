
function logar(){
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("pass").value
    if(usuario == "admin" && senha == "1234"){
        location.href = "Index.html"
    }
    else{
        alert("Usuario incorreto")
    }
    
    console.log(usuario)
}