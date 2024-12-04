import React from "react";
import Footer from "components/PageWrapper/Footer";
import Navigation from "components/PageWrapper/Navigation";

import 'styles/PageWrapper.css'

interface Props{
  children: React.ReactNode[] | React.ReactNode,
  backPath?: string,
  forwardPath?: string
}

const PageWrapper = ({children, backPath, forwardPath}:Props) => {
  return ( 
    <div className="main">
      {backPath || forwardPath ? <Navigation backPath={backPath} forwardPath={forwardPath} />: ''}
      {children}
      <Footer />
    </div>
   );
}
 
export default PageWrapper;