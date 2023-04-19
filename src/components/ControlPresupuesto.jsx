import { useEffect, useState } from "react"



const ControlPresupuesto = ({ gastos, presupuesto }) => {
	const [disponible, setDisponible] = useState(0);
	const [gastado, setGastado] = useState(0);



	useEffect(() => {
		const totalGastado = gastos.reduce((total, gastado) => gastado.cantidad + total, 0)
		setGastado(totalGastado);
		console.log(totalGastado)
	}, [gastos])


	const formatearCantidadAPeso = (cantidad) => {
		return cantidad.toLocaleString('es-AR', {
			style: 'currency',
			currency: 'ARS'
		})
	}


	return (
		<div className='contenedor-presupuesto contenedor sombra dos-columnas'>
			<div>Aqui el Grafico</div>
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