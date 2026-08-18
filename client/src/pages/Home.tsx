/*
 * Direção visual desta página: Estúdio Editorial Noturno.
 * O layout usa verde floresta, creme e verde-lima de sinal, com assimetria editorial,
 * textura de estúdio e interações rápidas. Cada seção deve parecer parte de uma sessão
 * musical real: precisa, tátil e sem promessas não verificadas.
 */

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  AudioLines,
  ChevronDown,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Mic2,
  Music2,
  Play,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

const asset = {
  hero: "/manus-storage/duck-hero-studio_a78deb22.jpg",
  detail: "/manus-storage/duck-atelier-detail_2b34e8d8.jpg",
  room: "/manus-storage/duck-listening-room_71112b80.jpg",
  mark: "/manus-storage/duck-mark_2fb147af.png",
  qr: "/manus-storage/duck-qr_ef1a7826.png",
};

const services = [
  {
    number: "01",
    icon: Music2,
    title: "Beats / Instrumentais",
    description: "Produção de instrumentais autorais com espaço para sua voz, seu ritmo e sua assinatura.",
  },
  {
    number: "02",
    icon: Mic2,
    title: "Gravação",
    description: "Captação cuidadosa para transformar interpretação, textura e intenção em matéria sonora.",
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    title: "Mixagem",
    description: "Equilíbrio, clareza e impacto para cada elemento ocupar o lugar certo na faixa.",
  },
  {
    number: "04",
    icon: AudioLines,
    title: "Masterização",
    description: "O último ajuste antes do mundo ouvir: presença, tradução e consistência para distribuição.",
  },
];

