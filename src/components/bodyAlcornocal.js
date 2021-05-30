/*componentes*/
import * as React from "react";
import alcornocales1 from "../images/senderismo_en_alcornocales.jpg";
import alcornocales2 from "../images/senderismo_en_alcornocales_2.jpg";
import alcornocales3 from "../images/senderismo_en_alcornocales_3.jpg";

export default (props) => (

    <div class="padre_body_alcornocal">

<div>
        <div class="apartado">
            <img alt="Las estructuras enconrtadas en los arcornocales" src={alcornocales1}/>
            <div class="datos_ruta">
                <p class="nombre_ruta">Estructuras de piedra</p>
                <p lang="es">Situado en la provincia de Cádiz y parte de Málaga, se extiende desde la sierra hasta el
                    joven Parque Natural del Estrecho, presentando gran diversidad de relieves y paisajes. Esta riqueza
                    se refleja en todos los ámbitos: flora, fauna, climatología, historia y folklore, constituyendo un
                    lugar ideal para visitar y disfrutar de actividades tan diversas como la recolección de setas y la
                    práctica de deportes en la naturaleza...</p>
                <p lang="en">Located in the province of Cádiz and part of Malaga, it extends from the mountains to the
                    young Natural Park of the Strait, presenting a great diversity of reliefs and landscapes. This
                    wealth is reflected in all areas: flora, fauna, weather, history and folklore, constituting an ideal
                    place to visit and enjoy activities as diverse as mushroom picking and sports in nature....</p>
            </div>
        </div>
    </div>

    <div class="apartado">
        <img alt="Las distintas zonas rocosas" src={alcornocales2}/>
        <div class="datos_ruta">
            <p class="nombre_ruta">Zonas rocosas</p>
            <p lang="es">En un parque tan completo y diverso, caben otras actividades, que van del montañismo en el pico
                del Aljibe o el Picacho; la espeleología en el enclave Ramblazo-Motillas, o el descenso de cañones en La
                Garganta de Buitreras, una de las pocas áreas preparadas para esta práctica de riesgo y que por su
                singularidad ha sido declarada monumento natural. Para los más tradicionales se recomiendan las rutas a
                caballo, como las establecidas en La Almoraima...</p>
            <p lang="en">In such a complete and diverse park, there are other activities, ranging from mountaineering to
                the peak of the Aljibe or the Picacho; speleology in the Ramblazo-Motillas enclave, or the descent of
                canyons in La Garganta de Buitreras, one of the few areas prepared for this risky practice and which due
                to its uniqueness has been declared a natural monument. For the more traditional, the routes on
                horseback are recommended, such as those established in La Almoraima...</p>
        </div>
    </div>

    <div class="apartado">
        <img alt="Senderos naturales y húmedos de los alcornocales" src={alcornocales3}/>
        <div class="datos_ruta">
            <p class="nombre_ruta">Zonas rocosas</p>
            <p lang="es">Suelo, humedad y aprovechamiento tradicional han sido los factores determinantes para mantener
                la mayor masa conservada y productiva de alcornocal de la Península Ibérica, el parque natural Los
                Alcornocales. </p>
            <p lang="en">Soil, humidity and traditional use have been the determining factors to maintain the largest
                conserved and productive mass of cork oak forest in the Iberian Peninsula, the Los Alcornocales natural
                park.</p>
        </div>
    </div>

    </div>

);