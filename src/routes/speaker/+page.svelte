<script lang="ts">
	import { onMount } from 'svelte';
	import { isLoggedIn } from '$lib';
	import SlideViewer from '$lib/components/SlideViewer.svelte';
	import SlideController from '$lib/components/SlideController.svelte';

	onMount(() => {
		if (typeof window !== undefined) {
			const storedLoginStatus = localStorage.getItem('isLoggedIn');
			isLoggedIn.set(storedLoginStatus === 'true');
		}
		if (!$isLoggedIn) {
			window.location.href = '/speaker/login';
		}
	});
</script>

{#if $isLoggedIn}
	<div
		class="fixed top:0 left:0 w:100dvw z:50 flex flex:row justify-content:space-between align-items:center"
	>
		<div
			class="user-select:none m:10px w:fit bg:rgb(232,246,255) bd:blur(5) fg:rgb(75,160,218) px:10px py:5px b:1px|rgb(131,199,245)|solid r:99px drop-shadow(0|0|5px|rgba(31,96,139,0.2))"
		>
			<h1>Speaker View</h1>
		</div>
		<SlideController />
	</div>
	<SlideViewer />
{/if}
