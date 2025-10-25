import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const {id} = useParams()
    useEffect(() => {
        fetch("/data/data.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Hubo un problema")
                }
                return response.json();
            })
            .then((data) => {
                const club = data
                const idClub = club.find((c)=>c.id === id)
                if (idClub) {
                    setDetail(idClub)
                }else{
                    throw new Error("Hubo un problema")
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])
    return <main>
        {Object.keys(detail).length?(
            <ItemDetail detail={detail}/>
        ):(
            <p>No encontrado</p>
        )}
    </main>
}