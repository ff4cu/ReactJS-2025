import { Item } from "../Item/Item"
import { Link } from "react-router-dom"

export const ItemList = ({ liga }) => {
    return <>
        {liga.map((key) =>
            <Link to={`/detail/${key.id}`} key={key.id}>
                {console.log(key)}
                <Item {...key} />
            </Link>)
        }
    </>
}