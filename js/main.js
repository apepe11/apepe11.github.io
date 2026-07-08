

let currentLang = 'it';
let allRepos = [];
let activeFilter = 'all';
let searchQuery = '';

const translations = {
  it: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_education: "Formazione",
    nav_repo: "GitHub Repo",
    nav_contact: "Contatti",
    
    hero_tag: "Ingegnere Informatico · AI & Data Engineering",
    hero_typed_fallback: "Ingegneria Informatica @ UniPi",
    hero_subtitle: "Laureato in Ingegneria Informatica all'Università di Pisa, attualmente sto frequentando il corso magistrale in <strong>Artificial Intelligence &amp; Data Engineering</strong>. Appassionato di innovazione tecnologica, AI e sistemi distribuiti.",
    btn_contact_me: "Contattami",
    btn_view_work: "Vedi Progetti",
    hero_born: "Nato il 13/04/2004",
    hero_scroll: "Scorri",
    
    about_label: "Chi sono",
    about_title: "Profilo Professionale",
    about_p1: "Laureato in <strong>Ingegneria Informatica</strong> presso l'Università di Pisa, ho sviluppato solide competenze nello sviluppo software, architetture cloud e sistemi di gestione dati.",
    about_p2: "Attualmente sto approfondendo la mia specializzazione nel corso magistrale in <strong>Artificial Intelligence and Data Engineering (AIDE)</strong> presso lo stesso Ateneo, con focus su intelligenza artificiale, analisi avanzata dei dati e sistemi software complessi.",
    about_p3: "Unisco una profonda passione per l'<strong>innovazione tecnologica</strong> ad eccellenti capacità di problem solving e una forte attitudine al lavoro di squadra, maturate sia in contesti progettuali complessi che in esperienze dinamiche sul campo.",
    
    stat_degree: "Percorso Magistrale",
    stat_degree_val: "AIDE",
    stat_cfu: "Sviluppo Software",
    stat_cfu_val: "3+ Anni",
    stat_english: "Cambridge English",
    stat_passion: "Passione AI & IoT",
    
    skill_ai: "Intelligenza Artificiale",
    skill_prog: "Linguaggi",
    skill_algo: "Algoritmi & ASD",
    skill_net: "Reti Informatiche",
    skill_iot: "IoT & Sistemi Embedded",
    skill_iot_net: "Reti IoT",
    skill_protocols: "Protocolli di Rete",
    skill_tools: "Strumenti & OS",
    skill_media: "Produzione Multimediale",
    
    edu_label: "Formazione",
    edu_title: "Percorso Accademico",
    edu_master_date: "Mar 2026 — In corso",
    edu_master_title: "Laurea Magistrale in AI &amp; Data Engineering",
    edu_master_sub: "Università di Pisa · AIDE",
    edu_master_body: "Specializzazione focalizzata su intelligenza artificiale, analisi avanzata dei dati e sistemi software complessi. Percorso d'eccellenza che combina le più recenti tecnologie AI con solide basi ingegneristiche.",
    badge_ongoing: "In corso",
    edu_bach_date: "Ott 2022 — Apr 2026",
    edu_bach_title: "Laurea Triennale in Ingegneria Informatica (L-8)",
    edu_bach_sub: "Università di Pisa",
    edu_bach_body: "Eccellente background quantitativo e tecnologico, con menzione speciale per gli esami ad alto impatto analitico e progettuale. <strong>Tesi:</strong> valutazione del consumo energetico di diverse implementazioni del protocollo HTTP/3 su dispositivi IoT (Raspberry Pi 3B+).",
    badge_thesis: "Tesi: HTTP/3 su IoT",
    edu_hs_title: "Diploma di Liceo Scientifico — Scienze Applicate",
    edu_hs_body: "Percorso scientifico con orientamento tecnico-applicativo, base solida per gli studi ingegneristici successivi. Per la tesi di maturità ho sviluppato un sito web per la somministrazione di questionari d'orientamento.",
    
    repo_title: "I Miei Progetti GitHub",
    search_placeholder: "Cerca progetto...",
    filter_all: "Tutti",
    no_projects_found: "Nessun progetto trovato.",
    
    cert_label: "Certificazioni",
    cert_title: "Corsi &amp; Certificazioni",
    cert_cambridge: "Cambridge Assessment English · Punteggio 158/160 · conseguita nel 2021",
    cert_eipass: "European Informatics Passport — Certificazione delle competenze informatiche primarie, conseguita nel 2021",
    cert_samsung: "PCTO in collaborazione con Samsung, focalizzato sul design e sviluppo di app mobile (71 ore, 2020-2021)",
    cert_eni: "Corporate University · Percorso formativo PCTO sulle dinamiche di impresa ed energetiche (2020-2021)",
    cert_game_title: "Gamification &amp; Algoritmi",
    cert_game_desc: "Progetti PON focalizzati sul pensiero computazionale applicato e progettazione algoritmica (120 ore, 2019-2021)",
    
    exp_label: "Esperienze",
    exp_title: "Esperienza Complementare",
    exp_job: "Bagnino di Salvataggio",
    exp_where: "Hotel Kiris (SA.TRO S.R.L.) · Viggiano · Stagioni Estive 2021–2025",
    exp_desc: "Brevetto ufficiale della Società Nazionale di Salvamento con abilitazione <strong>BLS-AED</strong> (Rianimazione e Defibrillazione). Esperienza fondamentale per lo sviluppo di competenze relazionali e critiche: gestione avanzata dello stress, tempestività decisionale in situazioni d'emergenza, vigilanza attiva e alto senso di responsabilità.",
    badge_bls: "BLS-AED Certificato",
    badge_emerg: "Gestione Emergenze",
    
    lang_label: "Lingue",
    lang_title: "Competenze Linguistiche",
    lang_it_lvl: "Madrelingua",
    lang_it_note: "Lingua madre utilizzata in ambito professionale, accademico e relazionale.",
    lang_en_note: "Cambridge Assessment English · Punteggio 158/160 (2021)<br>Idoneità linguistica accademica conseguita presso l'Università di Pisa (2023).",
    
    footer_title: "Hai un progetto in mente?",
    footer_copy: "© 2026 Antonio Pepe · Tutti i diritti riservati · <br><em>Autorizzo il trattamento dei dati personali ai sensi del D.Lgs. 196/2003 e GDPR 2016/679</em>",

    repo1_desc: "Progetto di tesi triennale. Misura il consumo energetico del protocollo HTTP/3 nelle tre implementazioni principali — <strong>Quiche, OpenSSL e Ngtcp2</strong> — su dispositivi IoT (Raspberry Pi 3B+), con automazione via Otii Arc e analisi statistica in Python.",
    repo2_desc: "App Android che unisce musica e benessere emotivo. Monitora il battito cardiaco tramite smartwatch (Wear OS) e dispositivo EEG per suggerire playlist personalizzate in base allo stato d'umore. Stack: <strong>Kotlin + Jetpack Compose, Flask, PostgreSQL, Docker</strong>.",
    repo3_desc: "Sistema integrato di monitoraggio remoto della salute per l'esame di IoT. Nodi sensori <strong>Contiki-NG</strong> raccolgono frequenza cardiaca e saturazione O₂ via CoAP, un backend Python salva su MySQL e una dashboard Tkinter mostra i dati in tempo reale."
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_education: "Education",
    nav_repo: "GitHub Repos",
    nav_contact: "Contact",
    
    hero_tag: "Computer Engineer · AI & Data Engineering",
    hero_typed_fallback: "Computer Engineering @ UniPi",
    hero_subtitle: "Graduated in Computer Engineering at the University of Pisa, currently attending the Master's Degree in <strong>Artificial Intelligence &amp; Data Engineering</strong>. Passionate about technological innovation, AI, and distributed systems.",
    btn_contact_me: "Contact Me",
    btn_view_work: "View Projects",
    hero_born: "Born on 04/13/2004",
    hero_scroll: "Scroll",
    
    about_label: "About Me",
    about_title: "Professional Profile",
    about_p1: "Graduated in <strong>Computer Engineering</strong> from the University of Pisa, I have developed solid skills in software development, cloud architectures, and data management systems.",
    about_p2: "I am currently specializing through a Master's degree in <strong>Artificial Intelligence and Data Engineering (AIDE)</strong> at the same University, focusing on AI, advanced data analysis, and complex software systems.",
    about_p3: "I combine a deep passion for <strong>technological innovation</strong> with excellent problem-solving skills and a strong aptitude for teamwork, gained both in complex project environments and dynamic hands-on experiences.",
    
    stat_degree: "Master's Course",
    stat_degree_val: "AIDE",
    stat_cfu: "Software Dev",
    stat_cfu_val: "3+ Years",
    stat_english: "Cambridge English",
    stat_passion: "AI & IoT Passion",
    
    skill_ai: "Artificial Intelligence",
    skill_prog: "Languages",
    skill_algo: "Algorithms & DS",
    skill_net: "Computer Networks",
    skill_iot: "IoT & Embedded Systems",
    skill_iot_net: "IoT Networks",
    skill_protocols: "Network Protocols",
    skill_tools: "Tools & OS",
    skill_media: "Multimedia Production",
    
    edu_label: "Education",
    edu_title: "Academic Background",
    edu_master_date: "Mar 2026 — Ongoing",
    edu_master_title: "Master's Degree in AI &amp; Data Engineering",
    edu_master_sub: "University of Pisa · AIDE",
    edu_master_body: "Specialization focusing on artificial intelligence, advanced data analysis, and complex software systems. A program of excellence combining the latest AI technologies with a solid engineering foundation.",
    badge_ongoing: "Ongoing",
    edu_bach_date: "Oct 2022 — Apr 2026",
    edu_bach_title: "Bachelor's Degree in Computer Engineering (L-8)",
    edu_bach_sub: "University of Pisa",
    edu_bach_body: "Excellent quantitative and technological background, with special mention for exams with high analytical and design impact. <strong>Thesis:</strong> Energy consumption evaluation of different HTTP/3 protocol implementations on IoT devices (Raspberry Pi 3B+).",
    badge_thesis: "Thesis: HTTP/3 on IoT",
    edu_hs_title: "High School Diploma — Applied Sciences",
    edu_hs_body: "Scientific high school with a technical-applicative orientation, providing a solid foundation for subsequent engineering studies. For the graduation project I developed a web app for administering orientation questionnaires.",
    
    repo_title: "My GitHub Projects",
    search_placeholder: "Search project...",
    filter_all: "All",
    no_projects_found: "No projects found.",
    
    cert_label: "Certifications",
    cert_title: "Courses &amp; Certifications",
    cert_cambridge: "Cambridge Assessment English · Score 158/160 · achieved in 2021",
    cert_eipass: "European Informatics Passport — Certification of primary computer skills, achieved in 2021",
    cert_samsung: "PCTO in partnership with Samsung, focusing on mobile app design and development (71 hours, 2020-2021)",
    cert_eni: "Corporate University · PCTO training path on business and energy dynamics (2020-2021)",
    cert_game_title: "Gamification &amp; Algorithms",
    cert_game_desc: "PON projects focusing on applied computational thinking and algorithmic design (120 hours, 2019-2021)",
    
    exp_label: "Experience",
    exp_title: "Complementary Experience",
    exp_job: "Lifeguard",
    exp_where: "Hotel Kiris (SA.TRO S.R.L.) · Viggiano · Summer Seasons 2021–2025",
    exp_desc: "Official license of the National Lifesaving Society with <strong>BLS-AED</strong> qualification (Resuscitation and Defibrillation). Key experience for developing interpersonal and critical skills: advanced stress management, timely decision-making in emergency situations, active vigilance, and a high sense of responsibility.",
    badge_bls: "BLS-AED Certified",
    badge_emerg: "Emergency Management",
    
    lang_label: "Languages",
    lang_title: "Language Proficiency",
    lang_it_lvl: "Native",
    lang_it_note: "Native language used in professional, academic, and social environments.",
    lang_en_note: "Cambridge Assessment English · Score 158/160 (2021)<br>Academic language proficiency qualification achieved at the University of Pisa (2023).",
    
    footer_title: "Have a project in mind?",
    footer_copy: "© 2026 Antonio Pepe · All rights reserved · <br><em>I authorize the processing of my personal data pursuant to Legislative Decree 196/2003 and GDPR 2016/679</em>",

    repo1_desc: "Bachelor thesis project. Measures the energy consumption of the HTTP/3 protocol across three main implementations — <strong>Quiche, OpenSSL, and Ngtcp2</strong> — on IoT devices (Raspberry Pi 3B+), automated via Otii Arc and statistically analyzed in Python.",
    repo2_desc: "Android app bridging music and emotional well-being. Monitors heart rate via smartwatch (Wear OS) and EEG device to suggest personalized playlists based on mood. Stack: <strong>Kotlin + Jetpack Compose, Flask, PostgreSQL, Docker</strong>.",
    repo3_desc: "Integrated remote health monitoring system for the IoT exam. <strong>Contiki-NG</strong> sensor nodes collect heart rate and O₂ saturation via CoAP; a Python backend saves data to MySQL, and a Tkinter dashboard displays real-time data."
  }
};

