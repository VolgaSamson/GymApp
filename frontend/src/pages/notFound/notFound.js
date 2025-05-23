import {Link} from 'react-router-dom'
import React, {  useEffect } from 'react';

import './notFound.css'
const NotFound = () =>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <section>
            <div className='container notfound__container'>
                <h2>Page Not Found</h2>
                <Link to="/" className='btn'>Go Back Home</Link>
            </div>
        </section>
    )
}
export default NotFound;