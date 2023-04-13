import { useState } from 'react';
import Header from './components/Header';
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import Modal from './components/Modal';

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
	const [modal, setModal] = useState(false);
	const [animarModal, setAnimarModal] = useState(false);

	const [gastos, setGastos] = useState([]);

	const guardarGastos = (gasto) => {
		setGastos([...gastos, gasto]);
	}


	const handleNuevoPresupuesto = () => {
		setModal(true);
		setTimeout(()=>{
			setAnimarModal(true);
		}, 500)
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

			{modal && <Modal 
						setModal={setModal}
						animarModal={animarModal}
						setAnimarModal={setAnimarModal}	
						guardarGastos={guardarGastos}
					/>}
		</div>
	)
}

export default App
