import '../../sass/components/Error.scss'
import { Link } from 'react-router-dom'; 


function Error() {
    return (
        <div className="error_container">
            <span className="title_error">404</span>
            <p className="message_error">Oups! La page que vous demandez n'existe pas</p>
            <Link to="/"><span className="return_error">Revenir sur la page d'accueil</span></Link>
        </div>
    )
}
 
export default Error