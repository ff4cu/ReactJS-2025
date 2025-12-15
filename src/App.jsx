import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Nav } from "./components/Nav/Nav"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/AdminComponents/ProductFormContainer/ProductFormContainer'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav />
          <div className="contenedor">
            <Routes>
              <Route path="/" element={<ItemListContainer titulo={"Clubes - Temporada 2025/2026"} />} />
              <Route path="/pais/:pais" element={<ItemListContainer titulo={"Clubes - Temporada 2025/2026"} />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path='/admin' element={<ProductFormContainer />}></Route>
            </Routes>
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
