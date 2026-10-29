import React from 'react'
import './bootstrap.min.css';
import './Header.css';
import logo from './logo.png'
function Header() {
    const menulist = ['Home', 'About us', 'Our Services', 'Blog', 'Contact us' ]
  return (
    <header className='header-bg'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <a href='#' className='logo float-start'>
                        <img src={logo} alt='logo' />
                    </a>
                </div>
                <div className='col-md-6 col-12'>
                    <ul> 
                       {menulist.map((menu) => <li><a href='#'>{menu}</a></li> )}
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
