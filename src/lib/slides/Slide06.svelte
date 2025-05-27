<script lang="ts">
	import Icon from '@iconify/svelte';
	import Header from './components/Header.svelte';
</script>

<div
	class="background w:100% h:100% grid grid-template-columns:1fr grid-template-rows:120px|1fr bg:white b:40px|sky|solid"
>
	<Header title={'実際に体験してみよう！ -  必要なファイルの作成'} />

	<div
		class="w:100% h:100% px:200px py:20px flex flex:row justify-content:center align-items:center"
	>
		<div
			class="w:100% h:100% py:24px flex flex:column gap:24px justify-content:center align-items:start"
		>
			<div>
				<h1 class="text:45px font:bold">作業用ディレクトリを作成</h1>
				<div class="w:100% pl:24px flex flex:row justify-content:start align-items:center gap:20px">
					<p class="text:40px font:bold">
						Document の中で右クリック → 新規作成 >
						フォルダーを選択して「html」という名前でフォルダーを作成
					</p>
				</div>
			</div>
			<div>
				<h1 class="text:45px font:bold">ファイルの作成</h1>
				<div class="w:100% pl:24px flex flex:row justify-content:start align-items:center gap:20px">
					<p class="text:40px font:bold">「</p>
					<div class="w:64px h:64px flex justify-content:center align-items:center">
						<svg
							width="64"
							height="64"
							viewBox="0 0 64 64"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M31.9042 40.2877L49.3335 22.8585L51.8083 25.3333L33.1417 44L30.6668 44L12.0001 25.3333L14.475 22.8585L31.9042 40.2877Z"
								fill="#424242"
							/>
						</svg>
					</div>
					<p class="text:40px font:bold">html 」 の右側にある</p>
					<div class="w:64px h:64px flex justify-content:center align-items:center">
						<svg
							width="64"
							height="64"
							viewBox="0 0 64 64"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_9367_3791)">
								<path
									d="M56 52H68V56H56V68H52V56H40V52H52V40H56V52ZM40.7998 4L42 4.40039L55.6006 18.4004L56 20V36H52V24H36V8H16V52H36V56H14L12 54V4H40.7998ZM40 20H51.6006L40 8V20Z"
									fill="#424242"
								/>
							</g>
							<defs>
								<clipPath id="clip0_9367_3791">
									<rect width="64" height="64" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<p class="text:40px font:bold">を押して「 index.html 」と入力 → Enter</p>
				</div>
				<div class="w:100% pl:24px flex flex:row justify-content:start align-items:center gap:20px">
					<p class="text:40px font:bold">同様に「 index.css 」も作成</p>
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
