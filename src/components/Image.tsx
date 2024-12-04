import 'styles/DesmosGraph.css'
import 'styles/Image.css'

interface Props{
  description?: string|React.ReactNode
  width?: string
  height?: string,
  src: string,
  alt?: string
}

const Image = ({description, width,height,src, alt}: Props) => {
  if(!alt) alt = 'Image'

  return ( 
    <div className='image-wrapper'>
      <img style={{width: width, height: height, maxWidth: '100%'}} src={src} alt={alt} />
      {description ? <div className="image-description">{description}</div> : ''}
    </div>
   );
}
 
export default Image;