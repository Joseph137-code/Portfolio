import React from 'react'
import { certificate } from "../../data/Certificate";
import CardCursos from '../cards/CardCursos';

const Cursos = () => {
    return (
      <section id="Education" className="bg-dark p-2">
        <div className="container col-xl-10 col-xxl-10 py-5 " id="custom-cards">
          <h2 className="pb-2 text-white border-bottom">Cursos</h2>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            {
              certificate.map(curso => (
                <CardCursos key={curso.title} {...curso} />
              ))
            }
          </div>
        </div>
      </section>
    )
}

export default Cursos
