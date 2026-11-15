(() => {
  "use strict";
  const { T, ARIA, LANGMSG, S, CATS } = window.DATA;

  const byId = (id) => S.find((s) => s.id === id);
  const PKG_PRICES = [byId("land").p, byId("biz").p, 1600];
  /* bundle price = sum of its list items x 0.85, rounded to ..9, so the saving always matches the price list */
  const BUNDLE_ITEMS = [
    [["land", 1], ["seo", 1], ["gbp", 1]],
    [["biz", 1], ["seo", 1], ["analytics", 1], ["gbp", 1], ["supp", 3]],
    [["shopify", 1], ["pay", 1], ["import", 1], ["seo", 1], ["analytics", 1]],
  ];
  const BUNDLES = BUNDLE_ITEMS.map((items) => {
    const sum = items.reduce((acc, [id, qty]) => acc + byId(id).p * qty, 0);
    return { sum, p: Math.round((sum * 0.85) / 10) * 10 - 1 };
  });

  const FEATURED = 1;
  const FLASH_MS = 2200;
  const LIVE_DELAY_MS = 100;
  const LANGS = ["ro", "en", "ru"];
  /* accessible names for the language buttons: visible code first (WCAG 2.5.3), then the endonym */
  const LANG_NAMES = { ro: "Română", en: "English", ru: "Русский" };
  const NAV_LANG = { ru: "ru", en: "en", ro: "ro", mo: "ro" };

  let lang = "ro";
  let cat = "web";
  let ready = false;
  let observer = null;

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];
  const fmt = (n) => "€" + n.toLocaleString("en-US");
  const unitLabel = (u, t) => (u === "h" ? t.hour : u === "m" ? t.month : "");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const icon = (name) => `<svg class="ic" aria-hidden="true" focusable="false"><use href="#i-${name}"/></svg>`;
  /* reveal classes are only added on the first render; later renders (language switch) appear instantly */
  const attrs = (base, i) => (ready ? `class="${base}"` : `class="${base} rv" style="--i:${i}"`);
  const list = (items, className) =>
    `<ul class="${className}">${items.map((x) => `<li>${x}</li>`).join("")}</ul>`;
  const moreLink = (t) => `<a class="more" href="#prices">${t.more}${icon("arrow")}</a>`;
  const scrollOpts = (block) => ({ behavior: reduceMotion.matches ? "auto" : "smooth", block });

  let liveTimer = 0;
  const announce = (msg, l = lang) => {
    const el = $("#live");
    clearTimeout(liveTimer);
    el.lang = l;
    el.textContent = "";
    liveTimer = setTimeout(() => { el.textContent = msg; }, LIVE_DELAY_MS);
  };

  function renderStack() {
    const t = T[lang];
    $("#stack").innerHTML = t.pkgs.map((p, i) => `
      <div class="mini mini-${i}">
        <span class="mini-n">${p.n}</span>
        <span class="mini-p"><small>${t.from}</small>${fmt(PKG_PRICES[i])}</span>
        <span class="mini-bars"><i></i><i></i><i></i></span>
      </div>`).join("");
  }

  function renderStats() {
    const t = T[lang];
    const stats = [
      [fmt(byId("land").p), t.st1],
      [t.st2v, t.st2],
      ["50% · 50%", t.st3],
      ["RO · EN · RU", t.st4, true],
    ];
    $("#stats").innerHTML = stats.map(([v, l, langList], i) => {
      const value = langList
        ? LANGS.map((c) => `<span lang="${c}">${c.toUpperCase()}</span>`).join(" · ")
        : v;
      return `<div ${attrs("stat", i)}><dt>${l}</dt><dd>${value}</dd></div>`;
    }).join("");
  }

  const renderGuar = () => {
    $("#guar").innerHTML = T[lang].guar.map((x, i) =>
      `<li ${attrs("g", i)}><span class="g-ic">${icon("check")}</span>${x}</li>`).join("");
  };

  function renderHelp() {
    const t = T[lang];
    $("#help-q").textContent = t.help_q;
    $("#help").innerHTML = t.help.map(([label, sel]) =>
      `<button type="button" class="chip" data-sel="${sel}"><span>${label}</span>${icon("arrow")}</button>`).join("");
  }

  function renderPackages() {
    const t = T[lang];
    $("#packagesGrid").innerHTML = t.pkgs.map((p, i) => `
      <article ${attrs(`card${i === FEATURED ? " featured" : ""}`, i)} id="pkg${i}" tabindex="-1" aria-labelledby="pkg${i}-h">
        ${i === FEATURED ? `<span class="ribbon">${t.pop}</span>` : ""}
        <h3 id="pkg${i}-h">${p.n}</h3><p class="tag">${p.t}</p>
        <p class="price"><small>${t.from}</small><b>${fmt(PKG_PRICES[i])}</b></p>
        <p class="pnote">${t.pnote}</p>
        ${list(p.f, "checks")}
        ${moreLink(t)}
      </article>`).join("");
  }

  function renderBundles() {
    const t = T[lang];
    $("#bundlesGrid").innerHTML = t.bun.map((b, i) => {
      const { p, sum } = BUNDLES[i];
      return `
      <article ${attrs(`card${i === FEATURED ? " featured" : ""}`, i)}>
        ${i === FEATURED ? `<span class="ribbon">${t.bun_best}</span>` : ""}
        <h3>${b.n}</h3><p class="tag">${b.t}</p>
        <p class="price"><b>${fmt(p)}</b></p>
        <p class="was"><s>${fmt(sum)}</s><span class="save">${t.bun_save} ${fmt(sum - p)}</span></p>
        ${list(b.f, "checks")}
        ${moreLink(t)}
      </article>`;
    }).join("");
  }

  function renderTabs() {
    const t = T[lang];
    const tabs = [["all", t.allTab], ...CATS.map((c) => [c, (t.cat && t.cat[c]) || c])];
    $("#tabs").innerHTML = tabs.map(([k, v]) =>
      `<button type="button" class="tab" data-cat="${k}" aria-controls="plist" aria-pressed="${k === cat}">${v}</button>`).join("");
  }

  function renderList() {
    const t = T[lang];
    const items = S.filter((s) => cat === "all" || s.c === cat);
    $("#plist").innerHTML = items.map((s) => `
      <article class="item${s.hot ? " is-hot" : ""}">
        <div class="item-t">
          <h3>${s.n[lang]}</h3>
          ${s.hot ? `<span class="hot">${t.hot}</span>` : ""}
          <p>${s.d[lang]}</p>
        </div>
        <p class="item-p"><small>${t.from}</small><b>${fmt(s.p)}</b>${s.u !== "p" ? `<small>${unitLabel(s.u, t)}</small>` : ""}</p>
      </article>`).join("");
  }

  const renderWhy = () => {
    $("#whyGrid").innerHTML = T[lang].why.map(([key, title, text], i) => `
      <article ${attrs(`tile tile-${i}`, i)}>
        <span class="tile-ic">${icon(key)}</span>
        <h3>${title}</h3><p>${text}</p>
      </article>`).join("");
  };

  const renderSteps = () => {
    $("#steps").innerHTML = T[lang].steps.map(([title, text], i) => `
      <li ${attrs("step", i)}><span class="step-n" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
        <h3>${title}</h3><p>${text}</p></li>`).join("");
  };

  const renderFaq = () => {
    /* keep the user's open/closed state across language re-renders */
    const wasOpen = $$("#faqList details").map((d) => d.open);
    $("#faqList").innerHTML = T[lang].faq.map(([q, a], i) => `
      <details ${attrs("qa", i)}><summary><span>${q}</span>${icon("chevron")}</summary><p>${a}</p></details>`).join("");
    $$("#faqList details").forEach((d, i) => { d.open = Boolean(wasOpen[i]); });
  };

  function renderAll() {
    [renderStack, renderStats, renderGuar, renderHelp, renderPackages, renderBundles, renderTabs, renderList, renderWhy, renderSteps, renderFaq]
      .forEach((fn) => fn());
    if (observer) $$(".rv:not(.in)").forEach((el) => observer.observe(el));
  }

  function setLang(l, userInitiated) {
    lang = T[l] ? l : "ro";
    try { localStorage.setItem("lang", lang); } catch (e) { /* storage unavailable: language just will not persist */ }
    const t = T[lang];
    document.documentElement.lang = lang;
    $$(".lang button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
      b.setAttribute("aria-label", `${b.dataset.lang.toUpperCase()} ${LANG_NAMES[b.dataset.lang]}`);
    });
    $$("[data-aria]").forEach((el) => {
      const label = (ARIA[lang] || {})[el.dataset.aria];
      if (label) el.setAttribute("aria-label", label);
    });
    $$("[data-i18n]").forEach((el) => { if (t[el.dataset.i18n] !== undefined) el.textContent = t[el.dataset.i18n]; });
    /* .logo-t can be hidden on narrow screens, so the link needs a name; it contains the visible text (WCAG 2.5.3) */
    $("#logo").setAttribute("aria-label", [t.nav_home, t.logo_t].filter(Boolean).join(": "));
    if (t.meta_title) document.title = t.meta_title;
    const meta = $('meta[name="description"]');
    if (meta && t.meta_desc) meta.setAttribute("content", t.meta_desc);
    renderAll();
    if (userInitiated) announce(LANGMSG[lang], lang);
  }

  function selectCat(next) {
    cat = next;
    renderTabs();
    renderList();
    const label = $(`.tab[data-cat="${cat}"]`).textContent;
    announce(`${label}: ${$("#plist").children.length}`);
  }

  let flashTimer = 0;
  function highlight(el) {
    el.focus({ preventScroll: true });
    clearTimeout(flashTimer);
    el.classList.add("flash");
    flashTimer = setTimeout(() => el.classList.remove("flash"), FLASH_MS);
  }

  /* move focus to a non-interactive target without a second scroll; the live region says where it went */
  function focusTarget(el, message) {
    if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
    announce(message);
  }

  function onHelp(sel) {
    if (/^pkg\d$/.test(sel)) {
      const card = $("#" + sel);
      if (!card) return;
      card.scrollIntoView(scrollOpts("center"));
      highlight(card);
      announce(card.querySelector("h3").textContent);
    } else if (CATS.includes(sel)) {
      selectCat(sel);
      $("#tabs").scrollIntoView(scrollOpts("center"));
      $(`.tab[data-cat="${cat}"]`).focus({ preventScroll: true });
    } else {
      $("#packages").scrollIntoView(scrollOpts("start"));
      focusTarget($("#pk-h"), $("#pk-h").textContent);
    }
  }

  document.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (tab) {
      selectCat(tab.dataset.cat);
      $(`.tab[data-cat="${cat}"]`).focus();
      return;
    }
    const chip = e.target.closest(".chip");
    if (chip) onHelp(chip.dataset.sel);
  });
  $$(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang, true)));

  function initReveal() {
    if (reduceMotion.matches || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("js-rv");
    observer = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        observer.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  }

  function detectLang() {
    let saved = "";
    try { saved = localStorage.getItem("lang") || ""; } catch (e) { /* storage unavailable: fall back to browser language */ }
    if (LANGS.includes(saved)) return saved;
    return NAV_LANG[(navigator.language || "").slice(0, 2)] || "ro";
  }

  $("#yr").textContent = new Date().getFullYear();
  initReveal();
  setLang(detectLang());
  ready = true;
  /* content is rendered by JS, so honour a deep link (#prices) once it exists */
  if (location.hash.length > 1) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView({ block: "start" });
  }
})();
