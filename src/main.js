import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import validator from 'validator';
import './style.css';

const campoDeTexto = document.querySelector('#input');
const button = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');
const passwordBtnEl = document.querySelector('#password');
const displayPasswordEl = document.querySelector('h2');
const phrase = document.querySelector('#copy');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const campos = {
        cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
        hexColor: validator.isHexColor(campoDeTexto.value),
        email: validator.isEmail(campoDeTexto.value),
        uuid: validator.isUUID(campoDeTexto.value, 4),
        url: validator.isURL(campoDeTexto.value),
    };
    textoDeSaida.innerHTML = `Validation returned ${campos[seletor.value]}`;
});


passwordBtnEl.addEventListener('click', () => {
    displayPasswordEl.innerHTML = nanoid();  
});

phrase.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    alert('Senha copiada!');
});