const process = [
  ["01", "Escuta", "Entender a referência, a intenção e o espaço que a música precisa ocupar."],
  ["02", "Construção", "Desenhar arranjo, timbre e dinâmica sem apagar o que torna a faixa sua."],
  ["03", "Acabamento", "Organizar detalhes, volume e presença para entregar um som pronto para circular."],
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };
  const ActiveServiceIcon = services[activeService].icon;

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand-lockup" href="#top" aria-label="DUCK Produção Musical — início">
          <img src={asset.mark} alt="" className="brand-mark" />
          <span className="brand-wordmark">DUCK</span>
          <span className="brand-caption">produção musical</span>
        </a>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Fechar" : "Menu"}</span>
          <span className="menu-bars" aria-hidden="true"><i /><i /></span>
        </button>

        <nav id="primary-navigation" className={`primary-nav ${menuOpen ? "is-open" : ""}`}>
          <a href="#studio" onClick={() => setMenuOpen(false)}>O estúdio</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Serviços</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Método</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a>
          <a className="nav-cta" href="https://duck.46graus.com/" target="_blank" rel="noreferrer">
            Ouvir o trabalho <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <img src={asset.hero} alt="" />
          </div>
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-content page-frame">
            <div className="hero-kicker"><span className="live-dot" /> Aracaju · Sergipe · Brasil</div>
            <h1 id="hero-title">Sua ideia<br /><em>já tem pulso.</em></h1>
            <p className="hero-lede">A DUCK transforma intenção em som: beats, gravação, mixagem e masterização para artistas que não querem soar como qualquer um.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => navigate("contact")}>Começar uma sessão <ArrowDownRight size={18} /></button>
              <a className="text-link" href="#services">Conhecer o processo <span>↘</span></a>
            </div>
          </div>

          <div className="hero-side-note" aria-hidden="true">
            <span>DUCK / SESSION 001</span>
            <span>POP · TRAP · MPB · HIP HOP</span>
          </div>
          <div className="hero-scroll-hint"><span>desça para ouvir a ideia</span><ChevronDown size={16} /></div>
        </section>

        <section className="signal-strip" aria-label="Indicadores da DUCK">
          <div className="signal-wave"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
          <div className="signal-copy"><Sparkles size={15} /> produção com identidade</div>
          <div className="signal-wave signal-wave-right"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
        </section>

        <section className="intro-section page-frame" id="studio">
          <div className="section-marker">01 / o estúdio</div>
          <div className="intro-layout">
            <div className="intro-statement">
              <p className="eyebrow">Não é só terminar uma faixa.</p>
              <h2>É encontrar o lugar onde ela <em>fica viva.</em></h2>
              <p className="body-copy">A DUCK nasceu em Aracaju para trabalhar no ponto de encontro entre técnica e intenção. Cada escolha — um kick, uma pausa, uma voz mais perto — precisa carregar a identidade de quem está criando.</p>
              <a className="arrow-link" href="https://duck.46graus.com/" target="_blank" rel="noreferrer">Ver o universo DUCK <ArrowUpRight size={17} /></a>
            </div>
            <figure className="editorial-image intro-image">
              <img src={asset.detail} alt="Mesa de mixagem com faders e elementos de uma sessão de estúdio" loading="lazy" />
              <figcaption><span>nota de sessão</span><span>detalhe importa</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="numbers-section page-frame" aria-label="Números da DUCK">
          <div className="numbers-heading"><span className="eyebrow">uma trajetória em movimento</span><AudioLines size={28} strokeWidth={1.2} /></div>
          <div className="numbers-grid">
            <div className="number-item"><strong>36M<span>+</span></strong><small>streams</small></div>
            <div className="number-item"><strong>40<span>+</span></strong><small>lançamentos</small></div>
            <div className="number-item"><strong>1.4K<span>+</span></strong><small>seguidores</small></div>
            <div className="number-note"><span>dados de catálogo</span><p>Um histórico que cresce faixa por faixa, sem atalhos para a identidade.</p></div>
          </div>
        </section>

        <section className="services-section page-frame" id="services">
          <div className="services-header">
            <div><div className="section-marker">02 / serviços</div><h2>Do primeiro beat<br />ao <em>arquivo final.</em></h2></div>
            <p className="services-intro">Você pode chegar com uma referência, uma voz no celular ou apenas uma sensação. A sessão começa onde a ideia estiver.</p>
          </div>
          <div className="services-layout">
            <div className="services-list">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <button key={service.number} className={`service-row ${activeService === index ? "is-active" : ""}`} onClick={() => setActiveService(index)} aria-pressed={activeService === index}>
                    <span className="service-number">{service.number}</span>
                    <span className="service-icon"><Icon size={21} strokeWidth={1.4} /></span>
                    <span className="service-title">{service.title}</span>
                    <ArrowUpRight className="service-arrow" size={18} />
                  </button>
                );
              })}
            </div>
            <div className="service-detail-panel">
              <div className="detail-topline"><span>sessão selecionada</span><span>{services[activeService].number} / 04</span></div>
              <div className="detail-icon"><ActiveServiceIcon size={30} strokeWidth={1.2} /></div>
              <h3>{services[activeService].title}</h3>
              <p>{services[activeService].description}</p>
              <div className="detail-footer"><span>DUCK / workflow</span><span className="detail-wave">∿∿∿</span></div>
            </div>
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="page-frame process-layout">
            <div className="process-image-wrap">
              <img src={asset.room} alt="Sala de escuta com monitores de estúdio" loading="lazy" />
              <span className="image-stamp">listen<br />closely</span>
            </div>
            <div className="process-content">
              <div className="section-marker">03 / método</div>
              <h2>Um bom processo<br />deixa a música <em>respirar.</em></h2>
              <p className="body-copy">Não existe fórmula que substitua escuta. O método da DUCK organiza o caminho para que a técnica apoie a emoção — e não o contrário.</p>
              <div className="process-list">
                {process.map(([number, title, description]) => (
                  <div className="process-step" key={number}>
                    <span>{number}</span><div><h3>{title}</h3><p>{description}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="manifesto-section page-frame">
          <div className="manifesto-mark"><img src={asset.mark} alt="" /></div>
          <div className="manifesto-copy"><span className="eyebrow">manifesto / duck</span><blockquote>“A faixa não precisa gritar para ser lembrada. Ela precisa ser <em>verdadeira</em> no lugar certo.”</blockquote><span className="manifesto-signature">DUCK PRODUÇÃO MUSICAL</span></div>
        </section>

        <section className="contact-section page-frame" id="contact">
          <div className="contact-card">
            <div className="contact-copy">
              <div className="section-marker">04 / contato</div>
              <h2>Vamos criar<br /><em>juntos?</em></h2>
              <p>Conte o que você está construindo, em que ponto a música está e o que ela precisa dizer. A próxima sessão começa com uma conversa.</p>
              <div className="contact-links">
                <a href="https://wa.me/5579996026590" target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp <ArrowUpRight size={15} /></a>
                <a href="mailto:duck-beats@hotmail.com"><Mail size={17} /> duck-beats@hotmail.com <ArrowUpRight size={15} /></a>
                <a href="https://www.instagram.com/duck4s" target="_blank" rel="noreferrer"><Instagram size={17} /> @duck4s <ArrowUpRight size={15} /></a>
              </div>
            </div>
            <div className="qr-card">
              <div className="qr-label"><span>acesse o site</span><ArrowUpRight size={16} /></div>
              <img src={asset.qr} alt="Código QR para acessar o site da DUCK Produção Musical" loading="lazy" />
              <div className="qr-url">duck.46graus.com</div>
            </div>
          </div>
          <div className="location-line"><MapPin size={16} /> Aracaju · Sergipe · Brasil <span /> atendimento para artistas do Brasil e do exterior</div>
        </section>
      </main>

      <footer className="site-footer page-frame">
        <a className="brand-lockup footer-brand" href="#top" aria-label="Voltar ao início">
          <img src={asset.mark} alt="" className="brand-mark" /><span className="brand-wordmark">DUCK</span><span className="brand-caption">produção musical</span>
        </a>
        <span>© {new Date().getFullYear()} DUCK Produção Musical</span>
        <a href="#top" className="footer-top">voltar ao topo ↑</a>
      </footer>
    </div>
  );
}
