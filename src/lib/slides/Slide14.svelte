<script lang="ts">
	import Icon from '@iconify/svelte';
	import Header from './components/Header.svelte';
	import Code from './components/Code.svelte';
</script>

<div
	class="background w:100% h:100% grid grid-template-columns:1fr grid-template-rows:120px|1fr bg:white b:40px|sky|solid"
>
	<Header title={'実際に体験してみよう！ -  HTML 6 - 1'} />

	<div
		class="w:100% h:100% px:200px py:20px flex flex:row justify-content:center align-items:center"
	>
		<div
			class="w:100% h:100% py:24px flex flex:column justify-content:start gap:12px align-items:start"
		>
			<div class="flex flex:col w:100%">
				<h1 class="text:60px font:bold">ul / li</h1>
				<p class="text:35px">
					順不同リストを作成するための要素<br />
					&lt;ul&gt;要素内に&lt;li&gt;要素を使用してリスト項目を定義する
				</p>
			</div>
			<div class="flex flex:col w:100%">
				<h1 class="text:60px font:bold">img</h1>
				<p class="text:35px">
					画像を表示するための要素<br />
					&lt;img&gt;要素のsrc属性で画像のURLを指定し、alt属性で代替テキストを提供する
				</p>
			</div>
			<div class="flex flex:col w:100%">
				<h1 class="text:60px font:bold">a</h1>
				<p class="text:35px">
					ハイパーリンクを作成するための要素<br />
					&lt;a&gt;要素のhref属性でリンク先のURLを指定し、リンクテキストを囲む
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
