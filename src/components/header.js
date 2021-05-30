import React from "react";
import play from "../images/play_alt-512.webp";
import pause from "../images/pause.png";
import down from "../images/down.png";
import up from "../images/up.png";

import sierra from "../pages/sierra.js";
import cadiz from "../pages/index.js";
import janda from "../pages/janda.js";
import bahia from "../pages/bahia.js";
import alcornocales from "../pages/alcornocales.js"


import general from "../styles/estilo.css";
import info from "../styles/informacion.css"

import {Helmet} from "react-helmet";

import devicon from "../images/devicon.png";

import sonidito from "../audio/sound.mp3";


document.body.lang = "es";

const colorinchis =() =>{
    switch (document.getElementById("filtro").value) {
      case "color":
          document.body.style.filter = "none";
          break;
      case "gray":
          document.body.style.filter = "grayscale(100%)";
          break;
      case "prota":
          document.body.style.filter = "hue-rotate(118deg)";
          break;
      case "deut":
          document.body.style.filter = "hue-rotate(100deg)";
          break;
      case "trita":
          document.body.style.filter = "hue-rotate(18deg)";
          break;
      default:
          document.body.style.filter = "none";
          break;
  }
   }
  
   const idioma = () => {
    document.body.setAttribute('lang', document.getElementById("selector_idioma").value);
  }

  const playAudio = () => {
    document.getElementById('player').play();
  }

  const stopAudio = () => {
    document.getElementById('player').pause();
  }

  const volumenUp = () => {
    document.getElementById('player').volume+=0.1
  }

  const volumenDown = () => {
    document.getElementById('player').volume-=0.1;
  }

export default (props) => (

    <div class="header">

        <Helmet>
        <title>Cádiz - Senderismo en la naturaleza</title>
        <meta charset="UTF-8"/>
        <meta name="description" content="Rutas senderiasmos"/>
        <meta name="keywords" content="routes, rutas, senderismo"/>
        <link rel="shortcut icon" href={devicon} />
        <link rel="stylesheet" href={general}/>
        <link rel="stylesheet" href={info}/>
        {/* bootstrap */}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
        </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
        </script>
        {/* popper */}
        <script src="https://unpkg.com/react-popper/dist/index.umd.js"></script>
        </Helmet>

        <div class=" cabecera page-header text-center">

        <select class="idioma btn" id="selector_idioma" onChange={idioma}>
            <option  selected value="es">Español</option>
            <option  value="en">English</option>
        </select>

        <select class="filtro btn" id="filtro" onChange={colorinchis}>
            <option  value="color">Color</option>
            <option  value="gray">B/N</option>
            <option  value="prota">Protanopia</option>
            <option  value="deut">Deutanopia</option>
            <option  value="trita">Tritanoptia</option>
        </select>

        <h2>Placeholder</h2>
        <h4 lang="es">Los mejores destinos de senderismo cuando no sabes dónde ir</h4>
        <h4 lang="en">The best places to go trekking when you doesn't know where to go</h4>

        <div class="reproductor" id="reproductor">
            <audio id="player" loop>
                <source src={sonidito} type="audio/mp3" />
            </audio>
            <img src={play} alt="Reproducir"
                onClick={playAudio}/>
            <img src={pause} alt="Pausar"
                onClick={stopAudio}/>
            <img src={down}
                alt="Bajar volumen" onClick={volumenDown}/>
            <img src={up}
                alt="Subir volumen" onClick={volumenUp}/>
        </div> 
        </div>

        <div class="position-sticky ruta_dropdown">

        <div lang="es" class="dropdown">
            <a class="dropbutton btn btn-primary nav-link dropdown-toggle" data-toggle="dropdown">Rutas</a>
            <div class="dropdown-menu">
                <a class="dropdown-item text-center" href={sierra}
                title="Información rutas por la Sierra">Rutas de la Sierra</a>
                <a class="dropdown-item text-center" href={cadiz} title="Información rutas de Cádiz">Rutas de
                Cádiz</a>
                <a class="dropdown-item text-center" href={janda}
                stitle="Información rutas de La Janda">Rutas de La Janda</a>
                <a class="dropdown-item text-center" href={bahia}
                title="Información rutas de la Bahía">Rutas de la Bahía</a>
                <a class="dropdown-item text-center" href={alcornocales}
                title="Información rutas de los alcornocales">Rutas de los Alcornocales</a>
            </div>
        </div>

        <div lang="en" class="dropdown">
            <a class="dropbutton btn btn-primary nav-link dropdown-toggle" data-toggle="dropdown">Routes</a>
            <div class="dropdown-menu">
                <a class="dropdown-item text-center" href={sierra}
                title="Info about routes in Sierra">Routes in Sierra</a>
                <a class="dropdown-item text-center" href={cadiz} title="Info about routes in Cádiz">Routes in Cádiz</a>
                <a class="dropdown-item text-center" href={janda} title="Info about routes in Janda">Routes in La Janda</a>
                <a class="dropdown-item text-center" href={bahia} title="Info about routes in Bahía">Routes in la Bahía</a>
                <a class="dropdown-item text-center" href={alcornocales} title="Info about routes in alcornocales">Routes in los Alcornocales</a>
            </div> 
        </div>
        </div>

</div>
);