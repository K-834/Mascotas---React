import Pacientes from "./Pacientes"


const ListadoPacientes = ({pacientes, setPacientesObj,eliminarPaciente}) => {
  const cantidadPacientes = Object.values(pacientes);



  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen'>
      
      {cantidadPacientes.length > 0 ? ( 

      <>
      <h1 className='font-black text-3xl text-center '>Listado de Pacientes</h1>
        <p className='text-lg my-8 text-center'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y Listas</span>
          </p>
          <div className=" h-full overflow-y-auto mt-3 ease-in-out duration-300 mx-5 scroll ">
          {cantidadPacientes.map((elemento) =>{ return(
                <Pacientes 
                pacienteArray = {elemento}
                key={elemento.id}
                setPacientesObj = {setPacientesObj}
                eliminarPaciente={eliminarPaciente}
                />
              )})}
      </div>

      </>) : (
      <>
      <h1 className='font-black text-3xl text-center '>No hay Pacientes</h1>
      <p className='text-lg my-8 text-center'>
      Comienza agregando pacientes {''}
      <span className='text-indigo-600 font-bold'>y aparecerán en este lugar</span>
      </p>
      </>

      ) }


       
        
      
        
    </div>
    
  )
}

export default ListadoPacientes
