//Diccionario de links
var diccio = {"PDR": "https://chat.whatsapp.com/DETUrqVaJyw9wVVXItwDR2", "LL":"https://chat.whatsapp.com/GV2sMWZe2pdBsM99OjRbbx"};

var imgItems = {"horario": "imagenes/Horario_De_Clases_S4.png"};

// Modal
var modal = document.getElementById("vistaGrande");

var modalTitle = document.getElementById('modalTitle');

// Botón de cerrar modal
var cerrar = document.getElementById("cerrarVG");

// Imagen del modal
var imagenModal = document.getElementById("imagenModal");

// Si el usuario hace clic en la x, la ventana se cierra
cerrar.addEventListener("click",function() {
    modal.style.display = "none";
});

//abrir enlaces de whatsapp
function enlaces(clave) {
    if (diccio[clave] == undefined) { //si la clave del diccionario dice vacía, entonces avisa que el enlace no está disponible
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

//modal de documentos

function verGrande(clave) {
        if (imgItems[clave] == undefined) { //si la clave del diccionario dice vacía, entonces avisa que el enlace no está disponible
        alert("Este enlace no está disponible");
        return;
    }
    // Abre el modal
    const ruta = imgItems[clave];
    modal.style.display = "block";
    imagenModal.src = ruta;
    modalTitle.innerHTML = clave.toUpperCase();
    return;
}

