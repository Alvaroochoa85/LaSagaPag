
function validacion(){
    var nombre, direccion, telefono, email, calendario, expresion;
    nombre = document.getElementById('nombre').value;
    direccion = document.getElementById('direccion').value;
    telefono = document.getElementById('telefono').value;
    email = document.getElementById('email').value;
    calendario = document.getElementById('fecha').value;
    
    expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    
    if(nombre === "" || direccion === "" || telefono === "" || email === "" || calendario === ""){
        alert("todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length > 50){
        alert("Nombre muy largo");
        return false;
    }
    else if(direccion.length > 20){
        alert("la direccion no existe");
        return false;
    }
    else if(telefono.length > 10){
        alert("telefono muy largo");
        return false;
    }
    
    else if(email.length > 100){
        alert("El correo es mu largo");
        return false;
    }
    else if(!expresion.test(email)){
        alert("El correo es incorrecto");
        return false;

    }
    else if(isNaN(telefono)){
        alert("El telefono ingresado no es un numero");
        return false;
    }
   





}