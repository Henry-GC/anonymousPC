export default function useResources (){

    const sections = [
        {
            section: "PROCESADORES",
            image:"/multimedia/cpu-image.png",
            icon: "/multimedia/cpu-icon.png"
        },
        {
            section: "PLACA MADRE",
            image: "/multimedia/mbo-image.png",
            icon: "/multimedia/mbo-icon.png"
        },
        {
            section: "TARJETA GRÁFICA",
            image: "/multimedia/gpu-image.png",
            icon: "/multimedia/gpu-icon.png"
        },
        {
            section: "MEMORIA RAM",
            image: "/multimedia/ram-image.png",
            icon: "/multimedia/ram-icon.png"
        },
        {
            section: "ALMACENAMIENTO",
            image: "/multimedia/ssd-image.png",
            icon: "/multimedia/ssd-icon.png"
        },
        {
            section: "FUENTES DE PODER",
            image: "/multimedia/psu-image.png",
            icon: "/multimedia/psu-icon.png"
        },
        {
            section: "CARCASA",
            image: "/multimedia/case-image.png"
        },
        {
            section: "ACCESORIOS",
            image: "/multimedia/acc-image.png"
        },
    ]

    const videoAdv = [
        {
            video: "/multimedia/about-us.mp4"
        }
    ]

    const imageAdv = [
        {
            image: "/multimedia/adv_1.jpg"
        },
        {
            image: "/multimedia/adv_2.jpg"
        },
        {
            image: "/multimedia/adv_3.jpg"
        },
        {
            image: "/multimedia/adv_4.jpg"
        },
        {
            image: "/multimedia/adv_5.jpg"
        },
        {
            image: "/multimedia/adv_6.jpg"
        },
        {
            image: "/multimedia/adv_7.jpg"
        }
    ]

    return {sections,videoAdv,imageAdv}
}