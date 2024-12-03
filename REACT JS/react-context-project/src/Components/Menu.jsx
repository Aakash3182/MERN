import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <nav className= "navbar navbar-expand-md navbar-dark bg-dark">
            <div className='container'>
                <NavLink to = {`/`} classNmae="navbar-brand">React Context</NavLink>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navber-toggle-icons"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className= "navbar-nav">
                    <li className ="nav-item">
                        <NavLink to = {`/products`} className="nav-link">Products</NavLink>
                    </li>
                    <li className="nav-items">
                        <navLink to = {`/posts`} className="nav-link">Posts</navLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}
 export default Menu