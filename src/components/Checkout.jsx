import { useState, useRef, useEffect } from 'react';
import { Button, Input, FormLabel, Box, Text, Heading, Checkbox, Stack, Alert, AlertIcon, Image } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import Footer from './Footer';
import useCart from './Hooks/useCart';
import Axios from '../utils/axiosConfig';

const bankAccounts = {
  pichincha: {
    name: 'Banco Pichincha',
    type: 'Cuenta Ahorro',
    number: '2200305319',
    holder: 'Henry Clemente Gonzalez Cevallos',
  },
  guayaquil: {
    name: 'Banco Guayaquil',
    type: 'Cuenta Ahorro',
    number: '0045493283',
    holder: 'Henry Clemente González Cevallos',
  },
};

export default function Checkout() {
  const [phase, setPhase] = useState(1);
  const [form, setForm] = useState({
    nombres: '',
    email: '',
    celular: '',
    ci: '',
    direccion: '',
    referencia: '',
    banco: '',
    terminos: false,
  });
  const [formError, setFormError] = useState('');
  const [comprobante, setComprobante] = useState('');
  const [comprobanteImg, setComprobanteImg] = useState(null);
  const [timer, setTimer] = useState(1800); // 30 minutos en segundos 
  const [pedidoCancelado, setPedidoCancelado] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const timerRef = useRef();
  const [finalizado, setFinalizado] = useState(false);
  const {addCart,setAddCart, delToCart, plusCart, minusCart, totalPrice, buyCart } = useCart()

  useEffect(() => {
    if (phase === 2 && !finalizado && !pedidoCancelado) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setPedidoCancelado(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [phase, finalizado, pedidoCancelado]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setOpenModal(true);
    }
  },[])

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleComprobanteImg = (e) => {
    if (e.target.files && e.target.files[0]) {
      setComprobanteImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  const validateForm = () => {
    if (!form.nombres || !form.apellidos || !form.celular || !form.ci || !form.direccion) {
      setFormError('Por favor, completa todos los campos.');
      return false;
    }
    if (!form.terminos) {
      setFormError('Debes aceptar los términos y condiciones.');
      return false;
    }
    setFormError('');
    return true;
  };

  const handlePagar = () => {
    if (validateForm()) {
      setPhase(2);
      setTimer(1800);
      setPedidoCancelado(false);
    }
  };

  const handleFinalizar = async () => {
    const {cartDetails} = buyCart()
    const data = {
        details: cartDetails,
        total: totalPrice
    }
    try {
        const response = await Axios.post('/api/user/createorder',data)
        localStorage.removeItem('cart')
        setAddCart([])
        setFinalizado(true);
    } catch (error) {
        console.error("Error al crear la orden:", error);
    }
  };

  // Formatear el tiempo mm:ss
  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Modal isOpen={openModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bienvenido a AnonymousPC</ModalHeader>
          <ModalBody>
            <Text>Por favor, completa tus datos para continuar con la compra.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="yellow" color="black" onClick={() => setOpenModal(false)}>
              Continuar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>
        <Box>
          <Heading as="h1" fontSize={'1.5rem'} fontWeight={'500'} mb={'1rem'}>Resumen de Compra</Heading>

          <Box>
            {addCart.map((item, index) => (
              <li key={item.id} className="item-shopCart">
                <Box className="item-cart">
                  <Box className="image-item-cart">
                    <img src={item.image} width="100%" alt={item.name} />
                  </Box>
                  <Box className="text-item-cart">
                    <Box className="text-body-cart">
                      <strong>{item.name}</strong>
                      <Box className="count-item-cart">
                        <Box className="delete-button-cart">
                          <button onClick={() => delToCart(index)}>Quitar</button>
                        </Box>
                        <p>Cantidad</p>
                        <Box>
                          <button onClick={() => minusCart(index)}><i className="fa-solid fa-minus"></i></button>
                          <Text color="yellow.500">{item.count}</Text>
                          <button onClick={() => plusCart(index)}><i className="fa-solid fa-plus"></i></button>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="price-item-total">$ {parseFloat(item.price * item.count).toFixed(2)}</Box>
                  </Box>
                </Box>
              </li>
            ))}
          </Box>
          <Box>
            <Box className="footer-cart-column">
              <Box className="footer-cart-row">
                <p>SUBTOTAL</p>
                <p>$ {totalPrice}</p>
              </Box>
              <Box className="footer-cart-row">
                <p>DESCUENTO</p>
                <p>$ 0.00</p>
              </Box>
              <Box className="footer-cart-row-total">
                <h1>TOTAL</h1>
                <h1 className="footer-cart-price">$ {totalPrice}</h1>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box maxW="lg" width={'100%'}>
          <Heading as="h1" fontSize={'1.5rem'} fontWeight={'500'}>Datos de Facturacion y Envio</Heading>
          {phase === 1 && (
            <Box border="1px" borderRadius="md" borderColor="gray.200" p={6} boxShadow="md">
              <Stack spacing={4}>
                <Box>
                  <Text>Nombres Completos</Text>
                  <Input placeholder="Escribir..." name="nombres" value={form.nombres} onChange={handleInput} />
                </Box>
                <Box>
                  <Text>E-MAIL</Text>
                  <Input placeholder="e-mail" name="email" value={form.email} onChange={handleInput} />
                </Box>
                <Box>
                  <Text>Celular</Text>
                  <Input placeholder="Celular" name="celular" value={form.celular} onChange={handleInput} />
                </Box>
                <Box>
                  <Text>Cédula de Identidad</Text>
                  <Input placeholder="Cédula de Identidad" name="ci" value={form.ci} onChange={handleInput} />
                </Box>
                <Box>
                  <Text>Dirección</Text>
                  <Input placeholder="Dirección" name="direccion" value={form.direccion} onChange={handleInput} />
                </Box>
                <Box>
                  <Text>Referencia (Opcional)</Text>
                  <Input placeholder="Referencia" name="referencia" value={form.referencia} onChange={handleInput} />
                </Box>
                <Checkbox name="terminos" isChecked={form.terminos} onChange={handleInput}>
                  Acepto los términos y condiciones
                </Checkbox>
                {formError && <Alert status="error"><AlertIcon />{formError}</Alert>}
                <Button colorScheme="yellow" color="black" onClick={handlePagar}>Pagar</Button>
              </Stack>
            </Box>
          )}
          {phase === 2 && !pedidoCancelado && !finalizado && (
            <Box border="1px" borderRadius="md" borderColor="gray.200" p={6} boxShadow="md" textAlign="center">
              <Box display={'flex'}>
                  {Object.entries(bankAccounts).map(([key,banco])=>(
                    <Box key={key} bg="gray.50" p={3} borderRadius="md" border="1px" borderColor="gray.200">
                      <Text fontWeight="bold">{banco.name}</Text>
                      <Text>{banco.type}</Text>
                      <Text>N° {banco.number}</Text>
                      <Text>{banco.holder}</Text>
                    </Box>
                  ))}
              </Box>
              <Heading as="h2" size="lg" mb={4}>Sube tu comprobante de pago</Heading>
              <Text mb={2}>Tienes <b>{formatTime(timer)}</b> minutos para completar el pago.</Text>
              <Input placeholder="Número de comprobante" value={comprobante} onChange={e => setComprobante(e.target.value)} mb={3} />
              <FormLabel>Foto del comprobante (opcional)</FormLabel>
              <Input type="file" accept="image/*" onChange={handleComprobanteImg} mb={3} />
              {comprobanteImg && <Image src={comprobanteImg} alt="Comprobante" maxH="150px" mx="auto" mb={3} />}
              <Button colorScheme="yellow" color="black" onClick={handleFinalizar} isDisabled={!comprobante}>Finalizar Compra</Button>
            </Box>
          )}
          {pedidoCancelado && (
            <Alert status="error" mt={8} justifyContent="center">
              <AlertIcon />Pedido cancelado por tiempo excedido.
            </Alert>
          )}
          {finalizado && (
            <Alert status="success" mt={8} justifyContent="center">
              <AlertIcon />¡Compra finalizada con éxito! Pronto nos comunicaremos contigo.
            </Alert>
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
