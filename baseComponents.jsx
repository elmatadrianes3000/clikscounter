import React, { Component } from 'react';

class Base extends Component {
    state = { 
        titulo: "Mi primera aplicacion",
        mensaje: "Esto es un mensaje"
     } 
    render() { 
        return (<>

                <h1>{this.state.titulo}</h1>
                <p>{this.state.mensaje}</p>
                </>       
        );
    
    }
}
 
export default Base;
