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
 function MyComponent() {
  return (
    <div>
      <button onClick={() => alert('Button clicked!')}>
        Click me
      </button>
    </div>
  );
}

export default MyComponent;
export default Base;
