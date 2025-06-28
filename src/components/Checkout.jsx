import { useState, useRef, useEffect } from 'react';
import { Button, Input, FormLabel, Box, Text, Heading, Select, Checkbox, Stack, Alert, AlertIcon, Image } from '@chakra-ui/react';

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
    apellidos: '',
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
  const timerRef = useRef();
  const [finalizado, setFinalizado] = useState(false);

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
    if (!form.nombres || !form.apellidos || !form.celular || !form.ci || !form.direccion || !form.referencia || !form.banco) {
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

  const handleFinalizar = () => {
    setFinalizado(true);
  };

  // Formatear el tiempo mm:ss
  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  return (
    <Box className="container mx-auto px-4 py-8" maxW="lg">
      <Heading as="h1" size="xl" mb={8} textAlign="center">Checkout - Anonymous PC</Heading>
      {phase === 1 && (
        <Box border="1px" borderRadius="md" borderColor="gray.200" p={6} boxShadow="md">
          <Stack spacing={4}>
            <Input placeholder="Nombres" name="nombres" value={form.nombres} onChange={handleInput} />
            <Input placeholder="Apellidos" name="apellidos" value={form.apellidos} onChange={handleInput} />
            <Input placeholder="Celular" name="celular" value={form.celular} onChange={handleInput} />
            <Input placeholder="Cédula de Identidad" name="ci" value={form.ci} onChange={handleInput} />
            <Input placeholder="Dirección" name="direccion" value={form.direccion} onChange={handleInput} />
            <Input placeholder="Referencia" name="referencia" value={form.referencia} onChange={handleInput} />
            <FormLabel>Selecciona un método de pago</FormLabel>
            <Select name="banco" value={form.banco} onChange={handleInput} placeholder="Selecciona banco">
              <option value="pichincha">Banco Pichincha</option>
              <option value="guayaquil">Banco Guayaquil</option>
            </Select>
            {form.banco && (
              <Box bg="gray.50" p={3} borderRadius="md" border="1px" borderColor="gray.200">
                <Text fontWeight="bold">{bankAccounts[form.banco].name}</Text>
                <Text>{bankAccounts[form.banco].type}</Text>
                <Text>N° {bankAccounts[form.banco].number}</Text>
                <Text>{bankAccounts[form.banco].holder}</Text>
              </Box>
            )}
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
  );
}