function setLang(lang) {
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      element.setAttribute("placeholder", translations[lang][key]);
    }
  });

  document.documentElement.lang = lang;

  const btnIt = document.getElementById("btn-it");
  const btnEn = document.getElementById("btn-en");
  
  if (lang === 'it') {
    btnIt.classList.add("active");
    btnEn.classList.remove("active");
  } else {
    btnEn.classList.add("active");
    btnIt.classList.remove("active");
  }

  renderRepos(activeFilter, searchQuery);
}

const typewriterStrings = {
  it: ["Ingegnere Informatico", "Studente AI & Data Engineering", "Sviluppatore Open Source"],
  en: ["Computer Engineer", "AI & Data Engineering Student", "Open Source Developer"]
};
let typewriterIdx = 0;
let charIdx = 0;
let isDeleting = false;
let typewriterTimeout = null;

function runTypewriter() {
  const textElement = document.getElementById('typewriter-text');
  if (!textElement) return;
  
  const strings = typewriterStrings[currentLang];
  const fullText = strings[typewriterIdx];
  
  if (isDeleting) {
    textElement.textContent = fullText.substring(0, charIdx - 1);
    charIdx--;
  } else {
    textElement.textContent = fullText.substring(0, charIdx + 1);
    charIdx++;
  }
  
  let typingSpeed = isDeleting ? 30 : 80;
  
  if (!isDeleting && charIdx === fullText.length) {
    typingSpeed = 2000; 
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    typewriterIdx = (typewriterIdx + 1) % strings.length;
    typingSpeed = 500; 
  }
  
  typewriterTimeout = setTimeout(runTypewriter, typingSpeed);
}

