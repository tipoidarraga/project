import React , { Component } from 'react';
import '../App.css';
import M from 'materialize-css';
import bg18 from '../img/bg-18.png';
// import $ from 'jquery';

import Navbar from './Navbar';
import Banner from './Banner';
import Preguntas from './Preguntas';
import CardN from './CardN';
import Footer from './Footer';
import axios from 'axios';



// Llamado Backend //
class Principal extends Component{

    constructor (props) {
        super(props);
        this.state = { 
            noticias: [  ],

            nuevaPeticion:{
                nombre: "",
                email: "",
                pqr: "",
                mensaje: ""
            },

            nuevaNoticia: {
                imagen: "",
                titulo: "",
                cuerpoNoticia: "",
                creadoPor: ""
            }
        }
    }

    componentDidMount()
    {
        M.AutoInit();
        this.getNoticias()
    }
    getNoticias = ()=> {
        axios.get ('https://mysterious-harbor-41673.herokuapp.com/api/v1/noticias/get')
        .then((result) => {
            this.setState ({
                noticias: result.data
            })
        }).catch((err) => {
            alert(err)
        });
    }

    onInputChange = (e) => {
        console.log(e.target.id);
        const {id, value} =e.target
        const newState = {...this.state.peticionesBody}
        
        newState[id] = value
        this.setState ({
            peticionesBody: newState
        })
    }

    onInputChangeNoticia = (e) => {
        const {id, value} =e.target
        const newState = {...this.state.nuevaNoticia}
        
        newState[id] = value
        this.setState ({
            nuevaNoticia: newState
        })
    }

    crearNoticia = (e) => {
        const URL = 'https://mysterious-harbor-41673.herokuapp.com/api/v1/noticias/create'
        const noti = this.state.nuevaNoticia
        console.log(noti);
        axios.post (URL, noti)
        .then((result) => {
            this.getNoticias()
        }).catch((err) => {
            alert(err)
        });
    }

    rendernoticias = () => {
        if (this.state.noticias.length === 0) {
            return  <div class="progress">
            <div class="indeterminate"></div>
        </div>
                
        } else {
            const listanot = this.state.noticias.map ((noti) =>{
                return <CardN getNoticias = {this.getNoticias} id = {noti._id} url = {noti.imagen} titulo = {noti.titulo} cuerpoNoticia = {noti.cuerpoNoticia}/>
            });
            return listanot
        }
    }


