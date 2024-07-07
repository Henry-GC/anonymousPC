// FormRegister.js
import { Box, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { useFormik } from "formik"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import React from "react"
import Axios from "../utils/axiosConfig"

function FormRegister({className}) {

    const formik = useFormik({
        initialValues:{
            email:"",
            user: "",
            pass: "",
            pass2: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Campo obligatorio"),
            user: Yup.string().required("Campo obligatorio"),
            pass: Yup.string().required("Campo obligatorio"),
            pass2: Yup.string().required("Campo obligatorio")
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
        <form onSubmit={handleSubmit} className={className}>
            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
                <Input
                    id="email"
                    name="email"
                    {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.user && formik.errors.user}>
                <FormLabel htmlFor="user">Usuario</FormLabel>
                <Input
                    id="user"
                    name="user"
                    {...formik.getFieldProps("user")}
                />
                <FormErrorMessage>{formik.errors.user}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.pass && formik.errors.pass}>
                <FormLabel htmlFor="pass">Contraseña</FormLabel>
                <Input
                    id="pass"
                    name="pass"
                    type="password"
                    {...formik.getFieldProps("pass")}
                />
                <FormErrorMessage>{formik.errors.pass}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.pass2 && formik.errors.pass2}>
                <FormLabel htmlFor="pass2">Contraseña</FormLabel>
                <Input
                    id="pass2"
                    name="pass2"
                    type="password"
                    {...formik.getFieldProps("pass2")}
                />
                <FormErrorMessage>{formik.errors.pass2}</FormErrorMessage>
            </FormControl>
            <button type="submit">Registrar</button>
        </form>
    );
}

export default FormRegister;