import Paciente from "./Paciente"


function ListadoPacientes({ pacientes , setPaciente , eliminarPaciente}) {

  console.log(pacientes.length)

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      {pacientes && pacientes.length ? (

        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>

            Administer your {" "}

            <span className='text-indigo-600 font-bold'>Patients and Citas</span>
          </p>

          {pacientes.map((paciente) => {

            return (
              <Paciente
                id= {paciente.id}
                paciente={paciente}
                setPaciente = {setPaciente}
                eliminarPaciente= {eliminarPaciente} 
                />
            )
          })}

        </>
      ) :

        (
          <>
            <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>

              Comienza agregando pacientes {" "}

              <span className='text-indigo-600 font-bold'>Y aparecerán aquí</span>
            </p>

          </>
        )}

    </div>
  )
}

export default ListadoPacientes
