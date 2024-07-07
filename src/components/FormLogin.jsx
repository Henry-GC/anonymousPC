import { Box, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { useFormik } from "formik"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import React from "react"
import Axios from "../utils/axiosConfig"

const FormLogin =(props)=>{

    const formik = useFormik({
        initialValues:{
            user: "",
            pass: ""
        },
        validationSchema: Yup.object({
            user: Yup.string().required("Campo obligatorio"),
            pass: Yup.string().required("Campo obligatorio")
        }),
        onSubmit: async values => {
            console.log("Form values:", values);
            // Aquí puedes añadir la lógica para manejar el envío del formulario, por ejemplo, hacer una solicitud a la API
            const response = await Axios.post('/api/login/',values)
            console.log(response);
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        formik.handleSubmit();
    }

    return (
        <form onSubmit={handleSubmit} className={props.classForm}>
            <FormControl isInvalid={formik.touched.user && formik.errors.user} className={props.classControl}>
                <FormLabel htmlFor="user" className={props.classLabel}>Usuario</FormLabel>
                <Input
                    id="user"
                    name="user"
                    className={props.classInput}
                    {...formik.getFieldProps("user")}
                />
                <FormErrorMessage className={props.classError}>{formik.errors.user}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.pass && formik.errors.pass} className={props.classControl}>
                <FormLabel htmlFor="pass" className={props.classLabel}>Contraseña</FormLabel>
                <Input
                    id="pass"
                    name="pass"
                    type="password"
                    className={props.classInput}
                    {...formik.getFieldProps("pass")}
                />
                <FormErrorMessage className={props.classError}>{formik.errors.pass}</FormErrorMessage>
            </FormControl>
            <Box><Link id="reset">¿Olvidaste la contraseña?</Link></Box>
            <button type="submit" className={props.classButton}>Entrar</button>
        </form>
    )
}

export default FormLogin;