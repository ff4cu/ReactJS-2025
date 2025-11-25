import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import { ligas } from "../../database"

export const ItemListContainer = ({ titulo }) => {
    const [liga, setLiga] = useState([])
    const { pais } = useParams()
    useEffect(() => {
        if (pais) {
            setLiga(ligas.filter((liga) => liga.pais === pais));
        } else {
            setLiga(ligas)
        }
    }, [pais])
    return <div className="contenedor-main">
        <h1 className='titulo'>{pais ? `Liga de ${pais} - Temporada 2025/2026` : titulo}</h1>
        <div className="contenedor-informacion">
            <main>
                <ItemList liga={liga} />
            </main>
        </div>
    </div>
}