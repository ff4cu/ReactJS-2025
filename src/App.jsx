import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Nav } from "./components/Nav/Nav"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext/CartProvider'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav />
          <h1>Clubes - Temporada 2025/2026</h1>
          <div className="contenedor">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path='/carrito' element={<h1></h1>}></Route>
            </Routes>
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