function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let particlesArray = [];
  const numberOfParticles = 55;
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  const mouse = {
    x: null,
    y: null,
    radius: 130
  };
  
  window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });
  
  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });
  
  class Particle {
    constructor(x, y, dx, dy, size, color) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.size = size;
      this.color = color;
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    
    update() {
      if (this.x > canvas.width || this.x < 0) {
        this.dx = -this.dx;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.dy = -this.dy;
      }

      let mx = mouse.x - this.x;
      let my = mouse.y - this.y;
      let distance = Math.sqrt(mx * mx + my * my);
      if (distance < mouse.radius + this.size) {
        if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
          this.x += 1.5;
        }
        if (mouse.x > this.x && this.x > this.size * 10) {
          this.x -= 1.5;
        }
        if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
          this.y += 1.5;
        }
        if (mouse.y > this.y && this.y > this.size * 10) {
          this.y -= 1.5;
        }
      }
      
      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    }
  }
  
  function init() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
      let size = (Math.random() * 1.5) + 1.2;
      let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
      let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
      let dx = (Math.random() * 0.3) - 0.15;
      let dy = (Math.random() * 0.3) - 0.15;
      let color = 'rgba(0, 242, 254, 0.3)';
      particlesArray.push(new Particle(x, y, dx, dy, size, color));
    }
  }
  
  function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        let dx = particlesArray[a].x - particlesArray[b].x;
        let dy = particlesArray[a].y - particlesArray[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 130) {
          let opacity = 1 - (distance / 130);
          ctx.strokeStyle = `rgba(124, 58, 237, ${opacity * 0.12})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }
  
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
    connect();
  }
  
  init();
  animate();
}

function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;
  
  window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

const fallbackRepos = [
  {
    name: "ValuationEneryConsumptionVariousVersionsHTTP3",
    html_url: "https://github.com/apepe11/ValuationEneryConsumptionVariousVersionsHTTP3",
    description: "", 
    language: "Python",
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: "HeartMusic",
    html_url: "https://github.com/apepe11/HeartMusic",
    description: "",
    language: "Kotlin",
    stargazers_count: 1,
    forks_count: 0
  },
  {
    name: "SmartHealth",
    html_url: "https://github.com/apepe11/SmartHealth",
    description: "",
    language: "C",
    stargazers_count: 0,
    forks_count: 0
  }
];

function createRepoCard(repo) {
  const card = document.createElement('a');
  card.className = 'repo-card';
  card.href = repo.html_url;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';

  const langColors = {
    Python: '#3572A5',
    Kotlin: '#A97BFF',
    C: '#555555',
    'C++': '#f34b7d',
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#563d7c',
    PHP: '#4F5D95',
    Verilog: '#b2b7f8',
    Assembly: '#6E4C13'
  };
  
  const color = langColors[repo.language] || '#71717a';
  const repoLang = repo.language || 'Code';

  let icon = '📂';
  if (repo.name.toLowerCase().includes('http3') || repo.name.toLowerCase().includes('energy') || repo.name.toLowerCase().includes('valua')) {
    icon = '⚡';
  } else if (repo.name.toLowerCase().includes('music') || repo.name.toLowerCase().includes('heart')) {
    icon = '🎵';
  } else if (repo.name.toLowerCase().includes('health') || repo.name.toLowerCase().includes('smart')) {
    icon = '🏥';
  } else if (repo.name.toLowerCase().includes('web') || repo.name.toLowerCase().includes('github.io')) {
    icon = '🌐';
  }

  let description = repo.description || '';
  if (repo.name === 'ValuationEneryConsumptionVariousVersionsHTTP3') {
    description = translations[currentLang].repo1_desc;
  } else if (repo.name === 'HeartMusic') {
    description = translations[currentLang].repo2_desc;
  } else if (repo.name === 'SmartHealth') {
    description = translations[currentLang].repo3_desc;
  } else if (!description) {
    description = currentLang === 'it' ? 'Nessuna descrizione disponibile.' : 'No description available.';
  }
  
  card.innerHTML = `
    <div class="repo-header">
      <div class="repo-icon-wrap">${icon}</div>
      <svg class="repo-link-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </div>
    <h3 class="repo-title-text">${repo.name}</h3>
    <p class="repo-desc-text">${description}</p>
    <div class="repo-footer">
      <div class="repo-lang">
        <span class="repo-lang-dot" style="background-color: ${color};"></span>
        <span>${repoLang}</span>
      </div>
      <div class="repo-stats">
        <div class="repo-stat-item" title="Stars">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span>${repo.stargazers_count}</span>
        </div>
        <div class="repo-stat-item" title="Forks">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="12" cy="12" r="3"></circle><path d="M18 15V9a4 4 0 0 0-4-4H9"></path><path d="M12 9v2"></path></svg>
          <span>${repo.forks_count}</span>
        </div>
      </div>
    </div>
  `;
  
  return card;
}

function renderRepos(filterLang = 'all', searchTxt = '') {
  const container = document.getElementById('repos-container');
  if (!container) return;
  
  let filtered = allRepos;

  if (filterLang !== 'all') {
    if (filterLang === 'C') {
      filtered = filtered.filter(repo => repo.language === 'C' || repo.language === 'C++');
    } else {
      filtered = filtered.filter(repo => repo.language === filterLang);
    }
  }

  if (searchTxt.trim() !== '') {
    const query = searchTxt.toLowerCase().trim();
    filtered = filtered.filter(repo => {
      
      let desc = repo.description || '';
      if (repo.name === 'ValuationEneryConsumptionVariousVersionsHTTP3') desc = translations[currentLang].repo1_desc;
      else if (repo.name === 'HeartMusic') desc = translations[currentLang].repo2_desc;
      else if (repo.name === 'SmartHealth') desc = translations[currentLang].repo3_desc;
      
      return repo.name.toLowerCase().includes(query) || desc.toLowerCase().includes(query);
    });
  }
  
  container.innerHTML = '';
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 4rem 0;" data-i18n="no_projects_found">
        ${translations[currentLang].no_projects_found}
      </div>
    `;
    return;
  }
  
  filtered.forEach(repo => {
    container.appendChild(createRepoCard(repo));
  });
}

