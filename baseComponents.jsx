import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

class Base extends Component {
    state = { 
        titulo: "Mi primera aplicacion",
        mensaje: "Esto es un mensaje",
        cuenta: 0
     } 

     cambiarCuenta = () =>{
        this.setState({cuenta: this.state.cuenta + 1});
    }

    restarCuenta = () =>{
        this.setState({cuenta: this.state.cuenta - 1});
    }

    resetCuenta = () =>{
        this.setState({cuenta:0 });
    }


    render() { 
        return (<>

                <h1>{this.state.titulo}</h1>
                <p>{this.state.cuenta}</p>
                <button onClick={this.cambiarCuenta} className="btn btn-primary">
                Click me
                </button>

                <button onClick={this.restarCuenta} class="btn btn-info">
                Rest Count
                </button>

                <button onClick={this.resetCuenta} class="btn btn-danger">
                Restart Count
                </button>

                </>       
        );
    
    }
}
  

export default Base;
