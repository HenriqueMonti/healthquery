// place files you want to import through the `$lib` alias in this folder.

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child, update, remove } from 'firebase/database';
import { firebaseConfig } from '$scripts/firebaseConfig';

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

// Função para salvar dados
/**
 * @param {string | undefined} path
 * @param {unknown} data
 */
export function saveData(path, data) {
    set(ref(database, path), data)
      .then(() => {
        console.log('Dados salvos com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao salvar dados: ', error);
      });
  }
  
//   // Exemplo de uso
//   const exampleData = {
//     name: 'John Doe',
//     age: 30,
//     email: 'john.doe@example.com'
//   };
  
//   saveData('users/user1', exampleData);
  
// Função para carregar dados
/**
 * @param {string} path
 */
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
  
  // Exemplo de uso
  // loadData('users/user1');

  /**
 * @param {string | undefined} path
 * @param {any} newData
 */
  export function updateData(path, newData) {
    update(ref(database, path), newData)
      .then(() => {
        console.log('Dados atualizados com sucesso!');
      })
      .catch((/** @type {any} */ error) => {
        console.error('Erro ao atualizar dados: ', error);
      });
  }
  
  // Exemplo de uso
  // updateData('users/user1', { age: 31 });

/**
 * @param {string | undefined} path
 */
export function removeData(path) {
  remove(ref(database, path))
    .then(() => {
      console.log('Dados removidos com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao remover dados: ', error);
    });
}