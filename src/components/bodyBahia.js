import React from "react";

import bahia1 from "../images/Ruta_la_bahia.jpg";
import bahia2 from "../images/senderismo_la_bahia.jpg";
import bahia3 from "../images/senderismo_la_bahia_3.jpg";

export default (props) => (

    <div class="padre_body_bahia">

        <div class="apartado">
            <img alt="Vistas del pinar de la bahia" src={bahia1}/>
            <div class="datos_ruta">
                <p class="nombre_ruta">Senderos con rocas y árboles</p>
                <p lang="es">El Parque Natural de la Bahía de Cádiz se encuentra en el centro de la costa atlántica de
                    la provincia de Cádiz. La intrusión del mar y la desembocadura de los ríos Guadalete y San Pedro,
                    más el clima mediterráneo suave, determinan las características ecológicas y su gran diversidad
                    paisajística, entre las que encontramos, playas, dunas, lagunas, marismas y esteros.</p>
                <p lang="en">The Bahía de Cádiz Natural Park is located in the center of the Atlantic coast of the
                    province of Cádiz. The intrusion of the sea and the mouth of the Guadalete and San Pedro rivers,
                    plus the mild Mediterranean climate, determine the ecological characteristics and its great
                    landscape diversity, among which we find beaches, dunes, lagoons, marshes and estuaries.</p>
            </div>
        </div>

<div class="apartado">
        <img alt="Las asombrosas vistas desde puntos elevados" src={bahia2}/>
        <div class="datos_ruta">
            <p class="nombre_ruta">Vistas panorámicas de la bahía</p>
            <p lang="es">Una de las mejores formas de conocer este magnífico espacio natural es recorriendo sus
                senderos. Ya sea a pié o en bicicleta, estas rutas permiten ver el parque en toda su extensión, lo que
                nos acercará a la fauna y flora existente, edificaciones como los molinos de mareas, salinas y a
                maravillosos paisajes a 10 minutos del centro de la ciudad. Estos senderos son ideales para los
                deportistas y amantes de la naturaleza, pudiéndose acceder a zonas de una gran belleza y valor.</p>
            <p lang="en">One of the best ways to get to know this magnificent natural space is by walking its trails.
                Either on foot or by bicycle, these routes allow us to see the park in its entirety, which will bring us
                closer to the existing fauna and flora, buildings such as tide mills, salt flats and wonderful
                landscapes 10 minutes from the city center. These trails are ideal for athletes and nature lovers, being
                able to access areas of great beauty and value.</p>
        </div>
    </div>

    <div class="apartado">
        <img alt="Humedad y naturaleza en la había" src={bahia3}/>
        <div class="datos_ruta">
            <p class="nombre_ruta">Humedad y naturaleza en la había</p>
            <p lang="es">La ruta discurre por un bosque de pinsapos en un camino densamente poblado de vegetación
                mediterránea que cobija una gran variedad de fauna. Al fondo se puede observar la Sierra del Pinar,
                donde destaca la silueta de El Torreón, y aún más arriba, el vuelo impecable de los buitres.</p>
            <p lang="en">The route runs through a fir forest on a path densely populated with Mediterranean vegetation
                that shelters a great variety of fauna. In the background you can see the Sierra del Pinar, where the
                silhouette of El Torreón stands out, and even higher up, the impeccable flight of the vultures.</p>
        </div>
    </div>
 </div>

);