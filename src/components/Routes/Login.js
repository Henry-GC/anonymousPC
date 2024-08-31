import React, { useContext, useState } from "react";
import FormLogin from "../FormLogin";
import { Box } from "@chakra-ui/react";
import { Link, Route, Routes} from "react-router-dom";
import FormRegister from "../FormRegister";
import FormRecovery from "../FormRecovery";
import Footer from "../Footer"
import "../Assets/Styles/Login.css"
import { ThemeContext } from "../Context/ThemeContext";

function Login() {

    const {theme} = useContext(ThemeContext)
    const [recovery, setRecovery] = useState(false);

    return (
        <>
            <Box
                className="login-section-container"
                minH='90vh'
                bg={theme.backgroundColor}
            >
                <Box
                    className="login-inside-container"
                    bg={theme.secondaryBackground}
                >
                    <img src="/multimedia/Logo.png" alt="Logo AnonymousPC" width="200vw"/>
                    <Box className="login-data-container">
                        <Box className="login-data-title">
                            <h2>
                                <Link id="log-link" to="/login/" onClick={()=>setRecovery(false)}>
                                    Ingresar
                                </Link>
                            </h2>
                            <h2>/</h2>
                            <h2>
                                <Link id="log-link" to="/login/register" onClick={()=>setRecovery(true)}>
                                    Registrar
                                </Link>
                            </h2>
                        </Box>
                        
                        <Routes>
                            <Route path="/" element={<FormLogin/>}/>
                            <Route path="/register" element={<FormRegister/>}/>
                            <Route path="/recovery" element={<FormRecovery/>}/>
                        </Routes>
                        {!recovery?(<Link id="log-link" to="/login/recovery" onClick={()=>setRecovery(true)}>¿Olvidaste tu contraseña?</Link>):(<></>)}
                    </Box>
                </Box>
            </Box>
            <Footer/>
        </>
    );
}

export default Login;