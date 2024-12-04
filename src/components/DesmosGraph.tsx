import { useEffect, useRef } from "react";
import 'styles/DesmosGraph.css'

interface Props{
  options?: Desmos.GraphConfiguration & Desmos.GraphSettings
  expressions: Desmos.ExpressionState[],
  description?: React.ReactNode,
  ratio?: string
}

const DesmosGraph = ({options,expressions, description,ratio}: Props) => {

  // Set default options
  if(!options) options={keypad: false, expressions: false, zoomButtons: false, settingsMenu: false}
  
  const graphWrapper = useRef<HTMLDivElement|null>(null)

  useEffect(() => {
    if(!graphWrapper.current) return
    const calculator = Desmos.GraphingCalculator(graphWrapper.current, options);
    for(let expression of expressions){
      calculator.setExpression(expression)
    }
  }, [])

  return ( 
    <div className="graph-wrapper" >
      <div ref={graphWrapper} style={{aspectRatio: ratio}} className='graph-div'></div>
      {description ? <div className="graph-description">{description}</div> : ''}
    </div>
    
   );
}
 
export default DesmosGraph;