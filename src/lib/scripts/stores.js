import { writable } from 'svelte/store';
import { saveToSessionStorage, loadFromSessionStorage } from './sessionStorage';

const initial_dinheiro = loadFromSessionStorage('dinheiro') || 0;
export const dinheiro = writable(initial_dinheiro);
dinheiro.subscribe((value) => {
    saveToSessionStorage('dinheiro', value);
});

const initial_darkmode = loadFromSessionStorage('darkMode') || 0;
export const darkMode = writable(initial_darkmode);
darkMode.subscribe((value) => {
    saveToSessionStorage('darkMode', value);
});

const initial_fezCheckup = loadFromSessionStorage('fezCheckup') || 0;
export const fezCheckup = writable(initial_fezCheckup);
fezCheckup.subscribe((value) => {
    saveToSessionStorage('fezCheckup', value);
});

const itensLoja = []
export const loja = writable(itensLoja);
loja.subscribe((value) => {
    saveToSessionStorage('loja', value);
});