<script lang="ts">
	// filepath: src/lib/slides/components/gsap/Index.svelte
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let stage: HTMLElement;
	let txt: HTMLElement;
	let chars: NodeListOf<HTMLElement>;
	let numChars = 0;
	let isMouseDown = false;
	let mouseInitialY = 0;
	let mouseFinalY = 0;
	let distY = 0;
	let charIndexSelected = 0;
	let charH = 0;
	let charSelected: HTMLElement;
	let elasticDropOff = 0.8;
	let dragYScale = 0;

	const weightInit = 600;
	const weightTarget = 400;
	const weightDiff = weightInit - weightTarget;
	const stretchInit = 150;
	const stretchTarget = 80;
	const stretchDiff = stretchInit - stretchTarget;
	const maxYScale = 2.5;

	function splitTextToSpans(element: HTMLElement) {
		const text = element.textContent ?? '';
		element.innerHTML = '';
		[...text].forEach((char) => {
			const span = document.createElement('span');
			span.textContent = char;
			span.className = 'char';
			element.appendChild(span);
		});
	}

	function init() {
		resize();
		gsap.set(stage, { autoAlpha: 1 });
		gsap.set(chars, {
			transformOrigin: 'center bottom'
		});
		animInTxt();
	}

	function animInTxt() {
		let elem = chars[0];
		if (!elem) return;
		let rect = elem.getBoundingClientRect();
		gsap.from(chars, {
			y: () => {
				return -1 * (rect.y + charH + 500);
			},
			fontWeight: weightTarget,
			fontStretch: stretchTarget,
			scaleY: 2,
			ease: 'elastic(0.2, 0.1)',
			duration: 1.5,
			delay: 0.5,
			stagger: {
				each: 0.05,
				from: 'random'
			},
			onComplete: initEvents
		});
	}

	function initEvents() {
		document.body.onmouseup = function (e) {
			if (isMouseDown) {
				mouseFinalY = (e as MouseEvent).clientY;
				isMouseDown = false;
				snapBackText();
				document.body.classList.remove('grab');
			}
		};

		document.body.onmousemove = function (e) {
			if (isMouseDown) {
				mouseFinalY = (e as MouseEvent).clientY;
				calcDist();
				setFontDragDimensions();
			}
		};

		document.body.addEventListener('mouseleave', (event) => {
			const mouseEvent = event as MouseEvent;
			if (
				mouseEvent.clientY <= 0 ||
				mouseEvent.clientX <= 0 ||
				mouseEvent.clientX >= window.innerWidth ||
				mouseEvent.clientY >= window.innerHeight
			) {
				snapBackText();
				isMouseDown = false;
			}
		});

		chars.forEach((char, index) => {
			char.addEventListener('mousedown', function (e) {
				mouseInitialY = (e as MouseEvent).clientY;
				charIndexSelected = index;
				charSelected = e.target as HTMLElement;
				isMouseDown = true;
				document.body.classList.add('grab');
				console.clear();
			});
		});
	}

	function calcDist() {
		let maxYDragDist = charH * (maxYScale - 1);
		distY = mouseInitialY - mouseFinalY;
		dragYScale = distY / maxYDragDist;
		if (dragYScale > maxYScale - 1) {
			dragYScale = maxYScale - 1;
		} else if (dragYScale < -0.5) {
			dragYScale = -0.5;
		}
	}

	function setFontDragDimensions() {
		gsap.to(chars, {
			y: (index: number) => {
				let fracDispersion = calcfracDispersion(index);
				return fracDispersion * -50;
			},
			fontWeight: (index: number) => {
				let fracDispersion = calcfracDispersion(index);
				return weightInit - fracDispersion * weightDiff;
			},
			fontStretch: (index: number) => {
				let fracDispersion = calcfracDispersion(index);
				return stretchInit - fracDispersion * stretchDiff;
			},
			scaleY: (index: number) => {
				let fracDispersion = calcfracDispersion(index);
				let scaleY = 1 + fracDispersion;
				if (scaleY < 0.5) scaleY = 0.5;
				return scaleY;
			},
			ease: 'power4',
			duration: 0.6
		});
	}

	function calcfracDispersion(index: number) {
		let dispersion = 1 - Math.abs(index - charIndexSelected) / (numChars * elasticDropOff);
		return dispersion * dragYScale;
	}

	function snapBackText() {
		gsap.to(chars, {
			y: 0,
			fontWeight: weightInit,
			fontStretch: stretchInit,
			scale: 1,
			ease: 'elastic(0.35, 0.1)',
			duration: 1,
			stagger: {
				each: 0.02,
				from: charIndexSelected
			}
		});
	}

	function resize() {
		charH = txt.offsetHeight;
	}

	onMount(() => {
		splitTextToSpans(txt);
		chars = txt.querySelectorAll('.char');
		numChars = chars.length;
		init();
	});

	function handleResize() {
		resize();
	}
