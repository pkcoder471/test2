import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    let navigate = useNavigate();
    const handleLogout=(e)=>{
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/SignIn');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Form</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token')?<div className="d-flex">
                        <Link type="button" className="btn btn-primary mx-2" to='/signIn'>SignIn</Link>
                        <Link type="button" className="btn btn-primary" to='/signUp'>SignUp</Link>
                        </div>:<button type="button" className="btn btn-primary" onClick={handleLogout}>logout</button>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar