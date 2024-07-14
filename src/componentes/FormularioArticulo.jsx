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
    <div className="modal">
      <div className="modal-content">
        {/* Renderiza los campos del formulario */}
        {/* Ejemplo: */}
        <input
          type="text"
          name="no_parte"
          value={articulo.no_parte}
          onChange={handleChange}
          placeholder="No. Parte"
        />
        {/* ... otros campos ... */}
        <button onClick={handleSave}>Guardar</button>
        <button onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default FormularioArticulo;
