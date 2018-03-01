export default {
	close: () => {
		var remove = () => document.querySelector("#app-splashscreen") && document.querySelector("#app-splashscreen").remove()
		if(window) window.onload = remove
		else remove()
	}
}