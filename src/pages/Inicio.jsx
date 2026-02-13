import React, { useEffect } from "react";
import portadaImg from "../assets/images/inicioPortada.jpg";
import inicioPortada2 from "../assets/images/inicioPortada2.jpg";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "../styles/inicio.css"; // CSS personalizado

function Inicio() {

  // Animación de scroll para los valores
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(".fade-on-scroll").forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="inicio">

      {/* Banner con slider */}
      <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-image">
              {/* Imagen decorativa detrás del texto */}
              <img 
                src={portadaImg} 
                alt="Decoración Colegio" 
                className="banner-decorative-img"
              />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h1 className="fade-in">Unidad Educativa Fiscomisional Técnico Ecuador</h1>
                <p className="fade-in delay-1">Formando ciudadanos con valores, fe y conocimiento</p>
                <a href="#valores" className="btn btn-primary mt-3 fade-in delay-2">Conócenos</a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-image" style={{ backgroundImage: `url(${inicioPortada2})` }}>
              <div className="overlay"></div>
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h1 className="fade-in">Educación con Valores Cristianos</h1>
                <p className="fade-in delay-1">Excelencia académica y formación integral</p>
                <a href="#admisiones" className="btn btn-outline-light mt-3 fade-in delay-2">Admisiones</a>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Sección de valores */}
      <div className="container my-5" id="valores">
        <h2 className="text-center mb-4">Nuestros Valores</h2>
        <div className="row text-center">
          <div className="col-md-4 value-card fade-on-scroll">
            <h4>🙏 Fe</h4>
            <p>Cultivamos la espiritualidad y la vida cristiana en nuestros estudiantes.</p>
          </div>
          <div className="col-md-4 value-card fade-on-scroll delay-1">
            <h4>📚 Excelencia Académica</h4>
            <p>Promovemos el aprendizaje con dedicación, esfuerzo y pasión.</p>
          </div>
          <div className="col-md-4 value-card fade-on-scroll delay-2">
            <h4>🤝 Respeto y Solidaridad</h4>
            <p>Formamos ciudadanos responsables y comprometidos con la comunidad.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
