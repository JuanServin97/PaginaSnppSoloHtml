<?php
  $ubicaURL="index";
  include "sections/head.php";
?>


<!--Cotenido-->

<section class="card text-center bg-blu-black">

  <!--Inicio Aviso-->
  <div class="card m-3 bg-blu">
    <div class="row">
      <div class="col-sm-1">
        <img src="imagenes/tools/Info_Aviso.png" class="img-fluid m-1" alt="Aviso">
      </div> 
      <div class="col-sm-11">
        <div class="card-body">
          <h4>
            <div class="card-title">
              Aviso.
            </div>
          </h4>
          <div class="card-text">
            Para Justificar Ausencias: Comunicarse a través de <b id="Faviso"><a href="mailto:tecnicosuperiorsanlo@gmail.com?Subject=Justificativo%20de%20Ausencia">tecnicosuperiorsanlo@gmail.com</a></b>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Fin Aviso-->

  <!--Grupos de Whatsapp-->

  <div class="card m-3 p-3 bg-blu">
    <h2>Grupos de WhatsApp</h2>
    <button type="button" onclick="enlaces('PDR')" class="btn blue-motion m-1">Pro II - Diseño - Redes</button>
  </div>
  
  <!--Classroom-->
  <div class="card m-3 p-3 bg-blu">
    <h2>Classroom's</h2>
    <button type="button" title="l7t6m3t" id="classProyecto2" onclick="copiar('classProyecto2')" class="btn blue-motion m-1">Proyecto II</button>
    <button type="button" title="x3quyme" id="classDisenho" onclick="copiar('classDisenho')" class="btn blue-motion m-1">Diseño Gráfico</button>
  </div>

</section>

<?php
    include "sections/end.php";
?>