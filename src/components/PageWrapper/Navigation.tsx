import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import 'styles/Navigation.css'


interface Props{
  forwardPath?: string,
  backPath?: string
}

const Navigation = ({forwardPath, backPath}: Props) => {
  return ( 
    <nav className="navigation-body">
      <Link to={`${backPath}`} className={`navigation-button ${backPath ? '' : 'inactive'}`}><FaAngleLeft /></Link>
      <Link to={'/'} className="navigation-logo">Poradnik Całkowania</Link>
      <Link to={`${forwardPath}`} className={`navigation-button ${forwardPath ? '' : 'inactive'}`}><FaAngleRight/></Link>
    </nav>
   );
}
 
export default Navigation;