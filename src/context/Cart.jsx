import "./Cart.css"
import { useCartContext } from "./CartContext/UseCartContext"
import { Titulares } from "./components/Titulares"

export const Cart = () => {
    const { cart } = useCartContext()
    return <main>
        <h1 className="miclub">Mi Club</h1>
        <section className="contenedor-cart">
            <Titulares />
            <article className="plantilla-suplentes">
                <h2 className="miclub-suplentes">Suplentes</h2>
                <div className="flexbox">
                    {cart.map((jugador) =>
                        <div className="jugador-conteiner" id={jugador.name}>
                            <img src={jugador.image} alt={jugador.name} />
                            <p className="nombre-jugador">{jugador.name}</p>
                        </div>
                    )}
                </div>
            </article>
        </section>
    </main>
}