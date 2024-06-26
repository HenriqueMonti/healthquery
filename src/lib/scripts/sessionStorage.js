import { consoleWarn } from "./consoleUtils";

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
        consoleWarn('sessionStorage não salvo.');
    }
}

export function loadFromSessionStorage(key) {
    if (isSessionStorageAvailable()) {
        const storedValue = sessionStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    } else {
        consoleWarn('sessionStorage não carregado.');
        return null;
    }
}