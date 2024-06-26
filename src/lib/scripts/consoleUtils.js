/*
Antes que vc "🤨": o propósito desse
script é facilitar a diferenciação
de quais erros são tratados ou não
(Além de adicionar o gato, obrigatório).
*/

export function consoleLog(...msg) {
    console.log("😸", ...msg)
}

export function consoleWarn(...msg) {
    console.warn("😿", ...msg)
}

export function consoleError(...msg) {
    console.error("🙀", ...msg)
}