</script>

<main>
	<div bind:this={stage} class="stage">
		<div class="content">
			<h1 bind:this={txt} class="txt">MISC</h1>
		</div>
	</div>
</main>

<style lang="scss">
	@font-face {
		font-family: 'GT-Flexa';
		src: url('https://assets.codepen.io/61488/GT-Flexa-VF-Trial.woff2');
		font-display: block;
		font-style: normal italic;
		font-weight: 100 800;
		font-stretch: 10% 200%;
	}

	:root {
		--fw: 600; // font weight target 100-800
		--fs: 150; // font stretch target 10-150%
		--fontSize: 15; // vw units
		--baseColor: 'red';
	}

	main {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #446ba5;
		font-family: 'GT-Flexa';
		font-size: 20px;
		color: white;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		cursor:
			url("data:image/svg+xml,%3Csvg width='64px' height='64px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 700'%3E%3Cpath d='M419.99,560.0013c83.627,0,151.67-68.041,151.67-151.67v-198.33A46.6565,46.6565,0,0,0,499.047,171.22a46.6714,46.6714,0,0,0-70-23.3323,46.7853,46.7853,0,0,0-44.055-31.219,46.2641,46.2641,0,0,0-23.332,6.2773V46.669a46.668,46.668,0,1,0-93.336,0v272.79l-64.145-32.082a70.2983,70.2983,0,0,0-31.289-7.375,44.6638,44.6638,0,0,0-31.5,76.23l150.88,150.87A179.4167,179.4167,0,0,0,420,560ZM172.9,303.33a21.3182,21.3182,0,0,0-15.0035,36.379l150.9,150.88a156.058,156.058,0,0,0,111.18,46.082c70.77,0,128.36-57.562,128.36-128.33V210.001a23.332,23.332,0,1,0-46.664,0v58.332a11.668,11.668,0,0,1-23.336,0V186.669a23.332,23.332,0,1,0-46.664,0v81.668a11.668,11.668,0,0,1-23.336,0v-105a23.332,23.332,0,0,0-46.664,0v105a11.668,11.668,0,0,1-23.336,0V46.677a23.332,23.332,0,0,0-46.664,0v291.67a11.66,11.66,0,0,1-16.8712,10.43l-81.035-40.508a46.9273,46.9273,0,0,0-20.863-4.9258Z' transform='translate(0 -0.001)' fill='%23fff'/%3E%3Cpath d='M420,560a179.4167,179.4167,0,0,1-127.73-52.898L141.39,356.232a44.6638,44.6638,0,0,1,31.5-76.23,70.2983,70.2983,0,0,1,31.289,7.375l64.145,32.082V46.669a46.668,46.668,0,1,1,93.336,0v76.277a46.2641,46.2641,0,0,1,23.332-6.2773,46.7853,46.7853,0,0,1,44.055,31.219,46.6714,46.6714,0,0,1,70,23.3323A46.6565,46.6565,0,0,1,571.66,210.0013v198.33c0,83.629-68.043,151.67-151.67,151.67ZM172.9,303.33a21.3182,21.3182,0,0,0-15.0035,36.379l150.9,150.88a156.058,156.058,0,0,0,111.18,46.082c70.77,0,128.36-57.562,128.36-128.33V210.001a23.332,23.332,0,1,0-46.664,0v58.332a11.668,11.668,0,0,1-23.336,0V186.669a23.332,23.332,0,1,0-46.664,0v81.668a11.668,11.668,0,0,1-23.336,0v-105a23.332,23.332,0,0,0-46.664,0v105a11.668,11.668,0,0,1-23.336,0V46.677a23.332,23.332,0,0,0-46.664,0v291.67a11.66,11.66,0,0,1-16.8712,10.43l-81.035-40.508a46.9273,46.9273,0,0,0-20.863-4.9258Z' transform='translate(0 -0.001)'/%3E%3C/svg%3E%0A")
				32 32,
			pointer;
	}

	.stage {
		position: relative;
		display: grid;
		place-items: center;
		width: 100%;
		height: 100%;
		visibility: hidden;
	}
	.content {
		text-align: center;
	}

	.txt {
		margin: 0;
		font-size: calc(var(--fontSize) * 1vw);
		font-weight: var(--fw); // 100-800
		font-stretch: calc(var(--fs) * 1%); // 10-150%
		line-height: 0.6;
		letter-spacing: -1vw;
		// text-transform: uppercase;
		user-select: none;
		text-shadow:
			0 0.05em 0 #95aeff,
			0 0.1em 0.1em rgba(70, 0, 35, 0.3),
			0 0.4em 0.3em rgba(70, 0, 35, 0.1);
	}
</style>
