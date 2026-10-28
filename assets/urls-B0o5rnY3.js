import{r as e}from"./api-client-DTuIkkTG.js";function t(){return`/LinkSite/`.replace(/\/+$/,``)}function n(e){return typeof window<`u`?`${window.location.origin}${t()}`:(e.APP_ORIGIN||`http://localhost:5173`).replace(/\/+$/,``)}function r(e){return`/@${e}`}function i(e){return`/embed/@${e}`}function a(e,t){return`${n(e)}${i(t)}`}function o(t){return e(`/go/${t}`)}function s(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`)}function c(e){return e.replaceAll(`\\`,`\\\\`).replaceAll(`'`,`\\'`).replaceAll(`<\/script`,`<\\/script`)}function l(e,t,n){let r=s(n||`@${t}`);return`<iframe src="${s(a(e,t))}" title="${r}" width="100%" height="720" loading="lazy" style="border:0;width:100%;display:block"></iframe>`}function u(e,t,r){let i=a(e,t),o=s(r||`@${t}`),l=s(i),u=c(n(e).replace(/^(https?:\/\/[^/]+).*$/,`$1`));return`<!-- LinkSite profile embed: auto-height, lazy-loaded, no arbitrary messages accepted. -->
<div style="width:100%">
  <iframe
    id="revoing-embed-${s(t)}"
    src="${l}"
    title="${o}"
    width="100%"
    height="720"
    loading="lazy"
    style="border:0;width:100%;display:block"
  ></iframe>
  <script>
    (function () {
      var iframe = document.getElementById("revoing-embed-${c(t)}");
      if (!iframe) return;
      var expectedOrigin = "${u}";
      window.addEventListener("message", function (event) {
        if (event.origin !== expectedOrigin) return;
        if (event.source !== iframe.contentWindow) return;
        var data = event.data;
        if (!data || data.type !== "revoing:height") return;
        var height = Number(data.height);
        if (!isFinite(height) || height < 120 || height > 20000) return;
        iframe.style.height = Math.ceil(height) + "px";
      });
    })();
  <\/script>
</div>`}export{o as a,n as i,l as n,r as o,i as r,u as t};