import React, { Component } from "react";

class Buscador extends Component {
  busquedaRef = React.createRef();
  obtenerDatos = (e) => {
    e.preventDefault();
    console.log(this.busquedaRef.current.value);
  };
  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca una imagen"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              value="Buscar..."
              className="btn btn-lg btn-danger btn-block"
              placeholder="Busca una imagen"
            />
          </div>
        </div>
      </form>
    );
  }
}
export default Buscador;
