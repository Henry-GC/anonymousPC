import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import "./Assets/Styles/UserPedidos.css"

function UserPedidos (props) {

    const orders = props.user.orders
    const order_detail = props.user.order_detail
    console.log(order_detail);
    
    const [isLoading,setIsLoading] = useState(false)

    if (!orders) return <div>CARGANDO</div>

    orders.sort((a,b)=>b.id-a.id)
    
    const handleButton = (order_id) =>{
        console.log(order_id);
        setIsLoading(true)
        try {
            setTimeout(() => {
                props.cancelOrder(order_id)
            }, '500');
        } catch (error) {
            setTimeout(() => {
                setIsLoading(false)
            }, '500');
        }
    }

    return (
        <Box className="user-orders-container">
            <h1 className="user-section-title">MIS PEDIDOS</h1>
            <Accordion allowToggle className="user-orders">
                {orders.map((order)=>{
                    return(
                        <AccordionItem  key={order.id}>
                            <AccordionButton className="user-order">
                                <div className="user-order-data">
                                    <div className="user-order-text">
                                        <strong>Orden # {order.id.toString().padStart(5,'0')}</strong>
                                        <div className="user-order-description">
                                            <span>{`Fecha: ${order.time_order.split('T')[0]}`}</span>
                                            <span>{`Total: ${order.total}`}</span>
                                        </div>
                                    </div>
                                    {order.state === "CANCELADO" ? <></>: (
                                        <Button isLoading={isLoading} onClick={()=>handleButton(order.id)}>
                                            CANCELAR
                                        </Button>
                                    )}
                                </div>
                                
                                <Box
                                    className={
                                        order.state === "PENDIENTE"
                                        ? "orden-pendiente"
                                        : order.state === "CANCELADO"
                                        ? "orden-cancelada"
                                        : order.state === "ENTREGADO"
                                        ? "orden-entregada"
                                        : ""
                                    }
                                >
                                    {order.state}
                                </Box>

                            </AccordionButton>
                            <AccordionPanel className="user-order-panel">
                                {order_detail.filter((arr)=>arr.order_id===order.id).map((detail)=>(
                                    <Box className="user-order-details-container" key={detail.id}>
                                        <span>{detail.product_name}</span>
                                        <span>{detail.count}</span>
                                        <span>${detail.price_unit}</span>
                                        <span>${detail.total}</span>
                                    </Box>
                                ))}
                            </AccordionPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </Box>
    )
}

export default UserPedidos;