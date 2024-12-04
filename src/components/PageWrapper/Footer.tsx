import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";


import 'styles/Footer.css'

const Footer = () => {
  return ( 
    <>
      <hr />
      <footer className="footer-body">
        <p className="footer-links">
          <Link to={'/'}><FaHouse /> Główna</Link> 
          <a href='https://github.com/pFornagiel/poradnik-calkowania'><FaCode/> Source</a>
        </p>
        <p className='acknowledgment'>Paweł Fornagiel - Analiza I 2024/25</p>
      </footer>
    </>
   );
}
 
export default Footer;