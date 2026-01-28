(()=>{
let map = {
	"imports": {
		"@g12n/confetti-fall": "./client_modules/confetti-fall@0.0.1/index.js",
		"@g12n/fancy": "./client_modules/@g12n/fancy/index.js",
		"colorjs.io": "./client_modules/colorjs.io@0.6.1/dist/color.js",
		"colorjs.io/fn": "./client_modules/colorjs.io@0.6.1/src/index-fn.js",
		"colorjs.io/spaces": "./client_modules/colorjs.io@0.6.1/src/spaces/index.js"
	}
};
let cS = document.currentScript;
if (!cS) {
	return console.error(`Import map injection script cannot be included as a module script. Please remove type="module".`);
}
else if (document.querySelector(`script[type=module]`)) {
	return console.error(`${cS.getAttribute("src")} must be included before any module scripts.`);
}

const mapUrl = cS.src;
const rebase = m => { for (let k in m) m[k] = new URL(m[k], mapUrl).href; return m; };
rebase(map.imports);
for (let scope in map.scopes) rebase(map.scopes[scope]);
cS.after(Object.assign(document.createElement("script"), { type: "importmap", textContent: JSON.stringify(map) }));

})();
