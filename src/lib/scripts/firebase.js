import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, get, child, update, remove } from 'firebase/database';
import { firebaseConfig } from '$scripts/firebaseConfig';
import { consoleLog, consoleError, consoleWarn } from './consoleUtils';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function saveData(path, data) {
    set(ref(database, path), data)
        .then(() => {
            consoleLog('Dados salvos com sucesso!');
        })
        .catch((error) => {
            consoleError('Erro ao salvar dados: ', error);
        });
}

export function addData(path, data) {
    push(ref(database, path), data)
        .then(() => {
            consoleLog('Dados adicionados com sucesso!');
        })
        .catch((error) => {
            consoleError('Erro ao adicionar dados: ', error);
        });
}
export function loadData(path) {
    const dbRef = ref(database);
    get(child(dbRef, path))
        .then((snapshot) => {
            if (snapshot.exists()) {
                consoleLog('Dados carregados: ', snapshot.val());
            } else {
                consoleWarn('Nenhum dado disponível.');
            }
        })
        .catch((error) => {
            consoleError('Erro ao carregar dados: ', error);
        });
}

export function updateData(path, newData) {
    update(ref(database, path), newData)
        .then(() => {
            consoleLog('Dados atualizados com sucesso!');
        })
        .catch((error) => {
            consoleError('Erro ao atualizar dados: ', error);
        });
}

export function removeData(path) {
    remove(ref(database, path))
        .then(() => {
            consoleLog('Dados removidos com sucesso!');
        })
        .catch((error) => {
            consoleError('Erro ao remover dados: ', error);
        });
}