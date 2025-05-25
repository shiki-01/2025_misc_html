<script lang="ts">
	import Header from './components/Header.svelte';
	import Index from './components/gsap/Index.svelte';
</script>

<div
	class="background w:100% h:100% grid grid-template-columns:1fr grid-template-rows:120px|1fr bg:white b:40px|sky|solid"
>
	<Header title={'HTML / CSS って何だろう？'} />

	<div
		class="w:100% h:100% px:200px py:20px flex flex:row justify-content:center align-items:center"
	>
		<div class="w:1400px h:720px flex flex:row justify-content:center align-items:center overflow:hidden r:16px shadow:0|0|100px|rgba(79,80,80,0.2)">
			<Index />
		</div>
	</div>
</div>

<style>
	.background {
		z-index: 0;
		background-image:
			linear-gradient(0deg, transparent calc(100% - 1px), rgba(80, 108, 122, 20%) calc(100% - 1px)),
			linear-gradient(90deg, transparent calc(100% - 1px), rgba(80, 108, 122, 20%) calc(100% - 1px));
		background-size: 32px 32px;
		background-repeat: repeat;
		background-position: center center;
	}
</style>
