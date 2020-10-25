import React, { Component } from 'react';
import './Body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class Body extends Component{
    mifuncion2(){
        console.log("Usted ha dado clic al boton")
      }
    render(){
    return(
        <div className="Body">
            <h2>{this.props.texto1}</h2>
            {
                this.props.arreglo.map((e,index)=>
            <p key={index}>{index+1}. {e}</p>
                )
            }
            <Button variant="primary" onClick={()=>this.mifuncion2()}>Dale Click</Button>
        </div>
    )};
}

export default Body;