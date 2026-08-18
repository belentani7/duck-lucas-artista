/*
 * Singles / direção de design: arquivo de artista com objetos físicos em suspensão.
 * Cada crédito é uma pequena ficha de catálogo; o disco desliza para fora da capa
 * e reage ao ponteiro. O texto sobre percepção sonora é artístico e fenomenológico,
 * sem diagnosticar ni atribuir capacidades clínicas no sustitución de evaluación profesional.
 */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowLeft, ArrowUpRight, Headphones, Play, Sparkles } from "lucide-react";
import { Link } from "wouter";
import ShaderBackdrop from "@/components/ShaderBackdrop";

const covers = [
  { title: "Posturadona", artist: "Luiz Cinnamon", type: "Instrumental · Gravação · Mixagem · Masterização", image: "/manus-storage/posturadona_9e3da23e.png", href: "https://youtu.be/KEEfn6lgssM?si=ADs9--kVskAtEmNd", tone: "green" },
  { title: "Tititi", artist: "Leones", type: "Instrumental · Gravação · Mixagem · Masterização", image: "/manus-storage/tititi_ccc1cdb3.png", href: "https://open.spotify.com/intl-pt/track/3edfwApBI2x5QL4MHK13Re?si=7accbb981f9a4e76", tone: "violet" },
  { title: "Cheguei Tão Longe", artist: "Leones ft. Chrislops", type: "Instrumental · Gravação · Mixagem · Masterização", image: "/manus-storage/cheguei_371e900f.png", href: "https://www.youtube.com/watch?v=Uxt24afz3HM", tone: "cream" },
  { title: "I Wrote a Song", artist: "Belentani", type: "Instrumental · Mixagem · Masterização", image: "/manus-storage/i-wrote-a-song_2cbcd3e9.jpg", href: "https://www.youtube.com/watch?v=2iaAAzN0__Y", tone: "blue" },
  { title: "Heart Breaking", artist: "Belentani", type: "Instrumental · Mixagem · Masterização", image: "/manus-storage/heart-breaking_b9462557.jpg", href: "https://www.youtube.com/watch?v=5MClO2y0OLM", tone: "red" },
  { title: "Baila conmigo", artist: "Belentani", type: "Instrumental · Mixagem · Masterização", image: "/manus-storage/baila-conmigo_cbb3e91e.jpg", href: "https://www.youtube.com/watch?v=4Hsy6TKp6ys", tone: "orange" },
];

export default function Singles() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = cardsRef.current;
    if (!scope) return;
    const cards = Array.from(scope.querySelectorAll<HTMLElement>("[data-single-card]"));
    const cleanups = cards.map((card) => {
      const vinyl = card.querySelector<HTMLElement>("[data-vinyl]");
      const sleeve = card.querySelector<HTMLElement>("[data-sleeve]");
      if (!vinyl || !sleeve) return () => undefined;
      const onEnter = () => {
        gsap.to(vinyl, { x: 76, rotation: 10, scale: 1.08, duration: 0.62, ease: "power3.out", overwrite: true });
        gsap.to(sleeve, { y: -8, scale: 1.025, duration: 0.42, ease: "power2.out", overwrite: true });
      };
      const onLeave = () => {
        gsap.to(vinyl, { x: 0, rotation: 0, scale: 1, duration: 0.55, ease: "power3.inOut", overwrite: true });
        gsap.to(sleeve, { y: 0, scale: 1, duration: 0.45, ease: "power2.out", overwrite: true });
      };
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      return () => { card.removeEventListener("mouseenter", onEnter); card.removeEventListener("mouseleave", onLeave); };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <div className="singles-page">
      <ShaderBackdrop className="singles-shader" variant="violet" />
      <header className="singles-header page-frame">
        <Link href="/" className="back-link"><ArrowLeft size={16} /> início</Link>
        <span className="singles-header-mark">DUCK / catálogo</span>
        <Link href="/studio" className="studio-link">abrir Studio <ArrowUpRight size={15} /></Link>
      </header>
      <main>
        <section className="singles-hero page-frame">
          <div className="section-marker">arquivo de faixas / 2026</div>
          <div className="singles-hero-layout">
            <div><h1>Singles que<br /><em>ficam girando.</em></h1><p>Uma coleção de trabalhos, créditos e colaborações de Duck. Passe o mouse nas capas: o disco sai do envelope porque a música nunca fica totalmente parada.</p></div>
            <div className="catalog-note"><Headphones size={21} /><span>pop · pop br<br />trap · hiphop</span></div>
          </div>
        </section>

        <section className="singles-catalog page-frame" ref={cardsRef} aria-label="Catálogo de singles">
          {covers.map((cover, index) => (
            <a key={cover.title} href={cover.href} target="_blank" rel="noreferrer" className={`single-card single-tone-${cover.tone}`} data-single-card>
              <div className="single-index">0{index + 1} / 06</div>
              <div className="record-stage"><div className="vinyl-record" data-vinyl><span className="record-label">DUCK</span><span className="record-groove groove-a" /><span className="record-groove groove-b" /></div><div className="sleeve" data-sleeve><img src={cover.image} alt={`Capa de ${cover.title}`} loading="lazy" /><span className="sleeve-shine" /></div></div>
              <div className="single-meta"><div><h2>{cover.title}</h2><p>{cover.artist}</p></div><ArrowUpRight size={18} /><span className="single-type">{cover.type}</span></div>
            </a>
          ))}
        </section>

        <section className="sound-layers page-frame">
          <div className="sound-layers-mark"><Sparkles size={27} /></div>
          <div className="sound-layers-copy"><span className="eyebrow">escuta em camadas</span><h2>Duck escuta uma faixa como quem abre uma <em>mesa de mixagem.</em></h2><p>Na prática musical, isso descreve uma atenção treinada para perceber simultaneamente relações de timbre, frequência, dinâmica, espaço e intenção. Em vez de ouvir apenas “a música inteira”, ele procura o que cada camada está fazendo e como uma escolha altera a outra.</p><p>É uma linguagem de ofício — uma maneira de explicar uma percepção artística e técnica desenvolvida com estudo, repetição e trabalho real. Não é um diagnóstico clínico nem uma afirmação de capacidades sobrenaturais: é escuta crítica aplicada à produção.</p><div className="sound-layer-tags"><span>timbre</span><span>frequência</span><span>dinâmica</span><span>espaço</span><span>intenção</span></div></div>
        </section>

        <section className="international-section page-frame"><div className="international-label"><span className="live-dot" /> alcance</div><div><h2>De Aracaju para artistas de todo o Brasil e do exterior.</h2><p>Duck trabalha com projetos conectados ao Brasil e também com artistas e colaborações que atravessam fronteiras — incluindo Estados Unidos e Europa — de forma presencial ou virtual.</p><a className="arrow-link" href="https://duck.46graus.com/portfolio/" target="_blank" rel="noreferrer">ver créditos completos <ArrowUpRight size={17} /></a></div></section>
      </main>
      <footer className="singles-footer page-frame"><span>Lucas / Duck</span><Link href="/studio">próximo: Studio →</Link></footer>
    </div>
  );
}
