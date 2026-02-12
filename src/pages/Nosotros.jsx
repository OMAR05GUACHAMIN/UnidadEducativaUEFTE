import "../styles/Nosotros.css";
import { FaChurch, FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";
import resenaHistorica from "../assets/images/reseñaHistorica.jpg";

function Nosotros() {
  return (
    <div className="nosotros container my-5">

      {/* Título principal */}
      <div className="text-center mb-5">
        <h2 className="section-title">¿Quiénes Somos?</h2>
        <p className="section-subtitle">
          Educación basada en la fe, el conocimiento y los valores humanos
        </p>
      </div>

      {/* Reseña Histórica */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={resenaHistorica}
            alt="Reseña histórica"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <div className="info-card">
            <h4><FaChurch /> Reseña Histórica</h4>
            <p>
              La Unidad Educativa Fiscomisional Técnico Ecuador de Mindo
              fue creada con el firme propósito de formar estudiantes con
              excelencia académica, valores cristianos y compromiso social,
              respondiendo a las necesidades educativas de la comunidad.
            </p>
          </div>
        </div>
      </div>

      {/* Misión - Visión */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="info-card hover-card">
            <h4><FaBullseye /> Misión</h4>
            <p>
              Formar estudiantes íntegros, críticos y responsables,
              fortaleciendo su desarrollo académico, espiritual y humano,
              con base en los valores del Evangelio.
            </p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="info-card hover-card">
            <h4><FaEye /> Visión</h4>
            <p>
              Ser una institución educativa fiscomisional referente
              a nivel local y nacional, reconocida por su calidad
              académica, formación en valores y compromiso con la sociedad.
            </p>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="text-center mb-4">
        <h3 className="section-title">Nuestros Valores</h3>
      </div>

      <div className="row text-center">
        <div className="col-md-3 col-6 mb-4">
          <div className="value-box">
            <FaHandsHelping />
            <h6>Respeto</h6>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-4">
          <div className="value-box">
            <FaHandsHelping />
            <h6>Responsabilidad</h6>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-4">
          <div className="value-box">
            <FaHandsHelping />
            <h6>Solidaridad</h6>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-4">
          <div className="value-box">
            <FaHandsHelping />
            <h6>Honestidad</h6>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Nosotros;
