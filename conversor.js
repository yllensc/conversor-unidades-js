import convert from './functionsUnits.js'

// Obtener referencias a los elementos del DOM
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const unit1 = document.getElementById('unit1');
const unit2 = document.getElementById('unit2');
const btnConvertir = document.getElementById('btnConvertir');

// Asignar eventos de clic a los elementos c1, c2 y c3
c1.addEventListener('click', () => {
    label1.textContent = 'Celsius';
    label2.textContent = 'Fahrenheit';
});

c2.addEventListener('click', () => {
    label1.textContent = 'Kilos';
    label2.textContent = 'Libras';
});

c3.addEventListener('click', () => {
    label1.textContent = 'Metros';
    label2.textContent = 'Pies';
});

// Asignar evento de clic al botón de convertir
btnConvertir.addEventListener('click', () => {
    const valorUnit1 = parseFloat(unit1.value);
    
    if (!isNaN(valorUnit1)) {
        let resultado;
        
        if (label1.textContent === 'Celsius' && label2.textContent === 'Fahrenheit') {
            resultado = convert.convTemperature(valorUnit1);
        } else if (label1.textContent === 'Kilos' && label2.textContent === 'Libras') {
            resultado = convert.convWeight(valorUnit1);
        } else if (label1.textContent === 'Metros' && label2.textContent === 'Pies') {
            resultado = convert.convDistance(valorUnit1);
        }
        
        unit2.value = resultado.toFixed(2);
    }
});


