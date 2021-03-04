
$(document).ready(function(){
    //se recomienda verificar disponibilidad de la API con modernizrt
    $("#archivo").change(manejoArchivos);
    
    function manejoArchivos(evento){
        alert("Has seleccionado: "+evento.target.files[0].name);
    }
    
    ///varios archivos
    
    $("#archivos").change(manejoVariosArchivos);
    
    function manejoVariosArchivos(evento){
        let archivos = evento.target.files;
        
        for(i=0; i< archivos.length; i++){
            var info = "<p>"+ (i+1) + ".- Nombre: "+ archivos[i].name + ", Tamaño: "+ archivos[i].size+
                    ", Tipo MIME: "+archivos[i].type + "</p>";
        }
    }
    
    ///seleccion de archivos con drag and drop
    $("#zona_arrastrar").bind({  ///vincula los eventos con funciones
        "drop": manejoDrop,
        "dragover": manejoDragover
    });
    
    function manejoDragover(evento){
        evento.stopPropagation(); /// evita el comportamiento por default deteniendo su propagacion
        evento.preventDefault();
    }
    
    function manejoDrop(evento){
        evento.stopPropagation(); 
        evento.preventDefault();
        
        //manejo de archivos
        ///jquery envuelve eventos, por tanto lo desenvolvemos
        var dataTransfer = evento.dataTransfer || (evento.originalEvent && evento.originalEvent.dataTransfer);
        //se valida si lso diferentes métodos para obtener los archvios son nulos,
        // si si se pruieban otros metodos
        var archivos = evento.target.files || (dataTransfer && dataTransfer.files); 
        
        $("#salida_dd").html("");
        
        for(i = 0; i < archivos.length; i++){
            var info = "<p>"+ (i+1) + ".- Nombre: "+ archivos[i].name + ", Tamaño: "+ archivos[i].size+
                    ", Tipo MIME: "+archivos[i].type + "</p>";
            $("#salida_dd").append(info);
        }
    }
});