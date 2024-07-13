import React, { useState } from "react";
import FormLogin from "./FormLogin";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "./Assets/Image/Logo.png"
import FormRegister from "./FormRegister";

function Login() {
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            flexGrow="1"
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                bg="#fff"
                padding="2rem"
                borderRadius="1rem"
            >
                <img
                    id="logo"
                    src={Logo}
                    alt="Logo AnonymousPC"
                    width="200vw"
                />
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    className="datos"
                    gap="0.5rem"
                >
                    <Box
                        display="flex"
                        gap="0.5rem"
                    >
                        <h2>
                            <Link
                                id="log-link"
                                to="#"
                                onClick={() => setIsRegistering(false)}
                            >
                                Ingresar
                            </Link>
                        </h2>
                        <h2>/</h2>
                        <h2>
                            <Link
                                id="log-link"
                                to="#"
                                onClick={() => setIsRegistering(true)}
                            >
                                Registrar
                            </Link>
                        </h2>
                    </Box>
                    {isRegistering ? <FormRegister /> : (
                        <>
                            <FormLogin />
                            <Link id="reset">¿Olvidaste la contraseña?</Link>
                        </>
                        )}
                </Box>
            </Box>
        </Box>
    );
}

export default Login;