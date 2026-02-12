import "../styles/App.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-bottom text-white">

      {/* Parte superior del footer */}
      <div className="footer-top container d-flex flex-column flex-md-row justify-content-between py-5">

        {/* Información institucional */}
        <div className="footer-brand mb-4 mb-md-0">
          <h2>Unidad Educativa Fiscomisional Técnico Ecuador</h2>
          <p>
            Formando estudiantes con valores, conocimientos técnicos
            y compromiso con la sociedad.
          </p>
        </div>

        {/* Contacto */}
        <div className="footer-contact mb-4 mb-md-0">
          <h3>Contacto</h3>
          <p><FaMapMarkerAlt /> Mindo – Ecuador</p>
          <p><FaPhoneAlt /> 09XXXXXXXX</p>
          <p><FaEnvelope /> info@uetecnicoecuador.edu.ec</p>
          <p><FaClock /> L–V: 07h00 – 13h30</p>
        </div>

        {/* Mapa */}
        <div className="footer-map">
          <h3>Ubicación</h3>
          <iframe
            src="https://www.google.com/maps?q=Mindo,Ecuador&output=embed"
            loading="lazy"
            title="Ubicación Unidad Educativa Técnico Ecuador"
          ></iframe>
        </div>

      </div>

      {/* Parte inferior */}
      <div className="footer-social text-center py-4">
        <h5>Síguenos en nuestras redes</h5>

        <div className="d-flex justify-content-center gap-4 mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={26} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={26} />
          </a>
          <a href="https://wa.me/5939XXXXXXXX" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={26} />
          </a>
        </div>

        <p className="mt-4 mb-0 footer-copy">
          © 2026 Unidad Educativa Fiscomisional Técnico Ecuador – Mindo.
          Todos los derechos reservados.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
