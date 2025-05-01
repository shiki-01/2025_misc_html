<script lang="ts">
	import Icon from '@iconify/svelte';
	import { currentSlide } from '$lib';
	const slides = [{ content: 'Slide 1' }, { content: 'Slide 2' }, { content: 'Slide 3' }];

	let isHovered = $state(false);

	$effect(() => {
		if ($currentSlide >= slides.length) {
			currentSlide.set(slides.length - 1);
		} else if ($currentSlide < 0) {
			currentSlide.set(0);
		}
	});
</script>

{#each slides as slide, i}
	{#if i === $currentSlide}
		<div
			role="button"
			tabindex="0"
			aria-label="Slide"
			onmouseleave={() => (isHovered = false)}
			onmouseover={() => (isHovered = true)}
			onfocus={() => (isHovered = true)}
			onblur={() => (isHovered = false)}
			class="w:100% video bg:gray flex rel"
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
			{slide.content}
		</div>
	{/if}
{/each}
