import "./DetailJugador.css"
import { useCartContext } from "../../../context/CartContext/UseCartContext"

export const DetailJugador = ({ jugadores }) => {
    const { addItem } = useCartContext()
    return <div className="contenedor-position">
        {jugadores.map((jugador) =>
            <div className="jugador-position" id={jugador.name}>
                <img src={jugador.image} alt={jugador.name} />
                <p className="nombre-jugador">{jugador.name}</p>
                <p>{jugador.price} €</p>
                <div className="contenedor-btn">
                    <button className="comprar-boton" onClick={() => {
                        addItem(jugador)
                    }}>Comprar</button>
                </div>
            </div>
        )}
    </div>
}