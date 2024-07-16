import React, { useState } from "react";
import articulosData from '../json/datoArticulos.json';


const TablaArticulos = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [articuloSeleccionado, setArticuloSeleccionado] = useState(null);

  const handleDoubleClick = (articulo) => {
    setArticuloSeleccionado(articulo);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setArticuloSeleccionado(null);
  };

  return (
    <div className="contenedor-tabla-boton">
      <table className="tabla-articulos">
        <thead>
          <tr>
            <th>No. Parte</th>
            <th>Nombre Artículo</th>
            <th>Palabra Clave</th>
            <th>Ubicacion</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {articulosData.map((articulo) => (
            <tr key={articulo.no_parte} onDoubleClick={() => handleDoubleClick(articulo)}>
              <td>{articulo.no_parte}</td>
              <td>{articulo.nombre_articulo}</td>
              <td>{articulo.palabra_clave}</td>
              <td>{articulo.ubicacion}</td>
              <td>{articulo.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalVisible && (
        <div className="informacion-articulo-modal">
          <div className="informacion-articulo-modal__contenido">
            <span className="informacion-articulo-modal__close" onClick={closeModal}>&times;</span>
            <h2>Detalles del Artículo</h2>
            <p><strong>No. Parte:</strong> {articuloSeleccionado.no_parte}</p>
            <p><strong>Nombre Artículo:</strong> {articuloSeleccionado.nombre_articulo}</p>
            <p><strong>Palabra Clave:</strong> {articuloSeleccionado.palabra_clave}</p>
            <p><strong>Ubicacion:</strong> {articuloSeleccionado.ubicacion}</p>
            <p><strong>Cantidad:</strong> {articuloSeleccionado.cantidad}</p>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default TablaArticulos;
