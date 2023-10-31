'use strict';

const elementNome = document.getElementById('nome');
const elementCognome = document.getElementById('cognome');
const elementColore = document.getElementById('colore');

elementNome.innerHTML = 'Il tuo nome: ';
elementCognome.innerHTML = 'Il tuo cognome: ';
elementColore.innerHTML = 'Il tuo colore preferito: ';

// const nomeInput = prompt('Inserisci il tuo nome:');
// const cognomeInput = prompt('Inserisci il tuo cognome:');
// const coloreInput = prompt('Inserisci il tuo colore preferito:');

elementNome.innerHTML =
  elementNome.innerHTML + prompt('Inserisci il tuo nome:');
elementCognome.innerHTML =
  elementCognome.innerHTML + prompt('Inserisci il tuo cognome:');
elementColore.innerHTML =
  elementColore.innerHTML + prompt('Inserisci il tuo colore preferito:');
