// Learn with Eyes — Class 4 Science
// Chapters: 1. Nutrients in Our Food, 2. Balanced Diet

const STATE = {
  page: 'home',
  lang: 'en', // 'en' | 'hi'
  fontIdx: 0,
  dark: false,
  student: localStorage.getItem('lwe4_student') || 'Student 1',
  scores: JSON.parse(localStorage.getItem('lwe4_scores') || '{}'),
  answers: {}
};

const CHAPTERS = {
  ch1: {
    id: 'ch1',
    icon: '🍎',
    title: { en: '1. Nutrients in Our Food', hi: '1. हमारे भोजन में पोषक तत्व' },
    subtitle: {
      en: 'Learn how carbohydrates, fats, proteins, vitamins, minerals, roughage, and water keep us strong and healthy.',
      hi: 'जानें कि कार्बोहाइड्रेट, वसा, प्रोटीन, विटामिन, खनिज, रेशे और पानी हमें कैसे स्वस्थ रखते हैं।'
    },
    videos: [
      { id: 'Pni7bmnxy7g', title: 'Nutrients in Our Food — Part 1', url: 'https://youtu.be/Pni7bmnxy7g' },
      { id: 'vd0NWtGl2W8', title: 'Nutrients in Our Food — Part 2', url: 'https://youtu.be/vd0NWtGl2W8' },
      { id: 'NOW8jZ8tUmM', title: 'Nutrients in Our Food — Part 3', url: 'https://youtu.be/NOW8jZ8tUmM' }
    ],
    cards: [
      {
        emoji: '🌾',
        badge: 'Energy-Giving Food',
        title: { en: 'Carbohydrates', hi: 'कार्बोहाइड्रेट' },
        text: {
          en: 'Carbohydrates give us energy to work, study, and play. Sugar and starch are two types of carbohydrates. Sources: Potatoes, wheat, rice, bread, maize, and oatmeal.',
          hi: 'कार्बोहाइड्रेट हमें काम करने, पढ़ने और खेलने के लिए ऊर्जा देते हैं। शक्कर और स्टार्च इसके दो प्रकार हैं। स्रोत: आलू, गेहूँ, चावल, ब्रेड, मक्का।'
        }
      },
      {
        emoji: '🧈',
        badge: 'Energy-Giving Food',
        title: { en: 'Fats', hi: 'वसा (फैट्स)' },
        text: {
          en: 'Fats give us much more energy than carbohydrates, so they should not be eaten in large amounts. Extra fat is stored in the body. Sources: Oil, nuts, butter, and meat.',
          hi: 'वसा कार्बोहाइड्रेट से अधिक ऊर्जा देती है, इसलिए इसे अधिक मात्रा में नहीं खाना चाहिए। स्रोत: तेल, मेवे, मक्खन और मांस।'
        }
      },
      {
        emoji: '🥚',
        badge: 'Body-Building Food',
        title: { en: 'Proteins', hi: 'प्रोटीन' },
        text: {
          en: 'Proteins help build new cells and repair worn-out cells. Growing children need more proteins! Sources: Fish, eggs, cheese, meat, and pulses.',
          hi: 'प्रोटीन नई कोशिकाएँ बनाने और शरीर की मरम्मत में मदद करते हैं। बढ़ते बच्चों को अधिक प्रोटीन चाहिए। स्रोत: मछली, अंडे, पनीर, दालें।'
        }
      },
      {
        emoji: '🥦',
        badge: 'Protective Food',
        title: { en: 'Vitamins & Minerals', hi: 'विटामिन और खनिज' },
        text: {
          en: 'They keep us healthy by fighting against diseases and help form teeth, bones, and blood. Sources: Fruits, vegetables, milk, meat, and fish.',
          hi: 'ये बीमारियों से लड़कर हमें स्वस्थ रखते हैं और दाँत, हड्डियाँ व खून बनाने में मदद करते हैं। स्रोत: फल, सब्ज़ियाँ, दूध।'
        }
      },
      {
        emoji: '🥗',
        badge: 'Digestive Helper',
        title: { en: 'Roughage (Fibre)', hi: 'रेशे (रफेज)' },
        text: {
          en: 'Roughage is the part of food we cannot digest. It helps remove wastes from the body. Sources: Raw vegetables, fruits, brown rice, and oatmeal.',
          hi: 'रफेज भोजन का वह भाग है जिसे हम पचा नहीं सकते। यह शरीर से अपशिष्ट बाहर निकालने में मदद करता है। स्रोत: कच्ची सब्ज़ियाँ, फल।'
        }
      },
      {
        emoji: '💧',
        badge: 'Essential',
        title: { en: 'Water & Milk', hi: 'पानी और दूध' },
        text: {
          en: 'Three-fourths of our body weight is water. Drink 6–8 glasses daily. Milk is a complete food—growing children should drink at least 2 glasses daily.',
          hi: 'हमारे शरीर का तीन-चौथाई भाग पानी है। रोज़ 6–8 गिलास पानी पिएँ। दूध एक संपूर्ण आहार है—रोज़ कम से कम 2 गिलास पिएँ।'
        }
      }
    ],
    quiz: [
      {
        q: 'Rice, wheat, maize and potato are rich sources of ______.',
        options: ['proteins', 'carbohydrates', 'vitamins', 'roughage'],
        answer: 1
      },
      {
        q: 'The other name for body-building food is ______.',
        options: ['roughage', 'minerals', 'proteins', 'vitamins'],
        answer: 2
      },
      {
        q: 'The fibre content of food is called ______.',
        options: ['proteins', 'vitamin', 'roughage', 'mineral'],
        answer: 2
      },
      {
        q: 'Growing children require more ______.',
        options: ['fats', 'proteins', 'roughage', 'sugar'],
        answer: 1
      },
      {
        q: 'Sugar and ______ are two types of carbohydrates.',
        options: ['starch', 'water', 'minerals', 'fats'],
        answer: 0
      },
      {
        q: 'True or False: Oil, butter and meat are rich in carbohydrates.',
        options: ['True', 'False'],
        answer: 1
      },
      {
        q: 'True or False: Roughage is the part of food we cannot digest.',
        options: ['True', 'False'],
        answer: 0
      },
      {
        q: 'Who am I? "My name starts with the letter V. I help you fight against various diseases."',
        options: ['Vitamins', 'Water', 'Carbohydrates', 'Fats'],
        answer: 0
      }
    ]
  },

  ch2: {
    id: 'ch2',
    icon: '🥗',
    title: { en: '2. Balanced Diet', hi: '2. संतुलित आहार' },
    subtitle: {
      en: 'Understand what a balanced diet is, good eating habits, and how we preserve food to keep it fresh.',
      hi: 'संतुलित आहार, अच्छी खाने की आदतें और भोजन को ताज़ा रखने के तरीके जानें।'
    },
    videos: [],
    cards: [
      {
        emoji: '🍽️',
        badge: 'Core Concept',
        title: { en: 'What is a Balanced Diet?', hi: 'संतुलित आहार क्या है?' },
        text: {
          en: 'The food we eat everyday is our diet. A diet that contains all the nutrients in the correct proportion is called a balanced diet. It is essential for good health and proper growth.',
          hi: 'हम जो भोजन रोज़ खाते हैं वह हमारा आहार है। जिस आहार में सभी पोषक तत्व सही मात्रा में हों, उसे संतुलित आहार कहते हैं।'
        }
      },
      {
        emoji: '🔺',
        badge: 'Food Pyramid',
        title: { en: 'Food Pyramid Groups', hi: 'आहार पिरामिड' },
        text: {
          en: 'Base: Bread, cereals, rice (6–11 servings). Middle: Vegetables (3–5) & Fruits (2–4), Milk/cheese (2–3) & Meat/pulses/eggs (2–3). Top: Fats, oils & sweets (use sparingly).',
          hi: 'नीचे: अनाज, चावल, रोटी। बीच में: सब्ज़ियाँ, फल, दूध, दालें। सबसे ऊपर: तेल, घी और मिठाइयाँ (कम मात्रा में)।'
        }
      },
      {
        emoji: '🧼',
        badge: 'Healthy Routine',
        title: { en: 'Good Eating Habits', hi: 'खाने की अच्छी आदतें' },
        text: {
          en: 'Eat at regular intervals. Wash hands with soap before eating. Chew food properly. Wash vegetables BEFORE chopping. Do not overeat, and rinse your mouth after eating.',
          hi: 'नियमित समय पर खाएँ। खाने से पहले साबुन से हाथ धोएँ। भोजन अच्छे से चबाएँ। सब्ज़ियाँ काटने से पहले धोएँ।'
        }
      },
      {
        emoji: '❄️',
        badge: 'Food Preservation',
        title: { en: 'Ways to Preserve Food', hi: 'भोजन संरक्षण के तरीके' },
        text: {
          en: 'Preserved food lasts longer! Methods: Freeze it (ice cream), Can it (tinned food), Salt it (pickles), Sweeten it (jam, jelly), Oil it (pickles), Dehydrate/dry it.',
          hi: 'संरक्षित भोजन लंबे समय तक ताज़ा रहता है: जमाना (आइसक्रीम), डिब्बाबंदी, नमक/तेल लगाना (अचार), मीठा करना (जैम), सुखाना।'
        }
      }
    ],
    quiz: [
      {
        q: 'The food that we eat on a regular basis forms our ______.',
        options: ['diet', 'fun', 'recreation', 'balanced diet'],
        answer: 0
      },
      {
        q: 'True or False: Balanced diet is essential for good health and proper growth.',
        options: ['True', 'False'],
        answer: 0
      },
      {
        q: 'True or False: Vegetables should be washed after chopping.',
        options: ['True', 'False'],
        answer: 1
      },
      {
        q: 'True or False: Preserved food lasts longer.',
        options: ['True', 'False'],
        answer: 0
      },
      {
        q: 'Which method is used to preserve jam, jelly, and chutney?',
        options: ['Freezing', 'Sweetening', 'Canning', 'Dehydrating'],
        answer: 1
      },
      {
        q: 'Odd one out: Carbohydrates, Fats, Proteins, Carrot',
        options: ['Carbohydrates', 'Fats', 'Proteins', 'Carrot'],
        answer: 3
      },
      {
        q: 'Odd one out: Baking, Frying, Sewing, Roasting',
        options: ['Baking', 'Frying', 'Sewing', 'Roasting'],
        answer: 2
      }
    ]
  }
};

