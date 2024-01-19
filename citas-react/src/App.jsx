import { useEffect, useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('paciente')) ?? []);
  const [pacientesObjt, setPacientesObj] = useState({});
  
  useEffect(()=>{
    localStorage.setItem('paciente', JSON.stringify(pacientes));
  }, [pacientes])
  
  const eliminarPaciente = (id) => {
    const NewListpacientes = pacientes.filter(pacientes => pacientes.id !== id)
    setPacientes(NewListpacientes)
  }
  
  return (
    <>
      <div className='container mx-auto mt-20'>
        <Header />
        <div className='mt-12 md:flex'>
          <Formulario 
            pacientes = {pacientes}
            setPacientes = {setPacientes}
            pacientesObjt = {pacientesObjt}
            setPacientesObj = {setPacientesObj} 

          />
          <ListadoPacientes 
            pacientes={pacientes}
            setPacientesObj = {setPacientesObj}
            eliminarPaciente = {eliminarPaciente}  
          />
        </div>
      </div>
    </>   

  )
}

export default App
