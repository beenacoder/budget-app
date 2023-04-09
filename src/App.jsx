import { useState } from 'react';
import Header from './components/Header';
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import Modal from './components/Modal';

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
	const [modal, setModal] = useState(false);

	const handleNuevoPresupuesto = () => {
		setModal(true);
	}


	return (
		<div>
			<Header
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidPresupuesto={isValidPresupuesto}
				setIsValidPresupuesto={setIsValidPresupuesto}
			/>

			{isValidPresupuesto && (
				<div className='nuevo-gasto'>
					<img 
						src={IconoNuevoGasto} 
						alt='icono nuevo gasto ' 
						onClick={handleNuevoPresupuesto}
						/>
				</div>
			)}

			{modal && <Modal setModal={setModal}/>}
		</div>
	)
}

export default App
