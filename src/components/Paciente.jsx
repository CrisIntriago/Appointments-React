

const Paciente = ({ paciente, setPaciente, eliminarPaciente}) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente;


    const handleEliminar = () => {
        console.log("Eliminar paciente "+ id)
        
       const respuesta = confirm("Deseas eliminar este paciente ?");


       if (respuesta) {
        eliminarPaciente(id);
       }
       
    }

   

    return (
        <div className='mx-5 bg-white shadow-md px-5 py-10 rounded-xl mb-5'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Name: {" "}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Owner: {" "}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {" "}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Release Date: {" "}
                <span className='font-normal normal-case'>{fecha}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Symtomps: {" "}
                <span className='font-normal normal-case'>
                    {sintomas}
                </span>
            </p>


            <div className="flex justify-between mt-10">

                <button
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold 
            uppercase rounded-md"
                    type="button"
                    onClick={ () => setPaciente(paciente)}
                    
                    >Editar
                </button>

                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold 
            uppercase rounded-md"
                    type="button"
                    onClick={ handleEliminar}>Eliminar
                </button>

            </div>

        </div>
    )
}

export default Paciente
