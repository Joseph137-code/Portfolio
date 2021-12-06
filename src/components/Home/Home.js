import { useEffect, useRef } from "react";
import { init } from "ityped";

const Home = () => {
  const textRef = useRef();
    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["estoy formándome en el área de tecnología como desarrollador web full stack. Dentro de los conocimientos que he ido adquiriendo a lo largo de mis estudios, se encuentran: React, Express, Node JS, Javascript(ES6), Next JS, MongoDb, Mongoose, Socket IO, entre otras."],
      });
    }, []);
  
    return (
      <section id="Home" className="container-fluid py-5 px-0 bg-dark">
        <div className="container">
          <div className="row align-items-center g-lg-5 my-2">
            <div className="col-lg-7 text-center text-lg-start">
              <h3 className="fw-bold" style={{ color: "rgb(238, 38, 138)" }}>Hola!</h3>
              <h1 className="display-2 fw-bold lh-1 mb-3 text-white">Soy Jose Sierra</h1>
              <h3 className="text-white ">
                <span ref={textRef} style={{ color: "rgb(238, 38, 138)" }}></span>
              </h3>
              <p className="col-lg-10 fs-4 text-white">Bienvenidos...</p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5 my-3">
              <img src="./images/Sierra.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Home
