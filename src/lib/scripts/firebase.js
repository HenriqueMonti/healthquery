// place files you want to import through the `$lib` alias in this folder.

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, get, child, update, remove } from 'firebase/database';
import { firebaseConfig } from '$scripts/firebaseConfig';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function saveData(path, data) {
  set(ref(database, path), data)
    .then(() => {
      console.log('Dados salvos com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao salvar dados: ', error);
    });
}

export function addData(path, data) {
  push(ref(database, path), data)
    .then(() => {
      console.log('Dados adicionados com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao adicionar dados: ', error);
    });
}
export function loadData(path) {
  const dbRef = ref(database);
  get(child(dbRef, path))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log('Dados carregados: ', snapshot.val());
      } else {
        console.log('Nenhum dado disponível');
      }
    })
    .catch((error) => {
      console.error('Erro ao carregar dados: ', error);
    });
}

export function updateData(path, newData) {
  update(ref(database, path), newData)
    .then(() => {
      console.log('Dados atualizados com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao atualizar dados: ', error);
    });
}

export function removeData(path) {
  remove(ref(database, path))
    .then(() => {
      console.log('Dados removidos com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao remover dados: ', error);
    });
}