function t(obj) {
  return typeof obj === 'string' ? obj : (obj[STATE.lang] || obj.en);
}

function setPage(page) {
  STATE.page = page;
  document.querySelectorAll('.sidebar__link').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });
  document.getElementById('sidebar').classList.remove('open');
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgressBadges() {
  ['ch1', 'ch2'].forEach(id => {
    const el = document.getElementById(`prog-${id}`);
    if (!el) return;
    if (STATE.scores[id] !== undefined) {
      el.classList.add('done');
      el.textContent = '★';
    }
  });
}

function renderHome() {
  return `
    <section class="hero">
      <span class="badge" style="background:rgba(255,255,255,0.2);color:#fff;">Class 4 Science • Unit I: Food &amp; Health</span>
      <h1>🌱 ${STATE.lang === 'hi' ? 'आँखों से सीखें — कक्षा 4 विज्ञान' : 'Learn with Eyes — Class 4 Science'}</h1>
      <p>${STATE.lang === 'hi'
        ? 'चित्रों, वीडियो और मज़ेदार क्विज़ के साथ पोषक तत्व और संतुलित आहार सीखें।'
        : 'Visual learning platform with picture cards, YouTube video lessons, and interactive quizzes from your Class 4 Science book.'}</p>
    </section>

    <div class="grid-2">
      ${Object.values(CHAPTERS).map(ch => {
        const sc = STATE.scores[ch.id];
        const status = sc !== undefined ? `✅ Best Score: ${sc}/${ch.quiz.length}` : '📝 Quiz Ready';
        return `
          <div class="card">
            <span class="card__emoji">${ch.icon}</span>
            <span class="badge">${status}</span>
            <h2 class="card__title">${t(ch.title)}</h2>
            <p style="color:var(--text-muted);margin-bottom:1rem;">${t(ch.subtitle)}</p>
            <button class="btn" onclick="setPage('${ch.id}')">Open Chapter →</button>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderChapter(ch) {
  const videosHtml = ch.videos.length ? `
    <h2 style="margin:1.5rem 0 0.75rem;">🎬 Video Lessons</h2>
    <div class="video-grid">
      ${ch.videos.map(v => `
        <div class="video-card">
          <div class="video-wrapper">
            <iframe src="https://www.youtube.com/embed/${v.id}" title="${v.title}" allowfullscreen loading="lazy"></iframe>
          </div>
          <div class="video-card__body">
            <strong>${v.title}</strong>
            <a href="${v.url}" target="_blank" rel="noopener" class="btn btn--secondary" style="padding:0.35rem 0.7rem;font-size:0.8rem;">YouTube ↗</a>
          </div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const quizHtml = `
    <section class="quiz-box" id="quiz-${ch.id}">
      <h2>📝 Chapter Quiz (${ch.quiz.length} Questions)</h2>
      <p style="color:var(--text-muted);margin-bottom:1rem;">Select the best answer for each question, then click <strong>Check Answers</strong>.</p>
      ${ch.quiz.map((item, idx) => `
        <div class="quiz-question" data-q="${idx}">
          <div><strong>Q${idx + 1}.</strong> ${item.q}</div>
          <div class="quiz-options">
            ${item.options.map((opt, oIdx) => `
              <button type="button" class="quiz-opt" data-q="${idx}" data-opt="${oIdx}" onclick="selectOpt('${ch.id}', ${idx}, ${oIdx})">
                ${opt}
              </button>
            `).join('')}
          </div>
        </div>
      `).join('')}
      <div style="margin-top:1.25rem;display:flex;gap:0.75rem;flex-wrap:wrap;">
        <button class="btn" onclick="submitQuiz('${ch.id}')">✅ Check Answers</button>
        <button class="btn btn--secondary" onclick="resetQuiz('${ch.id}')">🔄 Reset</button>
      </div>
      <div id="quiz-result-${ch.id}"></div>
    </section>
  `;

  return `
    <div style="margin-bottom:1rem;">
      <button class="btn btn--secondary" onclick="setPage('home')">← Back to All Chapters</button>
    </div>
    <section class="hero">
      <h1>${ch.icon} ${t(ch.title)}</h1>
      <p>${t(ch.subtitle)}</p>
    </section>

    <div class="grid-3">
      ${ch.cards.map(c => `
        <article class="card">
          <span class="card__emoji">${c.emoji}</span>
          <span class="badge">${c.badge}</span>
          <h3 class="card__title">${t(c.title)}</h3>
          <p>${t(c.text)}</p>
        </article>
      `).join('')}
    </div>

    ${videosHtml}
    ${quizHtml}
  `;
}

function renderDashboard() {
  const ch1Score = STATE.scores.ch1;
  const ch2Score = STATE.scores.ch2;
  const totalQ = CHAPTERS.ch1.quiz.length + CHAPTERS.ch2.quiz.length;
  const earned = (ch1Score || 0) + (ch2Score || 0);

  return `
    <section class="hero">
      <h1>📊 Progress Dashboard — ${STATE.student}</h1>
      <p>Track your quiz scores across both Class 4 Science chapters.</p>
    </section>
    <div class="grid-2">
      <div class="card">
        <span class="card__emoji">🍎</span>
        <h3 class="card__title">1. Nutrients in Our Food</h3>
        <p style="font-size:1.3rem;font-weight:800;margin:0.5rem 0;">
          ${ch1Score !== undefined ? `${ch1Score} / ${CHAPTERS.ch1.quiz.length}` : 'Not attempted yet'}
        </p>
        <button class="btn" onclick="setPage('ch1')">Go to Chapter 1</button>
      </div>
      <div class="card">
        <span class="card__emoji">🥗</span>
        <h3 class="card__title">2. Balanced Diet</h3>
        <p style="font-size:1.3rem;font-weight:800;margin:0.5rem 0;">
          ${ch2Score !== undefined ? `${ch2Score} / ${CHAPTERS.ch2.quiz.length}` : 'Not attempted yet'}
        </p>
        <button class="btn" onclick="setPage('ch2')">Go to Chapter 2</button>
      </div>
    </div>
    <div class="card">
      <h3 class="card__title">🏆 Overall Score: ${earned} / ${totalQ}</h3>
      <p style="color:var(--text-muted);">Complete both quizzes to master Unit I: Food &amp; Health!</p>
    </div>
  `;
}

window.selectOpt = function(chId, qIdx, optIdx) {
  if (!STATE.answers[chId]) STATE.answers[chId] = {};
  STATE.answers[chId][qIdx] = optIdx;
  const box = document.getElementById(`quiz-${chId}`);
  box.querySelectorAll(`.quiz-opt[data-q="${qIdx}"]`).forEach(btn => {
    btn.classList.remove('selected', 'correct', 'wrong');
    if (Number(btn.dataset.opt) === optIdx) btn.classList.add('selected');
  });
};

window.submitQuiz = function(chId) {
  const ch = CHAPTERS[chId];
  const userAns = STATE.answers[chId] || {};
  let score = 0;
  const box = document.getElementById(`quiz-${chId}`);

  ch.quiz.forEach((item, idx) => {
    const chosen = userAns[idx];
    box.querySelectorAll(`.quiz-opt[data-q="${idx}"]`).forEach(btn => {
      const oIdx = Number(btn.dataset.opt);
      btn.classList.remove('selected', 'correct', 'wrong');
      if (oIdx === item.answer) btn.classList.add('correct');
      else if (oIdx === chosen && chosen !== item.answer) btn.classList.add('wrong');
    });
    if (chosen === item.answer) score++;
  });

  STATE.scores[chId] = Math.max(STATE.scores[chId] || 0, score);
  localStorage.setItem('lwe4_scores', JSON.stringify(STATE.scores));
  updateProgressBadges();

  const resEl = document.getElementById(`quiz-result-${chId}`);
  resEl.innerHTML = `
    <div class="quiz-result">
      🎉 You scored <strong>${score} / ${ch.quiz.length}</strong>!
      ${score === ch.quiz.length ? ' Perfect score! 🌟' : ' Review the highlighted answers above.'}
    </div>
  `;
};

window.resetQuiz = function(chId) {
  STATE.answers[chId] = {};
  render();
};

function render() {
  const app = document.getElementById('app');
  if (STATE.page === 'home') app.innerHTML = renderHome();
  else if (STATE.page === 'dashboard') app.innerHTML = renderDashboard();
  else if (CHAPTERS[STATE.page]) app.innerHTML = renderChapter(CHAPTERS[STATE.page]);
  updateProgressBadges();
}

// Controls
document.getElementById('headerLogo').addEventListener('click', () => setPage('home'));
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

document.querySelectorAll('.sidebar__link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    setPage(link.dataset.page);
  });
});

