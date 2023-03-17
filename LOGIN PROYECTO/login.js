alert("HOLAAAAAAAAAAAA");


function login(){
    let user, password;

    user = document.getElementById("user").value;
    password = document.getElementById("password").value;

    if (user == "Julio" && password == 1234){
        window.location =  "/Pantalla Principal/index.html";
    }else{
        alert("Usuario o Contrseña Incorrectos");
    }
}