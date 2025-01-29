class LiteYTEmbed extends HTMLElement {
	connectedCallback() {
		this.videoId = this.getAttribute("videoid");
		let e = this.querySelector(".lty-playbtn");
		if (
			((this.playLabel =
				(e && e.textContent.trim()) ||
				this.getAttribute("playlabel") ||
				"Play"),
			(this.dataset.title = this.getAttribute("title") || ""),
			this.style.backgroundImage ||
				((this.style.backgroundImage = `url("https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg")`),
				this.upgradePosterImage()),
			e ||
				(((e = document.createElement("button")).type = "button"),
				e.classList.add("lty-playbtn"),
				this.append(e)),
			!e.textContent)
		) {
			let t = document.createElement("span");
			(t.className = "lyt-visually-hidden"),
				(t.textContent = this.playLabel),
				e.append(t);
		}
		this.addNoscriptIframe(),
			e.removeAttribute("href"),
			this.addEventListener("pointerover", LiteYTEmbed.warmConnections, {
				once: !0,
			}),
			this.addEventListener("click", this.activate),
			(this.needsYTApi =
				this.hasAttribute("js-api") ||
				navigator.vendor.includes("Apple") ||
				navigator.userAgent.includes("Mobi"));
	}
	static addPrefetch(e, t, i) {
		let a = document.createElement("link");
		(a.rel = e), (a.href = t), i && (a.as = i), document.head.append(a);
	}
	static warmConnections() {
		LiteYTEmbed.preconnected ||
			(LiteYTEmbed.addPrefetch(
				"preconnect",
				"https://www.youtube-nocookie.com"
			),
			LiteYTEmbed.addPrefetch("preconnect", "https://www.google.com"),
			LiteYTEmbed.addPrefetch(
				"preconnect",
				"https://googleads.g.doubleclick.net"
			),
			LiteYTEmbed.addPrefetch("preconnect", "https://static.doubleclick.net"),
			(LiteYTEmbed.preconnected = !0));
	}
	fetchYTPlayerApi() {
		window.YT ||
			(window.YT && window.YT.Player) ||
			(this.ytApiPromise = new Promise((e, t) => {
				var i = document.createElement("script");
				(i.src = "https://www.youtube.com/iframe_api"),
					(i.async = !0),
					(i.onload = (t) => {
						YT.ready(e);
					}),
					(i.onerror = t),
					this.append(i);
			}));
	}
	async getYTPlayer() {
		return this.playerPromise || (await this.activate()), this.playerPromise;
	}
	async addYTPlayerIframe() {
		this.fetchYTPlayerApi(), await this.ytApiPromise;
		let e = document.createElement("div");
		this.append(e);
		let t = Object.fromEntries(this.getParams().entries());
		this.playerPromise = new Promise((i) => {
			let a = new YT.Player(e, {
				width: "100%",
				videoId: this.videoId,
				playerVars: t,
				events: {
					onReady(e) {
						e.target.playVideo(), i(a);
					},
				},
			});
		});
	}
	addNoscriptIframe() {
		let e = this.createBasicIframe(),
			t = document.createElement("noscript");
		(t.innerHTML = e.outerHTML), this.append(t);
	}
	getParams() {
		let e = new URLSearchParams(this.getAttribute("params") || []);
		return e.append("autoplay", "1"), e.append("playsinline", "1"), e;
	}
	async activate() {
		if (this.classList.contains("lyt-activated")) return;
		if ((this.classList.add("lyt-activated"), this.needsYTApi))
			return this.addYTPlayerIframe(this.getParams());
		let e = this.createBasicIframe();
		this.append(e), e.focus();
	}
	createBasicIframe() {
		let e = document.createElement("iframe");
		return (
			(e.width = 560),
			(e.height = 315),
			(e.title = this.playLabel),
			(e.allow =
				"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),
			(e.allowFullscreen = !0),
			(e.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
				this.videoId
			)}?${this.getParams().toString()}`),
			e
		);
	}
	upgradePosterImage() {
		setTimeout(() => {
			let e = `https://i.ytimg.com/vi_webp/${this.videoId}/sddefault.webp`,
				t = new Image();
			(t.fetchPriority = "low"),
				(t.referrerpolicy = "origin"),
				(t.src = e),
				(t.onload = (t) => {
					let i = 90 == t.target.naturalHeight && 120 == t.target.naturalWidth;
					i || (this.style.backgroundImage = `url("${e}")`);
				});
		}, 100);
	}
}
customElements.define("lite-youtube", LiteYTEmbed);
// Thank you to https://github.com/daviddarnes/heading-anchors
// Thank you to https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/

let globalInstanceIndex = 0;

class HeadingAnchors extends HTMLElement {
	static register(tagName) {
		if ("customElements" in window) {
			customElements.define(tagName || "heading-anchors", HeadingAnchors);
		}
	}

	static attributes = {
		exclude: "data-ha-exclude",
		prefix: "prefix",
		content: "content",
	}

	static classes = {
		anchor: "ha",
		placeholder: "ha-placeholder",
		srOnly: "ha-visualhide",
	}

	static defaultSelector = "h2,h3,h4,h5,h6";

