<script lang="ts">
	import Icon from '@iconify/svelte';
	import Header from './components/Header.svelte';
</script>

<div
	class="background w:100% h:100% grid grid-template-columns:1fr grid-template-rows:120px|1fr bg:white b:40px|sky|solid"
>
	<Header title={'実際に体験してみよう！ -  HTML 4 - 1'} />

	<div
		class="w:100% h:100% px:200px py:20px flex flex:row justify-content:center align-items:center"
	>
		<div
			class="w:100% h:100% py:24px flex flex:column justify-content:start gap:12px align-items:start"
		>
			<div class="flex flex:col w:100%">
				<h1 class="text:60px font:bold">head</h1>
				<p class="text:35px">
					サイトがどのようなものかをブラウザに伝えるための情報を記述する場所<br />
					メタデータやスタイルシート、スクリプトなどを含む
				</p>
			</div>
			<div class="flex flex:col w:100%">
				<h1 class="text:60px font:bold">meta</h1>
				<p class="text:35px">
					文書のメタデータを定義するための要素<br />
					文字セットやページの説明、キーワードなどを指定する
				</p>
			</div>
			<div class="flex flex:col w:100%">
				<h1 class="text:60px font:bold">title</h1>
				<p class="text:35px">
					文書のタイトルを定義する要素<br />
					ブラウザのタブや検索エンジンの結果に表示される
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
