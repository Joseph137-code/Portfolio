import React from 'react'


const CardWork = (work) => {
    return (
        <div className="col d-flex  mt-3 mb-5">
            <span className="icon-square flex-shrink-0 me-2" style={{ color: "white", fontSize: "20px" }}>
                <i className="fas fa-briefcase"></i>
            </span>
            <div>
                <h4>{work.cargo}</h4>
                <ol className="list-unstyled mt-3 mb-0">
                    <li className="m-1"><span> <i className="fas fa-arrow-circle-right"> Empresa: {work.empresa}</i></span></li>
                    <li className="m-1"><span> <i className="fas fa-arrow-circle-right"> Inicio: {work.inicio}</i></span></li>
                    <li className="m-1" ><span> <i className="fas fa-arrow-circle-right"> Fin: {work.fin}</i></span></li>
                </ol>

            </div>
        </div>
    )
}

export default CardWork
