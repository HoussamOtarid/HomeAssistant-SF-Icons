(()=>{const t={};"customIconsets"in window||(window.customIconsets={}),"customIcons"in window||(window.customIcons={}),window.customIcons.ios={getIcon:e=>((e,o)=>new Promise((async(s,n)=>{const i=`${e}:${o}`;t[i]&&s(t[i]),t[i]=(async(t,e)=>{const[o,s]=e.split("#"),n=await fetch(`/cupertino/icons/${t}/${o}.svg`),i=await n.text(),r=(new DOMParser).parseFromString(i,"text/html");if(!r||!r.querySelector("svg"))return{};const a=r.querySelector("svg").getAttribute("viewBox"),c=r.querySelectorAll("path"),l={};let h="";for(const t of c){h+=t.getAttribute("d");const e=Array.from(t.classList).map((t=>t.split(":")[1]));e.includes("white")?l.white=t.getAttribute("d"):e.includes("primary")?l.secondary=t.getAttribute("d"):e.includes("secondary")&&(l.primary=t.getAttribute("d"))}let d=null;const u=r.querySelector("svg");return Array.from(u.attributes).some((t=>t.name.startsWith("on")))||u.getElementsByTagName("script").length||(d=u),{viewBox:a,path:h,paths:l,format:s,fullCode:d}})(e,o),s(t[i])})))("ios",e),getIconList:()=>(async t=>{const e=await fetch("/cupertino/list/ios"),o=await e.text();return JSON.parse(o)})()},customElements.whenDefined("ha-icon").then((()=>{customElements.get("ha-icon").prototype._setCustomPath=async function(t,e){const o=await t;if(e!==this.icon)return;this._path=o.path,this._viewBox=o.viewBox,await this.UpdateComplete;const s=this.shadowRoot.querySelector("ha-svg-icon");if(s&&s.setPaths)if(s.clearPaths(),o.fullCode&&"fullcolor"===o.format){await s.updateComplete;const t=s.shadowRoot.querySelector("svg"),e=document.createElement("style");e.innerHTML="\n        svg:first-child>g:first-of-type>path {\n          display: none;\n        }\n      ",t.appendChild(e),t.appendChild(o.fullCode.cloneNode(!0))}else s.setPaths(o.paths),o.format&&s.classList.add(...o.format.split("-"))}})),customElements.whenDefined("ha-svg-icon").then((()=>{const t=customElements.get("ha-svg-icon");t.prototype.clearPaths=async function(){await this.updateComplete;const t=this.shadowRoot.querySelector("svg");for(;t&&t.children.length>1;)t.removeChild(t.lastChild);const e=this.shadowRoot.querySelector("g");for(;e&&e.children.length>1;)e.removeChild(e.lastChild);for(;this.shadowRoot.querySelector("style");){const t=this.shadowRoot.querySelector("style");t.parentNode.removeChild(t)}},t.prototype.setPaths=async function(t){if(await this.updateComplete,null==t||0===Object.keys(t).length)return;const e=this.shadowRoot.querySelector("style")||document.createElement("style");e.innerHTML="\n        .secondary {\n          opacity: 1;\n        }\n        .white {\n          fill: white;\n        }\n        :host(.invert) .secondary {\n          opacity: 1;\n        }\n        :host(.invert) .primary {\n          opacity: 0.4;\n        }\n        :host(.color) .primary {\n          opacity: 1;\n        }\n        :host(.color) .secondary {\n          opacity: 0.4;\n        }\n        :host(.color:not(.invert)) .secondary {\n          fill: var(--icon-secondary-color, var(--disabled-text-color));\n        }\n        :host(.color.invert) .primary {\n          fill: var(--icon-secondary-color, var(--disabled-text-color));\n        }\n        ",this.shadowRoot.appendChild(e);const o=this.shadowRoot.querySelector("g");for(const e in t){const s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d",t[e]),s.classList.add(e),o.appendChild(s)}}}))})();