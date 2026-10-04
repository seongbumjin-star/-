import { site, navItems, activities, debate, visions } from './data.js';

const arrow = '<span aria-hidden="true">→</span>';
const app = document.querySelector('#app');

app.innerHTML = `
  <a class="skip" href="#main">본문 바로가기</a>
  <header class="header">
    <a class="brand" href="#top"><strong>${site.name}</strong><span>${site.role}</span></a>
    <button class="menu" type="button" aria-label="메뉴 열기" aria-expanded="false"><i></i><i></i><i></i></button>
    <nav aria-label="주 메뉴">${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}</nav>
  </header>
  <main id="main">
    <section class="hero" id="top">
      <div class="hero-line" aria-hidden="true"></div>
      <div class="hero-copy">
        <p class="eyebrow">JIN SEONGBEOM · CHUNGCHEONGNAM-DO COUNCIL</p>
        <h1>도민의 오늘을 듣고,<br><em>충남의 내일</em>을 만들겠습니다.</h1>
        <p>${site.slogan}</p>
        <a class="button" href="#debate">의정토론회 보기 ${arrow}</a>
      </div>
      <div class="hero-name" aria-hidden="true">眞<br>誠<br>範</div>
      <a class="scroll" href="#about">SCROLL DOWN</a>
    </section>

    <section class="about section" id="about">
      <div class="section-label"><span>01</span><p>ABOUT</p></div>
      <div class="about-title">
        <p>진성범입니다</p>
        <h2>현장에서 듣고,<br>의정으로 답하겠습니다.</h2>
      </div>
      <div class="about-copy">
        <p>도민의 평범한 하루가 더 나아지는 정치, 지역의 목소리가 정책의 출발점이 되는 의정을 실천하겠습니다.</p>
        <p>충남의 가능성을 키우고 변화의 과정에서 누구도 소외되지 않도록 꼼꼼히 살피겠습니다.</p>
      </div>
    </section>

    <section class="activity section" id="activity">
      <div class="section-heading">
        <div>
          <p class="eyebrow">COUNCIL ACTIVITY</p>
          <h2>도민과 함께하는<br>의정활동</h2>
        </div>
        <p>현장의 목소리를 정책으로 연결하고<br>실행으로 책임지겠습니다.</p>
      </div>

      <div class="activity-grid">
        ${activities.map(item => `
          <article>
            <div>
              <span>${item.number}</span>
              <b>${item.category}</b>
            </div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="debate" id="debate">
      <div class="debate-side">
        <p>POLICY<br>DEBATE</p>
        <span>의정토론회</span>
      </div>

      <div class="debate-main">
        <p class="eyebrow">${debate.label}</p>
        <h2>${debate.title}</h2>
        <p class="debate-description">${debate.description}</p>

        <dl>
          <div>
            <dt>일시</dt>
            <dd>${debate.schedule}</dd>
          </div>
          <div>
            <dt>장소</dt>
            <dd>${debate.place}</dd>
          </div>
        </dl>
      </div>

      <div class="topics">
        <p>주요 논의</p>
        <ol>
          ${debate.topics.map(topic => `<li>${topic}</li>`).join('')}
        </ol>
      </div>
    </section>

    <section class="vision section" id="vision">
      <div class="section-heading">
        <div>
          <p class="eyebrow">POLICY & VISION</p>
          <h2>충남을 위한<br>네 가지 약속</h2>
        </div>
        <p>도민의 삶을 중심에 둔 정책으로<br>지속가능한 충남을 준비합니다.</p>
      </div>

      <div class="vision-list">
        ${visions.map(([title, text], index) => `
          <article>
            <span>0${index + 1}</span>
            <h3>${title}</h3>
            <p>${text}</p>
            <i aria-hidden="true">↗</i>
          </article>
        `).join('')}
      </div>
    </section>
  </main>

  <footer id="contact">
    <div>
      <p class="eyebrow">WITH CHUNGNAM</p>
      <h2>도민의 의견을<br>기다립니다.</h2>
    </div>

    <div>
      <strong>${site.name}</strong>
      <span>${site.role}</span>
      <p>연락처와 의정활동 소식은 준비되는 대로 안내하겠습니다.</p>
    </div>

    <p>© 2026 JIN SEONGBEOM. All rights reserved.</p>
  </footer>`;

const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('nav-open');
  menu.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    menu.setAttribute('aria-expanded', 'false');
  });
});
