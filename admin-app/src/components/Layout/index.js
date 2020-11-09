import React from 'react';
// import { Container } from 'react-bootstrap';
import Header from '../Header';


/**
* @author
* @function Layout
**/
const Layout = (props) => {


 return(
     <>
        <Header />
       
            {props.children}
        

        
        {/* <div>
            Footer
        </div> */}
     </>
  )
}

export default Layout;