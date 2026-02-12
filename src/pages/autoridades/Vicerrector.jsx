import "../../styles/Vicerrector.css";
import vicerrectorImg from "../../assets/images/autoridades/vicerector.jpg";

function Vicerrector() {
  return (
    <section className="autoridad-section">
      <div className="container">

        {/* TÍTULO */}
        <div className="text-center mb-5">
          <h2 className="autoridad-title">Vicerrector</h2>
          <p className="autoridad-subtitle">
            Liderazgo, vocación y compromiso con la educación cristiana
          </p>
        </div>

        {/* PERFIL */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-6 col-lg-4 text-center">
            <div className="autoridad-card">
              <img
                src={vicerrectorImg}
                alt="Rectora"
                className="autoridad-img"
              />
              <h4 className="mt-3">Msc. Richard Gaibor</h4>
              <span className="autoridad-cargo">Vicerrector</span>
            </div>
          </div>
        </div>

        {/* BIOGRAFÍA */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="autoridad-bio">
              <h5>Reseña Profesional</h5>
              <p>
                La Lcda. Nombre Apellido cuenta con una sólida trayectoria
                en el ámbito educativo, destacándose por su liderazgo,
                vocación de servicio y compromiso con la formación integral
                de niños y jóvenes bajo principios cristianos y valores
                humanos.
              </p>
              <p>
                Durante su gestión, ha impulsado proyectos académicos,
                técnicos y pastorales que fortalecen la identidad
                institucional de la Unidad Educativa Fiscomisional
                Técnico Ecuador de Mindo.
              </p>
            </div>
          </div>
        </div>

        {/* MENSAJE INSTITUCIONAL */}
        <div className="row mt-5 g-4">
          <div className="col-md-4">
            <div className="autoridad-info-card">
              <h6>Vocación Educativa</h6>
              <p>
                Educación basada en el amor, la fe y el respeto,
                formando ciudadanos íntegros.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="autoridad-info-card">
              <h6>Liderazgo</h6>
              <p>
                Dirección institucional enfocada en la excelencia
                académica y el crecimiento humano.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="autoridad-info-card">
              <h6>Compromiso</h6>
              <p>
                Trabajo constante por una educación técnica de
                calidad al servicio de la comunidad.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Vicerrector;
