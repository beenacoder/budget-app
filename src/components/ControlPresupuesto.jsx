import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const ControlPresupuesto = ({ gastos, presupuesto }) => {
	const [porcentaje, setPorcentaje] = useState(0);
	const [disponible, setDisponible] = useState(0);
	const [gastado, setGastado] = useState(0);



	useEffect(() => {
		const totalGastado = gastos.reduce((total, gastado) => gastado.cantidad + total, 0);
		const totalDisponible = presupuesto - totalGastado; 
		//Calcular porcentaje
		const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
		
		
		setGastado(totalGastado);
		setDisponible(totalDisponible); 

		setTimeout(() => {
			setPorcentaje(nuevoPorcentaje);
		}, 1000)
	}, [gastos])


	const formatearCantidadAPeso = (cantidad) => {
		return cantidad.toLocaleString('es-AR', {
			style: 'currency',
			currency: 'ARS'
		})
	}


	return (
		<div className='contenedor-presupuesto contenedor sombra dos-columnas'>
			<div>
				<CircularProgressbar 
					value={porcentaje}
					styles={buildStyles({
						pathColor: '#3B82F6',
						trailColor: '#f5f5f5',
						textColor: '#3B82F6'
					})}
					text={`${porcentaje}% Gastado`}				
				/>
			</div>
			<div className='contenido-presupuesto'>
				<p>
					<span>Presupuesto:</span> {formatearCantidadAPeso(presupuesto)}
				</p>
				<p>
					<span>Disponible:</span> {formatearCantidadAPeso(disponible)}
				</p>
				<p>
					<span>Gastado:</span> {formatearCantidadAPeso(gastado)}
				</p>
			</div>
		</div>
	)
}

export default ControlPresupuesto