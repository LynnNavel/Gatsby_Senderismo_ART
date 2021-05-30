import React from "react";
import {Helmet} from "react-helmet";

import formulariocss from "../styles/formularios.css"

export default (props) => (

    <div class="padre_body_formulario">

        <Helmet>
        <link rel="stylesheet" href={formulariocss}/>
        </Helmet>

<div class="apartado">
            <form class="form_suscripcion"  onsubmit="alert('Se han registrado los datos')">
                <h3 lang="es">Suscripción</h3>
                <h3 lang="en">Join Us</h3>
                <label lang="es" for="nombre">Nombre</label>
                <label lang="en" for="nombre">Name</label>
                <input type="text" id="nombre" name="nombre" placeholder="Pepe" minlength="1" required />
                <br/>
                <label lang="es" for="apellido">Apellidos</label>
                <label lang="en" for="apellido">Last name</label>
                <input type="text" id="apellido" name="apellido" placeholder="Ramos" minlength="1" required />
                <br/>
                <label lang="es" for="dni">Documento</label>
                <label lang="en" for="dni">ID card</label>
                <input type="text" name="dni" id="dni" placeholder="12345678A" minlength="9" required pattern="^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$"/>
                <br/>
                <label lang="es" for="email">Correo electrónico </label>
                <label lang="en" for="email">Email </label>
                <input type="email" id="email" name="email" pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,4}$"
                placeholder="abc@gmail.com" required /> 
                <br/>
                <label lang="es" for="direccion">Dirección</label>
                <label lang="en" for="direccion">Address</label>
                <input type="text" id="direccion" name="direccion" placeholder="Calle random" minlength="1" required />
                <br/>
                <label lang="es" for="telefono">Teléfono de contacto</label>
                <label lang="en" for="telefono">Phone number</label> 
                <input type="tel" id="telefono" name="telefono" pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                placeholder="123-45-67-89" required />
                <br/>
                <div class="form_botones">
                    <input lang="es" type="submit" value="Enviar"/>
                    <input lang="es" type="reset" value="Borrar todo"/>
                    <input lang="en" type="submit" value="Submit"/>
                    <input lang="en" type="reset" value="Clear form"/>
                </div>
            </form>
        </div>

    </div>

);