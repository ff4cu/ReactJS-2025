import { Item } from "../Item/Item"
import { Link } from "react-router-dom"

export const ItemList = ({ lista }) => {
    return <>
        {lista.length ? (
            lista.map((club) =>
                <Link to={`/detail/${club.id}`} key={club.id}>
                    <Item {...club} />
                </Link>)
        ) : (<p>No se encontraron jugadores</p>)}
    </>
}