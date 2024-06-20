// @ts-nocheck
// src/stores.js
import { writable } from 'svelte/store';
import { saveToSessionStorage, loadFromSessionStorage } from './sessionStorage';

const initialValue = loadFromSessionStorage('dinheiro') || '';
export const dinheiro = writable(initialValue);

dinheiro.subscribe((value) => {
  saveToSessionStorage('dinheiro', value);
});
