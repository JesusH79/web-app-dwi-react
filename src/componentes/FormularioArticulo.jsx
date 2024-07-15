import React, { useState } from 'react';

const FormularioArticulo = ({ onClose, onSave }) => {
  const [articulo, setArticulo] = useState({
    no_parte: '',
    nombre_articulo: '',
    palabra_clave: '',
    ubicacion: '',
    cantidad: '',
    cantidad_maxima: '',
    cantidad_minima: '',
    prioridad: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticulo((prevArticulo) => ({ ...prevArticulo, [name]: value }));
  };

  const handleSave = () => {
    onSave(articulo); // Llama a la función onSave con los datos del artículo
    onClose(); // Cierra la ventana emergente
  };

  const handleClose = () => {
    onClose(); // Cierra la ventana emergente sin guardar cambios
  };

  return (
    <div className="formulario-modal">
      <div className="formulario-modal__contenido">
        <input
          type="text"
          name="no_parte"
          value={articulo.no_parte}
          onChange={handleChange}
          placeholder="No. Parte"
        /><br/>
        <input
          type="text"
          name="nombre_articulo"
          value={articulo.nombre_articulo}
          onChange={handleChange}
          placeholder="Nombre del artículo"
        /><br/>
        <input
          type="text"
          name="palabra_clave"
          value={articulo.palabra_clave}
          onChange={handleChange}
          placeholder="Palabra clave"
        /><br/>
        <input
          type="text"
          name="ubicacion"
          value={articulo.ubicacion}
          onChange={handleChange}
          placeholder="Ubicación"
        /><br/>
        <input
          type="text"
          name="cantidad"
          value={articulo.cantidad}
          onChange={handleChange}
          placeholder="Cantidad en existencia"
        /><br/>
        <input
          type="text"
          name="cantidad_maxima"
          value={articulo.cantidad_maxima}
          onChange={handleChange}
          placeholder="Máximo"
        /><br/>
        <input
          type="text"
          name="cantidad_minima"
          value={articulo.cantidad_minima}
          onChange={handleChange}
          placeholder="Mínimo"
        /><br/>
        <input
          type="text"
          name="prioridad"
          value={articulo.prioridad}
          onChange={handleChange}
          placeholder="Prioridad"
        /><br/>
        <button onClick={handleSave}>Guardar</button><br/>
        <button onClick={handleClose}>Cerrar</button><br/>
      </div>
    </div>
  );
};

export default FormularioArticulo;
