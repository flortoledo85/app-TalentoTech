import './App.css';
import { ItemListCotainer } from './components/ItemListCotainer/ItemListContainer';
import { Layout } from './components/Layout/Layout';
 

function App() {
  return(
    <Layout className="app">
      <h2>Comodidad y estilo para tu mejor visión</h2>
      <ItemListCotainer Mensaje="Productos"/>
    </Layout>
  );
}

export default App;
