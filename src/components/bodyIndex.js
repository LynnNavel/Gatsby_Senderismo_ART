import React from "react";

import salto from "../images/Salto_cabrero6.jpg";
import pinsapar from "../images/pinsapar.jpeg"

export default (props) => (

    <div class="padre_body_index">

        <div class="apartado">
            <img alt="Vistas del pinar de Pinasapar" src={pinsapar}/>
            <div class="datos_ruta">
            <p class="nombre_ruta">El Pinsapar</p>
            <p lang="es">Este sendero nos sumerge en el bosque de pinsapos, abeto singular que propició la
            declaración de estas sierras como Reserva de la Biosfera y Parque Natural. ¿Por qué tiene tanta importancia este abeto? Suba al pinsapar y véalo...</p>
            <p lang="en">This trail immerses us in the fir forest, a singular fir that led to the declaration of
            these mountains as a Biosphere Reserve and Natural Park. Why is this fir tree? Go up to the pinsapar and see it ...</p>
            </div>
        </div>

        <div class="apartado">
        <img alt="Vistas del desfiladero de Cabrero" src={salto}/>
        <div class="datos_ruta">
            <p class="nombre_ruta">Salto del cabrero</p>
            <p lang="es">Desde el Puerto del Boyar, llamará nuestra atención este desfiladero con cotas cercanas a
            los mil metros, que iremos viendo cada vez más cerca a medida que recorramos este sendero.</p>
            <p lang="en">Desde el Puerto del Boyar, llamará nuestra atención este desfiladero con cotas cercanas a
            los mil metros, que iremos viendo cada vez más cerca a medida que recorramos este sendero.</p>
        </div>
        </div>

    </div>

);