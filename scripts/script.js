//Diccionario de links
var diccio = {"frontend": "https://chat.whatsapp.com/L54SacKL28tD2y9yL02Vai", "offimatica": "https://chat.whatsapp.com/Ko9Eou7UGDcLVaSetJ8Xe5", "ingles": "https://chat.whatsapp.com/IKHGU9XUdpoBNYmeIM1Pqk", "LenguajeC_Guarani": "https://chat.whatsapp.com/DXihAxihKgDBGXufJnUojT", "ArqPcSo": "https://chat.whatsapp.com/KuMn812LoGsFOVwe6kBZLm", "PBD": "https://chat.whatsapp.com/KNhx4nrpL6s09tUDwpjrOP"};

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

