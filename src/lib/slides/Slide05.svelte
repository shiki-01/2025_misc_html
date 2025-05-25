<script lang="ts">
	import Icon from '@iconify/svelte';
	import Header from './components/Header.svelte';
</script>

<div
	class="background w:100% h:100% grid grid-template-columns:1fr grid-template-rows:120px|1fr bg:white b:40px|sky|solid"
>
	<Header title={'実際に体験してみよう！ -  環境構築'} />

	<div
		class="w:100% h:100% px:200px py:20px flex flex:row justify-content:center align-items:center"
	>
		<div class="w:100% h:100% py:24px flex flex:column justify-content:space-between align-items:start">
			<div>
				<h1 class="text:45px font:bold">拡張機能ページを開く</h1>
				<div class="w:100% pl:24px flex flex:row justify-content:start align-items:center gap:20px">
					<Icon icon="ix:extension" class="w:64px h:64px font:bold" />
					<p class="text:40px font:bold">左のタブからこのアイコンマークを押す</p>
				</div>
			</div>
			<div>
				<h1 class="text:45px font:bold">Visual Studio Code の日本語化</h1>
				<div class="w:100% pl:24px flex flex:row justify-content:start align-items:center gap:20px">
					<img
						src="https://ms-ceintl.gallerycdn.vsassets.io/extensions/ms-ceintl/vscode-language-pack-ja/1.101.2025052109/1747819065723/Microsoft.VisualStudio.Services.Icons.Default"
						alt="Visual Studio Code 日本語 Language Pack"
						class="w:64px h:64px font:bold"
					/>
					<a
						href="https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja"
						target="_blank"
						class="text:40px font:bold text:blue bb:4px|solid|transparent bb:4px|solid|blue:hover"
					>
						Visual Studio Code 日本語 Language Pack ↗
					</a>
				</div>
			</div>
			<div>
				<h1 class="text:45px font:bold">開発画面表示のためのサーバー</h1>
				<div class="w:100% pl:24px flex flex:row justify-content:start align-items:center gap:20px">
					<img
						src="https://ritwickdey.gallerycdn.vsassets.io/extensions/ritwickdey/liveserver/5.7.9/1736542717282/Microsoft.VisualStudio.Services.Icons.Default"
						alt="Live Server"
						class="w:64px h:64px font:bold"
					/>
					<a
						href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
						class="text:40px font:bold text:blue bb:4px|solid|transparent bb:4px|solid|blue:hover"
						target="_blank"
					>
						Live Server ↗						
					</a>
				</div>
			</div>
			<div>
				<h1 class="text:45px font:bold">フォルダーを開く</h1>
				<div class="w:100% pl:24px flex flex:row justify-content:start align-items:center gap:20px">
					<Icon icon="ix:extension" class="w:64px h:64px font:bold" />
					<p class="text:40px font:bold">左のタブからこのアイコンマークを押す</p>
				</div>
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
