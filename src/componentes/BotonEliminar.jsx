import React from 'react';

const BotonEliminar = ({ onEliminar }) => {
  return (
    <button onClick={onEliminar} className="boton-eliminar">
      Eliminar Artículo
    </button>
  );
};

export default BotonEliminar;
