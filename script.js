let mil = 0;
let seg = 0;
let min = 0;
let hr = 0;
let horario = window.document.getElementById('horario');
let milisegundos = window.document.getElementById('mil');
let rodando = false;

function digitos(num) {
    if (num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function iniciar() {
    if (rodando === false) {
        intervalo = setInterval(contador, 10);
    }
    rodando= true;
}

function pausar() {
    clearInterval(intervalo);
    rodando = false;
}

function resetar() {
    clearInterval(intervalo);
    mil = 0;
    seg = 0;
    min= 0;
    hr = 0;
    milisegundos.innerHTML = `${digitos(mil)}`;
    horario.innerHTML = `${digitos(hr)}:${digitos(min)}:${digitos(seg)}`;
    rodando = false;
}

function contador() {
    mil++;
    if (mil == 100) {
        seg++;
        mil = 0;
        if (seg == 60) {
            min++;
            seg = 0;
            if (min == 60) {
                hr++;
                min = 0;
            }
        }
    }
    milisegundos.innerHTML = `${digitos(mil)}`;
    horario.innerHTML = `${digitos(hr)}:${digitos(min)}:${digitos(seg)}`;
}