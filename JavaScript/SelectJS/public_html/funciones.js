
window.onload = configuraSelect;

function configuraSelect(){
    document.getElementById("selectFaq").selectedIndex = 0;  ///eleemento seleccionado por default
    document.getElementById("selectFaq").onchange = cambioPagina;
}

function cambioPagina(){
    var elementoSelect = document.getElementById("selectFaq");
    ///retoma el array de opciones en el indice donde este seleccionado y toa su valor
    var nuevaPagina = elementoSelect.options[elementoSelect.selectedIndex].value;
    
    if(nuevaPagina != ""){
        window.location = nuevaPagina;
    }
}
