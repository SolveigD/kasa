import { useState } from "react";
import '../../sass/components/Collapse.scss';
import Arrow from '../../assets/arrow.svg'

function Collapse({title, content}){

    const [active, setActive] = useState(false)
    const handleToggle = () => {
        setActive(!active)
    }
    return (
        <div className={`collapse ${active && "active"}`}>
            <div className="collapse__title" onClick={handleToggle}>{title}
            <img src={Arrow} alt='fleche' className='collapse__icon' />
            </div>
            <div className="collapse__content">{content}</div>
        </div>
    )
}
export default Collapse