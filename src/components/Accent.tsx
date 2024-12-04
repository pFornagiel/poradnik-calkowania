import 'styles/Accent.css'
import {ACCENT} from 'util/colours'

interface Props{
  color?: string,
  children: string
}

const Accent = ({color, children}: Props) => {
  // placeholder
  if(!color) color = ACCENT
  return ( <span className='accent' style={{fontStyle: 'italic', color: `${color}`}}>{children}</span> );

}
 
export default Accent;
