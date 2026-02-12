import "../styles/Contacto.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contacto() {
  return (
    <section className="contacto-section">
      <div className="container">

        {/* Título */}
        <div className="text-center mb-5">
          <h2 className="contacto-title">Contáctanos</h2>
          <p className="contacto-subtitle">
            Estamos siempre disponibles para atenderte
          </p>
        </div>

        <div className="row g-5">

          {/* Información de contacto */}
          <div className="col-md-5">
            <div className="contacto-info">

              <h4>Información Institucional</h4>

              <p>
                <FaMapMarkerAlt className="contacto-icon" />
                Mindo – Ecuador
              </p>

              <p>
                <FaPhoneAlt className="contacto-icon" />
                0999999999
              </p>

              <p>
                <FaEnvelope className="contacto-icon" />
                info@uetecnicoecuador.edu.ec
              </p>

              <a
                href="https://wa.me/593999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success mt-3 w-100"
              >
                <FaWhatsapp className="me-2" />
                Escríbenos por WhatsApp
              </a>

            </div>
          </div>

          {/* Formulario */}
          <div className="col-md-7">
            <div className="contacto-form">

              <h4>Envíanos un mensaje</h4>

              <form>
                <div className="mb-3">
                  <label className="form-label">Nombre completo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Mensaje</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Escriba su mensaje aquí..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Enviar mensaje
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contacto;
