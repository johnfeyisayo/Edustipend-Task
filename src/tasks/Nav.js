import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div>
      <div className='nav'>
      <p className='contact-us'>Contact us</p>
      <Link to='/signup' style={{ textDecoration: 'none', color: 'black' }}>
      <button className='sign-up'>Signup</button>
      </Link>
      </div>
    </div>
  )
}

export default Nav
