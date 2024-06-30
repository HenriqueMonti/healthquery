import { writable } from 'svelte/store';
import { saveToSessionStorage, loadFromSessionStorage } from './sessionStorage';

const initialValue = loadFromSessionStorage('dinheiro') || 0;
export const dinheiro = writable(initialValue);
dinheiro.subscribe((value) => {
    saveToSessionStorage('darkMode', value);
});

const initialValue2 = loadFromSessionStorage('darkMode') || 0;
export const darkMode = writable(initialValue2);
darkMode.subscribe((value) => {
    saveToSessionStorage('darkMode', value);
});

const initialValue3 = loadFromSessionStorage('fezCheckup') || 0;
export const fezCheckup = writable(initialValue3);
fezCheckup.subscribe((value) => {
    saveToSessionStorage('fezCheckup', value);
});