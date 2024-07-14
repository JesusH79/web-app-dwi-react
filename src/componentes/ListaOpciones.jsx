import React from "react";

const ListaOpciones = ({opciones}) => {
    
    return(
    <form className="opciones-busqueda">
            
        <input
        type="radio" name="opciones-busqueda" value={opciones[0].indice} title={opciones[0].valor}
        /><label>{opciones[0].valor}</label><br/> 
        <input
        type="radio" name="opciones-busqueda" value={opciones[1].indice} title={opciones[1].valor}
        /><label>{opciones[1].valor}</label><br/>
        <input
        type="radio" name="opciones-busqueda" value={opciones[2].indice} title={opciones[2].valor}
        /><label>{opciones[0].valor}</label><br/>
        
    </form>
    
    );

};

export default ListaOpciones;

