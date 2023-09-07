
import PropTypes from 'prop-types';
import React from 'react'

export default function PropsFunciones({ apellido, edad }) {
    return (
        <div>
            <p>{apellido}</p>
            <p>{edad}</p>
        </div>
    )
}


PropsFunciones.propTypes = {
    apellido: PropTypes.string
}