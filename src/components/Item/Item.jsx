import "./Item.css"

export const Item = ({ club, pais,liga, escudo,plantilla, children }) => {
    return <article>
        <img src={escudo} alt="Barcelona" className="escudo"/>
        {children}
        <div className="detalles-equipo">
            <h2>{club}</h2>
            <div className="descripcion-equipo">
                <p>Pais : {pais} --- Liga : {liga}</p>
                <p className="plantilla">{plantilla} ...</p>
            </div>
        </div>
    </article>
}