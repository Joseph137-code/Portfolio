import React from 'react'

const CardEducation = (educacion) => {
    return (
        <div className="col d-flex align-items-start mt-2 mb-5">
        <span className="icon-square flex-shrink-0 me-3" style={{ color: "white", fontSize: "20px" }}>
        <i className="fas fa-graduation-cap"></i>
        </span>
        <div>
            <h3>{educacion.título}</h3>
            <strong className="d-inline-block mb-2 text-primary"> {educacion.universidad}</strong>
            <li>Status: <strong>{educacion.status}</strong></li>
        </div>
    </div>
    )
}

export default CardEducation
