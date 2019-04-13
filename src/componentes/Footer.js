import React , {Component } from 'react';
import logo from '../img/cea-foot.png';
import '../App.css';

class Footer extends Component {
    render(){
        return(
            <footer>
                <div className="rowflex">
                    <div className="divheight">
                        <img src={logo} alt="CEA" className="imgprin"/>
                    </div>
                    <div className="divheight">
                        <p className="white-text valign-wrapper">Calle 104 # 68 A - 77 | PBX: 444 5802</p>
                    </div>
                </div>
                <div className="rowflex">
                    <div className="divbordetop">
                        <p className="pfooter white-text">Este sitio fue desarrollado por Helpex & Estudio Tándem / Todos los derechos reservados 2019</p>
                        <a href="#" className="afooter white-text">El Colegio</a>
                        <a href="#" className="afooter white-text">Admisiones</a>
                        <a href="#" className="afooter white-text">Dashboard</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;