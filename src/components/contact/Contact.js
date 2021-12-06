import React, { useRef } from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const email = process.env.REACT_APP_SERVICE_ID;
const template = process.env.REACT_APP_TEMPLATE_ID;
const user = process.env.REACT_APP_USER_ID;

const MySwal = withReactContent(Swal)

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {

    emailjs.sendForm(email, template , form.current, user)
      .then((result) => {
          console.log(result.text);
          MySwal.fire({
            icon: 'success',
            title: 'Mensaje Enviado!',
            text: result.text ,
          })
      }, (error) => {
          MySwal.fire({
            icon: 'error',
            title: 'Error al enviar mensaje!',
            text: error.text ,
          })
      });
    };

  const formik = useFormik({
    initialValues: {
      user_name:'',
      user_email: '',
      message: ''
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .required('El Nombre es Obligatorio'),
      user_email: Yup.string()
        .email('El email no es válido')
        .required('El Email es Obligatorio'),
      message: Yup.string()
        .required('Ingrese un Mensaje')
    }),
    onSubmit: valores => {
      sendEmail()
    }
});

  


    return (
      <section id="Contact" className="bg-dark p-2 text-white">
        <div className="container col-xl-10 col-xxl-8 py-5">
          <h2 className="pb-2 text-white border-bottom">Contacto</h2>
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 mb-3">Email de contacto y Redes.</h1>
              <p className="col-lg-10 fs-4">repositorio de aplicaciones</p>

              <div className="col d-flex align-items-start">
              <span className="me-3" style={{ color: "white", fontSize: "60px" }}>
                  <a href="https://www.linkedin.com/in/jose-gregorio-sierra-blanco-165718136/" target="_blank" rel="noreferrer" style={{ color: "white", textDecoration: "none" }}><i className="fab fa-linkedin"></i></a>
                </span>
                <div>
                  <h4 className="fw-bold mt-3 mb-2">LinkedIn</h4>
                  <p>Más detalles de mi Perfil.</p>
                </div>
              </div>
              <div className="col d-flex align-items-start">
                <span className="me-3" style={{ color: "white", fontSize: "60px" }}>
                  <a href="https://github.com/Joseph137-code" target="_blank" rel="noreferrer" style={{ color: "white", textDecoration: "none" }}><i className="fab fa-github-square"></i></a>
                </span>
                <div>
                  <h4 className="fw-bold mt-3 mb-2">GitHub</h4>
                  <p>Repositorio de Proyectos.</p>
                </div>
              </div>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <p className="text-center col-lg-10 fs-4">Enviar mensaje para contacto</p>
              <form className="p-4 p-md-5 border" ref={form} onSubmit={formik.handleSubmit}>
                {formik.touched.user_name && formik.errors.user_name ? (
                  <h5 className="text-center"><i className="fas fa-exclamation-circle me-1"></i>Error! <span className="badge bg-danger">{formik.errors.user_name}</span></h5>
                ) : null}
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                  <input
                    type="name"
                    className="form-control"
                    id="user_name"
                    placeholder="name"
                    name="user_name"
                    value={formik.values.user_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.user_email && formik.errors.user_email ? (
                  <h5 className="text-center"><i className="fas fa-exclamation-circle me-1"></i>Error! <span className="badge bg-danger">{formik.errors.user_email}</span></h5>
                ) : null}
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="user_email"
                    placeholder="name@example.com"
                    name="user_email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.message && formik.errors.message ? (
                  <h5 className="text-center"><i className="fas fa-exclamation-circle me-1"></i>Error! <span className="badge bg-danger">{formik.errors.message}</span></h5>
                ) : null}
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                  </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
            </div>
          </div>
        </div>

      </section>
    )
}

export default Contact
