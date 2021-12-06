import React from 'react'
import { projects } from "../../data/Projects";
import CardPort from '../cards/CardPort';

const Portfolio = () => {
    return (
      <section id="Port" className="bg-dark p-2">
        <div className="container col-xl-10 col-xxl-8 py-5 " id="custom-cards">
          <h2 className=" text-white border-bottom">Proyectos</h2>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">
            {
              projects.map(proyecto => (
                <CardPort key={proyecto.título} {...proyecto} />
              ))
            }
          </div>
        </div>
      </section>
    )
}

export default Portfolio
