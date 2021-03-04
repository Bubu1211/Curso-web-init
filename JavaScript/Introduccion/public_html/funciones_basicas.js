
window.onload = iniciaDatos; //manda a llamar a la fubncion

function iniciaDatos(){
    document.getElementById("link").onclick = validarSalir;  
    document.getElementById("linkSearch").onclick = busqueda;
}

function validarSalir(){
    if(confirm("Desea salir del sitio?")){
        alert("Nos vamos a google");
        return true; ///continua con el flujo de la página 
    }else{
        alert("Nos quedamos");
        return false; ///para el flujo y se queda en la página
    }
}

function busqueda(){
    var respuesta = prompt("Escribe la palabra a buscar");
    if(respuesta){
        var nuevoLink = this + "search?q=" + respuesta;
        window.location = nuevoLink;
        return false;
    }else{
        alert("no proporcionaste ningun valor");
        return false;
    }
}
