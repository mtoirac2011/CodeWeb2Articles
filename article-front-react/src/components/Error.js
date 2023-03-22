import React from 'react'
import error404 from '../statics/images/error404.png';

const Error = () => {

  return (
    <div className="center">
      <p className='notfound'>The page couldn't be found</p>  
      <img className="error404" src={error404} alt="error404" /> 
      <div className="clearfix"></div>                    
    </div>
                
  )
}
export default Error;