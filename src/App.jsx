import { useState } from 'react'
import './App.css'
import logoMarca2 from './images/logoMarca2.png'
import logoMarca from './images/logoMarca.svg'
import thaitoo from './images/thaitoo.jpg'
import estudio1 from './images/estudio1.png'
import estudio2 from './images/estudio2.png'
import estudio3 from './images/estudio3.png'
import maps from './images/maps.svg'
import maps1 from './images/maps1.png' 
import maquina from './images/maquina.jpg'
import bolaVermelha from './images/bolaVermelha.svg'
import tatoo1 from './images/tatoo1.png'
import tatoo2 from './images/tatoo2.png'
import tatoo3 from './images/tatoo3.png'
import disponivel1 from './images/disponivel1.png'
import disponivel2 from './images/disponivel2.png'
import disponivel3 from './images/disponivel3.png'

// Ícone de seta para o botão da Navbar
const ArrowIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2.5} 
    stroke="currentColor" 
    className="arrow-icon"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

function App() {
  // --- DADOS DOS CARROSSEIS ---
  const listaClientes = [
    { id: 1, src: tatoo1, alt: "Tatuagem Cliente 1" },
    { id: 2, src: tatoo2, alt: "Tatuagem Cliente 2" },
    { id: 3, src: tatoo3, alt: "Tatuagem Cliente 3" },
  ];

  const listaDisponiveis = [
    { id: 1, src: disponivel1, alt: "Flash Disponível 1" },
    { id: 2, src: disponivel2, alt: "Flash Disponível 2" },
    { id: 3, src: disponivel3, alt: "Flash Disponível 3" },
  ];

  // --- ESTADOS DE CONTROLE DE ÍNDICE ---
  const [indexClientes, setIndexClientes] = useState(0);
  const [indexDisponiveis, setIndexDisponiveis] = useState(0);

  const itensVisiveis = 3;

  // Funções de Navegação
  const prevClientes = () => setIndexClientes((prev) => (prev === 0 ? Math.max(0, listaClientes.length - itensVisiveis) : prev - 1));
  const nextClientes = () => setIndexClientes((prev) => (prev >= listaClientes.length - itensVisiveis ? 0 : prev + 1));
  
  const prevDisponiveis = () => setIndexDisponiveis((prev) => (prev === 0 ? Math.max(0, listaDisponiveis.length - itensVisiveis) : prev - 1));
  const nextDisponiveis = () => setIndexDisponiveis((prev) => (prev >= listaDisponiveis.length - itensVisiveis ? 0 : prev + 1));

  return (
    <div className="app-container">
      {/* 1. NAVBAR */}
      <header className="navbar">
        <div className="navbar-logo">
          <div className="logo-placeholder">
            <img src={logoMarca2} alt="Logo Thaitoo" className="logo-img" />
          </div>
        </div>
        <button className="nav-button" onClick={() => window.open('https://wa.me/55SEUNUMERO?text=Olá! Gostaria de agendar uma tatuagem.', '_blank')}
                 >
          ENTRE EM CONTATO
          <ArrowIcon />
        </button>
      </header>

      {/* 2. SEÇÃO: SOBRE MIM */}
      <section className="about-section">
        <div className="about-card">
          <div className="about-content">
            <div className="about-header-block">
              <img src={logoMarca} alt="Thaitoo Logo" className="about-logo" />
              <h2>Sobre Mim</h2>
            </div>
            <p className="about-greeting">Prazer, sou a Thaina!</p>
            <p className="about-text">
              Sempre me perguntam qual a sensação de alguém levar na pele uma obra minha e 
              honestamente, é como se o mundo fosse uma grande exposição onde quadros com pernas 
              andam por ele carregando minha marca.
            </p>
             <button 
                 className="cta-button" 
                 onClick={() => window.open('https://wa.me/55SEUNUMERO?text=Olá! Gostaria de agendar uma tatuagem.', '_blank')}
                 >
                 Agende já sua Tattoo!
          </button>
          </div>
          <div className="about-image-container">
            <img src={thaitoo} alt="Thaina - Tattoo Artist" className="about-img" />
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO: CONHEÇA NOSSO ESPAÇO */}
      <section className="space-section">
        <div className="space-container">
          <h2 className="space-title">Conheça nosso espaço!</h2>
          <div className="space-gallery">
            <div className="gallery-item item-large"><img src={estudio1} alt="Espaço 1" /></div>
            <div className="gallery-row-bottom">
              <div className="gallery-item"><img src={estudio2} alt="Espaço 2" /></div>
              <div className="gallery-item"><img src={estudio3} alt="Espaço 3" /></div>
            </div>
          </div>
          <button 
                 className="cta-button" 
                 onClick={() => window.open('https://wa.me/55SEUNUMERO?text=Olá! Gostaria de agendar uma tatuagem.', '_blank')}
                 >
                 Agende já sua Tattoo!
          </button>
        </div>
      </section>

      {/* 4. SEÇÃO: TRABALHOS */}
      <section className="portfolio-section">
        <div className="portfolio-wrapper">
          {/* Nossos Clientes */}
          <div className="portfolio-block">
            <div className="block-header">
              <h2 className="portfolio-title">Nossos Clientes</h2>
              <div className="carousel-arrows">
                <button className="arrow-btn" onClick={prevClientes}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg></button>
                <button className="arrow-btn" onClick={nextClientes}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg></button>
              </div>
            </div>
            <div className="carousel-container">
              <div className="carousel-track" style={{ transform: `translateX(-${indexClientes * (100 / itensVisiveis)}%)` }}>
                {listaClientes.map((item) => (
                  <div className="portfolio-item-wrapper" key={item.id}>
                    <div className="portfolio-item">
                      <img src={item.src} alt={item.alt} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Disponíveis */}
          <div className="portfolio-block">
            <div className="block-header">
              <h2 className="portfolio-title">Disponíveis</h2>
              <div className="carousel-arrows">
                <button className="arrow-btn" onClick={prevDisponiveis}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg></button>
                <button className="arrow-btn" onClick={nextDisponiveis}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg></button>
              </div>
            </div>
            <div className="carousel-container">
              <div className="carousel-track" style={{ transform: `translateX(-${indexDisponiveis * (100 / itensVisiveis)}%)` }}>
                {listaDisponiveis.map((item) => (
                  <div className="portfolio-item-wrapper" key={item.id}>
                    <div className="portfolio-item flash-card">
                      <img src={item.src} alt={item.alt} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCALIZAÇÃO */}
                <section className="location-section">
            <div className="location-card">
              
              {/* Lado Esquerdo: Informações, Mini-Mapa e Botão */}
              <div className="location-info">
                <div className="location-header-block">
                  <img src={logoMarca} alt="Thaitoo Logo" className="location-logo" />
                  <h2 className="location-title">Localização</h2>
                </div>
                
                <p className="location-address">
                  <span className="address-pin"><img src={bolaVermelha}/></span> Av. Guilherme G. do Rosário, 284 - Parque Jacaranda
                </p>

                {/* Placeholder do Mini Mapa */}
                <div className="map-wrapper">
                  <img src={maps1}
                    className="map-img" 
                  />
                </div>

                {/* Botão de Conferir + Ícone do Maps */}
                <div className="maps-action-container">
                  <button 
                      className="maps-redirect-btn" 
                      onClick={() => window.open('https://maps.app.goo.gl/nQEppejQEB2YTg2v9', '_blank')}
                       >
                       Conferir Localização
                  </button>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" 
                    alt="Google Maps" 
                    className="maps-icon" 
                  />
                </div>
              </div>

              {/* Lado Direito: Foto de Ação e Botão Flutuante de Agendamento */}
              <div className="location-image-container">
                <img src={maquina}
                  className="location-side-img" 
                />
                
                <div className="location-cta-wrapper">
                 <button 
                        className="cta-button" 
                        onClick={() => window.open('https://wa.me/55SEUNUMERO?text=Olá! Gostaria de agendar uma tatuagem.', '_blank')}
                      >
                        Agende já sua Tattoo!
                  </button>
                </div>
              </div>

            </div>
          </section>
          
      {/* 6. FOOTER */}
      <footer className="footer-section">
        <div className="footer-divider-line"></div>
        
        <div className="footer-container">
          {/* Lado Esquerdo: Branding */}
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <img src={logoMarca} alt="Thaitoo Logo" className="footer-logo-img" />
              <span className="footer-brand-name">Thaitoo</span>
            </div>
            <p className="footer-slogan">Encontro nas distorções um lugar para respirar.</p>
          </div>

          {/* Lado Direito: Redes Sociais */}
          <div className="footer-socials">
            <h3>Conecte-se</h3>
            <div className="social-icons-wrapper">
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="footer-copyright">
          <p>&copy; 2026 Thaitoo. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  )
}

export default App