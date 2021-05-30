import * as React from "react";
import { ExternalLink } from 'react-external-link';
import info from "../pages/informacion.js"


export default (props) => (

    <footer class=" footer text-center text-lg-start">
        <nav lang="es">
            <ExternalLink href="https://www.privacypolicies.com/live/a0544f29-fe33-4011-aaf6-c3c42d17bec6"><span>Terminos de Uso y Privacidad</span></ExternalLink>| 
            <ExternalLink href="https://www.privacypolicies.com/live/9d700e37-a66c-45e2-bd28-370b4a8cd014"><span>Política de cookies</span></ExternalLink> | 
            <a href={info} title="Otra información de utilidad para aquellos que quieran iniciarse en el senderismo">Información</a>
        </nav>
        <nav lang="en">
        <ExternalLink href="https://www.privacypolicies.com/live/a0544f29-fe33-4011-aaf6-c3c42d17bec6"><span>Terms of Use and Privacity</span></ExternalLink>| 
            <ExternalLink href="https://www.privacypolicies.com/live/9d700e37-a66c-45e2-bd28-370b4a8cd014"><span>Cookies temrs</span></ExternalLink> | 
            <a href={info} title="more info"/> Information
        </nav>
    </footer>

);