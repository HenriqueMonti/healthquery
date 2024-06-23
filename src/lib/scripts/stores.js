// @ts-nocheck

import { writable } from 'svelte/store';
import { saveToSessionStorage, loadFromSessionStorage } from './sessionStorage';

const initialValue = loadFromSessionStorage('dinheiro') || 0;
export const dinheiro = writable(initialValue);

dinheiro.subscribe((value) => {
  saveToSessionStorage('dinheiro', value);
});
