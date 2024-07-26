import cpuImage from "../Assets/Image/cpu-image.png"
import mboImage from "../Assets/Image/mbo-image.png"
import gpuImage from "../Assets/Image/gpu-graphic-card-in-white-or-invisible-background-png.png"
import ramImage from "../Assets/Image/ram-image.png"
import ssdImage from "../Assets/Image/ssd-image.png"
import psuImage from "../Assets/Image/psu-image.png"
import caseImage from "../Assets/Image/case-image.png"
import accImage from "../Assets/Image/acc-image.png"

export default function useFilter (){

    const sections = [
        {
            section: "PROCESADORES",
            image: cpuImage
        },
        {
            section: "PLACA MADRE",
            image: mboImage
        },
        {
            section: "TARJETA GRÁFICA",
            image: gpuImage
        },
        {
            section: "MEMORIA RAM",
            image: ramImage
        },
        {
            section: "ALMACENAMIENTO",
            image: ssdImage
        },
        {
            section: "FUENTES DE PODER",
            image: psuImage
        },
        {
            section: "CARCASA",
            image: caseImage
        },
        {
            section: "ACCESORIOS",
            image: accImage
        },
    ]

    return {sections}
}