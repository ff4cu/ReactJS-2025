import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"

export const ItemListContainer = ({ titulo }) => {
    const [club, setClubes] = useState([])
    const { pais } = useParams()
    useEffect(() => {
        fetch("/data/data.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Hubo un problema")
                }
                return response.json();
            })
            .then((data) => {
                if (pais) {
                    setClubes(data.filter((club) => club.pais === pais));
                } else {
                    setClubes(data)
                }
            })
            .catch((error) => {
                console.log(error);
            })
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