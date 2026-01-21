import Color from "colorjs.io";

export class ColorContrast extends HTMLElement {
	static get observedAttributes() {
		return ["foreground", "background"];
	}

	connectedCallback() {
		this.attachShadow({ mode: "open" });
		this.render();
	}

	attributeChangedCallback() {
		this.render();
	}

	render() {
		const fg = this.getAttribute("foreground") || "#000";
		const bg = this.getAttribute("background") || "#fff";

		let foregroundColor = new Color(fg);
		let backgroundColor = new Color(bg);
		let contrast = backgroundColor.contrast(foregroundColor, "APCA");
		
    const lc = parseInt(Math.abs(contrast));

		this.shadowRoot.innerHTML = `
          <style>
            :host {
              background: ${bg};
              color: ${fg};
              padding: 0.75rem;
              border-radius: 0.5rem;
              font-family: system-ui, sans-serif;
              display: block;
            }
            .result {
              margin-top: 0.5rem;
              font-size: 0.875rem;
            }
          </style>
          Contrast: <strong>Lc ${lc}</strong>
        `;
	}
}
