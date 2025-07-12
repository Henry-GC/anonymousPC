import { useState, useRef, useEffect } from 'react';
import { Button, Input, FormLabel, Box, Text, Heading, Checkbox, Stack, Alert, AlertIcon, Image } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import useCart from './Hooks/useCart';
import Axios from '../utils/axiosConfig';
import useScrollToTop from './Hooks/useScrollToTop';
import './Assets/Styles/Checkout.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
  const navigate = useNavigate();
  const [phase, setPhase] = useState(1);
  const [info, setInfo] = useState({});
  const [comprobante, setComprobante] = useState('');
  const [comprobanteImg, setComprobanteImg] = useState(null);
  const [timer, setTimer] = useState(1800); // 30 minutos en segundos 
  const [pedidoCancelado, setPedidoCancelado] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const timerRef = useRef();
  const [finalizado, setFinalizado] = useState(false);
  const {addCart,setAddCart, delToCart, plusCart, minusCart, totalPrice, buyCart } = useCart()
  useScrollToTop();

  const formik = useFormik({
    initialValues: {
      nombres: '',
      email: '',
      celular: '',
      ci: '',
      direccion: '',
      referencia: '',
      terminos: false,
    },
    validationSchema: Yup.object({
      nombres: Yup.string().required('Campo obligatorio'),
      email: Yup.string().email('Correo electrónico inválido').required('Campo obligatorio'),
      celular: Yup.string().required('Campo obligatorio'),
      ci: Yup.string().required('Campo obligatorio'),
      direccion: Yup.string().required('Campo obligatorio'),
      terminos: Yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones'),
    }),
    onSubmit: (values) => {
      setInfo(values);
      setPhase(2);
      setTimer(1800);
      setPedidoCancelado(false);
    },
  });

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
  }, []);

  const handleGoToLogin = () => {
    setOpenModal(false);
    navigate('/login');
  };

  const handleGoToHome = () => {
    setOpenModal(false);
    navigate('/');
  };

  const handleComprobanteImg = (e) => {
    if (e.target.files && e.target.files[0]) {
      setComprobanteImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleFinalizar = async () => {
    const allInfo = {
      ...info,
      comprobante: comprobante,
    }
    const {cartDetails} = buyCart()
    const data = {
        details: cartDetails,
        total: totalPrice,
        info: allInfo
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
    <Box className="checkout-container">
      <Modal isOpen={openModal} isCentered onClose={() => {}}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">🛍️ ¡Ups! Aún no has iniciado sesión</ModalHeader>
          <ModalBody textAlign="center">
            <Text mb={4}>
              Para seguir con tu compra, por favor inicia sesión o crea una cuenta. Así podremos guardar tu carrito y asegurarnos de que todo llegue a la dirección correcta. ¡Es rápido y fácil!
            </Text>
          </ModalBody>
          <ModalFooter justifyContent="center" gap={4}>
            <Button colorScheme="blue" onClick={handleGoToLogin}>
              Iniciar Sesión
            </Button>
            <Button colorScheme="gray" onClick={handleGoToHome}>
              Volver al Inicio
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box className="checkout-content">
        <Box className="cart-summary">
          <Heading as="h1" fontSize={'1.5rem'} fontWeight={'500'} mb={'1rem'}>Resumen de Compra</Heading>

          <Box>
            {addCart.map((item, index) => (
              <Box key={item.id} className="cart-item">
                <Box className="cart-item-image">
                  <img src={item.img_url} alt={item.name} />
                </Box>
                <Box className="cart-item-details">
                  <strong>{item.name}</strong>
                  <Box className="cart-item-controls">
                    <button onClick={() => delToCart(index)}>Quitar</button>
                    <Box className="cart-item-quantity">
                      <button onClick={() => minusCart(index)}><i className="fa-solid fa-minus"></i></button>
                      <Text color="yellow.500">{item.count}</Text>
                      <button onClick={() => plusCart(index)}><i className="fa-solid fa-plus"></i></button>
                    </Box>
                  </Box>
                  <Box className="price-item-total">$ {parseFloat(item.price * item.count).toFixed(2)}</Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className="cart-summary-footer">
            <Box className="cart-summary-row">
              <span>SUBTOTAL</span>
              <span>$ {totalPrice}</span>
            </Box>
            <Box className="cart-summary-row">
              <span>DESCUENTO</span>
              <span>$ 0.00</span>
            </Box>
            <Box className="cart-summary-total">
              <span>TOTAL</span>
              <span>$ {totalPrice}</span>
            </Box>
          </Box>
        </Box>
        <Box className="checkout-form">
          <Heading as="h1" fontSize={'1.5rem'} fontWeight={'500'}>Datos de Facturacion y Envio</Heading>
          {phase === 1 && (
            <Box border="1px" borderRadius="md" borderColor="gray.200" p={6} boxShadow="md">
              <form onSubmit={formik.handleSubmit}>
                <Stack spacing={4}>
                  <Box>
                    <Text>Nombres Completos</Text>
                    <Input placeholder="Escribir..." name="nombres" value={formik.values.nombres} onChange={formik.handleChange} />
                  </Box>
                  <Box>
                    <Text>E-MAIL</Text>
                    <Input placeholder="e-mail" name="email" value={formik.values.email} onChange={formik.handleChange} />
                  </Box>
                  <Box>
                    <Text>Celular</Text>
                    <Input placeholder="Celular" name="celular" value={formik.values.celular} onChange={formik.handleChange} />
                  </Box>
                  <Box>
                    <Text>Cédula de Identidad</Text>
                    <Input placeholder="Cédula de Identidad" name="ci" value={formik.values.ci} onChange={formik.handleChange} />
                  </Box>
                  <Box>
                    <Text>Dirección</Text>
                    <Input placeholder="Dirección" name="direccion" value={formik.values.direccion} onChange={formik.handleChange} />
                  </Box>
                  <Box>
                    <Text>Referencia (Opcional)</Text>
                    <Input placeholder="Referencia" name="referencia" value={formik.values.referencia} onChange={formik.handleChange} />
                  </Box>
                  <Checkbox name="terminos" isChecked={formik.values.terminos} onChange={formik.handleChange}>
                    Acepto los términos y condiciones
                  </Checkbox>
                  {formik.errors.terminos && <Alert status="error"><AlertIcon />{formik.errors.terminos}</Alert>}
                  <Button type='submit' colorScheme="yellow" color="black">Pagar</Button>
                </Stack>
              </form>
            </Box>
          )}
          {phase === 2 && !pedidoCancelado && !finalizado && (
            <Box border="1px" borderRadius="md" borderColor="gray.200" p={6} boxShadow="md" textAlign="center">
              <Box className="bank-accounts">
                  {Object.entries(bankAccounts).map(([key,banco])=>(
                    <Box key={key} className="bank-account">
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
