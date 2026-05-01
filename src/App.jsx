/*import Bienvenida from './Bienvenida';*/
import Headerp from './header';
import Bodyp from './body';
import Footerp from './footer';
import { Usercard } from './Usercard';
import Container from './container';
import { Asistente } from './asistente';
import { Profileusercontainer, OtroPerfil, config } from './profileusercontainer';
import './App.css';
 
const asistentes =[ { nombre: 'Juan Pérez', tarea: 'Frontend Developer', emoji: '' },
                    { nombre: 'Ana Gómez', tarea: 'Diseñadora UX/UI', emoji: '' },
                    { nombre: 'Carlos Ruiz', tarea: 'Backend Developer', emoji: '' }];


function App() {
  const usuario = {
      nombre: "Florencia",
      profesion: "Slave",
  };

  return(
    <div>
      {/* Aca va el componente */}
      <Headerp />
      <Bodyp />
      <Container>
        <div><Asistente asistentes={asistentes}></Asistente></div>
        {/* <Usercard {...usuario} /> */}
      </Container>
      <Footerp />
    </div>
  );
}

export default App;
