import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { useFormik } from "formik"
import { Link } from "react-router-dom"
import * as Yup from "yup"

export const FormLogin =()=>{

    const formik = useFormik({
        initialValues:{
            user: "",
            pass: ""
        },
        validationSchema: Yup.object({
            user: Yup.string().required("Campo obligatorio"),
            pass: Yup.string().required("Campo obligatorio")
        })
    })

    return (
        <form>
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
            <label class="link"><Link>¿Olvidaste la contraseña?</Link></label>
            <button type="submit">Entrar</button>
        </form>
    )
}