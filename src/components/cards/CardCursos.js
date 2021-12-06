import React from 'react'

const CardCursos = (curso) => {
    return (
      <div className="col" >
        <div className="card card-cover h-100 overflow-hidden  bg-dark rounded-5 shadow-lg text-white" >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h2 className="text-center mb-4 display-6 lh-1 fw-bold">{curso.title}</h2>
            <h5 className="text-center  mb-4  lh-1">{curso.tecnoligies}</h5>
            <ul className="d-flex mt-auto">
              <li className="d-flex me-3 ">
                <i className="fas fa-graduation-cap me-2" width="1em" height="1em"></i>
                <small>{curso.academy}</small>
              </li>
              <li className="d-flex">
                <i className="fas fa-stopwatch me-2" width="1em" height="1em"></i>
                <small>{curso.duration}</small>
              </li>
            </ul>

            <a id="cursos" href={curso.link} role="button" target="_blank" rel="noreferrer"><span>Ver Certificado</span></a>

          </div>
        </div>
      </div>
    )
}

export default CardCursos
