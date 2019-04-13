import React , {Component } from 'react';
import banner from '../img/banner001.png';
import '../App.css';

class Banner extends Component {
    render(){
        return(
            <div className="row rowconmagtop">
                <img className="responsive-img imgbanner" src={banner} alt="Banner"/>
            </div>
        );
    }
}

export default Banner;