import React from 'react'
import NewBudget from './NewBudget'
import ControlPresupuesto from './ControlPresupuesto'


const Header = ({gastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto 
          gastos={gastos}
          presupuesto={presupuesto}
        />
      ) : (
        <NewBudget
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )
      }  
      
    </header>

  )
}

export default Header