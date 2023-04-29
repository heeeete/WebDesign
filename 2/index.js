async function action() {
	return gsap.from(".img", { y: 40, opacity: 0, stagger: 1 });
}

action().then((result) => {
	gsap.to("#main-btn", { x: 100, opacity: 1, stagger: 1 });
});
