//Diccionario de links
var diccio = {"proyecto1": "https://chat.whatsapp.com/DETUrqVaJyw9wVVXItwDR2", "AdminYConta":"https://chat.whatsapp.com/Eqrtz2F3hYkBUEPPp0g1CD"};

//abrir enlaces de whatsapp
function enlaces(clave) {
    if (diccio[clave] == "vacio") { //si la clave del diccionario dice vacía, entonces avisa que el enlace no está disponible
        alert("Este enlace no está disponible");
        return;
    }
    window.open(diccio[clave], '_self'); //abre el enlace
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

