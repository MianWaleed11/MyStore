import React from 'react'

export interface FooterProps {
    
}
 
const Footer: React.SFC<FooterProps> = () => {
    return ( 
        <footer className='mt-5 text-center bg-dark'>
            <small className=' text-capitalize text-white '>copy right renesis store </small>
        </footer>
     );
}
 
export default Footer;