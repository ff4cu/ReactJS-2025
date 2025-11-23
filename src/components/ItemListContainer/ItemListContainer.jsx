import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import { ligas } from "../../database"

export const ItemListContainer = ({ titulo }) => {
    const cl = ligas[0].clubes
    console.log(cl[0].pais);
    const [club, setClubes] = useState()
    const { pais } = useParams()
    useEffect(() => {
        if (pais) {
            setClubes(ligas.filter((club) => club.pais === pais));
        } else {
            setClubes(ligas)
        }
    }, [pais])
    return <div className="contenedor-main">
        <h1 className='titulo'>{pais ? `Liga de ${pais} - Temporada 2025/2026` : titulo}</h1>
        <div className="contenedor-informacion">
            <main>
                <ItemList lista={club} />
            </main>
        </div>
    </div>
}