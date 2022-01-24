// let ingrediant = [1 / 4, 3, 50, 20, 20, 200, 1 / 4, 1 / 4, 1 / 4, 100, 1 / 4, 1 / 4, 1 / 4, 1 / 4, 3 / 4, 1.25, 1 / 4, 1 / 4, 1 / 4, 1 / 4, 1 / 4];
// code Anil
// function calc() {
//     for (let i = 0; i < ingrediant.length; i++) {
//         let quantity = document.getElementById('ingr' + i);
//         let input1 = +document.getElementById('input').value;
//         let result = ingrediant[i] * input1;

//         document.getElementById('ingr' + i).innerHTML = result;
//     }
// }

function calculate() {
    let howManyPortions = document.getElementById('input');
    let kichererbsen = document.getElementById('aKichererbsen');

    let kichererbsenResult = howManyPortions.value * 1;

    
    
    kichererbsen.innerHTML = `Kichererbsen: ${kichererbsenResult} Dose (ca. ${kichererbsenResult*400}g)`;

    start();

    howManyPortions.value = '';

}

function start() {
    
    calculateGarlic();
    calculateLemon();
    calculateGOliveoil();
    calculateTahini();
    calculateSalt();
    calculatePepper();
    calculateKuemmel();
}

function calculateGarlic() {
    let howManyPortions = document.getElementById('input').value;
    let garlic = document.getElementById('garlic');

    let garlicResult = howManyPortions * 1;

    garlic.innerHTML = `Knoblauch: ${garlicResult} bis ${garlicResult*2} Zehen`;
}

function calculateLemon() {
    let howManyPortions = document.getElementById('input').value;
    let lemon = document.getElementById('lemon');

    let lemonResult = howManyPortions * 0.5

    lemon.innerHTML = `Zitrone: ${lemonResult} (Saft)`;

}

function calculateGOliveoil() {
    let howManyPortions = document.getElementById('input').value;
    let olive = document.getElementById('olive');

    let oliveResult = howManyPortions * 3;

    olive.innerHTML = `Olivenöl: ${oliveResult} EL`;
}

function calculateTahini() {
    let howManyPortions = document.getElementById('input').value;
    let tahini = document.getElementById('tahini');

    let tahiniResult = howManyPortions * 2;

    tahini.innerHTML = `Tahini: ${tahiniResult} EL`;
}

function calculateSalt() {
    let howManyPortions = document.getElementById('input').value;
    let salt = document.getElementById('salt');

    let saltResult = howManyPortions * 0.5;

    salt.innerHTML = `Salz: ${saltResult} TL`;
}

function calculatePepper() {
    let howManyPortions = document.getElementById('input').value;
    let pepper = document.getElementById('pepper');

    let pepperResult = howManyPortions * 1;

    pepper.innerHTML = `Pfeffer: ${pepperResult} Messerspitze`;
}

function calculateKuemmel() {
    let howManyPortions = document.getElementById('input').value;
    let kuemmel = document.getElementById('kuemmel');

    let kuemmelResult = howManyPortions * 1;

    kuemmel.innerHTML = `Kreuzkümmel: ${kuemmelResult} Messerspitze`;
}

