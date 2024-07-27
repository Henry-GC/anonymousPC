import cpuImage from "../Assets/Image/cpu-image.png"
import mboImage from "../Assets/Image/mbo-image.png"
import gpuImage from "../Assets/Image/gpu-graphic-card-in-white-or-invisible-background-png.png"
import ramImage from "../Assets/Image/ram-image.png"
import ssdImage from "../Assets/Image/ssd-image.png"
import psuImage from "../Assets/Image/psu-image.png"
import caseImage from "../Assets/Image/case-image.png"
import accImage from "../Assets/Image/acc-image.png"
import cpuIcon from "../Assets/Image/cpu-icon.png"
import gpuIcon from "../Assets/Image/gpu-icon.png"
import mboIcon from "../Assets/Image/mbo-icon.png"
import ssdIcon from "../Assets/Image/ssd-icon.png"
import ramIcon from "../Assets/Image/ram-icon.png"
import psuIcon from "../Assets/Image/psu-icon.png"

export default function useResources (){

    const sections = [
        {
            section: "PROCESADORES",
            image: cpuImage,
            icon: cpuIcon
        },
        {
            section: "PLACA MADRE",
            image: mboImage,
            icon: mboIcon
        },
        {
            section: "TARJETA GRÁFICA",
            image: gpuImage,
            icon: gpuIcon
        },
        {
            section: "MEMORIA RAM",
            image: ramImage,
            icon: ramIcon
        },
        {
            section: "ALMACENAMIENTO",
            image: ssdImage,
            icon: ssdIcon
        },
        {
            section: "FUENTES DE PODER",
            image: psuImage,
            icon: psuIcon
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