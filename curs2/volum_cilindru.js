function calcVolum() {
let inaltime = parseFloat(document.getElementById('H').value);
let raza = parseFloat(document.getElementById('r').value);

let Volum =  raza ** 2 * Math.PI  * inaltime;

document.getElementById('divRetur').innerHTML = 'Volumul cilindrului este: ' + Volum.toFixed(2);
}