//Diccionario de links
var diccio = {"LenguajeC_Guarani": "https://chat.whatsapp.com/DXihAxihKgDBGXufJnUojT", "ArqPcSo": "https://chat.whatsapp.com/KuMn812LoGsFOVwe6kBZLm", "PBD": "https://chat.whatsapp.com/KNhx4nrpL6s09tUDwpjrOP", "classArqSO": "https://classroom.google.com/c/MzcxOTE5NzcwNjIw?cjc=cdo4b4v", "classCG": "https://classroom.google.com/c/MzcyNTEwMTkzODIw?hl=es&cjc=nnbh6xt", "classPBD": "https://classroom.google.com/c/MzcxOTE5NzcwNjMx?cjc=zd73llr", "classEstadistica": "https://classroom.google.com/c/Mzc2OTA1MzU1NTg4?cjc=4gbe42e", "classPOO": "https://classroom.google.com/c/Mzc3Nzk4OTU4NzU4?cjc=izfehym", "classReqSoft": "https://classroom.google.com/c/MzE5MzUxMTI4Mjg3?cjc=4ps5cxi"};

//abrir enlaces de whatsapp
function enlaces(clave) {
    if (diccio[clave] == "vacio") { //si la clave del diccionario dice vacía, entonces avisa que el enlace no está disponible
        alert("Este enlace no está disponible");
        return;
    }
    window.open(diccio[clave], '_blank'); //abre el enlace
    return;
}

//copiar codigos de classroom
function copiar(idd){
    //agrego un campo de texto oculto
    var cp = document.createElement("input");
    //asigno el valor que necesito al campo de texto
    cp.setAttribute("value", document.getElementById(idd).title);
    //agrego el campo a la página
    document.body.appendChild(cp);
    //selecciono el contenido
    cp.select();
    //copio el contenido
    document.execCommand("Copy");
    //borro el campo de la página
    document.body.removeChild(cp);
    //mensaje de copiado
    alert("Copiado");
    return;
}

