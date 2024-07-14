import React from 'react'

function Busqueda() {
    return(
        <div className='busqueda'>
            <label htmlFor="busqueda" > Busqueda </label>
            <input className='busqueda__input' type='text' name='busqueda' title='busqueda' placeholder='articulo'></input>
        </div>
    )

}

export default Busqueda