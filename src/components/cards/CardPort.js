import React from 'react'

const CardPort = (proyecto) => {
 
    return (
      <div className="col" >
        <div id="project" className="card card-cover" >
          <div id="box" className="d-flex">
            <div className="content">
              <h2><i className="fas fa-desktop"></i></h2>
              <h3>{proyecto.título}</h3>
              <p>{proyecto.tecno}</p>
              <a href={proyecto.link} target="_blank" rel="noreferrer">Visitar</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CardPort
