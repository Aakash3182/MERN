import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <nav className= "navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container">
                <NavLink to = {`/`} className="navbar-brand">Recipe App</NavLink>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-toggle="#menu">
                    <span className="navbar-toggke-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Navlink to={`/`} className="nav-link">Home</Navlink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/`} className="nav-link">Create</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Menu