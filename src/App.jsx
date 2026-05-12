import './App.css';
import { ItemListCotainer } from './components/ItemListCotainer/ItemListContainer';
import { Layout } from './components/Layout/Layout';
import { FormContainer } from './components/FormProduct/FormContainer';
 

function App() {
  return(
    <Layout className="app">
      <h2>Comodidad y estilo para tu mejor visión</h2>
      <ItemListCotainer Mensaje="Productos"/>
      <FormContainer/>
    </Layout>
  );
}

export default App;
