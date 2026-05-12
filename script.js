// ----- ДИЛЕММЫ С ВЕТВЛЕНИЕМ -----
// У каждой дилеммы есть id, title, text и массив options,
// где каждый option содержит текст и nextId (id следующей дилеммы, или null если конец)
const dilemmas = {
    // Корневые дилеммы (видны в списке)
    1: {
        id: 1,
        title: "Находка кошелька",
        text: "Вы нашли кошелёк с крупной суммой денег и документами владельца. Рядом никого нет.",
        options: [
            { text: "Вернуть кошелёк владельцу целиком", nextId: 9 },
            { text: "Забрать деньги, документы выбросить", nextId: 10 },
            { text: "Забрать половину денег, а кошелёк подбросить в полицию", nextId: 11 }
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
    32: { id: 32, title: "Терпение", text: "Вы купили беруши, но не высыпаетесь из-за вибрации. Здоровье ухудшилось.", options: [{ text: "Вернуться к списку", nextId: null }] }
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