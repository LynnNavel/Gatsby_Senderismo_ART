import React from "react";

import janda1 from "../images/Ruta_la_janda.jpg";
import janda2 from "../images/Ruta_la_janda_2.jpg";
import janda3 from "../images/Ruta_la_janda_3.jpg";

export default (props) => (

    <div class="padre_body_janda">

<div class="apartado">
            <img alt="Uno de los muchos preciosas vistas en la ruta" src={janda1}/>
            <div class="datos_ruta">
                <p class="nombre_ruta">Las preciosas vistas costeras</p>
                <p lang="es"> La Janda limita la norte con la Campiña de Jerez, al oeste con la Bahía de Cádiz y el
                    Océano Atlántico, al sur con el Campo de Gibraltar y al este, en un pequeño tramo, con la Serranía
                    de Ronda, en la provincia de Málaga.</p>
                <p lang="en">La Janda limits the north with the Campiña de Jerez, to the west with the Bay of Cádiz and
                    the Atlantic Ocean, to the south with Campo de Gibraltar and to the east, in a small section, with
                    the Serranía de Ronda, in the province of Malaga .</p>
            </div>
        </div>

    <div>
        <div class="apartado">
            <img alt="Muros rocosos" src={janda2}/>
            <div class="datos_ruta">
                <p class="nombre_ruta">Imponentes muros de roca</p>
                <p lang="es">Está formada por Alcalá de los Gazules, Benalup, Medina-Sidonia y Paterna de Rivera. En
                    esta subcomarca las actividades del sector primario tienen mucho más peso, especialmente la
                    ganadería de vacuno retinto. El paisaje predominante es la campiña y tiene presencia la sierra del
                    Aljibe.</p>
                <p lang="en">It is made up of Alcalá de los Gazules, Benalup, Medina-Sidonia and Paterna de Rivera. In
                    this sub-region the activities of the primary sector have much more weight, especially the retinto
                    cattle. The predominant landscape is the countryside and the Sierra del Aljibe is present.</p>
            </div>
        </div>
    </div>

    <div class="apartado">
        <img alt="Las espectaculares vistas del terreno" src={janda3}/>
        <div class="datos_ruta">
            <p class="nombre_ruta">Los distintos miradores de la ruta</p>
            <p lang="es">Lorem ipsum en español. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula,
                ipsum id porta viverra, tortor nibh placerat urna, vel euismod diam leo sed sem. Mauris pretium nisi
                imperdiet magna egestas dictum. Phasellus dignissim nisi ac nulla euismod, non dignissim sapien sodales.
                Nulla consequat ornare lacus, nec posuere nisi posuere ac. </p>
            <p lang="en">Lorem ipsum en ingles. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula,
                ipsum id porta viverra, tortor nibh placerat urna, vel euismod diam leo sed sem. Mauris pretium nisi
                imperdiet magna egestas dictum. Phasellus dignissim nisi ac nulla euismod, non dignissim sapien sodales.
                Nulla consequat ornare lacus, nec posuere nisi posuere ac. </p>
        </div>
    </div>
</div>

);