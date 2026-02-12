import "../styles/OfertaAcademica.css";

import prep from "../assets/images/oferta/preparatoria.jpg";
import elemental from "../assets/images/oferta/basica-elemental.jpg";
import media from "../assets/images/oferta/basica-media.jpg";
import superior from "../assets/images/oferta/basica-superior.jpg";

import mecanica from "../assets/images/oferta/mecanica.jpg";
import contabilidad from "../assets/images/oferta/contabilidad.jpg";
import agropecuaria from "../assets/images/oferta/agropecuaria.jpeg";

function OfertaAcademica() {
  return (
    <div className="oferta-container">
      <div className="container">
        <h2 className="oferta-title text-center mb-5">
          Oferta Académica
        </h2>

        <div className="row g-4">

          {/* Preparatoria */}
          <div className="col-md-6 col-lg-4">
            <div className="oferta-card">
              <img src={prep} alt="Preparatoria" />
              <h5>Preparatoria</h5>
              <p>
                Etapa inicial que fortalece el desarrollo cognitivo,
                social y emocional del estudiante.
              </p>
            </div>
          </div>

          {/* Básica Elemental */}
          <div className="col-md-6 col-lg-4">
            <div className="oferta-card">
              <img src={elemental} alt="Básica Elemental" />
              <h5>Básica Elemental</h5>
              <p>
                Desarrollo de habilidades básicas como lectura,
                escritura y razonamiento lógico.
              </p>
            </div>
          </div>

          {/* Básica Media */}
          <div className="col-md-6 col-lg-4">
            <div className="oferta-card">
              <img src={media} alt="Básica Media" />
              <h5>Básica Media</h5>
              <p>
                Refuerzo académico integral que consolida
                conocimientos fundamentales.
              </p>
            </div>
          </div>

          {/* Básica Superior */}
          <div className="col-md-6 col-lg-4">
            <div className="oferta-card">
              <img src={superior} alt="Básica Superior" />
              <h5>Básica Superior</h5>
              <p>
                Preparación académica avanzada orientada
                al bachillerato técnico.
              </p>
            </div>
          </div>

          {/* Bachillerato Técnico */}
          <div className="col-12">
            <div className="oferta-card oferta-card-large">
              <h4 className="text-center mb-4">
                Bachillerato Técnico
              </h4>

              <div className="row g-4">

                {/* Mecánica */}
                <div className="col-md-4">
                  <div className="especialidad-card">
                    <img src={mecanica} alt="Mecánica" />
                    <h6>Mecánica</h6>
                    <p>
                      Formación técnica en mantenimiento,
                      reparación y funcionamiento de sistemas mecánicos.
                    </p>
                  </div>
                </div>

                {/* Contabilidad */}
                <div className="col-md-4">
                  <div className="especialidad-card">
                    <img src={contabilidad} alt="Contabilidad" />
                    <h6>Contabilidad</h6>
                    <p>
                      Capacitación en procesos contables,
                      gestión financiera y administración empresarial.
                    </p>
                  </div>
                </div>

                {/* Agropecuaria */}
                <div className="col-md-4">
                  <div className="especialidad-card">
                    <img src={agropecuaria} alt="Agropecuaria" />
                    <h6>Agropecuaria</h6>
                    <p>
                      Formación en producción agrícola,
                      manejo animal y sostenibilidad rural.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OfertaAcademica;
