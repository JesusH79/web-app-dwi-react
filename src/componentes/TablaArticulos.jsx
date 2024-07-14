import React from "react";
import articulos from '../json/datoArticulos.json';

const TablaArticulos = () => {    
  return (
    <table>
      <thead>
        <tr>
          <th>No. Parte</th>
          <th>Nombre Artículo</th>
          <th>Palabra Clave</th>
          <th>Ubicacion</th>
          <th>cantidad</th>
        </tr>
      </thead>
      <tbody>
        {articulos.map((articulos) => (
          <tr key={articulos.no_parte}>
            <td>{articulos.no_parte}</td>
            <td>{articulos.nombre_articulo}</td>
            <td>{articulos.palabra_clave}</td>
            <td>{articulos.ubicacion}</td>
            <td>{articulos.cantidad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaArticulos;
