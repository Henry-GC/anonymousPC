import { useState, useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

function useProfileForm (user) {
    const [initialValues,setInitialValues] = useState(null)

    useEffect(() => {
        if (user) {
            setInitialValues({
                name: user.data || "HENRY CLEMENTE",
                lastname: user.data || "GONZALEZ CEVALLOS",
                nickname: user.data || "SirDoras",
                birthdate: user.data || "1996-02-12",
                phone: user.data || "+593 962722446"
            })
        }
    },[user])

    const formik = useFormik({
        initialValues: initialValues || { 
            name: "",
            lastname: "",
            nickname: "",
            birthdate: "",
            phone: ""
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            name: Yup.string().required("Solo se permiten letras"),
            lastname: Yup.string().required("CAMPO OBLIGATORIO"),
            nickname: Yup.string().required("CAMPO OBLIGATORIO"),
            birthdate: Yup.date(),
            phone: Yup.number().required("CAMPO OBLIGATORIO")
        }),
        onSubmit: values => {
            console.log(values);
        }
    })

    return {initialValues,formik}
}

export default useProfileForm;