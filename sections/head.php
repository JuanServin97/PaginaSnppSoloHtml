<!--Identifico el link activo-->
<?php
    if ($GLOBALS['ubicaURL'] == "index"){
        $index = ' active text-info ';
        $documentos = ' text-white ';
    }else{
        $index = ' text-white ';
        $documentos = ' active text-info ';
    }


?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Robert Romero">
        <meta name="robots" content="noindex">
         <link rel="shortcut icon" href="imagenes/icon/favicon-72x72.png" type="image/x-png">
        <title>Programación CTFP-PJ</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="estilos/style.css">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <script src="scripts/script.js"></script>
    </head>
    <body class="bg-blu-black">
        <nav class="navbar navbar-expand-lg navbar-light bg-translucid">
            <div class="container-fluid">

                <a class="navbar-brand user-select-none glitch-efect" href="https://ctfp-pj.netlify.app/index.php">{ TS Programación S4 }</a>

                <button class="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <a class="nav-link <?php echo $index;?>" href="https://ctfp-pj.netlify.app/index.php">Inicio</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link <?php echo $documentos;?>" href="https://ctfp-pj.netlify.app/documentos.php">Documentos</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Descargables
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="documents/Horario_De_Clases_S3.pdf" download="Horario_De_Clases_S3.pdf">Horario de clases S3</a></li>
                                <li><a class="dropdown-item" href="documents/SOLICITUD DE NUEVA FECHA DE EXAMEN.docx" download="SOLICITUD DE NUEVA FECHA DE EXAMEN.docx">Solicitud de nueva fecha de exámen</a></li>
                                <li><a class="dropdown-item" href="documents/TECNICO SUPERIOR EN PROGRAMACIÓN DE APLICACIONES INFORMATICAS (2).pdf" download="TECNICO SUPERIOR EN PROGRAMACIÓN DE APLICACIONES INFORMATICAS (2).pdf">Malla curricular</a></li>
                                <li><a class="dropdown-item" href="documents/flash-on-english-for-mechanics-electronics-and-technical-assistance-dlscrib.com.pdf" download="flash-on-english-for-mechanics-electronics-and-technical-assistance-dlscrib.com.pdf">Libro de Ingles S1</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a class="nav-link text-white" href="https://discord.gg/kTGg9aQZDt" target="_blank">Discord</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <!--Fin del nav menu-->