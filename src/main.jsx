import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Instagram, Mail, Menu, X, Play, Sparkles, Target, Linkedin } from 'lucide-react';
import './style.css';

const skills = ['Meta Ads','Performance Marketing','Creative Strategy','Short-form Video','Brand Building','Social Media','AI Content Workflows','Web3 & E-commerce'];
const projects = [
  ['01','PERFORMANCE MARKETING','Campaigns built to convert.','Audience research, creative testing and campaign optimization across Meta and Instagram Ads.',['Meta Ads','Lead Generation','Optimization'],'lime'],
  ['02','VIDEO EDITING','Long-form in. Scroll-stopping clips out.','Repurposing livestreams into high-retention clips with tight pacing, captions and sound design.',['Reels & Shorts','Captions','Sound Design'],'purple'],
  ['03','BRAND & SOCIAL','Make the brand hard to ignore.','Content planning and promotional creative for local businesses, real estate and personal brands.',['Content Strategy','Creative','Growth'],'orange'],
  ['04','WEB3 & E-COMMERCE','Community meets commerce.','Social channel management, product promotion and community growth for digital-first projects.',['Telegram','Shopify','Community'],'blue']
];
const jobs = [
  ['2026 — NOW','Founder, Pelquant','Digital marketing and creative services for small businesses and personal brands.'],
  ['2026','Freelance Video Editor','Delivered 16 publish-ready clips in one week for a US-based streamer.'],
  ['2025 — 2026','Promotional Page Founder','Produced and promoted short-form content for local businesses.'],
  ['2025','Real Estate Digital Marketing','Created property creatives and ran location- and interest-based Instagram campaigns.'],
  ['2024 — 2025','Social Media Manager, BATSOL','Managed Instagram, Facebook, X and Telegram for a Web3 token project.']
];

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="site">
    <div className="grain" />
    <nav className={scrolled ? 'nav scrolled' : 'nav'}>
      <a className="brand" href="#home"><i /> NAVED MEMON<span>®</span></a>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X /> : <Menu />}</button>
      <div className={menu ? 'links open' : 'links'}>
        { [['Work','#work'],['About','#about'],['Experience','#experience']].map(([t,h]) => <a key={t} href={h} onClick={() => setMenu(false)}>{t}</a>) }
        <a className="navcta" href="mailto:navedmemon765@gmail.com">Let's talk <ArrowUpRight size={15} /></a>
      </div>
    </nav>
    <main>
      <section className="hero wrap" id="home">
        <div className="top"><span className="eyebrow"><b /> INDEPENDENT CREATIVE & MARKETING PARTNER</span><span className="mono">AHMEDABAD, INDIA · WORKING WORLDWIDE</span></div>
        <h1>Creative thinking.<br /><em>Measurable</em> growth<span className="lime">.</span></h1>
        <div className="intro"><p>I’m Naved — a digital marketing and creative strategist blending performance ads, sharp content and scroll-stopping video to help brands get noticed and grow.</p><a className="round" href="#work" aria-label="Explore work"><ArrowDownRight /></a></div>
        <div className="art"><div className="gridbg" /><div className="orbit one" /><div className="orbit two" /><div className="core">MAKE<br />IT MOVE<span>✳</span></div><label className="lab la">IDEA → IMPACT</label><label className="lab lb">STRATEGY / CREATIVE / GROWTH</label><div className="float fa"><Target /><span>Built for<br /><b>performance</b></span></div><div className="float fb"><Sparkles /><span>Made to<br /><b>stand out</b></span></div></div>
        <div className="ticker"><div>{Array.from({length:2},(_,i)=><span key={i}>STRATEGY <b>✳</b> PERFORMANCE <b>✳</b> CREATIVE <b>✳</b> CONTENT <b>✳</b> GROWTH <b>✳</b> </span>)}</div></div>
      </section>
      <section className="wrap section" id="work"><div className="head"><div><small>01 / WHAT I DO</small><h2>Work that works<span className="lime">.</span></h2></div><p>Strategy first. Creative always.<br />Results in the details.</p></div>
        <div className="cards">{projects.map(p=><article className={'project '+p[5]} key={p[0]}><div className="meta">{p[0]} / {p[1]} <ArrowUpRight /></div><div className="graphic">{p[0]==='01'?<div className="bars"><i/><i/><i/><i/><i/><b>↗</b></div>:p[0]==='02'?<div className="video"><Play fill="currentColor"/><small>PLAY / EDIT / REPEAT</small></div>:p[0]==='03'?<div className="brandart">BRAND<br/>ENERGY <span>✳</span></div>:<div className="web3">WEB<b>3.0</b><i>↗</i></div>}</div><h3>{p[2]}</h3><p>{p[3]}</p><div className="tags">{p[4].map(t=><span key={t}>{t}</span>)}</div></article>)}</div>
        <p className="note">Service areas based on my experience. Detailed case studies and campaign metrics can be added as they become available.</p>
      </section>
      <section className="about" id="about"><div className="wrap section"><div className="head"><div><small>02 / A LITTLE ABOUT ME</small><h2>Good ideas deserve<br />great execution<span className="lime">.</span></h2></div></div><div className="aboutgrid"><div className="stamp"><span>NM<span>.</span></span><small>CREATIVE PARTNER</small><i>CURIOUS BY NATURE · BUILT TO CREATE ·</i></div><div className="aboutcopy"><h3>I bring together the analytical side of marketing and the instinct of a creative.</h3><p>From building audiences and optimizing paid campaigns to editing short-form video and shaping brand content, I like turning a brief into work people actually notice.</p><p>My experience spans real estate, Web3, e-commerce and local-service brands, with remote collaboration for clients across time zones.</p><div className="skills">{skills.map(s=><span key={s}>{s}</span>)}</div><a className="textlink" href="mailto:navedmemon765@gmail.com">Have a project in mind? <ArrowUpRight size={17} /></a></div></div></div></section>
      <section className="wrap section experience" id="experience"><div className="head"><div><small>03 / THE JOURNEY</small><h2>Experience<span className="lime">.</span></h2></div><p>A mix of independent work,<br />creative production and growth.</p></div><div className="timeline">{jobs.map((j,i)=><div className="job" key={j[1]}><time>{j[0]}</time><span className="num">{String(i+1).padStart(2,'0')}</span><div><h3>{j[1]}</h3><p>{j[2]}</p></div><ArrowUpRight /></div>)}</div><div className="education"><div><small>EDUCATION</small><h3>Master of Computer Applications (MCA)</h3><p>LJ University, Ahmedabad · 2024–2026</p></div><div><small>ALSO LEARNING</small><h3>UX, AI & creative workflows</h3><p>Google UX Design Certificate · Prompt Engineering with GPT · AWS Academy</p></div></div></section>
      <section className="contact" id="contact"><div className="wrap"><small>04 / YOUR MOVE</small><h2>Got a good one?<br /><em>Let’s make it</em><br />happen<span className="lime">.</span></h2><div className="contactbottom"><p>Tell me what you’re building.<br />Let’s turn the next idea into impact.</p><a href="mailto:navedmemon765@gmail.com">Start a conversation <ArrowUpRight /></a></div><div className="social"><a href="mailto:navedmemon765@gmail.com"><Mail /> navedmemon765@gmail.com</a><a href="https://www.linkedin.com/in/memon-naved/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram /> Instagram</a></div></div></section>
    </main>
    <footer><a className="brand" href="#home"><i /> NAVED MEMON<span>®</span></a><small>INDEPENDENT BY DESIGN. CREATIVE BY DEFAULT.</small><a href="#home">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} NAVED MEMON</small></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App />);
