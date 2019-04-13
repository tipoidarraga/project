import React , {Component } from 'react';
import '../App.css';
import Axios from 'axios';
// import Notimg from '../img/education.png';
// import axios from 'axios';

class CardN extends Component {

    constructor (props) {
        super(props);
        this.state = { 
            }
        }
    

    deletenoti = () => {
        console.log(this.props.id);
        Axios.delete (`https://mysterious-harbor-41673.herokuapp.com/api/v1/noticias/delete/${this.props.id}`)
        .then((result) => {
            this.props.getNoticias ()
        }).catch((err) => {
            alert(err)
        });
    }

    render() {
        return(

    
            <div>
                    <div class="col s12 m4">
                        <div class="card hoverable">
                            <div class="card-image">
                                <img src = {this.props.url} alt="Noticia"/>
                            </div>
                            
                            {/* Contenido de la card */}
                            <div class="card-content">
                                <span class="card-title">{this.props.titulo}</span>
                                <p className="truncate">{this.props.cuerpoNoticia}</p>
                            </div>

                            {/* Este es la parte que me debe llevar a leer el articulo */}
                            <div class="card-action">
                                <a href="#" className="acard">Leer Más</a>
                                <button  onClick = {this.deletenoti} class="btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">remove</i></button>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default CardN;