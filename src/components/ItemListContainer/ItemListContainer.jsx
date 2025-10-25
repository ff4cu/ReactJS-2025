import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import "./ItemListContainer.css"

export const ItemListContainer = () => {
    const [club, setClubes] = useState([])
    useEffect(() => {
        fetch("/data/data.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Hubo un problema")
                }
                return response.json();
            })
            .then((data) => {
                setClubes(data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return <main>
            <ItemList lista={club} />
        </main>
}