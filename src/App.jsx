import { useEffect, useState } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';


function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});


  useEffect(() => {

    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS);
    }

    obtenerLS();
  }, []);


  useEffect(() => {

    console.log("Componente listo o cambiaron los pacientes");
    localStorage.setItem("pacientes", JSON.stringify(pacientes));

  }, [pacientes])



  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter((pacienteIterado) => {
      console.log(pacienteIterado.id !== id)
      pacienteIterado.id !== id;
    })
    console.log(pacientesActualizados)
    setPacientes(pacientesActualizados);

  }


  useEffect(() => {
    if (pacientes.length > 0)
      console.log("Se añadió un nuevo paciente!")
  }, [pacientes])

  return (
    <div className='container mx-auto mt-20'>
      <Header

      />
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}

        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App;
