import { writable } from "svelte/store";

const currentSlide = writable({ n: 0, max: 0 });
const isLoggedIn = writable(false);

export { currentSlide, isLoggedIn };
