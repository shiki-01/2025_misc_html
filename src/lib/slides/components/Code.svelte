<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import hljs from 'highlight.js';
	import xml from 'highlight.js/lib/languages/xml';
	import css from 'highlight.js/lib/languages/css';
	import 'highlight.js/styles/atom-one-dark-reasonable.css';
	import '@fontsource-variable/m-plus-1-code';

	hljs.registerLanguage('html', xml);
	hljs.registerLanguage('css', css);

	let lines: string[] = $state([]);
	let isCopied = $state(false);
	let codeEl: HTMLElement;
	let {
		children,
		lang,
		file = '',
		canCopy,
		darken = []
	}: {
		children: () => any;
		lang: string;
		file?: string;
		canCopy: boolean;
		darken?: number[];
	} = $props();

	const trimCode = () => {
		if (codeEl) {
			codeEl.innerHTML = codeEl.innerHTML.replace(/^\s+|\s+$/g, '');
		}
	};

	const highlight = () => {
		if (codeEl) hljs.highlightElement(codeEl);
		trimCode();

		const html = codeEl.innerHTML;
		const lines = html.replace(/\n$/, '').split('\n');
		codeEl.innerHTML = lines.map((line) => `<span class="code-line">${line}</span>`).join('\n');
	};

	const handleCopy = () => {
		if (codeEl) {
			navigator.clipboard.writeText(codeEl.textContent || '');
			isCopied = true;
			setTimeout(() => {
				isCopied = false;
			}, 2000);
		}
	};

	onMount(() => {
		highlight();
		const code = codeEl?.textContent ?? '';
		lines = code.replace(/\n$/, '').split('\n');

		if (darken.length !== 0) {
			const lineEls = codeEl?.querySelectorAll('.code-line') || [];
			lineEls.forEach((el, index) => {
				(el as HTMLElement).style.opacity = darken.includes(index + 1) ? '1' : '0.5';
			});
		}
	});
</script>

<div class="w:100% h:100% flex justify-content:center align-items:center">
	<div class="w:1400px h:720px rel r:16px shadow:0|0|100px|rgba(79,80,80,0.2) overflow:hidden">
		<div
			class="w:100% h:60px bg:rgb(14,18,26) fg:#fff abs z:2 top:0 left:0 flex justify-content:center align-items:center"
		>
			{#if lang}
				<h2 class="text:1.5em">{lang}</h2>
			{/if}
			{#if file}
				<h2 class="text:1.5em mx:10px">-</h2>
				<h2 class="text:1.5em">{file}</h2>
			{/if}
		</div>
		<button
			class="w:60px h:60px fg:#fff abs z:2 top:70px right:10px flex justify-content:center align-items:center {canCopy
				? ''
				: 'cursor:not-allowed'}"
			onclick={() => {
				if (canCopy) handleCopy();
			}}
		>
			<Icon icon={isCopied ? 'ix:checkbox-filled' : 'ix:clipboard-filled'} class="text:2em" />
		</button>
		<div class="abs top:60px left:0 right:0 bottom:0 bg:#282c34 overflow-y:auto overflow-x:hidden">
			<div class="flex min-h:100%">
				<div class=" flex">
					<div
						class="sticky left:0 z:1 flex:none w:60px user-select:none bg:#23272e fg:#888"
					>
						<ol class="m:0 padding:2em|0 w:100%">
							{#each lines as _, i}
								<li
									class="number width:100% height:2em pr:0.6em font:tabular-nums text:1.5em text-align:right flex justify-content:flex-end align-items:center"
								>
									{i + 1}
								</li>
							{/each}
						</ol>
					</div>
					<div class="flex:1 min-w:0 overflow-x:auto overflow-y:hidden">
						<pre class="m:0 p:0 w:100% min-w:max-content h:auto"><code
								bind:this={codeEl}
								class="overflow-y:hidden text:2em line-h:1.5em language-{lang}">
                	{@render children?.()}
            	</code></pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.number {
		font-family: 'M PLUS 1 Code', monospace;
	}

	code {
		font-family: 'M PLUS 1 Code', monospace;
		display: block;
		white-space: pre;
		word-break: break-all;
		margin: 0;
		padding: 0;
	}
</style>
