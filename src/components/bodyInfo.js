import React from "react";

import rio from "../images/rio_borrosa.jpg";
import cachorro from "../images/Puente_colgante_de_los_cachorros.jpg";
import colada from "../images/Colada_de_la_costa.jpg";

import video_feo from "../video/consejos.mp4"

export default (props) => (

    <div class="padre_body_info">

        <div class="apartado">

        <div class="apartado_video">

            <video class="video-fluid z-depth-1" autoplay loop controls muted>
                <source src={video_feo} type="video/mp4" />
            </video>

        </div>

        </div>

        <div class="apartado">

        <div id="carouselExampleFade" class=" apartado_galeria carousel slide carousel-fade">

            <div class="carrusel_rutas carousel-inner">
                <div class="carousel-item active" data-interval="false">
                    <img src={colada} class="img_galeria d-block" alt="Colada de la Costa"/>
                </div>
                <div class="carousel-item" data-interval="false">
                    <img src={cachorro} class="img_galeria d-block"
                        alt="Puente de los Cachorros"/>
                </div>
                <div class="carousel-item" data-interval="false">
                    <img src={rio} class="img_galeria d-block" alt="Río Borrosa"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span style="background-color: black;" class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span style="background-color: black;" class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>

        </div>

            </div>
    </div>

);