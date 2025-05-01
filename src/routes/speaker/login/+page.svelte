<script lang="ts">
    import { isLoggedIn } from "$lib";
    const password = "sys315_slide";
</script>

<div>
    <h1>Speaker Login</h1>
    <form on:submit|preventDefault={() => {
        const input = document.querySelector("input[type='password']") as HTMLInputElement;
        if (input.value === password) {
            localStorage.setItem("isLoggedIn", "true");
            isLoggedIn.set(true);
            window.location.href = "/speaker";
        } else {
            alert("Incorrect password. Please try again.");
        }
    }}>
        <label for="password">Password:</label>
        <input type="password" id="password" required />
        <button type="submit">Login</button>
    </form>
</div>
