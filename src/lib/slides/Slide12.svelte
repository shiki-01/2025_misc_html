<script lang="ts">
	import Icon from '@iconify/svelte';
	import Header from './components/Header.svelte';
</script>

<div
	class="background w:100% h:100% grid grid-template-columns:1fr grid-template-rows:120px|1fr bg:white b:40px|sky|solid"
>
	<Header title={'実際に体験してみよう！ -  HTML 5 - 1'} />

	<div
		class="w:100% h:100% px:200px py:20px flex flex:row justify-content:center align-items:center"
	>
		<div
			class="w:100% h:100% py:24px flex flex:column justify-content:start gap:12px align-items:start"
		>
			<div class="flex flex:col w:100%">
				<h1 class="text:60px font:bold">body</h1>
				<p class="text:35px">
					文書の本文を定義する要素<br />
					実際に表示されるコンテンツを含む
				</p>
			</div>
			<div class="flex flex:col w:100%">
				<h1 class="text:60px font:bold">h1</h1>
				<p class="text:35px">
					最も重要な見出しを定義する要素<br />
					&lt;h1&gt;から&lt;h6&gt;までの見出し要素があり、数字が小さいほど重要度が高い
				</p>
			</div>
			<div class="flex flex:col w:100%">
				<h1 class="text:60px font:bold">p</h1>
				<p class="text:35px">
					段落を定義する要素<br />
					テキストのブロックを作成し、改行を含む
				</p>
			</div>
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
