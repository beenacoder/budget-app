import { useState, useEffect } from 'react';
import BtnCerrar from '../img/cerrar.svg'
import Mensaje from './Mensaje';

const Modal = ({setModal, animarModal, setAnimarModal, guardarGastos, gastoEditar}) => {
    const [mensaje, setMensaje] = useState('');
    const [nombre, setNombre] = useState(''); 
    const [cantidad, setCantidad] = useState(''); 
    const [categoria, setCategoria] = useState(''); 
    const [id, setId] = useState(''); 
    const [fecha, setFecha] = useState(''); 



    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0 ) {
			setNombre(gastoEditar.nombre);
			setCantidad(gastoEditar.cantidad);
			setCategoria(gastoEditar.categoria);
            setId(gastoEditar.id);
            setFecha(gastoEditar.fecha);
		}
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        if([nombre, cantidad, categoria].includes('')){
            setMensaje("Todos los campos son obligatorios...")
            return;    
        } 
        
        guardarGastos({nombre, cantidad, categoria, id, fecha})
        
        setNombre('');
        setCantidad('');
        setCategoria('');
        setMensaje('');
    }


    //------Funcion para ocultar el modal al cerrar ---------
    const ocultarModal = () =>{
        
        setAnimarModal(false);
        setTimeout(()=>{
			setModal(false);
		}, 500)
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

            <form 
                className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
                onSubmit={handleSubmit}
                >
                
                <legend>{gastoEditar.nombre ? 'EDITAR GASTO' : 'NUEVO GASTO'}</legend>

                {mensaje && <Mensaje tipo="error">
                                {mensaje}
                            </Mensaje>}
                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input 
                        type="text" 
                        id='nombre'
                        placeholder='Añade el Nombre del Gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input 
                        type="number" 
                        id='cantidad'
                        placeholder='Añade la cantidad del gasto: ej. $300'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Categoría</label>
                    <select 
                        id="categoria"
                        value={categoria}
                        onChange={e=>setCategoria(e.target.value)}
                    >
                        <option value="">--Seleccione categoría--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="varios">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
               <div className='campo'>

                

               <input 
                    type="submit" 
                    value= {gastoEditar.nombre ? 'GUARDAR CAMBIOS' : 'NUEVO GASTO'} 
                />
               </div>
            </form>
        </div>
  )
}

export default Modal