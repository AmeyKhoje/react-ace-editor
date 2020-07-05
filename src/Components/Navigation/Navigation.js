import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './Logo/Logo';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="nav-main">
            <div className="nav-main_logo">
                <Logo />
            </div>
            <div className="nav-main_menu">
                <div className="nav-main_list">
                    <ul>
                        <li>
                            <Link>Questions Library</Link>
                        </li>
                        <li>
                            <Link>Theory Series</Link>
                        </li>
                        <li>
                            <Link>Mock Tests</Link>
                        </li>
                        <li>
                            <Link>Subscribe</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-main_login-btn">
                    <div>
                        <button className="button-styled">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
