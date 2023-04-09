

const ControlPresupuesto = ({ presupuesto }) => {

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
					<span>Disponible:</span> {formatearCantidadAPeso(0)}
				</p>
				<p>
					<span>Gastado:</span> {formatearCantidadAPeso(0)}
				</p>
			</div>
		</div>
	)
}

export default ControlPresupuesto