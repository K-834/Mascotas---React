
const Pacientes = ({pacienteArray, setPacientesObj,eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas,id} = pacienteArray;

  const handleElimnar = () => {
    const respuesta = confirm("Quieres eliminar al paciente ???? ")
    if (respuesta) { eliminarPaciente(id)}
  }
  return (
        <div className='bg-white mb-5 shadow-md px-5 py-10 rounded-xl'>
        <p className='lbl-form-lista-pet'> Nombre : <span className='normal-case font-normal' >{nombre}</span></p>
        <p className='lbl-form-lista-pet'> Propietario : <span className='normal-case font-normal' >{propietario}</span></p>
        <p className='lbl-form-lista-pet'> Email : <span className='normal-case font-normal' >{email}</span></p>
        <p className='lbl-form-lista-pet'> Fecha Alta : <span className='normal-case font-normal' >{fecha}</span></p>
        <p className='lbl-form-lista-pet'> Síntomas: <span className='normal-case font-normal' >{sintomas}</span></p>
        
        <div className="flex justify-between mt-8"> 
          
          <button type="button" 
          className="px-10 py-2 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
          onClick={() => setPacientesObj(pacienteArray)}
          >
            Editar
            
          </button>



          <button type="button"
            className="px-10 py-2 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
            onClick={handleElimnar}
          >
            Eliminar
          </button>
        </div>
        </div>
  )
}

export default Pacientes