document.getElementById('langToggleBtn').addEventListener('click', () => {
  STATE.lang = STATE.lang === 'en' ? 'hi' : 'en';
  document.getElementById('langToggleLabel').textContent = STATE.lang === 'en' ? '🇮🇳 EN/हिं' : '🇬🇧 हिं/EN';
  render();
});

document.getElementById('fontSizeBtn').addEventListener('click', () => {
  const classes = ['', 'font-lg', 'font-xl'];
  const labels = ['A⁺', 'A⁺⁺', 'A'];
  document.body.classList.remove('font-lg', 'font-xl');
  STATE.fontIdx = (STATE.fontIdx + 1) % 3;
  if (classes[STATE.fontIdx]) document.body.classList.add(classes[STATE.fontIdx]);
  document.getElementById('fontSizeLabel').textContent = labels[STATE.fontIdx];
});

document.getElementById('themeToggleBtn').addEventListener('click', () => {
  STATE.dark = !STATE.dark;
  document.body.classList.toggle('dark-mode', STATE.dark);
  document.getElementById('themeToggleIcon').textContent = STATE.dark ? '☀️' : '🌙';
});

document.getElementById('studentProfileBtn').addEventListener('click', () => {
  const name = prompt('Enter Student Name:', STATE.student);
  if (name && name.trim()) {
    STATE.student = name.trim();
    localStorage.setItem('lwe4_student', STATE.student);
    document.getElementById('currentStudentName').textContent = STATE.student;
    if (STATE.page === 'dashboard') render();
  }
});

document.getElementById('currentStudentName').textContent = STATE.student;
render();
