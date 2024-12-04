import 'styles/LinkButton.css'

interface Props{
  children: string | React.ReactNode,
  href: string,
  icon: React.ReactNode
}

const LinkButton = ({children, href, icon}: Props) => {
  return ( 
    <div className="link-button">
      <h3><a href={href}>{icon}  {children}</a></h3>
    </div>
   );
}
 
export default LinkButton;