    render() {
        return(
            <div>
                <Navbar/>
                <Banner/>
                <div className="row rowconmagtop">
                    <div className="col s12 m4 center-align">
                        <i class="medium material-icons colorsvg1 white-text circle">school</i>

                        {/* Primer item formacion integral */}
                        <h6>Formación Integral</h6>
                        <div className="divp">
                            <p className="partic">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
                        </div>
                    </div>
                    <div className="col s12 m4 center-align">
                        <i class="medium material-icons colorsvg2 white-text circle">star_border</i>
                        
                        {/* Segundo item Excelencia academica */}
                        <h6>Excelencia Académica</h6>
                        <div className="divp">
                            <p className="partic">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
                        </div>
                    </div>
                    
                    {/* Tercer item, formacion de jovenes */}
                    <div className="col s12 m4 center-align">
                        <i class="medium material-icons colorsvg3 white-text circle">loyalty</i>
                        <h6>Formación de Jóvenes</h6>
                        <div className="divp">
                            <p className="partic">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
                        </div>
                    </div>
                </div>
                


                {/* Este es el titulo de las noticias */}
                <div className="row rowconmagtop rowbackgray">
                    <div className="row">
                            <div className="col s4 offset-s4">
                                 <h2 className="center-align titgray flow-text">Mantente actualizado con nuestras últimas noticias</h2>
                            </div>
                    </div>

                    
 {/* ************************************* Crear Noticia ************************************************* */}
 {/* ************************************* Crear Noticia ************************************************* */}
 {/* ************************************* Crear Noticia ************************************************* */}


                    {/* Aqui es para crear noticia */}
                    <div className = "container" > 
                            <div className = "row">
                            <ul className="collapsible">
                                <li>
                                <div className="collapsible-header"><i class="material-icons"></i>Agregar noticia </div>
                                    <div class="collapsible-body">
                                    <div class="row">
                                            <div class="input-field col s6">

                                            {/* Imput Creado Por */}
                                            <input placeholder="Autor" onChange = {this.onInputChangeNoticia} value={this.state.nuevaNoticia.creadoPor} id="creadoPor" type="text" class="validate"/>


                                            {/* Imput Titulo */}
                                            <input placeholder="Titulo de la noticia" onChange = {this.onInputChangeNoticia}  value= {this.state.nuevaNoticia.titulo} id="titulo" type="text" class="validate"/>
                                            
                                            {/* Imput Escribe tu noticia */}
                                            <input placeholder="Escribe tu noticia" onChange = {this.onInputChangeNoticia}  value={this.state.nuevaNoticia.cuerpoNoticia} id="cuerpoNoticia" type="text" class="validate"/>

                                            {/* Imput Imagen */}
                                            <input placeholder="URL Imagen" onChange = {this.onInputChangeNoticia} value={this.state.nuevaNoticia.imagen} id="imagen" type="text" class="validate"/>
                                            
                                            {/* Imput Boton */}
                                            <button onClick = {this.crearNoticia} class="btn waves-effect waves-light" type="submit" name="action">Crear Noticia
                                                <i className="material-icons right">send</i>
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            </div>
                    </div>
                    <div className="container">
                    <div className = "row">
                        {this.rendernoticias ()} 
                    </div>
                    </div>
                </div>


 {/* ************************************* Formulario ************************************************* */}
 {/* ************************************* Formulario ************************************************* */}
 {/* ************************************* Formulario ************************************************* */}

                {/* //Aca empieza el formulario */}
                <div className="row rowconmagtop">
                    <div className="col s12 m6 l4 offset-l2">
                        <div className="row">
                            <div className="col s12 m8 push-m4 center-align">
                                <h4 className="titblue flow-text">¿Tienes alguna inquietud?</h4>
                                <p className="pPQR">Contestaremos lo antes posible</p>
                                

                                {/* Campo Imput Nombre */}
                                <div className="input-field col s12">
                                    <input onChange={this.onInputChange} value = {this.state.nuevaPeticion.nombre}id="nombre" type="text" class="validate"></input>
                                    <label for="name" className="txtform">Nombre</label>
                                </div>

                            

                                {/* Campo imput Email */}
                                <div className="input-field col s12">
                                    <input  onChange={this.onInputChange} id="mail" type="email" class="validate"></input>
                                    <label for="mail" className="txtform">Email</label>
                                </div>

                                {/* Campo imput PQR */}
                                <div class="input-field col s12">
                                    <select>
                                        <option value="" disabled selected>PQR</option>
                                        <option value="1">Pregunta</option>
                                        <option value="2">Queja</option>
                                        <option value="3">Reclamo</option>
                                    </select>
                                </div>

                                {/* Campo Imput Mensaje */}
                                <div class="input-field col s12">
                                    <textarea onChange={this.onInputChange} id="msg" class="materialize-textarea"></textarea>
                                    <label for="msg" className="txtform">Mensaje</label>
                                </div>

                                {/* Este es el boton para ennviar PQR */}
                                <div className="col s12">
                                    <button className="helper white-text">Enviar</button>
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* Aqui va la imagen que va al lado del form */}
                    <div className="col m4 l4 hide-on-small-only">
                        <div className="row rowconmagtop">
                            <img src={bg18} alt="Imagen" className="responsive-img"/>
                        </div>
                    </div>
                </div>

                {/* Iframe de Google Maps */}
                <div className="row rowsinmag">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2804.192714278182!2d-75.56969761007132!3d6.2995107697830335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff1c8d54b6c1e1b!2sColegio+Autonomo!5e0!3m2!1ses!2sco!4v1554907165674!5m2!1ses!2sco" title="CEA" className="mapa" frameborder="0" allowfullscreen></iframe>
                </div>



                <div className="row rowbackgray rowpadtop rowsinmag">
                    {/* Boton footer atencion a padres */}
                    <div className="col s12 m4 right-align colconmagtop">
                        <div className="rowflex">
                            <i class="small material-icons ilinkint white-text">face</i>
                            <a href="#" className="linkint hoverable">Atención a Padres</a>
                        </div>
                    </div>

                    {/* Boton footer valores pension */}
                    <div className="col s12 m4 center-align colconmagtop">
                        <div className="rowflex">
                            <i class="small material-icons ilinkint white-text">attach_money</i>
                            <a href="#" className="linkint hoverable">Valores de Pension</a>
                        </div>
                    </div>

                    {/* Boton footer atencion Ingresar a Helper */}
                    <div className="col s12 m4 left-align colconmagtop">
                        <div className="rowflex">
                            <i class="small material-icons ilinkint white-text">send</i>
                            <a href="#" className="linkint hoverable">Ingresar a Helper</a>
                        </div>
                    </div>
                </div>
                <Footer/>
            v1
            
            </div>
        );
    }
}

export default Principal;