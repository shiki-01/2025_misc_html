<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import { currentSlide } from '$lib';
	import Slide01 from '$lib/slides/Slide01.svelte';
	import Slide02 from '$lib/slides/Slide02.svelte';
	import Slide03 from '$lib/slides/Slide03.svelte';
	import Slide04 from '$lib/slides/Slide04.svelte';
	import Slide05 from '$lib/slides/Slide05.svelte';

	const slides = [
		{ content: Slide01 },
		{ content: Slide02 },
		{ content: Slide03 },
		{ content: Slide04 },
		{ content: Slide05 },
	];

	let socket: WebSocket;
	let isHovered = $state(false);
	let slideScale = $state(1);

	const changeScale = () => {
		if (typeof window === 'undefined') return;
		const slideAspectRatio = 1920 / 1080;
		const windowAspectRatio = window.innerWidth / window.innerHeight;

		if (windowAspectRatio > slideAspectRatio) {
			slideScale = window.innerHeight / 1080;
		} else {
			slideScale = window.innerWidth / 1920;
		}
	};

	onMount(() => {
		socket = new WebSocket(`ws://${import.meta.env.VITE_LOCAL_IP}:1999/party/2025-misc-html`);

		socket.onmessage = (event) => {
			currentSlide.set(JSON.parse(event.data).slide);
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', changeScale);
			changeScale();
		}
	});

	onDestroy(() => {
		if (socket) {
			socket.close();
		}

		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', changeScale);
		}
	});
</script>

{#each slides as slide, i}
	{@const Slide = slide.content}
	{#if i === $currentSlide}
		<div
			role="button"
			tabindex="0"
			aria-label="Slide"
			onmouseleave={() => (isHovered = false)}
			onmouseover={() => (isHovered = true)}
			onfocus={() => (isHovered = true)}
			onblur={() => (isHovered = false)}
			class="w:100% h:100% flex justify-content:center align-items:center overflow:hidden"
		>
			{#if isHovered}
				<button
					class="abs size:fit bottom:16px right:16px fg:white"
					onclick={() => {
						if (document.fullscreenElement) {
							document.exitFullscreen();
						} else {
							document.documentElement.requestFullscreen();
						}
					}}
				>
					<Icon icon="iconamoon:screen-full-duotone" width="24" height="24" />
				</button>
			{/if}
			<div
				class="w:1920px h:1080px video bg:gray flex rel obj:contain"
				style="transform: scale({slideScale}); transform-origin: center;"
			>
				<Slide />
			</div>
		</div>
	{/if}
{/each}
