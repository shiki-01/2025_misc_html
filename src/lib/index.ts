import { writable } from "svelte/store";

const currentSlide = writable(0);
const isLoggedIn = writable(false);

export { currentSlide, isLoggedIn };
