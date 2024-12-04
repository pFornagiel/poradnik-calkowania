import 'styles/TextBox.css'
import { PRIMARY } from 'util/colours'

interface Props{
  color?: string
  children: React.ReactNode
  title?: string
  notice?: boolean
}

const TextBox = ({color, children,title,notice} : Props) => {
  if(!color) color = PRIMARY
  return ( 
    <>
      <p className={`box-text-body ${notice ? 'box-text-notice' : 'box-text-border'}`} style={{backgroundColor: `${color}11`, borderColor: `${color}`}}>
        {title ? <div className='box-text-title' style={{color: `${color}`}}>{title}</div> : ''}
        {children}
      </p>
    </>
   );
}

 
export default TextBox;