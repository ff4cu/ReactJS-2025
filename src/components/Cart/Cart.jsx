import "./Cart.css"
import {useCartContext} from "../../context/CartContext/UseCartContext"

export const Cart = () => {
    const { cart, deleteItem, getTotalItems } = useCartContext()
    return <main>
        <h1 className="miclub">Mi Club</h1>
        <section className="contenedor-cart">
            <article className="plantilla-suplentes">
                <h2 className="miclub-suplentes">{getTotalItems() > 0 ? `Jugadores (${getTotalItems()})` : "No hay jugadores en tu plantilla"}</h2>
                <div className="flexbox">
                    {cart.map((jugador) =>
                        <div className="jugador-conteiner" id={jugador.name}>
                            <img src={jugador.image} alt={jugador.name} />
                            <p className="nombre-jugador">{jugador.name}</p>
                            <button className="eliminar-jugador" onClick={() => {
                                deleteItem(jugador.id)
                            }
                            }>Eliminar</button>
                        </div>
                    )}
                </div>
            </article>
        </section>
    </main>
}