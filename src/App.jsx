import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Layout } from './components/Layout/Layout';
import { FormContainer } from './components/FormProduct/FormContainer';
import ProductDetail from "./components/ProductDetails/ProductDetails";


 

function App() {
  return(
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<h2>Comodidad y estilo para tu mejor visión</h2>}></Route>
        <Route path="/productos" element={<ItemListContainer Mensaje={"Productos"} />}></Route>
        <Route path="/producto/:id" element={<ProductDetail/>}></Route>
        <Route path="carrito" element={<h2>Carrito</h2>}></Route>
        <Route path="/alta" element={<FormContainer/>}>Alta</Route>
      </Route>
    </Routes>
  );
}

export default App;
