<script lang="ts">
	import Icon from '@iconify/svelte';
	import Header from './components/Header.svelte';
</script>

<div
	class="background w:100% h:100% grid grid-template-columns:1fr grid-template-rows:120px|1fr bg:white b:40px|sky|solid"
>
	<Header title={'実際に体験してみよう！ -  実際の表示を確認'} />

	<div
		class="w:100% h:100% px:200px py:20px flex flex:row justify-content:center align-items:center"
	>
		<div
			class="w:100% h:100% py:24px flex flex:column gap:80px justify-content:center align-items:start"
		>
			<div>
				<h1 class="text:45px font:bold">Live Serverでページを開く</h1>
				<div class="w:100% pl:24px flex flex:row justify-content:start align-items:center gap:20px">
					<div class="w:64px h:64px flex justify-content:center align-items:center">
						<svg
							width="64"
							height="64"
							viewBox="0 0 64 64"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8ZM32 12C42.942 12 52 21.058 52 32C52 42.942 42.942 52 32 52C21.058 52 12 42.942 12 32C12 21.058 21.058 12 32 12ZM28 22V42L42 32L28 22Z"
								fill="#4CAF50"
							/>
						</svg>
					</div>
					<p class="text:40px font:bold">HTMLファイルを右クリック → 「Open with Live Server」</p>
				</div>
			</div>
			<div>
				<h1 class="text:45px font:bold">ブラウザで確認</h1>
				<div class="w:100% pl:24px flex flex:row justify-content:start align-items:center gap:20px">
					<p class="text:40px font:bold">
						自動でブラウザが開き、スタイルが適用されたページが表示されます
					</p>
				</div>
			</div>
			<div>
				<h1 class="text:45px font:bold">リアルタイム更新</h1>
				<div class="w:100% pl:24px flex flex:row justify-content:start align-items:center gap:20px">
					<p class="text:40px font:bold">
						CSSを編集して保存すると、ブラウザが自動的に更新されます！
					</p>
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
