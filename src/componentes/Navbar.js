import React , {Component } from 'react';
import M from 'materialize-css';
import logo from '../img/ceaweb.png';
import '../App.css';

class Navbar extends Component {
    componentDidMount(){
        M.AutoInit();
    }
    render() {
        return(
            <div>
                    {/* menu NavBar para equipos de escritorio */}
                    <nav className="z-depth-0 white">
                        <div className="nav-wrapper banner flow-text white">
                            <img src={logo} alt="CEA" className="imgprin"/>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger black-text"> <i className="material-icons">menu</i> </a>
                            <ul className="right hide-on-med-and-down">
                                    <li className = "liactivo"><a href="#" className="black-text menu">Home</a> </li>
                                    <li><a href="#" className="black-text menu">El Colegio</a></li>
                                    <li><a href="#" className="black-text menu">Proyectos</a></li>
                                    <li><a href="#" className="black-text menu">Admisiones</a></li>
                                    <li><a href="https://www.helpex.co/bypass.aspx" className="ahelper" target="_blank"><p className="helper valign-wrapper">Helper</p></a></li>
                            
                            </ul>
                        </div>
                    </nav>

                    {/* Menu NavBar para moviles */}
                    <ul className="sidenav" id="mobile-demo">
                        <li> <a href="#" className="menu">Home</a> </li>
                        <li> <a href="#" className="menu">El Colegio</a> </li>
                        <li> <a href="#" className="menu">Proyectos</a> </li>
                        <li> <a href="#" className="menu">Admisiones</a> </li>
                        <li> <a href="https://www.helpex.co/bypass.aspx" className="ahelper white-text" target="_blank"><p className="helper valign-wrapper">Acceso Helper</p></a></li>
                    </ul>
            </div>
        );
    }
}

export default Navbar;