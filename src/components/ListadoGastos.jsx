import Gasto from "./Gasto"

const ListadoGastos = ({gastos, gastoEditar, setGastoEditar, eliminarGasto}) => {
  return (
    <div className="listado-gastos contenedor">
        {/* <h2>Gastos</h2> */}
        <h2>{gastos.length ? "Gastos" : "No hay gastos"}</h2>

        {gastos.map(gasto => (
            <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastoEditar = {setGastoEditar}
                gastoEditar={gastoEditar}
                eliminarGasto = {eliminarGasto}
            />
        ))}
    </div>
  )
}

export default ListadoGastos