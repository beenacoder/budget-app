import { useState } from "react";
import Mensaje from "./Mensaje";

const NewBudget = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
    const [mensaje, setMensaje] = useState("");

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!presupuesto || presupuesto< 0){
            setMensaje("NO es un presupuesto válido");
            return;
        } 
        setMensaje('');
        setIsValidPresupuesto(true);

    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario' onSubmit={handlePresupuesto}>
            <div className='campo'>
                <label>Definir Prespuesto</label>

                <input 
                    type="number"
                    className='nuevo-presupuesto'
                    placeholder='Añade tu presupuesto'
                    value={presupuesto} 
                    onChange={e => setPresupuesto(Number(e.target.value))}
                />
            </div>
            <input type="submit" value="Añadir" />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>


  )
}

export default NewBudget