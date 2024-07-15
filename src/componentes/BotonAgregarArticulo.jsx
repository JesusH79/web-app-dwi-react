import React, { useState } from 'react';
import FormularioArticulo from './FormularioArticulo';

const BotonAgregarArticulo = ({ onSave }) => {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div>
      <button className="boton-agregar" onClick={() => setMostrarModal(true)}>Agregar Artículo</button>
      {mostrarModal && (
        <div className="modal">
          <FormularioArticulo onClose={() => setMostrarModal(false)} onSave={onSave} />
        </div>
      )}
    </div>
  );
};

export default BotonAgregarArticulo;

