import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Nav } from "./components/Nav/Nav"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './context/Cart'
import { ItemDestacadosConteiner } from './components/ItemDestacadosConteiner/ItemDestacadosConteiner'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav />
          <div className="contenedor">
            <Routes>
              <Route path="/" element={<ItemListContainer titulo={"Clubes - Temporada 2025/2026"}/>} />
              <Route path="/pais/:pais" element={<ItemListContainer titulo={"Clubes - Temporada 2025/2026"}/>} />
              <Route path='/jugadores' element={<ItemDestacadosConteiner titulo={"Jugadores Más Valiosos - Temporada 2025/2026"}/>} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/plantilla" element={<Cart />} />
            </Routes>
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
