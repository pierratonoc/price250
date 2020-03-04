import React from 'react'
import {Link} from 'react-router-dom'

function AdminBar() {
   
    return (
        <header className="main_menu home_menu">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-11">
                        <nav className="navbar navbar-expand-lg navbar-light">
                           
                                <Link className="navbar-brand" to="/">
                                <img src="img/logo.png" style={{ width: '80px' }} alt="logo" />
                                
                                </Link>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="menu_icon"><i className="fas fa-bars" /></span>
                            </button>
                            <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/'>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/'>Product by Price</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/'>Product by Country</Link>
                                    
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/'>Help</Link>

                                    </li>
                                    
                                   
                                    
                                   
                                </ul>
                            </div>
                            <div className="hearer_icon d-flex">
                                <Link to="/add-product"><i className="ti-add" /> Add Product</Link>
                                <Link to="/update-product"><i className="ti-update" /> Update Product</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
           
        </header>
    );
}

export default AdminBar;