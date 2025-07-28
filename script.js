
const translations = {
  es: {
    title: "Clases y tarifas",
    lightningTitle: "Clases relámpago",
    lightningDesc: "Pack de 5 clases, lunes a viernes — <del>70€</del> <strong>49€</strong>",
    repasoTitle: "Repaso +QueClases",
    repasoDesc: "3-4 clases por semana",
    dailyTitle: "Español día a día",
    dailyDesc: "Clases flexibles x € la hora"
  },
  en: {
    title: "Classes and Rates",
    lightningTitle: "Lightning Classes",
    lightningDesc: "5-class pack, Monday to Friday — <del>70€</del> <strong>49€</strong>",
    repasoTitle: "Review +QueClases",
    repasoDesc: "3-4 classes per week",
    dailyTitle: "Spanish Day by Day",
    dailyDesc: "Flexible classes x € per hour"
  },
  ru: {
    title: "Занятия и тарифы",
    lightningTitle: "Интенсивные занятия",
    lightningDesc: "Пакет из 5 занятий, понедельник-пятница — <del>70€</del> <strong>49€</strong>",
    repasoTitle: "Повторение +QueClases",
    repasoDesc: "3-4 занятия в неделю",
    dailyTitle: "Испанский день за днем",
    dailyDesc: "Гибкие занятия x € за час"
  },
  zh: {
    title: "课程和价格",
    lightningTitle: "闪电课程",
    lightningDesc: "5节课套餐，周一至周五 — <del>70€</del> <strong>49€</strong>",
    repasoTitle: "复习 +QueClases",
    repasoDesc: "每周3-4节课",
    dailyTitle: "日常西班牙语",
    dailyDesc: "灵活课程 x € 每小时"
  }
};

function changeLang(lang) {
  document.getElementById('title').innerHTML = translations[lang].title;
  document.getElementById('lightning-title').innerHTML = translations[lang].lightningTitle;
  document.getElementById('lightning-desc').innerHTML = translations[lang].lightningDesc;
  document.getElementById('repaso-title').innerHTML = translations[lang].repasoTitle;
  document.getElementById('repaso-desc').innerHTML = translations[lang].repasoDesc;
  document.getElementById('daily-title').innerHTML = translations[lang].dailyTitle;
  document.getElementById('daily-desc').innerHTML = translations[lang].dailyDesc;
}

// Contador 12h clickbait
let countdown = 12 * 60 * 60; // 12 horas en segundos

function updateTimer() {
  let hours = Math.floor(countdown / 3600);
  let minutes = Math.floor((countdown % 3600) / 60);
  let seconds = countdown % 60;
  document.getElementById("timer").textContent =
    `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
  if (countdown > 0) {
    countdown--;
    setTimeout(updateTimer, 1000);
  }
}
updateTimer();
