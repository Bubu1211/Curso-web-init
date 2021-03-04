var usuarios = new Array();
var cantidadUsuarios = 0;

///agrega un nuevo usuario
function agregarUsuario(entrada){
    let usuario = entrada.value.trim();
    usuarios[cantidadUsuarios++] = usuario;
    entrada.value = "";
    entrada.focus();
    imprimir();
}

///busca un usuario en el arreglo
function buscar(busqueda){
    limpiar("resultado");
    
    var encontrado = -1;
    for(i = 0; i<cantidadUsuarios; i++)
        if(busqueda.value.trim() == usuarios[i])
            encontrado = i;
            
    if(encontrado == -1)
        document.getElementById("resultado").innerHTML = "El usuario no está registrado";
    else
        document.getElementById("resultado").innerHTML = "El usuario está en el índice: "+encontrado;

        busqueda.value="";
    busqueda.focus();
}

///limpia 
function limpiar(campo){
    document.getElementById(campo).innerHTML = "";
}

///imprime e. arreglo en el div deseado
function imprimir(){
    limpiar("lista");
    for(i = 0 ; i<cantidadUsuarios; i++){
        document.getElementById("lista").innerHTML += i + "-" + usuarios[i]+ "<br/>";
    }
}