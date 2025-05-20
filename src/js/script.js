var botaoEntrar = document.getElementById("button-submit");

function login() {
    var imputUser = document.getElementById("usuario").value;
    var imputPassword = document.getElementById("senha").value;
    var imputCode = document.getElementById("codigo").value;
    if (imputUser == "admin" && imputPassword == 1234 && imputCode == "tplink2025") {
        window.location.replace("painel.html");
    } else {
        alert ("Usuario, senha ou codigo invalidos!");
    }
}

botaoEntrar.addEventListener("click", login);