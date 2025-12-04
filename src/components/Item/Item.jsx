import "./Item.css"

export const Item = ({ clubes }) => {
    return <>
        {clubes.length > 0 ? clubes.map((c) => 
            <article id={c.id}>
                <div className="detalles-equipo">
                    <h2>{c.club}</h2>
                    <div className="descripcion-equipo">
                        <p>Pais : {c.pais} --- Liga : {c.liga}</p>
                        <p className="plantilla">{c.plantilla} ...</p>
                    </div>
                </div>
            </article>
        ) : <p>No se encontraron datos</p>}
    </>
}