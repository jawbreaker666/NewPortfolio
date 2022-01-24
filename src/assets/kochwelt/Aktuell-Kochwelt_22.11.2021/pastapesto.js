function calculate() {
    let howManyPortions = document.getElementById('input');
    let nudeln = document.getElementById('aNudeln');

    let nudelnResult = howManyPortions.value * 1;

    
    
    nudeln.innerHTML = `Nudeln:  ca. ${nudelnResult*125}g`;

    start();

    howManyPortions.value = '';

}

function start() {
    
    calculatePesto();
    calculateMilk();
    calculatesaureSahne();
    calculateParmesan();
    calculateRucola();
    calculatePinienkerne();
    calculateKnoblauch();
    calculateCrèmefraîche();
    calculateOlivenöl();
}

function calculatePesto() {
    let howManyPortions = document.getElementById('input').value;
    let pesto = document.getElementById('pesto');

    let pestoResult = howManyPortions * 1;

    pesto.innerHTML = `Pesto: ${pestoResult} bis ${pestoResult*2} TL`;
}

function calculateMilk() {
    let howManyPortions = document.getElementById('input').value;
    let milk = document.getElementById('milk');

    let milkResult = howManyPortions * 0.5

    milk.innerHTML = `Milch: ${milkResult} ml`;

}

function calculatesaureSahne() {
    let howManyPortions = document.getElementById('input').value;
    let saureSahne = document.getElementById('saureSahne');

    let saureSahneResult = howManyPortions * 3;

    saureSahne.innerHTML = `saure Sahne: ${saureSahneResult} g`;
}

function calculateParmesan() {
    let howManyPortions = document.getElementById('input').value;
    let parmesan = document.getElementById('parmesan');

    let parmesanResult = howManyPortions * 2;

    parmesan.innerHTML = `Parmesan: ${parmesanResult} g`;
}

function calculateRucola() {
    let howManyPortions = document.getElementById('input').value;
    let rucola = document.getElementById('rucola');

    let rucolaResult = howManyPortions * 0.5;

    rucola.innerHTML = `Rucola: ${rucolaResult} g`;
}

function calculatePinienkerne() {
    let howManyPortions = document.getElementById('input').value;
    let pinienkerne = document.getElementById('pinienkerne');

    let pinienkerneResult = howManyPortions * 1;

    pinienkerne.innerHTML = `Pinienkerne oder Sonnenblumenkerne: ${pinienkerneResult} g`;
}

function calculateKnoblauch() {
    let howManyPortions = document.getElementById('input').value;
    let knoblauch = document.getElementById('knoblauch');

    let knoblauchResult = howManyPortions * 1;

    knoblauch.innerHTML = `Knoblauch: ${knoblauchResult} Zehe`;
}

function calculateCrèmefraîche() {
    let howManyPortions = document.getElementById('input').value;
    let crèmefraîche = document.getElementById('crèmefraîche');

    let crèmefraîcheResult = howManyPortions * 1;

    crèmefraîche.innerHTML = `Crèmefraîche: ${crèmefraîcheResult} EL`;
}

function calculateOlivenöl() {
    let howManyPortions = document.getElementById('input').value;
    let olivenöl = document.getElementById('olivenöl');

    let olivenölResult = howManyPortions * 1;

    olivenöl.innerHTML = `Olivenöl: ${olivenölResult} EL`;
}


