import { Modal, useModal, Button, Text } from "@nextui-org/react";
import QRCode from "react-qr-code";
import {useCounterStore} from "../components/store/counterStore"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import toast, {Toaster} from 'react-hot-toast';


export default function Modals({phone, email, pay, card}) {

const value = useCounterStore(state => state.value)


  const { setVisible, bindings } = useModal();
  return (
    <div>
      <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp" onClick={() => {
  if(phone === '') {
    toast.error('Introduce tú télefono de contacto')
  }
  else if (email === '') {
    toast.error('Introcuce tú email de contacto')
  }
  else if(pay < 10) {
    toast.error('El monto debe ser mayor a 10')
  }
  else if(card === '') {
    toast.error('Introduce la targeta del beneficiario')
  }

  else if(pay > 1000) {
    toast.error('El monto debe ser menor a 1000')
  }
 
  else if(value === '') {
    toast.error('Seleccione un método de pago')
  }

  else {
    setVisible(true)
  }

      }}>
        Enviar remesa
      </button>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="mx-10"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Realizar pago
          </Text>
        </Modal.Header>
        <Modal.Body>
         <div className="m-auto">
          
          <QRCode  size={256} value={value}></QRCode>
         </div>
         <div className="flex justify-center">
         <CopyToClipboard text={value}>
         <button onClick={() => toast.success('Copiado correctamente')} className="rounded-md mt-5 bg-primary py-2 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp" >
        Copiar dirección
      </button>
        
         </CopyToClipboard>

         
         
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
          
          <Button auto onPress={() => setVisible(false)}>
            Agree
          </Button>
         
        </Modal.Footer>
      </Modal>
      <Toaster position="bottom-center"></Toaster>
    </div>
  );
}
