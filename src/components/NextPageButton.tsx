import 'styles/NextPageButton.css'
import { Link } from "react-router-dom"
import { FaAngleRight } from "react-icons/fa6";


interface Props{
  children: string | React.ReactNode,
  page: string
}

const NextPageButton = ({children,page}: Props) => {
  return ( 
    <Link to={page} className="next-page"><h3 style={{}}>{children}</h3><FaAngleRight/></Link>
   );
}
 
export default NextPageButton;