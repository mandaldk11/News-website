import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-warning navbar-warning fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><b><i><u>NEWS-APP</u></i></b></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" aria-current="page" to="/"><b>Home</b></Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to="/entertainment"><b>Entertainment</b></Link>
                                </li>
                              
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to="/health"><b>Health</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to="/science"><b>Science</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to="/sports"><b>Sports</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to="/technology"><b>Technology</b></Link>
                                </li>
                               
                               
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2 mx-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success mx-2" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
