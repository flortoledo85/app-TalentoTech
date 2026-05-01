/*import Bienvenida from './Bienvenida';*/
import Headerp from './header';
import Bodyp from './body';
import Footerp from './footer';
import { Usercard } from './Usercard';
import Container from './container';
import { Profileusercontainer, OtroPerfil, config } from './profileusercontainer';
import './App.css';


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
        <Usercard {...usuario} />
      </Container>
      <Footerp />
    </div>
  );
}

export default App;
