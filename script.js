// ----- ДИЛЕММЫ С ВЕТВЛЕНИЕМ -----
// У каждой дилеммы есть id, title, text и массив options,
// где каждый option содержит текст и nextId (id следующей дилеммы, или null если конец)
const dilemmas = {
    // Корневые дилеммы (видны в списке)
    1: {
        id: 1,
        title: "08:31 AM",
        text: "Employees suddenly report encrypted files, inaccessible systems, and ransom notes appearing across the network. The CEO demands immediate action while your SOC team suspects the attackers still have access.",
        options: [
            { text: "Send a company-wide alert immediately", nextId: 101 },
            { text: "Investigate quietly before informing staff", nextId: 102 }
        ]
    },
    2: {
        id: 2,
        title: "Ложь ради друга",
        text: "Лучший друг просит солгать его родителям, чтобы он мог пойти на сомнительную вечеринку.",
        options: [
            { text: "Скажу правду родителям", nextId: 12 },
            { text: "Помогу другу и прикрою его", nextId: 13 },
            { text: "Скажу, что ничего не знаю, уйду от ответа", nextId: 14 }
        ]
    },
    3: {
        id: 3,
        title: "Идея коллеги",
        text: "На работе вы узнаёте, что коллега получит повышение, используя вашу идею. Никто не в курсе.",
        options: [
            { text: "Промолчу, чтобы избежать конфликта", nextId: 15 },
            { text: "Отстою справедливость с доказательствами", nextId: 16 },
            { text: "Анонимно сообщу начальству", nextId: 17 }
        ]
    },
    4: {
        id: 4,
        title: "Нападение на прохожего",
        text: "Вы видите, как группа подростков издевается над прохожим. Вмешаться опасно.",
        options: [
            { text: "Позову на помощь / вызову полицию", nextId: 18 },
            { text: "Пройду мимо, риск слишком велик", nextId: 19 },
            { text: "Попытаюсь отвлечь подростков криком", nextId: 20 }
        ]
    },
    5: {
        id: 5,
        title: "Ради карьеры или любви",
        text: "Престижная работа в другом городе, но придётся расстаться с любимым человеком надолго.",
        options: [
            { text: "Выберу карьерный рост и переезд", nextId: 21 },
            { text: "Останусь ради отношений", nextId: 22 },
            { text: "Предложу партнёру переехать вместе", nextId: 23 }
        ]
    },
    6: {
        id: 6,
        title: "Мелкая кража близкого",
        text: "Близкий человек совершил мелкую кражу в магазине. Никто не заметил.",
        options: [
            { text: "Сделаю вид, что ничего не было", nextId: 24 },
            { text: "Скажу о недопустимости и попрошу вернуть", nextId: 25 },
            { text: "Тайком верну вещь сам", nextId: 26 }
        ]
    },
    7: {
        id: 7,
        title: "Лекарство для близкого",
        text: "У вашего родственника редкая болезнь. Лекарство очень дорогое, но вы не можете его купить. Аптекарь отказывается дать бесплатно.",
        options: [
            { text: "Украду лекарство, чтобы спасти жизнь", nextId: 27 },
            { text: "Не стану нарушать закон, поищу другой путь", nextId: 28 },
            { text: "Попробую собрать деньги через краудфандинг", nextId: 29 }
        ]
    },
    8: {
        id: 8,
        title: "Соседский шум",
        text: "Соседи сверху каждый вечер громко слушают музыку, мешая вам спать. Вы просили убавить — бесполезно.",
        options: [
            { text: "Вызову полицию по закону", nextId: 30 },
            { text: "Постараюсь договориться ещё раз, но мягко", nextId: 31 },
            { text: "Куплю беруши и буду терпеть", nextId: 32 }
        ]
    },

    // --- ВЕТКИ (результаты выбора) ---
    9: { id: 9, title: "Честность", text: "Владелец кошелька отблагодарил вас и предложил дружбу. Вы чувствуете гордость.", options: [{ text: "Вернуться к списку", nextId: null }] },
    10: { id: 10, title: "Жадность", text: "Вы забрали деньги, но совесть мучает. Через неделю вас обокрали. Потеряли больше.", options: [{ text: "Вернуться к списку", nextId: null }] },
    11: { id: 11, title: "Полумера", text: "Полиция нашла владельца по документам, но половины денег не хватало. Вас вычислили по камерам.", options: [{ text: "Вернуться к списку", nextId: null }] },
    12: { id: 12, title: "Честность перед родителями", text: "Родители друга поблагодарили за правду. Друг обиделся, но потом извинился.", options: [{ text: "Вернуться к списку", nextId: null }] },
    13: { id: 13, title: "Покрывательство", text: "Друг попал в беду на вечеринке. Вас тоже втянули в разбирательства.", options: [{ text: "Вернуться к списку", nextId: null }] },
    14: { id: 14, title: "Уклонение", text: "Вы не солгали, но и не сказали правду. Друг сделал по-своему и поплатился.", options: [{ text: "Вернуться к списку", nextId: null }] },
    15: { id: 15, title: "Молчание", text: "Коллега получил повышение, а вас загрузили работой. Вы жалеете.", options: [{ text: "Вернуться к списку", nextId: null }] },
    16: { id: 16, title: "Справедливость", text: "Начальник разобрался, идею признали вашей. Вас повысили.", options: [{ text: "Вернуться к списку", nextId: null }] },
    17: { id: 17, title: "Анонимность", text: "Коллегу понизили, но вы остались в тени. Атмосфера в коллективе ухудшилась.", options: [{ text: "Вернуться к списку", nextId: null }] },
    18: { id: 18, title: "Помощь через полицию", text: "Полиция приехала быстро, подростки разбежались. Прохожий благодарен.", options: [{ text: "Вернуться к списку", nextId: null }] },
    19: { id: 19, title: "Безразличие", text: "Вы прошли мимо, но потом узнали, что прохожему сильно досталось. Вас мучает совесть.", options: [{ text: "Вернуться к списку", nextId: null }] },
    20: { id: 20, title: "Риск", text: "Ваш крик отвлёк хулиганов, но они побежали за вами. Чудом удалось убежать.", options: [{ text: "Вернуться к списку", nextId: null }] },
    21: { id: 21, title: "Карьера", text: "Вы переехали, достигли успеха, но чувствуете пустоту без любимого человека.", options: [{ text: "Вернуться к списку", nextId: null }] },
    22: { id: 22, title: "Любовь", text: "Вы остались, построили семью, но иногда жалеете об упущенных возможностях.", options: [{ text: "Вернуться к списку", nextId: null }] },
    23: { id: 23, title: "Компромисс", text: "Вы переехали вместе. Партнёр нашёл работу, вы довольны обоими решениями.", options: [{ text: "Вернуться к списку", nextId: null }] },
    24: { id: 24, title: "Игнорирование", text: "Кража повторилась, и в итоге близкого поймали. Вы чувствуете вину.", options: [{ text: "Вернуться к списку", nextId: null }] },
    25: { id: 25, title: "Нравоучение", text: "Близкий вернул вещь и больше не ворует. Вы гордитесь своим влиянием.", options: [{ text: "Вернуться к списку", nextId: null }] },
    26: { id: 26, title: "Тайное возвращение", text: "Вещь вернули, но близкий ничего не понял и продолжил красть в другом месте.", options: [{ text: "Вернуться к списку", nextId: null }] },
    27: { id: 27, title: "Кража", text: "Вы украли лекарство, родственник выжил. Но вас поймали и посадили.", options: [{ text: "Вернуться к списку", nextId: null }] },
    28: { id: 28, title: "Закон", text: "Вы нашли благотворительный фонд, который помог с лекарством. Всё обошлось.", options: [{ text: "Вернуться к списку", nextId: null }] },
    29: { id: 29, title: "Краудфандинг", text: "Люди собрали деньги, лекарство купили. Родственник спасён, и вы не нарушили закон.", options: [{ text: "Вернуться к списку", nextId: null }] },
    30: { id: 30, title: "Полиция", text: "Приехали, составили протокол. Соседи затаили злобу, но музыка стихла.", options: [{ text: "Вернуться к списку", nextId: null }] },
    31: { id: 31, title: "Дипломатия", text: "Вы договорились: они слушают музыку до 22:00. Компромисс найден.", options: [{ text: "Вернуться к списку", nextId: null }] },
    32: { id: 32, title: "Терпение", text: "Вы купили беруши, но не высыпаетесь из-за вибрации. Здоровье ухудшилось.", options: [{ text: "Вернуться к списку", nextId: null }] },
    101: {
        id: 101,
        title: "Containment Decision",
        text: "Employees are now aware of the attack. Panic spreads internally, but suspicious activity reports increase dramatically.",
        options: [
            { text: "Shut down the entire corporate network", nextId: 103 },
            { text: "Keep critical systems online", nextId: 104 }
        ]
    },

    // LEVEL 2B
    102: {
        id: 102,
        title: "Silent Investigation",
        text: "You avoid public panic, but employees continue normal work while the ransomware may still be spreading.",
        options: [
            { text: "Start a full forensic investigation", nextId: 105 },
            { text: "Focus on restoring operations first", nextId: 106 }
        ]
    },

    // LEVEL 3A1
    103: {
        id: 103,
        title: "Total Shutdown",
        text: "The attack appears contained, but business operations are almost completely offline.",
        options: [
            { text: "Pay the ransom", nextId: 107 },
            { text: "Refuse payment", nextId: 108 }
        ]
    },

    // LEVEL 3A2
    104: {
        id: 104,
        title: "Partial Isolation",
        text: "Core services remain online, but there is a risk the attackers still maintain access to parts of the network.",
        options: [
            { text: "Hire external incident response experts", nextId: 109 },
            { text: "Handle everything internally", nextId: 110 }
        ]
    },

    // LEVEL 3B1
    105: {
        id: 105,
        title: "Forensic Priority",
        text: "Your team collects evidence and analyzes compromised systems, but recovery slows significantly.",
        options: [
            { text: "Disclose the breach publicly", nextId: 111 },
            { text: "Keep the incident confidential", nextId: 112 }
        ]
    },

    // LEVEL 3B2
    106: {
        id: 106,
        title: "Operational Recovery",
        text: "Systems are restored quickly, but critical forensic evidence may be lost forever.",
        options: [
            { text: "Contact law enforcement", nextId: 113 },
            { text: "Handle the incident privately", nextId: 114 }
        ]
    },

    // ENDINGS
    107: {
        id: 107,
        title: "Ending: Fast Recovery, Permanent Risk",
        text: "The attackers provide a working decryptor and systems recover quickly. Months later, your company becomes known among ransomware groups as a business willing to pay.",
        options: [{ text: "Return to dilemmas", nextId: null }]
    },

    108: {
        id: 108,
        title: "Ending: Expensive Integrity",
        text: "Recovery takes weeks and some data is permanently lost. However, regulators and partners praise the company for refusing to fund cybercriminals.",
        options: [{ text: "Return to dilemmas", nextId: null }]
    },

    109: {
        id: 109,
        title: "Ending: Controlled Damage",
        text: "External responders identify hidden persistence mechanisms and fully remove the attackers. The incident is expensive, but contained.",
        options: [{ text: "Return to dilemmas", nextId: null }]
    },

    110: {
        id: 110,
        title: "Ending: Silent Spread",
        text: "Your exhausted internal team misses several compromised systems. Two weeks later, ransomware returns.",
        options: [{ text: "Return to dilemmas", nextId: null }]
    },

    111: {
        id: 111,
        title: "Ending: Painful Transparency",
        text: "The breach becomes public immediately. The company suffers short-term reputational damage, but customers appreciate the honesty.",
        options: [{ text: "Return to dilemmas", nextId: null }]
    },

    112: {
        id: 112,
        title: "Ending: The Leak",
        text: "Journalists eventually uncover the breach themselves. The company is accused of hiding the incident from customers and regulators.",
        options: [{ text: "Return to dilemmas", nextId: null }]
    },

    113: {
        id: 113,
        title: "Ending: Under Investigation",
        text: "Law enforcement assists with threat intelligence and attribution. Recovery succeeds slowly under heavy regulatory oversight.",
        options: [{ text: "Return to dilemmas", nextId: null }]
    },

    114: {
        id: 114,
        title: "Ending: Back to Business",
        text: "Operations recover quickly. Six months later, stolen company data appears online and customers begin filing lawsuits.",
        options: [{ text: "Return to dilemmas", nextId: null }]
    },

};

