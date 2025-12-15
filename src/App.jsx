import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Nav } from "./components/Nav/Nav"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/AdminComponents/ProductFormContainer/ProductFormContainer'
import { MainLayout } from "./layouts/MainLayout"
import { AdminLayout } from "./layouts/AdminLayout"
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida"
import { Login } from './components/Login/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav />
          <div className="contenedor">
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<ItemListContainer titulo={"Clubes - Temporada 2025/2026"} />} />
                <Route path="/pais/:pais" element={<ItemListContainer titulo={"Clubes - Temporada 2025/2026"} />} />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Cart />} />
              </Route>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Login />} />
                <Route path='alta-productos' element={
                  <RutaProtegida>
                    <ProductFormContainer />
                  </RutaProtegida>} />
              </Route>
            </Routes>
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
