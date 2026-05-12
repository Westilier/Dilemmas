const dilemmas = {
    1: {
        id: 1,
        title: "Dawn of the Attack",
        text: "Employees suddenly report encrypted files, inaccessible systems, and ransom notes appearing across the network. The CEO demands immediate action while your SOC team suspects the attackers still have access.",
        options: [
            { text: "Send a company-wide alert immediately", nextId: 101 },
            { text: "Investigate quietly before informing staff", nextId: 102 }
        ]
    },

    2: {
        id: 2,
        title: "Backdoor for a Client",
        text: "You are an independent developer. The client may refuse to pay after accepting the product. You have the technical ability to plant a hidden backdoor to remotely disable the system if the client cheats you. However, if discovered, it's a criminal offense. What is your decision?",
        options: [
            { text: "🔒 Do not implement a backdoor", nextId: 201 },
            { text: "⚠️ Implement a backdoor", nextId: 202 }
        ]
    },

    3: {
        id: 3,
        title: "Interview with AI Assistant",
        text: "You've been invited to an online interview at a large IT company abroad. Due to stress, you feel unsure and consider using an AI assistant to answer questions in real time. What do you do?",
        options: [
            { text: "🧠 Use your own knowledge", nextId: 301 },
            { text: "🤖 Use AI assistance", nextId: 302 }
        ]
    },

    4: {
        id: 4,
        title: "VIP User Inspection",
        text: "You are a system administrator. The monitoring system has detected signs that a VIP client may be violating the contract terms. You have the option to perform an in-depth check of their data, but this significantly increases the risk of leaking their confidential information. What do you do?",
        options: [
            { text: "❌ Do not perform additional check", nextId: 401 },
            { text: "🔍 Perform check despite the risk", nextId: 402 }
        ]
    },

    101: {
        id: 101,
        title: "Containment Decision",
        text: "Employees are now aware of the attack. Panic spreads internally, but suspicious activity reports increase dramatically.",
        options: [
            { text: "Shut down the entire corporate network", nextId: 103 },
            { text: "Keep critical systems online", nextId: 104 }
        ]
    },

    102: {
        id: 102,
        title: "Silent Investigation",
        text: "You avoid public panic, but employees continue normal work while the ransomware may still be spreading.",
        options: [
            { text: "Start a full forensic investigation", nextId: 105 },
            { text: "Focus on restoring operations first", nextId: 106 }
        ]
    },

    103: {
        id: 103,
        title: "Total Shutdown",
        text: "The attack appears contained, but business operations are almost completely offline.",
        options: [
            { text: "Pay the ransom", nextId: 107 },
            { text: "Refuse payment", nextId: 108 }
        ]
    },

    104: {
        id: 104,
        title: "Partial Isolation",
        text: "Core services remain online, but there is a risk the attackers still maintain access to parts of the network.",
        options: [
            { text: "Hire external incident response experts", nextId: 109 },
            { text: "Handle everything internally", nextId: 110 }
        ]
    },

    105: {
        id: 105,
        title: "Forensic Priority",
        text: "Your team collects evidence and analyzes compromised systems, but recovery slows significantly.",
        options: [
            { text: "Disclose the breach publicly", nextId: 111 },
            { text: "Keep the incident confidential", nextId: 112 }
        ]
    },

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

    201: {
        id: 201,
        title: "Outcome: No backdoor",
        text: "You delivered a clean solution. The client accepted the work but disappeared without paying the remaining 70%. You sued unsuccessfully for two years and went bankrupt. However, you gained a reputation in the IT community as an honest developer. Six months later, a new trustworthy client gave you 100% upfront payment precisely because of your reputation. You lost money on the first project but earned lasting market trust.",
        options: [{ text: "🏠 Back to dilemma list", nextId: null }]
    },
    202: {
        id: 202,
        title: "Outcome: Backdoor found",
        text: "You implemented the backdoor. The client didn't pay — you remotely disabled the system and got your money. But a month later, they hired security experts who found the backdoor. The court ruled it as extortion and unauthorized access. You received a suspended sentence, a fine of three times the contract amount, and a 5‑year ban on developing software for legal entities. You ended up on international vendor blacklists and lost your profession.",
        options: [{ text: "🏠 Back to dilemma list", nextId: null }]
    },

    301: {
        id: 301,
        title: "Outcome: Own knowledge",
        text: "You didn't use AI. You answered only half of the questions and weren't hired, but they suggested you improve your skills and reapply. You preserved your reputation, identified your weak points, and now know exactly what questions to expect in a second interview.",
        options: [{ text: "🏠 Back to dilemma list", nextId: null }]
    },
    302: {
        id: 302,
        title: "Outcome: AI used",
        text: "You answered using AI. The interviewer suspected something was off (darting eyes, dry answers) and rejected your application. You will never be allowed to apply to this company again, and your information may have been shared with partner companies. Your reputation is ruined.",
        options: [{ text: "🏠 Back to dilemma list", nextId: null }]
    },

    401: {
        id: 401,
        title: "Outcome: No inspection",
        text: "You left everything as is. Three months later, it turned out the VIP client had used the service to launch DDoS attacks on government resources. The company got blacklisted and received a multi-million dollar fine. However, you followed the protocol strictly — your reputation as a reliable employee remained intact. The company allocated budget for a secure monitoring system. No one blamed you personally.",
        options: [{ text: "🏠 Back to dilemma list", nextId: null }]
    },
    402: {
        id: 402,
        title: "Outcome: Inspection with leak",
        text: "You found proof of the violation and reported it to management — the client was blocked. But during the inspection, a fragment of their data leaked into the public domain. The client sued and won: the company paid a record penalty and shut down its premium service. You were fired for 'security policy violation', and now no company handling critical data will hire you.",
        options: [{ text: "🏠 Back to dilemma list", nextId: null }]
    }
};


let historyStack = [];

const listView = document.getElementById('listView');
const detailView = document.getElementById('detailView');
const dilemmasGrid = document.getElementById('dilemmasGrid');
const detailContainer = document.getElementById('detailCard');
const backToListBtn = document.getElementById('backToListBtn');


function renderListView() {
    dilemmasGrid.innerHTML = '';
    for (let i = 1; i <= 9; i++) {
        const d = dilemmas[i];
        if (!d) continue;
        const card = document.createElement('div');
        card.className = 'preview-card';
        card.innerHTML = `
            <i class="fas fa-question-circle"></i>
            <h3>${escapeHtml(d.title)}</h3>
        `;
        card.addEventListener('click', () => openDetail(d.id));
        dilemmasGrid.appendChild(card);
    }
}

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
                backToList();
            } else {
                openDetail(parseInt(nextId), true);
            }
        });
    });
    
    listView.style.display = 'none';
    detailView.style.display = 'block';
}

function backToList() {
    historyStack = [];
    listView.style.display = 'block';
    detailView.style.display = 'none';
    renderListView();
}

function goBack() {
    if (historyStack.length <= 1) {
        backToList();
    } else {
        historyStack.pop();
        const prevId = historyStack[historyStack.length - 1];
        openDetail(prevId, false);
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
    
    backToListBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back / to the list';
    backToListBtn.onclick = () => {
        if (detailView.style.display === 'block') {
            goBack();
        } else {
            backToList();
        }
    };
});
