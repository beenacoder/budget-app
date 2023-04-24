import { useState, useEffect } from 'react';
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
	const [gastoEditar, setGastoEditar] = useState({});

	useEffect(()=>{
		if(Object.keys(gastoEditar).length > 0 ) {
			setModal(true);
			setTimeout(()=>{
				setAnimarModal(true);
			}, 500)
		}
	}, [gastoEditar])

	const guardarGastos = (gasto) => {

		if(gasto.id){
			//Actualizar
			const gastosActualizados = gastos.map(gastoEstado => gastoEstado.id === gasto.id ? gasto : gastoEstado);
			setGastos(gastosActualizados);
			setGastoEditar({});
		} else {
			//Nuevo gasto
			gasto.id=generarId();
			gasto.fecha = Date.now();
			setGastos([...gastos, gasto]);
			//No colocamos un return porque necesitamos que siga con la animacion
		}
			setAnimarModal(false);
			setTimeout(()=>{
				setModal(false);
			}, 500)
	}


	const handleNuevoGasto = () => {
		setModal(true);
		setGastoEditar({});
		setTimeout(()=>{
			setAnimarModal(true);
		}, 500)
	}

	const eliminarGasto = id => {
		const gastoEliminado = gastos.filter(gastoElim => gastoElim.id !== id);
		setGastos(gastoEliminado);
	}

	return (
		<div className={modal ? 'fijar' : ''}> 
			<Header
				gastos={gastos}
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidPresupuesto={isValidPresupuesto}
				setIsValidPresupuesto={setIsValidPresupuesto}
			/>

			{isValidPresupuesto && (
				<>
					<main>
						<ListadoGastos
							setGastoEditar = {setGastoEditar}
							gastos={gastos}	
							gastoEditar = {gastoEditar}
							eliminarGasto = {eliminarGasto}
						/>
					</main>
					<div className='nuevo-gasto'>
						<img 
							src={IconoNuevoGasto} 
							alt='icono nuevo gasto ' 
							onClick={handleNuevoGasto}
						/>
					</div>
				</>
			)}

			{modal && <Modal 
						setModal={setModal}
						animarModal={animarModal}
						setAnimarModal={setAnimarModal}	
						guardarGastos={guardarGastos}
						gastoEditar={gastoEditar}
						setGastoEditar={setGastoEditar}
					/>}
		</div>
	)
}

export default App
