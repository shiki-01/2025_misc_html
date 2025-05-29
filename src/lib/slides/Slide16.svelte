<script lang="ts">
	import Icon from '@iconify/svelte';
	import Header from './components/Header.svelte';
	import Code from './components/Code.svelte';
</script>

<div
	class="background w:100% h:100% grid grid-template-columns:1fr grid-template-rows:120px|1fr bg:white b:40px|sky|solid"
>
	<Header title={'実際に体験してみよう！ -  HTMLとCSSの連携'} />

	<div
		class="w:100% h:100% px:200px py:20px flex flex:row justify-content:center align-items:center"
	>
		<div
			class="w:100% h:100% py:24px flex flex:column justify-content:center  align-items:center"
		>
			<div>
				<Code
					lang="html"
					file="index.html（head部分を更新）"
					canCopy={false}
					darken={[5, 6]}
				>
&lt;head&gt;
	&lt;meta charset="UTF-8"&gt;
	&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
	&lt;title&gt;HTML 体験&lt;/title&gt;
    &lt;!-- ここにCSSファイルをリンクします --&gt;
	&lt;link rel="stylesheet" href="index.css"&gt;
&lt;/head&gt;
				</Code>
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
