import React from "react";
import {NavLink} from 'react-router-dom';
import code from '../statics/images/codeplural.png'

class Header extends React.Component{

    render(){

        return(
            <>
                <header id="header">
                    <div className="center">
                        {/* <!-- LOGO --> */}
                        <div id="logo">
                            <img src={code}  class="app-logo" alt="Logotipo" />
                            <span id="brand">
                                <strong>Article</strong>Manager
                            </span>
                        </div>

                        {/* <!-- MENU --> */}
                        <nav id="menu">
                            <ul>
                                <li>
                                    <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/articles" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Articles</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/countries" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>ConverterTool</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/positions" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Positions</NavLink>
                                </li>
                            </ul>
                        </nav>

                        {/* <!--Clean float--> */}
                        <div className="clearfix"></div>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;