import React, { useState } from 'react';
import FormularioArticulo from './FormularioArticulo'; // Asegúrate de que la ruta al componente sea correcta

const BotonAgregarArticulo = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrarModal(true)}>Agregar Artículo</button>
      {mostrarModal && (
        <div className="modal">
          <FormularioArticulo onClose={() => setMostrarModal(false)} />
        </div>
      )}
    </div>
  );
};

export default BotonAgregarArticulo;
