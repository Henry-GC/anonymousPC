import React from "react";
import { FormLogin } from "./FormLogin";

function Login(){
    return (
        <div>
            <img id="logo" src="logo.png" alt="Logo AnonymousPC" width="200vw"/>
            <div class="datos">
                <h1>Ingresar</h1>
                <FormLogin/>
            </div>
        </div>
    )
}
export default Login