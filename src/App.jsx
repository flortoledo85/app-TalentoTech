import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Layout } from './components/Layout/Layout';
import { FormContainer } from './components/FormProduct/FormContainer';
import ProductDetail from "./components/ProductDetails/ProductDetails";
import { Measurements } from "./components/Measurements/Measurements";
import Cart from "./components/Cart/Cart";
import DetailsNationalProducts from "./components/ProductosNacionalesDetalle/DetailsNationalProducts";
import ProductosNacionales from "./components/ProductosNacionales/ProductosNacionales";
import Managememt from "./components/Management/Management";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return(
    <>
    <SearchProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h2>Comodidad y estilo para tu mejor visión</h2>}></Route>
          <Route path="/products" element={<ItemListContainer Mensaje={"Products"} />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
          <Route path="/nationalproducts" element={<ProductosNacionales />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          {/* <Route path="/upload" element={<FormContainer />}>Upload</Route> */}
          <Route path="/measurements" element={<Measurements />}>Measurements</Route>
          <Route path="/management" element={
              <ProtectedRoute rolesAllowed={['admin']}>
                <Managememt/>
              </ProtectedRoute>
            }></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </SearchProvider>
    </>
  );
}

export default App;
