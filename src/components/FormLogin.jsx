export const FormLogin =()=>{
    return (
        <form>
            <img id="logo" src="logo.png" alt="Logo AnonymousPC" width="200vw"/>
            <div class="datos">
                <h1>Ingresar</h1>
                <div class="datos-input">
                    <div class="label-user">
                        <div class="loguito">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="input">
                            <input type="text" placeholder="Usuario" id="user"/>
                        </div>
                    </div>
                    <div class="label-key">
                        <div class="loguito">
                            <i class="fa-solid fa-key"></i>
                        </div>
                        <div class="input">
                            <input type="password" placeholder="Contraseña" id="key"/>
                        </div>
                    </div>
                </div>
                <div class="link">¿Olvidaste la contraseña?</div>
                <button id="login">Login</button>
            </div>
        </form>
    )
}