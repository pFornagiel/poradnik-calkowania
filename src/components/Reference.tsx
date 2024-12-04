import { useEffect, useRef, useState } from "react";
import 'styles/Reference.css'

interface Props{
  children: React.ReactNode | string
  content: React.ReactNode
  color?: string
}

const Reference = ({children, content,color}: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const textRef = useRef<null|HTMLSpanElement>(null)
  const floatingRef = useRef<null|HTMLDivElement>(null)
  if(!color) color ='#2d84d0'

  useEffect(() => {
    // Handle closing upon clicking outside the popup
    if(!floatingRef.current && !textRef.current) return
    const handleClickOutside = (e: MouseEvent) => {
      if (floatingRef.current && textRef.current && (!floatingRef.current.contains(e.target as Node) && !textRef.current.contains(e.target as Node))) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    
  },[])
  
  return ( 
      <span  className="floating-wrapper">
        <span ref={textRef} className="floating-text" onClick={() => {setOpen(prev => !prev)}}>{children}</span>
        <div  className={`floating-box ${open ? 'visible' : 'hidden'}`} style={{backgroundColor: `hsl(from ${color} h s calc(l * 1.9))`, borderColor: `${color}`}} ref={floatingRef} >
          {content}
          <div className="background"></div>
        </div>
      </span>
   );
}
 
export default Reference;