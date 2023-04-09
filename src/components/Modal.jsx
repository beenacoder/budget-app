import BtnCerrar from '../img/cerrar.svg'

const Modal = ({setModal}) => {

    const ocultarModal = () =>{
        setModal(false);
    }



    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img 
                    src={BtnCerrar} 
                    alt="Boton de cerrar"
                    onClick={ocultarModal}    
                />
            </div>
        </div>
  )
}

export default Modal