	static css = `
.${HeadingAnchors.classes.srOnly} {
	clip: rect(0 0 0 0);
	height: 1px;
	overflow: hidden;
	position: absolute;
	width: 1px;
}
.${HeadingAnchors.classes.anchor} {
	position: absolute;
	left: var(--ha_offsetx);
	top: var(--ha_offsety);
	text-decoration: none;
	opacity: 0;
}
.${HeadingAnchors.classes.placeholder} {
	opacity: .3;
}
.${HeadingAnchors.classes.anchor}:is(:focus-within, :hover) {
	opacity: 1;
}
.${HeadingAnchors.classes.anchor},
.${HeadingAnchors.classes.placeholder} {
	display: inline-block;
	padding: 0 .25em;

	/* Disable selection of visually hidden label */
	-webkit-user-select: none;
	user-select: none;
}

@supports (anchor-name: none) {
	.${HeadingAnchors.classes.anchor} {
		position: absolute;
		left: anchor(left);
		top: anchor(top);
	}
}`;

	get supports() {
		return "replaceSync" in CSSStyleSheet.prototype;
	}

	get supportsAnchorPosition() {
		return CSS.supports("anchor-name: none");
	}

	constructor() {
		super();

		if(!this.supports) {
			return;
		}

		let sheet = new CSSStyleSheet();
		sheet.replaceSync(HeadingAnchors.css);
		document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];

		this.headingStyles = {};
		this.instanceIndex = globalInstanceIndex++;
	}

	connectedCallback() {
		if (!this.supports) {
			return;
		}

		this.headings.forEach((heading, index) => {
			if(!heading.hasAttribute(HeadingAnchors.attributes.exclude)) {
				let anchor = this.getAnchorElement(heading);
				let placeholder = this.getPlaceholderElement();

				// Prefers anchor position approach for better accessibility
				// https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/
				if(this.supportsAnchorPosition) {
					let anchorName = `--ha_${this.instanceIndex}_${index}`;
					placeholder.style.setProperty("anchor-name", anchorName);
					anchor.style.positionAnchor = anchorName;
				}

				heading.appendChild(placeholder)
				heading.after(anchor);
			}
		});
	}

	// Polyfill-only
	positionAnchorFromPlaceholder(placeholder) {
		if(!placeholder) {
			return;
		}

		let heading = placeholder.closest("h1,h2,h3,h4,h5,h6");
		if(!heading.nextElementSibling) {
			return;
		}

		// TODO next element could be more defensive
		this.positionAnchor(heading.nextElementSibling);
	}

	// Polyfill-only
	positionAnchor(anchor) {
		if(!anchor || !anchor.previousElementSibling) {
			return;
		}

		// TODO previous element could be more defensive
		let heading = anchor.previousElementSibling;
		this.setFontProp(heading, anchor);

		if(this.supportsAnchorPosition) {
			// quit early
			return;
		}

		let placeholder = heading.querySelector(`.${HeadingAnchors.classes.placeholder}`);
		if(placeholder) {
			anchor.style.setProperty("--ha_offsetx", `${placeholder.offsetLeft}px`);
			anchor.style.setProperty("--ha_offsety", `${placeholder.offsetTop}px`);
		}
	}

	setFontProp(heading, anchor) {
		let placeholder = heading.querySelector(`.${HeadingAnchors.classes.placeholder}`);
		if(placeholder) {
			let style = getComputedStyle(placeholder);
			let props = ["font-weight", "font-size", "line-height", "font-family"];
			let font = props.map(name => style.getPropertyValue(name));
			anchor.style.setProperty("font", `${font[0]} ${font[1]}/${font[2]} ${font[3]}`);
		}
	}

	getAccessibleTextPrefix() {
		// Useful for i18n
		return this.getAttribute(HeadingAnchors.attributes.prefix) || "Jump to section titled";
	}

	getContent() {
		return this.getAttribute(HeadingAnchors.attributes.content) || "#";
	}

	getPlaceholderElement() {
		let ph = document.createElement("span");
		ph.setAttribute("aria-hidden", true);
		ph.classList.add(HeadingAnchors.classes.placeholder);
		ph.textContent = this.getContent();

		ph.addEventListener("mouseover", (e) => {
			let placeholder = e.target.closest(`.${HeadingAnchors.classes.placeholder}`);
			if(placeholder) {
				this.positionAnchorFromPlaceholder(placeholder);
			}
		});

		return ph;
	}

	getAnchorElement(heading) {
		let anchor = document.createElement("a");
		anchor.href = `#${heading.id}`;
		anchor.classList.add(HeadingAnchors.classes.anchor);

		let content = this.getContent();
		anchor.innerHTML = `<span class="${HeadingAnchors.classes.srOnly}">${this.getAccessibleTextPrefix()}: ${heading.textContent}</span><span aria-hidden="true">${content}</span>`;

		anchor.addEventListener("focus", e => {
			let anchor = e.target.closest(`.${HeadingAnchors.classes.anchor}`);
			if(anchor) {
				this.positionAnchor(anchor);
			}
		});

		anchor.addEventListener("mouseover", (e) => {
			// when CSS anchor positioning is supported, this is only used to set the font
			let anchor = e.target.closest(`.${HeadingAnchors.classes.anchor}`);
			this.positionAnchor(anchor);
		});

		return anchor;
	}

	get headings() {
		return this.querySelectorAll(this.selector.split(",").map(entry => `${entry.trim()}[id]`));
	}

	get selector() {
		return this.getAttribute("selector") || HeadingAnchors.defaultSelector;
	}
}

HeadingAnchors.register();

export { HeadingAnchors }