import useResources from "./useResources"

function useRender (){

    const {sections} = useResources()
    const renderComponents = (build) => (
            <>
                {build.CPU && (
                    <div className="row-component-container">
                        <div className="row-component-img">
                            <img src={sections[0].icon} alt="CPU ICON" width="100%"/>
                        </div>
                        <div className="row-component-title">
                            <p>Procesador</p>
                            <h2>{build.CPU}</h2>
                        </div>
                    </div>
                )}
                {build.MBO && (
                    <div className="row-component-container">
                        <div className="row-component-img">
                            <img src={sections[1].icon} alt="MBO ICON" width="100%"/>
                        </div>
                        <div className="row-component-title">
                            <p>Procesador</p>
                            <h2>{build.MBO}</h2>
                        </div>
                    </div>
                )}
                {build.GPU && (
                    <div className="row-component-container">
                        <div className="row-component-img">
                            <img src={sections[2].icon} alt="GPU ICON" width="100%"/>
                        </div>
                        <div className="row-component-title">
                            <p>Procesador</p>
                            <h2>{build.GPU}</h2>
                        </div>
                    </div>
                )}
                {build.RAM && (
                    <div className="row-component-container">
                        <div className="row-component-img">
                            <img src={sections[3].icon} alt="RAM ICON" width="100%"/>
                        </div>
                        <div className="row-component-title">
                            <p>Procesador</p>
                            <h2>{build.RAM}</h2>
                        </div>
                    </div>
                )}
                {build.SSD && (
                    <div className="row-component-container">
                        <div className="row-component-img">
                            <img src={sections[4].icon} alt="SSD ICON" width="100%"/>
                        </div>
                        <div className="row-component-title">
                            <p>Procesador</p>
                            <h2>{build.SSD}</h2>
                        </div>
                    </div>
                )}
                {build.PSU && (
                    <div className="row-component-container">
                        <div className="row-component-img">
                            <img src={sections[5].icon} alt="CPU ICON" width="100%"/>
                        </div>
                        <div className="row-component-title">
                            <p>Procesador</p>
                            <h2>{build.PSU}</h2>
                        </div>
                    </div>
                )}
            </>
        )

    return {renderComponents}
}

export default useRender;