import { useState } from "react";
import '../../sass/components/Collapse.scss'

function Collapse({title, content}){

    const [active, setActive] = useState(false)
    const handleToggle = () => {
        setActive(!active)
    }
    return (
        <div className={`collapse ${active && "active"}`}>
            <div className="collapse__title" onClick={handleToggle}>{title}
            <span className="collapse__icon"></span>
            </div>
            <div className="collapse__content">{content}</div>
        </div>
    )
}
export default Collapse