// src/sessionStorage.js

function isSessionStorageAvailable() {
    try {
        const testKey = '__test__';
        sessionStorage.setItem(testKey, testKey);
        sessionStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

export function saveToSessionStorage(key, value) {
    if (isSessionStorageAvailable()) {
        sessionStorage.setItem(key, JSON.stringify(value));
    } else {
        console.warn('Problema ao salvar: sessionStorage não está disponível.');
    }
}

export function loadFromSessionStorage(key) {
    if (isSessionStorageAvailable()) {
        const storedValue = sessionStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    } else {
        console.warn('Problema ao loadar: sessionStorage não está disponível.');
        return null;
    }
}