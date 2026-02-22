const slideData = {
    robotics: {
        title: "Роботизация",
        pre: ["Импортозамещение", "Дефицит кадров", "Субсидии"],
        effects: ["Выработка +40%", "Травматизм -50%"]
    },
    quality: {
        title: "Контроль качества",
        pre: ["Компьютерное зрение", "Оцифровка"],
        effects: ["Брак -35%", "Скорость +50%"]
    },
    security: {
        title: "Средства охраны",
        pre: ["ФЗ-256", "Антитеррор"],
        effects: ["Реакция < 5 сек", "Контроль 24/7"]
    }
};

function openSlide(id) {
    const data = slideData[id];
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');

    // ФИКС СКРОЛЛА: сбрасываем положение в 0 перед показом
    modal.scrollTo(0, 0);

    content.innerHTML = `
        <h2 class="animate__animated animate__fadeInDown" style="font-size: 2rem; color: #ff4f12;">${data.title}</h2>
        
        <p style="color: #666; font-size: 0.8rem; letter-spacing: 1px; margin-top: 30px;">ПРЕДПОСЫЛКИ</p>
        ${data.pre.map(p => `<div class="info-block animate__animated animate__fadeInUp">${p}</div>`).join('')}

        <p style="color: #666; font-size: 0.8rem; letter-spacing: 1px; margin-top: 30px;">ЭФФЕКТЫ</p>
        <div class="info-block animate__animated animate__fadeInUp" style="background: rgba(255,79,18,0.1)">
            ${data.effects.map(e => `<div style="margin-bottom:5px;">• ${e}</div>`).join('')}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Запрет скролла сайта
}

function closeSlide() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Возврат скролла сайта
}
