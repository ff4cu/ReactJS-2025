import { Item } from "../Item/Item"
import { Link } from "react-router-dom"

export const ItemList = ({ liga }) => {
    return <>
        {liga.length > 0 ? liga.map((key) =>
            <Link to={`/detail/${key.id}`} key={key.id}>
                <Item {...key} />
            </Link>)
            : <p>No se encontro liga</p>}
    </>
}