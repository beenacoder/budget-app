import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos';
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import { generarId } from './helpers';

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
	const [modal, setModal] = useState(false);
	const [animarModal, setAnimarModal] = useState(false);
	const [gastos, setGastos] = useState([]);

	const guardarGastos = (gasto) => {
		gasto.id=generarId();
		gasto.fecha = Date.now();
		setGastos([...gastos, gasto]);

		setAnimarModal(false);
        setTimeout(()=>{
			setModal(false);
		}, 500)
	}


	const handleNuevoPresupuesto = () => {
		setModal(true);
		setTimeout(()=>{
			setAnimarModal(true);
		}, 500)
	}


	return (
		<div className={modal ? 'fijar' : ''}> 
			<Header
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidPresupuesto={isValidPresupuesto}
				setIsValidPresupuesto={setIsValidPresupuesto}
			/>

			{isValidPresupuesto && (
				<>
					<main>
						<ListadoGastos
							gastos={gastos}	
						/>
					</main>
					<div className='nuevo-gasto'>
						<img 
							src={IconoNuevoGasto} 
							alt='icono nuevo gasto ' 
							onClick={handleNuevoPresupuesto}
						/>
					</div>
				</>
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
