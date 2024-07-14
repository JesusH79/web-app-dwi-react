import React, { useState } from 'react';

const FormularioInformacion = ({ datos_articulo }) => {
  // Creamos un estado para manejar los valores de los inputs
  const [formValues, setFormValues] = useState(datos_articulo[0]);

  // Manejador para actualizar los valores de los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Manejador para enviar el formulario (puedes ajustarlo según tus necesidades)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Valores enviados:', formValues[0]);
    // Aquí puedes realizar otras acciones, como enviar los datos al servidor
  };
  //console.log('Valores enviados:', formValues);
  return (
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor='no_parte'>No parte: </label>
        <input type="text"
            name="no_parte"
            value={formValues.no_parte}
            onChange={handleInputChange}
        />  
    </div>
    <button type="submit">Guardar</button>
  </form>
  );
};

export default FormularioInformacion;
