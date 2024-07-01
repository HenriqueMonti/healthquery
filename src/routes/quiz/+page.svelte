<script>
	import QuizMassa from '$components/QuizMassa.svelte';
	import GabaritoMassa from '$components/GabaritoMassa.svelte';
	import { goto } from '$app/navigation';
	import { listaDePerguntas } from '$scripts/perguntas.js';
	import { dinheiro, impulso } from '$scripts/stores';
	import { loadFromSessionStorage } from '$scripts/sessionStorage';
	import { saveData } from '$scripts/firebase';
	import { auth } from '$scripts/firebaseInit';
	import { getUserDataByEmail } from '$scripts/auth';
	import { consoleError, consoleLog, consoleWarn } from '$scripts/consoleUtils';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';

	let perguntasEmbaralhadas = shuffle(listaDePerguntas);
	let metade = Math.floor(listaDePerguntas.length / 2);
	let perguntas = perguntasEmbaralhadas.slice(0, metade);

	// Função para embaralhar um array (algoritmo de Fisher-Yates)
	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]]; // Troca de lugar
		}
		return array;
	}

	let pergunta_id = 0;
	let acertos = 0;
	let respondeu = false;
	let acertouUltima = false;
	let respostaSelecionada = 0;

	function handleAnswer(e) {
		respostaSelecionada = e.detail;
		const perguntaAtual = perguntas[pergunta_id];
		acertouUltima = respostaSelecionada === perguntaAtual.correta;
		if (acertouUltima) {
			acertos += 1;
		}
		respondeu = true;
	}

	async function handleNextQuestion() {
		if (pergunta_id < perguntas.length - 1) {
			pergunta_id += 1;
			respondeu = false;
			respostaSelecionada = 0;
		} else {
			sessionStorage.setItem('ultimoAcertos', '' + acertos);
			sessionStorage.setItem('ultimoLength', '' + perguntas.length);
			sessionStorage.setItem('multiplicou', $impulso);
			if ($impulso) {
				dinheiro.update((currentValue) => currentValue + acertos);
				impulso.update((_) => 0);
			}
            dinheiro.update((currentValue) => currentValue + acertos);
			if (auth.currentUser) {
				try {
					let data = await getUserDataByEmail(auth.currentUser.email);
					const authInstance = getAuth();

					const updateAndSaveData = async (user) => {
						if (user) {
							data.dinheiro = $dinheiro; //(data.dinheiro || 0) + acertos;

							// Salva os dados no banco de dados usando o UID do usuário
							const nome = data.nome
                            const uid = data.uid
                            await saveData('users/'+nome+"/"+uid, data);

							// Redireciona para a página de resultados
							goto('/quiz/resultado');
						} else {
							console.log('Nenhum usuário autenticado.');
						}
					};

					onAuthStateChanged(authInstance, updateAndSaveData);
				} catch (error) {
					console.error('Erro ao obter ou salvar dados do usuário:', error);
				}
			}

			goto('/quiz/resultado');
		}
	}
</script>

{#if !respondeu}
	<QuizMassa {pergunta_id} {perguntas} on:answer={handleAnswer} />
{:else}
	<GabaritoMassa
		{pergunta_id}
		{perguntas}
		{acertouUltima}
		{respostaSelecionada}
		on:next={handleNextQuestion}
	></GabaritoMassa>
{/if}
