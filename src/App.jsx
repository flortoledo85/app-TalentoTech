import './App.css';
import { ItemListCotainer } from './components/ItemListCotainer/ItemListContainer';
import { Layout } from './components/layout/Layout';
 

function App() {
  return(
    <Layout>
      <h2 style={{color:"black"}}>Comodidad y estilo para tu mejor visión</h2>
      <ItemListCotainer Mensaje="Nuestros productos destacados"/>
    </Layout>
  );
}

export default App;
