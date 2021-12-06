import React from 'react'
import CardWork from '../cards/CardWork'
import { experience } from "../../data/Experience";
import {education} from "../../data/Education"
import CardEducation from '../cards/CardEducation';

const About = () => {
    return (
        <section id="About" className="bg-dark text-white">
            <div className="container col-xl-10 col-xxl-8 py-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="pb-2 border-bottom">About Me</h1>
                        <h3 className="mt-4">Experiencia Laboral</h3>
                        <hr className="col-3 col-md-2 mt-0"/>
                        <div className="row my-2 g-4 py-2 row-cols-1 row-cols-lg-3">
                            {
                                experience.map(work => (
                                    <CardWork key={work.cargo} {...work} />
                                ))
                            }

                        </div>
                        <h3 className="mt-2">Estudios</h3>
                        <hr className="col-3 col-md-2 mt-0"/>
                        <div className="row my-2 g-4 py-2 row-cols-1 row-cols-lg-3">
                            {
                                education.map(educacion => (
                                    <CardEducation key={educacion.título} {...educacion} />
                                ))
                            }

                        </div>
                    </div>
                
               
                </div>
            </div>
        </section>
    )
}

export default About
