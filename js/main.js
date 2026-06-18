
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.timeline-item, .skill-card, .soft-card').forEach(el => {
      observer.observe(el);
    });

    // Stagger delays
    document.querySelectorAll('.skill-card').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.08}s`;
    });
    document.querySelectorAll('.soft-card').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;
    });
    document.querySelectorAll('.timeline-item').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.12}s`;
    });

    // Nav active state on scroll
    const sections = document.querySelectorAll('section[id], div.hero');
    const navLinks = document.querySelectorAll('nav ul a');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
      });
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
      });
    });

// Dizionario delle traduzioni
const translations = {
  it: {
    nav_about: "About",
    nav_education: "Formazione",
    nav_skills: "Skills",
    nav_exams: "Esami",
    nav_repo: "My github Repo",
    nav_contact: "Contatti",
    hero_tag: "Ingegnere Informatico · AI & Data Engineer",
    hero_subtitle: "Laureato in Ingegneria Informatica all'Università di Pisa, attualmente sto frequentando il corso magistrale in <strong>Artificial Intelligence &amp; Data Engineering</strong>. Appassionato di innovazione tecnologica, AI e sistemi distribuiti.",
    hero_born: "Nato il 13/04/2004",
    hero_scroll: "Scorri",
    about_label: "Chi sono",
    about_title: "Profilo Professionale",
    about_p1: "Laureato in <strong>Ingegneria Informatica</strong> presso l'Università di Pisa con votazione 96/110, ho sviluppato solide competenze nello sviluppo software, architetture cloud e sistemi di gestione dati.",
    about_p2: "Attualmente sto approfondendo la mia specializzazione nel corso magistrale in <strong>Artificial Intelligence and Data Engineering (AIDE)</strong> presso lo stesso Ateneo, con focus su intelligenza artificiale, analisi avanzata dei dati e sistemi software complessi.",
    about_p3: "Unisco una profonda passione per l'<strong>innovazione tecnologica</strong> ad eccellenti capacità di problem solving e una forte attitudine al lavoro di squadra, maturate sia in contesti progettuali complessi che in esperienze dinamiche sul campo.",
    stat_degree: "Votazione Laurea Triennale",
    stat_cfu: "CFU Acquisiti",
    stat_english: "Cambridge B2 Score",
    stat_highschool: "Diploma Liceo Scientifico",
    edu_label: "Formazione",
    edu_title: "Percorso Accademico",
    edu_master_date: "Mar 2026 — In corso",
    edu_master_title: "Laurea Magistrale in AI & Data Engineering",
    edu_master_sub: "Università di Pisa · AIDE",
    edu_master_body: "Specializzazione focalizzata su intelligenza artificiale, analisi avanzata dei dati e sistemi software complessi. Percorso d'eccellenza che combina le più recenti tecnologie AI con solide basi ingegneristiche.",
    badge_ongoing: "In corso",
    edu_bach_date: "Ott 2022 — Apr 2026",
    edu_bach_title: "Laurea Triennale in Ingegneria Informatica (L-8)",
    edu_bach_sub: "Università di Pisa · 96/110 — 180 CFU · 3 anni e 6 mesi",
    edu_bach_body: "Eccellente background quantitativo e tecnologico, con menzione speciale per gli esami ad alto impatto analitico e progettuale. <strong>Tesi:</strong> valutazione del consumo energetico di diverse implementazioni del protocollo HTTP/3 su dispositivi IoT (Raspberry Pi 3B+).",
    badge_thesis: "Tesi: HTTP/3 su IoT",
    edu_hs_title: "Diploma di Liceo Scientifico — Scienze Applicate",
    edu_hs_body: "Percorso scientifico con orientamento tecnico-applicativo, base solida per gli studi ingegneristici successivi.",
    skills_label: "Competenze",
    skills_title: "Skill Tecniche",
    skill_prog: "Linguaggi di Programmazione",
    skill_algo: "Algoritmi & Strutture Dati",
    skill_net: "Reti Informatiche",
    skill_ai: "Intelligenza Artificiale",
    skill_iot: "IoT & Sistemi Embedded",
    skill_iot_net: "Reti IoT",
    skill_ind: "Algoritmi Industriali",
    skill_protocols: "Protocolli di Rete",
    skill_tools: "Strumenti & OS",
    skill_media: "Produzione Multimediale",
    exams_label: "Università di Pisa",
    exams_title: "Esami",
    exams_course: "Insegnamento",
    exams_grade: "Voto",
    ex_stat: "Statistica",
    ex_honors: "30/30 e Lode ✦",
    ex_web: "Progettazione Web",
    ex_thesis: "Prova Finale",
    ex_net: "Reti Informatiche",
    ex_auto: "Fondamenti di Automatica",
    ex_econ: "Economia e Organizzazione Aziendale",
    ex_logic: "Reti Logiche",
    ex_soft: "Ingegneria del Software",
    ex_os: "Sistemi Operativi",
    ex_arch: "Calcolatori Elettronici",
    ex_num: "Calcolo Numerico",
    ex_elec: "Elettrotecnica",
    ex_dig: "Elettronica Digitale",
    ex_comms: "Comunicazioni Numeriche",
    cert_label: "Certificazioni",
    cert_title: "Corsi & Certificazioni",
    cert_eipass: "European Informatics Passport — conseguita nel 2021",
    cert_cambridge: "Cambridge Assessment English · Punteggio 158/160 · 2021",
    cert_samsung: "PCTO Partnership Samsung · 71 ore · 2020–2021",
    cert_eni: "Corporate University · Percorso PCTO · 2020–2021",
    cert_game_title: "Gamification & Algoritmi",
    cert_game_desc: "Progetti PON · 120 ore · pensiero computazionale · 2019–2021",
    exp_label: "Esperienze",
    exp_title: "Esperienza Complementare",
    exp_job: "Bagnino di Salvataggio",
    exp_where: "Hotel Kiris (SA.TRO S.R.L.) · Viggiano · Stagioni Estive 2021–2025",
    exp_desc: "Brevetto ufficiale della Società Nazionale di Salvamento con abilitazione <strong>BLS-AED</strong> (Rianimazione e Defibrillazione). Esperienza fondamentale per lo sviluppo di competenze critiche: gestione avanzata dello stress, tempestività decisionale in situazioni d'emergenza, vigilanza attiva e alto senso di responsabilità.",
    badge_bls: "BLS-AED Certificato",
    badge_emerg: "Gestione Emergenze",
    lang_label: "Lingue",
    lang_title: "Competenze Linguistiche",
    lang_it: "Italiano 🇮🇹",
    lang_it_lvl: "Madrelingua",
    lang_en: "Inglese 🇬🇧",
    lang_en_note: "Cambridge Assessment English · 158/160 (2021)<br>Idoneità Universitaria UniPi (2023)",
    repo_title: "I Miei Progetti GitHub",
    repo1_desc: "Progetto di tesi triennale. Misura il consumo energetico del protocollo HTTP/3 nelle tre implementazioni principali — <strong style=\"color:var(--text)\">Quiche, OpenSSL e Ngtcp2</strong> — su dispositivi IoT (Raspberry Pi 3B+), con automazione via Otii Arc e analisi statistica in Python.",
    tag_thesis: "Tesi",
    repo2_desc: "App Android che unisce musica e benessere emotivo. Monitora il battito cardiaco tramite smartwatch (Wear OS) e dispositivo EEG per suggerire playlist personalizzate in base allo stato d'umore. Stack: <strong style=\"color:var(--text)\">Kotlin + Jetpack Compose, Flask, PostgreSQL, Docker</strong>. Progetto di gruppo (Mobile & Social Sensing Systems).",
    repo3_desc: "Sistema integrato di monitoraggio remoto della salute per l'esame di IoT. Nodi sensori <strong style=\"color:var(--text)\">Contiki-NG</strong> raccolgono frequenza cardiaca e saturazione O₂ via CoAP, un backend Python salva su MySQL e una dashboard Tkinter mostra i dati in tempo reale con allerta automatica al rischio clinico.",
    footer_title: "Hai un progetto in mente?",
    footer_contact: "Scrivimi a <strong>anthonypepe2004@gmail.com</strong> o chiamami al <strong>+39 320 604 3046</strong>",
    footer_copy: "© 2026 Antonio Pepe · Tutti i diritti riservati · <em>Autorizzo il trattamento dei dati personali ai sensi del D.Lgs. 196/2003 e GDPR 2016/679</em>"
    ,ex_prog: "Fondamenti di Programmazione",
    ex_alg: "Algoritmi e Strutture Dati",
    ex_calc: "Esami base di ingegneria",
  },
  en: {
    nav_about: "About",
    nav_education: "Education",
    nav_skills: "Skills",
    nav_exams: "Exams",
    nav_repo: "My GitHub Repos",
    nav_contact: "Contact",
    hero_tag: "Computer Engineer",
    hero_subtitle: "Graduated in Computer Engineering at the University of Pisa, currently attending the Master's Degree in <strong>Artificial Intelligence &amp; Data Engineering</strong>. Passionate about technological innovation, AI, and distributed systems.",
    hero_born: "Born on 04/13/2004",
    hero_scroll: "Scroll",
    about_label: "About Me",
    about_title: "Professional Profile",
    about_p1: "Graduated in <strong>Computer Engineering</strong> from the University of Pisa with a score of 96/110. I have developed solid skills in software development, cloud architectures, and data management systems.",
    about_p2: "I am currently specializing through a Master's degree in <strong>Artificial Intelligence and Data Engineering (AIDE)</strong> at the same University, focusing on AI, advanced data analysis, and complex software systems.",
    about_p3: "I combine a deep passion for <strong>technological innovation</strong> with excellent problem-solving skills and a strong aptitude for teamwork, gained both in complex project environments and dynamic hands-on experiences.",
    stat_degree: "Bachelor's Degree Score",
    stat_cfu: "CFU Acquired",
    stat_english: "Cambridge B2 Score",
    stat_highschool: "High School Diploma Score",
    edu_label: "Education",
    edu_title: "Academic Background",
    edu_master_date: "Mar 2026 — Ongoing",
    edu_master_title: "Master's Degree in AI & Data Engineering",
    edu_master_sub: "University of Pisa · AIDE",
    edu_master_body: "Specialization focusing on artificial intelligence, advanced data analysis, and complex software systems. A program of excellence combining the latest AI technologies with a solid engineering foundation.",
    badge_ongoing: "Ongoing",
    edu_bach_date: "Oct 2022 — Apr 2026",
    edu_bach_title: "Bachelor's Degree in Computer Engineering (L-8)",
    edu_bach_sub: "University of Pisa · 96/110 — 180 CFU · 3.5 years",
    edu_bach_body: "Excellent quantitative and technological background, with special mention for exams with high analytical and design impact. <strong>Thesis:</strong> Energy consumption evaluation of different HTTP/3 protocol implementations on IoT devices (Raspberry Pi 3B+).",
    badge_thesis: "Thesis: HTTP/3 on IoT",
    edu_hs_title: "High School Diploma — Applied Sciences",
    edu_hs_body: "Scientific high school with a technical-applicative orientation, providing a solid foundation for subsequent engineering studies.",
    skills_label: "Skills",
    skills_title: "Technical Skills",
    skill_prog: "Programming Languages",
    skill_algo: "Algorithms & Data Structures",
    skill_net: "Computer Networks",
    skill_ai: "Artificial Intelligence",
    skill_iot: "IoT & Embedded Systems",
    skill_iot_net: "IoT Networks",
    skill_ind: "Industrial Algorithms",
    skill_protocols: "Network Protocols",
    skill_tools: "Tools & OS",
    skill_media: "Multimedia Production",
    exams_label: "University of Pisa",
    exams_title: "Exams",
    exams_course: "Course",
    exams_grade: "Grade",
    ex_stat: "Statistics",
    ex_honors: "30/30 cum Laude ✦",
    ex_web: "Web Design",
    ex_thesis: "Final Project",
    ex_net: "Computer Networks",
    ex_auto: "Fundamentals of Automatica",
    ex_econ: "Business Economics & Organization",
    ex_logic: "Logic Networks",
    ex_soft: "Software Engineering",
    ex_os: "Operating Systems",
    ex_arch: "Computer Architecture",
    ex_num: "Numerical Analysis",
    ex_elec: "Electrotechnics",
    ex_dig: "Digital Electronics",
    ex_comms: "Digital Communications",
    cert_label: "Certifications",
    cert_title: "Courses & Certifications",
    cert_eipass: "European Informatics Passport — Achieved in 2021",
    cert_cambridge: "Cambridge Assessment English · Score 158/160 · 2021",
    cert_samsung: "Samsung Partnership PCTO · 71 hours · 2020–2021",
    cert_eni: "Corporate University · PCTO Path · 2020–2021",
    cert_game_title: "Gamification & Algorithms",
    cert_game_desc: "PON Projects · 120 hours · computational thinking · 2019–2021",
    exp_label: "Experience",
    exp_title: "Complementary Experience",
    exp_job: "Lifeguard",
    exp_where: "Hotel Kiris (SA.TRO S.R.L.) · Viggiano · Summer Seasons 2021–2025",
    exp_desc: "Official patent of the National Lifesaving Society with <strong>BLS-AED</strong> qualification (Resuscitation and Defibrillation). Fundamental experience for the development of critical skills: advanced stress management, timely decision-making in emergency situations, active vigilance, and a high sense of responsibility.",
    badge_bls: "BLS-AED Certified",
    badge_emerg: "Emergency Management",
    lang_label: "Languages",
    lang_title: "Linguistic Competences",
    lang_it: "Italian 🇮🇹",
    lang_it_lvl: "Native",
    lang_en: "English 🇬🇧",
    lang_en_note: "Cambridge Assessment English · 158/160 (2021)<br>UniPi University Eligibility (2023)",
    repo_title: "My GitHub Projects",
    repo1_desc: "Bachelor thesis project. Measures the energy consumption of the HTTP/3 protocol across three main implementations — <strong style=\"color:var(--text)\">Quiche, OpenSSL, and Ngtcp2</strong> — on IoT devices (Raspberry Pi 3B+), automated via Otii Arc and statistically analyzed in Python.",
    tag_thesis: "Thesis",
    repo2_desc: "Android app bridging music and emotional well-being. Monitors heart rate via smartwatch (Wear OS) and EEG device to suggest personalized playlists based on mood. Stack: <strong style=\"color:var(--text)\">Kotlin + Jetpack Compose, Flask, PostgreSQL, Docker</strong>. Team project (Mobile & Social Sensing Systems).",
    repo3_desc: "Integrated remote health monitoring system for the IoT exam. <strong style=\"color:var(--text)\">Contiki-NG</strong> sensor nodes collect heart rate and O₂ saturation via CoAP; a Python backend saves data to MySQL, and a Tkinter dashboard displays real-time data with automatic clinical risk alerts.",
    footer_title: "Have a project in mind?",
    footer_contact: "Email me at <strong>anthonypepe2004@gmail.com</strong> or call me at <strong>+39 320 604 3046</strong>",
    footer_copy: "© 2026 Antonio Pepe · All rights reserved · <em>I authorize the processing of my personal data pursuant to Legislative Decree 196/2003 and GDPR 2016/679</em>",
    ex_prog: "Fondamentals of Programming",
    ex_alg: "Algorithms & Data Structures",
    ex_calc: "Basics Engineering Exam",
  }
};

