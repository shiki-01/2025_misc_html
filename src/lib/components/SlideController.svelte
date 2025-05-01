<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import { currentSlide } from '$lib';

	let socket: WebSocket;

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
			changeSlide(-1);
		} else if (event.key === 'ArrowRight' || event.key === 'PageDown') {
			changeSlide(1);
		}

		setTimeout(() => {}, 100);
		event.preventDefault();
	};

	onMount(() => {
		socket = new WebSocket('ws://localhost:1999/party/local-slide');

		socket.onmessage = (event) => {
			currentSlide.set(JSON.parse(event.data).slide);
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('keydown', (event) => handleKeydown(event));
		}
	});

	onDestroy(() => {
		if (socket) {
			socket.close();
		}
		if (typeof window !== 'undefined') {
			window.removeEventListener('keydown', (event) => handleKeydown(event));
		}
	});

	function changeSlide(direction: number) {
		currentSlide.update((n) => Math.max(0, n + direction));
		socket.send(JSON.stringify({ slide: $currentSlide }));
	}
</script>

<div class="flex m:10px flex:row gap:10px fg:rgb(31,166,255)">
	<button on:click={() => changeSlide(-1)}>
		<Icon
			icon="iconamoon:player-next-fill"
			width="24"
			height="24"
			style="transform: rotate(180deg)"
		/>
	</button>
	<button on:click={() => changeSlide(1)}>
		<Icon icon="iconamoon:player-next-fill" width="24" height="24" />
	</button>
</div>
