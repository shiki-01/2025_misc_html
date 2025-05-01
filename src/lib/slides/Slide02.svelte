<script lang="ts">
	import { onMount } from "svelte";
    import Header from "./components/Header.svelte";
</script>

<div class="background w:100% h:100% grid grid-template-columns:1fr grid-template-rows:120px|1fr bg:white b:40px|sky|solid">
    <Header title={"HTML / CSS って何だろう？"} />

    <div class="w:100% h:100% px:60px py:20px flex">
        
    </div>
</div>

<style>
	.background {
		background-image:
			linear-gradient(0deg, transparent calc(100% - 1px), rgba(80, 108, 122, 20%) calc(100% - 1px)),
			linear-gradient(90deg, transparent calc(100% - 1px), rgba(80, 108, 122, 20%) calc(100% - 1px));
		background-size: 32px 32px;
		background-repeat: repeat;
		background-position: center center;
	}
</style>
