//Diccionario de links
var diccio = {"poo": "vacio", "frontend": "https://chat.whatsapp.com/L54SacKL28tD2y9yL02Vai", "dbd": "https://chat.whatsapp.com/CHA2q3lk4HQ5oXFvZDwpb2", "algoritmia": "vacio", "offimatica": "https://chat.whatsapp.com/Ko9Eou7UGDcLVaSetJ8Xe5", "matematica": "vacio", "ingles": "https://chat.whatsapp.com/IKHGU9XUdpoBNYmeIM1Pqk", "comunicacion": "vacio", "LenguajeC_Guarani": "https://chat.whatsapp.com/DXihAxihKgDBGXufJnUojT"};

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
    alert("copiado");
    return;
}