async function loadGitHubStats() {
  try {
    const res = await fetch('https://api.github.com/users/apepe11');
    if (res.ok) {
      const data = await res.json();
      document.getElementById('hud-followers-count').textContent = data.followers;
      document.getElementById('hud-repos-count').textContent = data.public_repos;
      if (data.avatar_url) {
        document.getElementById('profile-avatar').src = data.avatar_url;
      }
    } else {
      
      document.getElementById('hud-followers-count').textContent = '10+';
      document.getElementById('hud-repos-count').textContent = '14';
    }
  } catch (err) {
    document.getElementById('hud-followers-count').textContent = '10+';
    document.getElementById('hud-repos-count').textContent = '14';
  }
}

async function loadGitHubRepos() {
  try {
    const res = await fetch('https://api.github.com/users/apepe11/repos?sort=pushed&per_page=100');
    if (res.ok) {
      const data = await res.json();
      
      allRepos = data.filter(repo => !repo.fork && repo.name !== 'apepe11.github.io');
      if (allRepos.length === 0) {
        allRepos = fallbackRepos;
      }
    } else {
      allRepos = fallbackRepos;
    }
  } catch (err) {
    allRepos = fallbackRepos;
  }
  renderRepos(activeFilter, searchQuery);
}

function initNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navbar = document.getElementById('navbar');
  const scrollBar = document.getElementById('scroll-bar');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    if (scrollBar) {
      scrollBar.style.width = scrolled + '%';
    }
    
    if (navbar) {
      if (winScroll > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });
}

function initProjectControls() {
  const searchInput = document.getElementById('repo-search');
  const filterBtns = document.querySelectorAll('#repo-filters .filter-btn');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderRepos(activeFilter, searchQuery);
    });
  }
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderRepos(activeFilter, searchQuery);
    });
  });
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.skills-panel, .edu-item, .cert-card, .exp-card, .lang-card, .metric-card');

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(el => {
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCursorGlow();
  initParticles();
  runTypewriter();
  initProjectControls();

  loadGitHubStats();
  loadGitHubRepos();

  initScrollReveal();

  console.log("%cANTIGRAVITY SYSTEM BOOT SUCCESSFUL.", "color: #00f2fe; font-weight: bold; font-size: 14px;");
});