// Funzione per impostare la lingua
function setLang(lang) {
  // Aggiorna il testo per tutti gli elementi con l'attributo data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Aggiorna l'attributo lang dell'HTML per SEO e Accessibilità
  document.documentElement.lang = lang;

  // Stile dei bottoni (rende attivo quello selezionato)
  const btnIt = document.getElementById("btn-it");
  const btnEn = document.getElementById("btn-en");
  
  if (lang === 'it') {
    btnIt.style.fontWeight = "bold";
    btnIt.style.color = "var(--text)";
    btnEn.style.fontWeight = "normal";
    btnEn.style.color = "var(--muted)";
  } else {
    btnEn.style.fontWeight = "bold";
    btnEn.style.color = "var(--text)";
    btnIt.style.fontWeight = "normal";
    btnIt.style.color = "var(--muted)";
  }
}
// --- Gestione Menu Hamburger Mobile ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Apri/Chiudi il menu al click
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

function sendAnalyticsEvent(name, params) {
  try {
    if (typeof gtag === 'function') {
      gtag('event', name, params);
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(['event', name, params]);
    }
  } catch (e) {
    console.warn(`GA event ${name} non inviato`, e);
  }
}

function trackUniqueVisitorOnce() {
  const storageKey = 'apepe11_ga_unique_counted_v1';
  if (!localStorage.getItem(storageKey)) {
    sendAnalyticsEvent('unique_visitor', {
      event_category: 'engagement',
      non_interaction: true,
    });
    try {
      localStorage.setItem(storageKey, Date.now());
    } catch (e) {
      console.warn('Impossibile salvare il flag di visita unica in localStorage', e);
    }
  }
}

trackUniqueVisitorOnce();

// Chiudi il menu automaticamente quando si clicca su un link
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

