///agregar local storage 
$(document).ready(function () { ///asgina una función al método ready
    $("#lista").blur(function(){
        ///guarda informacion en el objeto localstorage, usando una variable creada listado
        localStorage.setItem("listado",$("#lista").html());
        location.reload(); ///refresca la lista
    });
    
    if(localStorage.getItem("listado")){
        $("#mensaje").html("<h3> Datos almacenados: </h3>");
        $("#lista").html(localStorage.getItem("listado"));
        $("#resultado").text(localStorage.getItem("listado"));
    }else{
        $("#mensaje").text("No hay información que mostrar en Local storage");
    }
    
    ///boton limpiar
    $("#limpiar").click(function(){
        localStorage.removeItem("listado"); 
        location.reload();
    });
    
    
    window.addEventListener("storage", escucharEvento, false);
    
    function escucharEvento(e){
        alert("Evento generado: "+e.storageArea.listado);
        location.reload();
    }
    
});