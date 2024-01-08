import { useState, useEffect } from "react";
import Error from './Error'


function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if ((Object.keys(paciente).length > 0)) {
      console.log("Si hay algo");
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])



  const generarId = () => {

    const fecha = Date.now().toString(36);
    const codigo = Math.random(36);

    return fecha + codigo


  }

  const handleSubmit = (e) => {

    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };


    if (paciente.id) {

      objetoPaciente.id = paciente.id;

      console.log("testing");

      
      const pacientesActualizados = pacientes.map(pacienteState => 
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      )
      
      setPacientes(pacientesActualizados);
      setPaciente({});

    } else {
      console.log("Ingresando");
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);

    }


    //Reiniciar el form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
    

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Following of Patients
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and {" "}
        <span className='text-indigo-600 font-bold'> Administer</span>
      </p>

      <form onSubmit={handleSubmit}
        className="bg-white shadow-md rounder-lg py-10 px-5">

        {error && <Error>Todos los campos son obligatorios</Error>}

        <div className="mb-5">
          <label className="block text-gray-700 uppercase
          font-bold" htmlFor="mascota">Mascot Name</label>
          <input
            id="mascota"
            type="text"
            placeholder="Mascot Name"
            className="border-23 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase
          font-bold" htmlFor="propietario">Owner's Name</label>
          <input
            id="propietario"
            type="text"
            placeholder="Owner's Name"
            className="border-23 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>


        <div className="mb-5">
          <label className="block text-gray-700 uppercase
          font-bold" htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Owner's E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-23 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>


        <div className="mb-5">
          <label className="block text-gray-700 uppercase
          font-bold" htmlFor="alta">Status</label>
          <input
            id="alta"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="border-23 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase
          font-bold" htmlFor="sintomas">Status</label>
          <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe Syntoms"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          >
          </textarea>
        </div>


        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />


      </form>

    </div>
  )
}

export default Formulario
