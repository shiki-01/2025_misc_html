<script lang="ts">
	import { isLoggedIn } from '$lib';
	const password = 'sys315_slide';
</script>

<div
	class="flex flex:column gap:20px justify-content:center align-items:center bg:rgb(232,246,255) fg:rgb(75,160,218) bd:blur(5) px:40px py:36px b:1px|rgb(131,199,245)|solid r:16px drop-shadow(0|0|5px|rgba(31,96,139,0.2))"
>
	<h1 class="text:1.2em">Speaker Login</h1>
	<form
        class="flex flex:column gap:20px justify-content:center align-items:center"
		onsubmit={(event) => {
			event.preventDefault();
			const input = document.querySelector("input[type='password']") as HTMLInputElement;
			if (input.value === password) {
				localStorage.setItem('isLoggedIn', 'true');
				isLoggedIn.set(true);
				window.location.href = '/speaker';
			} else {
				alert('Incorrect password. Please try again.');
			}
		}}
	>
		<div class="flex flex:row justify-content:center align-items:center gap:10px w:full">
			<label for="password">Password:</label>
			<input
                class="w:full b:1px|rgb(131,199,245)|solid r:8px px:10px py:5px"
                type="password"
                id="password"
                required
            />
		</div>
		<div class="flex w:full justify-content:end align-items:center">
            <button type="submit">Login</button>
        </div>
	</form>
</div>
