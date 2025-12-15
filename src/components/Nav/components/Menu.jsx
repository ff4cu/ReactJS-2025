import { Link } from "react-router-dom"
import "./Menu.css"
import { useState } from "react"

export const Menu = () => {
    const [open, setOpen] = useState(false)
    function desplegarMenu(obj) {
        if (open) {
            setOpen(false)
            obj.nextElementSibling.style.display = "none"
        } else {
            setOpen(true)
            obj.nextElementSibling.style.display = "flex"
        }
    }
    return <li className="regiones">
        <button onClick={({ target }) => desplegarMenu(target)}>Clubes &#8964;
        </button>
        <ul className="clubes-pais">
            <div>
                <li><Link to={"/"}>Todos</Link></li>
                <li><Link to={"/pais/Francia"}>Francia</Link></li>
                <li><Link to={"/pais/España"}>España</Link></li>
            </div>
            <div>
                <li><Link to={"/pais/Alemania"}>Alemania</Link></li>
                <li><Link to={"/pais/Italia"}>Italia</Link></li>
                <li><Link to={"/pais/Inglaterra"}>Inglaterra</Link></li>
            </div>
        </ul>
    </li>
}