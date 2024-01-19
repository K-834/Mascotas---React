import { data } from 'autoprefixer';
import React, { useState, useEffect } from 'react';
import ErrorForm from './ErrorForm';

const Formulario = ({pacientes,setPacientes, pacientesObjt,setPacientesObj}) => {



  const generarID = () =>{
    return Math.random().toString(36).substr(2) + Date.now().toString(36);

  }

  // const [nombre, setNombre] = useState('');
  // const [propietario, setPropietario] = useState('');
  // const [email, setEmail] = useState('');
  // const [fecha, setFecha] = useState('');
  // const [sintomas, setSintomas] = useState('');

  useEffect(() => {
  
    if(Object.keys(pacientesObjt).length > 0){
      setForm(
        {
          nombre: pacientesObjt.nombre,
          propietario: pacientesObjt.propietario,
          email: pacientesObjt.email,
          fecha: pacientesObjt.fecha,
          sintomas: pacientesObjt.sintomas,
          id:pacientesObjt.id
        }
      )
      // setEditar(true)

    }
  }, [pacientesObjt]);

  const initialData = {
    nombre: '',
    propietario:'',
    email:'',
    fecha:'',
    sintomas:''

  }

  const [form, setForm] = useState(initialData);
  const [error, setError] = useState(false);
  // const [editar, setEditar] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    // validación del form

    if (Object.values(form).includes('') ) {
      setError(true);
      return
    }
    setError(false);

    if(pacientesObjt.id){
      form.id = pacientesObjt.id;
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === pacientesObjt.id ? form : pacientes)
      setPacientes(pacientesActualizados)
      setPacientesObj({})
    }else{
      form.id = generarID()
      setPacientes([...pacientes, form ]);
      console.log(form)
    }


    // reiniciar el form
    setForm(initialData)
  }






  // const {nombreEdit, propietarioEdit,emailEdit,fechaEdit, sintomasEdit, idEdit} = pacientesObjt;

  return (
      <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h1 className='font-black text-3xl text-center'>Seguimiento Pacientes</h1>

        <p className='text-lg my-8 text-center '>
          Añade pacientes y {''}
          <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        
        <form onSubmit={handleSubmit} className=' bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        {error && <ErrorForm /> }
        
          <div className='mb-5'>
            <label htmlFor="mascota" className='lbl-form-registro-pet'>Nombre Mascota</label>
              <input 
                    type="text" id="mascota" 
                    placeholder='Nombre de la mascota' 
                    className='input-form-registro-pet' 
                    value={form.nombre}
                    onChange={(el) => setForm({...form, nombre: el.target.value}) }
              />
          </div>

          <div className='mb-5'>
            <label htmlFor="propietario" className='lbl-form-registro-pet'>Nombre Propietario</label>
              <input 
                    type="text" id="propietario" 
                    placeholder='Nombre del Propietario' 
                    className='input-form-registro-pet'
                    value={form.propietario}
                    onChange={(el) => setForm({...form, propietario: el.target.value}) } 
              />
          </div>

          <div className='mb-5'>
            <label htmlFor="email" className='lbl-form-registro-pet'>email</label>
              <input 
                    type="email" id="email" 
                    placeholder='Email Contacto Propietario' 
                    className='input-form-registro-pet' 
                    value={form.email}
                    onChange={(el) => setForm({...form, email: el.target.value}) }
              />
          </div>

          <div className='mb-5'>
            <label htmlFor="alta" className='lbl-form-registro-pet'>alta</label>
              <input 
                    type="date" id="alta" 
                    className='input-form-registro-pet' 
                    value={form.fecha}
                    onChange={(el) => setForm({...form, fecha: el.target.value}) }
              />
          </div>

          <div className='mb-5'>
            <label htmlFor="Síntomas" className='lbl-form-registro-pet'>Síntomas</label>
              <textarea name="" id="Síntomas" rows="2" 
                className='input-form-registro-pet' 
                placeholder=' Describe los Síntomas'
                value={form.sintomas}
                onChange={(el) => setForm({...form, sintomas: el.target.value}) }
              /> 

            
            <input type="submit" className='w-full bg-indigo-600 text-white font-bold uppercase py-3 hover:bg-indigo-700 cursor-pointer transition-colors' 
            value={pacientesObjt.id ? 'Editando Pacientes' : 'Agregando Pacientes'}></input>
          </div>
        </form>
      </div>

  )
}

export default Formulario
