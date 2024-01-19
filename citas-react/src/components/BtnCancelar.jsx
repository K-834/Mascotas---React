
// {setEditar,setForm}
const BtnCancelar = () => {
    const vacio = () =>{
        setEditar(false)
        setForm(
             {
                nombre: '',
                propietario:'',
                email:'',
                fecha:'',
                sintomas:'',
                id:'',
            
              }
        )
    }
    
  return (
    <button type="button" 
    className='mt-5 w-full bg-red-600 text-white font-bold uppercase py-3 hover:bg-red-700 cursor-pointer transition-colors' 
    onClick={vacio}
    >
        Cancelar
    </button>
  )
}

export default BtnCancelar