// Хранилище выбранных ответов (для корневых дилемм не нужно, так как ветвление ведёт к результатам)
// Но мы не сохраняем ответы, т.к. каждый путь уникален. Можно сохранять историю, но для простоты — нет.

let historyStack = []; // стек для навигации назад (id дилемм)

const listView = document.getElementById('listView');
const detailView = document.getElementById('detailView');
const dilemmasGrid = document.getElementById('dilemmasGrid');
const detailContainer = document.getElementById('detailCard');
const backToListBtn = document.getElementById('backToListBtn');

// Отображение списка корневых дилемм (id с 1 по 8)
function renderListView() {
    dilemmasGrid.innerHTML = '';
    for (let i = 1; i <= 8; i++) {
        const d = dilemmas[i];
        if (!d) continue;
        const card = document.createElement('div');
        card.className = 'preview-card';
        card.innerHTML = `
            <i class="fas fa-question-circle"></i>
            <h3>${escapeHtml(d.title)}</h3>
            <div class="preview-status">
                <i class="far fa-circle"></i> Начать
            </div>
        `;
        card.addEventListener('click', () => openDetail(d.id));
        dilemmasGrid.appendChild(card);
    }
}

// Открыть дилемму по id, добавить в историю
function openDetail(id, addToHistory = true) {
    const dilemma = dilemmas[id];
    if (!dilemma) return;
    
    if (addToHistory) {
        historyStack.push(id);
    }
    
    let optionsHtml = '';
    dilemma.options.forEach(opt => {
        optionsHtml += `
            <button class="detail-option-btn" data-nextid="${opt.nextId === null ? 'null' : opt.nextId}">
                <i class="far fa-circle"></i>
                <span>${escapeHtml(opt.text)}</span>
            </button>
        `;
    });
    
    detailContainer.innerHTML = `
        <div class="detail-text"><i class="fas fa-gavel" style="margin-right: 10px;"></i> ${escapeHtml(dilemma.text)}</div>
        <div class="detail-options" id="detailOptions">
            ${optionsHtml}
        </div>
    `;
    
    const optButtons = detailContainer.querySelectorAll('.detail-option-btn');
    optButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const nextId = btn.getAttribute('data-nextid');
            if (nextId === 'null') {
                // Конец ветки: возвращаемся к списку
                backToList();
            } else {
                // Переход к следующей дилемме
                openDetail(parseInt(nextId), true);
            }
        });
    });
    
    listView.style.display = 'none';
    detailView.style.display = 'block';
}

// Возврат к списку (очистить историю)
function backToList() {
    historyStack = [];
    listView.style.display = 'block';
    detailView.style.display = 'none';
    renderListView();
}

// Кнопка "Назад" (возврат на предыдущую дилемму)
function goBack() {
    if (historyStack.length <= 1) {
        backToList();
    } else {
        historyStack.pop(); // убираем текущую
        const prevId = historyStack[historyStack.length - 1];
        openDetail(prevId, false); // открываем предыдущую без добавления в историю
    }
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderListView();
    listView.style.display = 'block';
    detailView.style.display = 'none';
    
    // Изменяем поведение кнопки "Ко всем дилеммам" на сброс
    backToListBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Назад / в список';
    backToListBtn.onclick = () => {
        if (detailView.style.display === 'block') {
            goBack();
        } else {
            backToList();
        }
    };
});