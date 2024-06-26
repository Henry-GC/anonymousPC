// FormRegister.js
import React from "react";

function FormRegister() {
    return (
        <form>
            {/* Tu formulario de registro aquí */}
            <label>Usuario:</label>
            <input type="text" name="username" />
            <label>Contraseña:</label>
            <input type="password" name="password" />
            <button type="submit">Registrar</button>
        </form>
    );
}

export default FormRegister;