<script lang="ts">
	import Header from './components/Header.svelte';

	const colors: {
		[key: string]: string;
	} = {
		HTML: 'crimson',
		CSS: 'yellow'
	};

	const texts = {
		HTML: [
			'Hyper Text Markup Language の略で、Web ページを作成するための言語',
			'Web ページの構造を定義するために使用される',
			'要素（タグ）を使用して、テキスト、画像、リンクなどのコンテンツを配置する'
		],
		CSS: [
			'Cascading Style Sheets の略で、Web ページのスタイルを定義するための言語',
			'HTML で作成された要素の見た目を制御するために使用される',
			'色、フォント、レイアウトなどを指定することができる'
		]
	};
</script>

<div
	class="background w:100% h:100% grid grid-template-columns:1fr grid-template-rows:120px|1fr bg:white b:40px|sky|solid"
>
	<Header title={'HTML / CSS って何だろう？'} />

	<div
		class="w:100% h:100% px:200px py:20px flex flex:row justify-content:space-between align-items:center"
	>
		{#each Object.entries(texts) as [key, value]}
			<div
				class="w:600px h:600px grass bg:{colors[key]}-60/10% b:2px|{colors[
					key
				]}-60|solid p:64px r:32px flex flex:column justify-content:center align-items:center"
			>
				<p class="text:3.5em line-h:2em font:bold fg:{colors[key]}">{key}</p>
				<ul
					class="w:100% h:100% flex flex:column justify-content:center align-items:start gap:20px pl:32px list-style:disc"
				>
					{#each value as text}
						<li class="text:1.8em line-h:1.5em">{text}</li>
					{/each}
				</ul>
			</div>
		{/each}
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

	.grass {
		backdrop-filter: blur(4px);
	}
</style>
