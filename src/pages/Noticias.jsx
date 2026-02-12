import "../styles/Noticias.css";
import noticia1 from "../assets/images/noticias/noticia1.jpg";
import noticia2 from "../assets/images/noticias/noticia2.jpg";
import noticia3 from "../assets/images/noticias/noticia3.jpg";

function Noticias() {
  return (
    <section className="noticias-section">
      <div className="container">

        {/* Título */}
        <div className="text-center mb-5">
          <h2 className="noticias-title">Noticias y Eventos</h2>
          <p className="noticias-subtitle">
            Mantente informado de nuestras actividades institucionales
          </p>
        </div>

        {/* Noticias */}
        <div className="row g-4 mb-5">

          <div className="col-md-4">
            <div className="noticia-card">
              <img src={noticia1} alt="Acto cívico" />
              <div className="noticia-content">
                <h5>Acto Cívico Institucional</h5>
                <p>
                  Celebración conmemorativa con la participación activa de
                  estudiantes y docentes.
                </p>
                <span>📅 12 de marzo, 2026</span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="noticia-card">
              <img src={noticia2} alt="Proyecto agropecuario" />
              <div className="noticia-content">
                <h5>Proyecto Agropecuario</h5>
                <p>
                  Estudiantes aplican conocimientos técnicos en prácticas
                  productivas.
                </p>
                <span>📅 25 de abril, 2026</span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="noticia-card">
              <img src={noticia3} alt="Graduación" />
              <div className="noticia-content">
                <h5>Graduación Bachillerato Técnico</h5>
                <p>
                  Ceremonia de graduación con valores, fe y compromiso social.
                </p>
                <span>📅 10 de agosto, 2026</span>
              </div>
            </div>
          </div>

        </div>

        {/* Cronograma */}
        <div className="cronograma">
          <h3 className="text-center mb-4">Cronograma de Fechas Importantes</h3>

          <ul className="cronograma-list">
            <li>
              <span className="fecha">15 Marzo</span>
              <p>Inicio de clases – Año lectivo</p>
            </li>
            <li>
              <span className="fecha">02 Mayo</span>
              <p>Feria de Proyectos Técnicos</p>
            </li>
            <li>
              <span className="fecha">20 Junio</span>
              <p>Retiro espiritual estudiantil</p>
            </li>
            <li>
              <span className="fecha">30 Julio</span>
              <p>Clausura del año lectivo</p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Noticias;
