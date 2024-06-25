// @ts-nocheck

import { writable } from 'svelte/store';
import { saveToSessionStorage, loadFromSessionStorage } from './sessionStorage';

const initialValue = loadFromSessionStorage('darkMode') || 0;
export const darkMode = writable(initialValue);

darkMode.subscribe((value) => {
    saveToSessionStorage('darkMode', value);
});
