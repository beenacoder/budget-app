import React from 'react'

const NewBudget = ({ presupuesto, setPresupuesto }) => {

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!Number(presupuesto) || Number(presupuesto)< 0){
            console.log("NO es un presupuesto válido");
        } else {
            console.log("SI es un presupuesto válido");

        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario' onSubmit={handlePresupuesto}>
            <div className='campo'>
                <label>Definir Prespuesto</label>

                <input 
                    type="text"
                    className='nuevo-presupuesto'
                    placeholder='Añade tu presupuesto'
                    value={presupuesto} 
                    onChange={e => setPresupuesto(e.target.value)}
                />
            </div>
            <input type="submit" value="Añadir" />
        </form>
    </div>


  )
}

export default NewBudget