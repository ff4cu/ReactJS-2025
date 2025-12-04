import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { ligas } from "../../database"

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const idClub = ligas.find((c) => c.id === id)
        if (idClub) {
            setDetail(idClub)
        } 
    }, [id])
    return <main>
        {Object.keys(detail).length ? (
            <ItemDetail clubes = {detail.clubes} />
        ) : (
            <p>No se encontraron datos</p>
        )}
    </main>
}