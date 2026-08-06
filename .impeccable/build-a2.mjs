// A-v2: Option A refined toward the reference site (luciano-pereira.pages.dev).
// Adopts: modular type scale, numeric neutral ramp, mono for data/labels,
// middot contact row, capability grid, tight one-page density.
// Corrects: the reference's own muted greys fail WCAG AA; ours are contrast-derived.
import { readFileSync, writeFileSync } from 'node:fs';

const d = JSON.parse(readFileSync('.impeccable/content.json', 'utf8'));
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rich = (s) => esc(s)
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/@@(.+?)@@/g, '<span class="pl">$1</span>');

// Capability clusters. Every item is drawn from the role text already in the CV;
// this regroups existing facts and invents nothing.
// Three columns, so the grid fills evenly rather than wrapping 4+2.
// Governance is omitted here: the named standards are already stamped
// against the Dyson role that actually applied them.
const CAPS = [
  ['Security engineering', ['Developer-first security', 'CI/CD integration', 'SAST · SBOM · IaC', 'Secrets detection', 'Licence compliance']],
  ['Agentic AI security', ['Multi-agent harnesses', 'Adversarial testing', 'Signed guidance', 'Automated validation', 'Vulnerability discovery']],
  ['Executive leadership', ['Security strategy', 'Board reporting', 'Team building', 'Mentoring', 'C-suite partnership']],
  ['Cloud & infrastructure', ['AWS security', 'Cloud migration', 'Network security', 'Data centre transformation']],
  ['Product & OT security', ['IoT / Connected Home', 'Manufacturing security', 'Embedded software', 'Bug bounty']],
  ['Governance & assurance', ['Security architecture', 'Risk management', 'Threat modelling', 'Regulatory compliance']],
];

const css = `
:root{
  /* Modular scale, after the reference's approach */
  --f-base:17px; --f-scale:1.28;
  --f-sans:'Libre Franklin',system-ui,-apple-system,'Segoe UI',sans-serif;
  --f-mono:'Spline Sans Mono','SFMono-Regular',Consolas,monospace;
  --lh:1.6;

  /* Neutral ramp. Every value used on text is contrast-checked. */
  /* c36 is contrast-derived: clears AA on both --bg and --bg-2. Do not lighten.
     (The reference site's equivalent #7a7a7a fails at 4.18:1.) */
  --c00:#1a1c1f; --c12:#33373d; --c24:#4e535a; --c36:#686e76;
  --c48:#8a9098; --c72:#c9ccd1; --c84:#dfe1e4; --c92:#eef0f2; --c99:#fcfcfd;

  --text:var(--c00); --muted:var(--c24); --subtle:var(--c36);
  --bg:var(--c99); --bg-2:var(--c92); --line:var(--c84); --line-2:var(--c72);
  /* Orange accent, contrast-derived: 5.05:1 as text on --bg, 4.53:1 on --bg-2,
     and white ink clears 4.5 on it as a solid button. Brighter oranges
     (#e8590c, #d24317) fail one of those three tests. Do not lighten. */
  --accent:#c2410c; --accent-hover:#9a3412;
  --accent-ink:#ffffff;

  --s1:.25rem; --s2:.5rem; --s3:.75rem; --s4:1rem; --s6:1.5rem;
  --s8:2rem; --s12:3rem; --s16:4rem;
  --max:1180px; --pad:clamp(1.25rem,4vw,3.5rem);
}

*,*::before,*::after{box-sizing:border-box}
body,h1,h2,h3,p,ul,li,dl,dd,dt,figure{margin:0;padding:0}
ul{list-style:none}
svg{display:block}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{animation:none!important;transition:none!important}}

body{
  font-family:var(--f-sans); font-weight:400; font-size:var(--f-base);
  line-height:var(--lh); color:var(--text); background:var(--bg);
  -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;
  letter-spacing:-0.005em;
}

.skip{position:absolute;left:-9999px;top:0;z-index:99;background:var(--text);color:var(--bg);
  padding:12px 18px;font-size:13px;font-weight:600;text-decoration:none;border-radius:3px}
.skip:focus{left:16px;top:16px}
:focus-visible{outline:2px solid var(--accent);outline-offset:3px}

.wrap{max-width:var(--max);margin:0 auto;padding:0 var(--pad)}

/* Mono is for data and reference marks only: dates, labels, metadata. */
.mono{font-family:var(--f-mono);font-variant-numeric:tabular-nums}
.lbl{font-family:var(--f-mono);font-size:.72rem;font-weight:500;letter-spacing:.1em;
  text-transform:uppercase;color:var(--subtle)}

/* ── Masthead ─────────────────────────────────────────── */
.mast{padding:clamp(3rem,7vw,5.5rem) 0 var(--s8)}
h1{font-size:clamp(2.6rem,6.4vw,4.6rem);font-weight:600;line-height:1.02;
  letter-spacing:-0.038em;max-width:14ch;text-wrap:balance}
.role{margin-top:var(--s6);font-size:clamp(1.06rem,1.9vw,1.28rem);font-weight:500;
  letter-spacing:-0.014em}
.role em{font-style:normal;color:var(--muted);font-weight:400}
.lede{margin-top:var(--s4);font-size:clamp(1.06rem,1.9vw,1.28rem);line-height:1.5;
  color:var(--muted);max-width:52ch;letter-spacing:-0.011em}

/* Contact row, middot separated, after the reference */
.contact{margin-top:var(--s6);display:flex;flex-wrap:wrap;align-items:center;
  gap:var(--s2) var(--s3);font-family:var(--f-mono);font-size:.82rem;color:var(--muted)}
.contact a{color:var(--text);text-decoration:none;border-bottom:1px solid var(--line-2);padding-bottom:1px}
.contact a:hover{color:var(--accent);border-color:var(--accent)}
.contact i{color:var(--c48);font-style:normal}

.acts{margin-top:var(--s6);display:flex;flex-wrap:wrap;gap:var(--s2)}
.btn{display:inline-flex;align-items:center;gap:.5rem;padding:.7rem 1.1rem;
  font-size:.88rem;font-weight:600;text-decoration:none;border-radius:4px;
  transition:background-color .15s,border-color .15s,color .15s}
.btn svg{width:15px;height:15px}
.btn-a{background:var(--accent);color:var(--accent-ink);border:1px solid var(--accent)}
.btn-a:hover{background:var(--accent-hover);border-color:var(--accent-hover)}
.btn-b{background:transparent;color:var(--text);border:1px solid var(--line-2)}
.btn-b:hover{border-color:var(--text)}

/* ── Fact bar ─────────────────────────────────────────────
   Three stacked rows: identity facts, scale, sectors. Columns
   size to their own content with a consistent gap, because the
   values differ in length from "Global" to "Agentic AI &
   adversarial security" and equal columns leave ragged gaps. */
.factbar{border-top:1px solid var(--text);border-bottom:1px solid var(--line)}
.facts{display:flex;flex-wrap:wrap;gap:var(--s4) var(--s8);padding:var(--s4) 0}
.facts>div{flex:0 1 auto;min-width:0}
.facts dd{margin-top:.3rem;font-size:.94rem;font-weight:500}
.sectors{padding:var(--s4) 0;border-top:1px solid var(--line)}
.sectors>.lbl{display:block;margin-bottom:var(--s2)}
.sectors ul{display:flex;flex-wrap:wrap;gap:.35rem .5rem}
.sectors li{font-size:.88rem;color:var(--muted)}
.sectors li:not(:last-child)::after{content:'·';margin-left:.5rem;color:var(--c48)}

/* ── Sections ─────────────────────────────────────────── */
section{padding:var(--s12) 0}
.sec{display:grid;grid-template-columns:180px minmax(0,1fr);gap:var(--s8)}
h2{font-family:var(--f-mono);font-size:.72rem;font-weight:500;letter-spacing:.1em;
  text-transform:uppercase;color:var(--subtle)}

.prose p{font-size:1.02rem;line-height:1.68;color:var(--muted);max-width:66ch}
.prose p+p{margin-top:var(--s4)}
.prose strong{color:var(--text);font-weight:600}

/* ── Capability grid ──────────────────────────────────── */
.caps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--s6) var(--s8)}
@media (max-width:1000px){.caps{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:560px){.caps{grid-template-columns:1fr}}
.caps h3{font-size:.94rem;font-weight:600;letter-spacing:-0.008em;margin-bottom:var(--s2);
  padding-bottom:var(--s2);border-bottom:1px solid var(--line)}
.caps li{font-size:.88rem;line-height:1.55;color:var(--muted)}

/* ── Experience ───────────────────────────────────────── */
.entry{display:grid;grid-template-columns:180px minmax(0,1fr);gap:var(--s8);
  padding:var(--s6) 0;border-top:1px solid var(--line)}
.entry:first-of-type{border-top:1px solid var(--text)}
.when{font-family:var(--f-mono);font-size:.8rem;font-weight:500;font-variant-numeric:tabular-nums;
  color:var(--text);line-height:1.5}
.when span{display:block;color:var(--subtle);font-weight:400;margin-top:.25rem}
h3.job{font-size:clamp(1.12rem,1.9vw,1.32rem);font-weight:600;line-height:1.25;
  letter-spacing:-0.02em;text-wrap:balance}
.org{margin-top:.4rem;font-size:.88rem;color:var(--subtle);
  display:flex;align-items:center;gap:.5rem}

/* Company logo, embedded base64. Fixed box so mixed source shapes align on
   one baseline; object-fit keeps each mark's own aspect. */
.org .mark{flex:none;width:20px;height:20px;object-fit:contain;border-radius:3px}

/* Concurrent formal titles held alongside the headline role. These were real
   appointments, so they sit directly under the company at full weight rather
   than as org subtext. */
.also{margin-top:var(--s3);display:flex;flex-wrap:wrap;gap:.4rem}
.also li{font-size:.82rem;font-weight:600;letter-spacing:-0.005em;
  color:var(--accent);border:1px solid var(--accent);border-radius:3px;
  padding:.2rem .55rem}

/* Labelled bullet groups inside a long merged entry */
.grp{margin-top:var(--s6)}
.grp+.grp{margin-top:var(--s8)}
.grp>.lbl{display:block;margin-bottom:var(--s3)}
.grp .pts{margin-top:0}

/* Title progression inside one employer. Documents the promotion path
   without repeating the platform record under each title. */
.titles{margin-top:var(--s4);padding-top:var(--s3);border-top:1px solid var(--line)}
.titles>.lbl{display:block;margin-bottom:var(--s2)}
.titles li{display:flex;flex-wrap:wrap;gap:.15rem .75rem;align-items:baseline;
  font-size:.88rem;line-height:1.5}
.titles li+li{margin-top:.3rem}
.titles li span{font-weight:600;color:var(--text)}
.titles i{font-family:var(--f-mono);font-size:.8rem;font-style:normal;
  color:var(--subtle);font-variant-numeric:tabular-nums}
.pts{margin-top:var(--s4)}
.pts li{position:relative;padding-left:1.1rem;font-size:.94rem;line-height:1.6;
  color:var(--muted);max-width:70ch}
.pts li+li{margin-top:.6rem}
.pts li::before{content:'';position:absolute;left:0;top:.62em;width:.4rem;height:1px;background:var(--line-2)}
.pts strong{color:var(--text);font-weight:600}
.pl{font-family:var(--f-mono);font-size:.9em;font-weight:500;color:var(--accent)}
.sum{margin-top:var(--s2);font-size:.94rem;color:var(--muted);max-width:70ch}
.tags{margin-top:var(--s4);display:flex;flex-wrap:wrap;gap:.4rem}
.tags span{font-family:var(--f-mono);font-size:.72rem;font-weight:500;color:var(--muted);
  background:var(--bg-2);border:1px solid var(--line);padding:.25rem .5rem;border-radius:3px}
.entry.prior{padding:var(--s4) 0}

/* Close the ruled list: entries are delimited by a rule above each, so the
   final entry needs one below or the pattern stops mid-sequence. Hairline,
   matching the fact bar's closing rule. */
#experience{border-bottom:1px solid var(--line);padding-bottom:var(--s12)}
.entry.prior h3.job{font-size:1rem;font-weight:600}

footer{border-top:1px solid var(--line);padding:var(--s6) 0 var(--s16);
  display:flex;flex-wrap:wrap;justify-content:space-between;gap:var(--s3);
  font-family:var(--f-mono);font-size:.72rem;color:var(--subtle)}
footer a{color:var(--muted);text-decoration:none;border-bottom:1px solid var(--line-2)}
footer a:hover{color:var(--accent);border-color:var(--accent)}

@media (max-width:820px){
  :root{--f-base:16px}
  .mast{padding:2.5rem 0 var(--s6)}
  h1{max-width:none}
  .sec,.entry{grid-template-columns:1fr;gap:var(--s3)}
  .when{display:flex;flex-wrap:wrap;gap:.75rem;align-items:baseline}
  .when span{margin-top:0}
  section{padding:var(--s8) 0}
  .facts{gap:var(--s3) var(--s6);padding:var(--s3) 0}
  .sectors{padding:var(--s3) 0}
  .btn{flex:1 1 auto;justify-content:center}
}

@media print{
  :root{--f-base:10.5pt}
  body{background:#fff;color:#000}
  .wrap{max-width:100%;padding:0}
  .acts,.skip{display:none}
  .mast{padding:0 0 10pt}
  h1{font-size:26pt;max-width:none}
  .lede{max-width:none}
  .role em,.lede,.prose p,.pts li,.sum,.caps li,.when,.org,.contact{color:#000}
  .prose strong,.pts strong,.pl{color:#000;font-weight:700}
  .lbl,h2,.when span,footer{color:#3a3a3a}
  section{padding:11pt 0}
  .sec,.entry{grid-template-columns:132px 1fr;gap:16pt;break-inside:auto}
  .entry{padding:9pt 0;border-color:#ccc}
  .facts{border-color:#000}
  .facts{gap:6pt 18pt;padding:7pt 0}
  .sectors{padding:7pt 0;break-inside:avoid}
  .sectors li{color:#000}
  h2,h3,.org{break-after:avoid}
  .pts li,.prose p,.sum,.caps li{break-inside:avoid;orphans:3;widows:3}
  .tags span{background:#fff;border-color:#999;color:#000}
  .titles{border-color:#ccc;break-inside:avoid}
  .titles li span{color:#000;font-weight:700}
  .titles i{color:#3a3a3a}
  .org .mark{width:14px;height:14px}
  .also{break-inside:avoid}
  .also li{color:#000;border-color:#999;font-weight:700}
  .grp>.lbl{color:#3a3a3a}
  .grp{break-inside:auto}
  .grp+.grp{margin-top:12pt}
  #experience{border-color:#ccc;padding-bottom:12pt}
  .pl{font-weight:700}
  footer{padding:9pt 0 0;border-color:#000}
  a{color:#000}
}
`;

// Real company logos, fetched once and embedded as base64 WebP so the page stays
// a single self-contained file with no third-party requests (the site is unlisted
// and privacy-guarded, so hotlinking a logo CDN would leak visits). Sources: the
// CC0 Simple Icons vector for EA; each company's own favicon for the rest, with
// Attenda/Symantec/Star shown as their successor brands (Ensono, Broadcom,
// Claranet), which is what the page already tells the reader. ~11 KB total.
// Trademarks belong to their owners; used here as factual employment references.
const LOGOS = JSON.parse(readFileSync('.impeccable/logos.json', 'utf8'));

const mark = (r) => {
  const src = LOGOS[r.logo];
  if (!src) return '';
  return `<img class="mark" src="${src}" alt="" width="20" height="20" loading="lazy" decoding="async">`;
};

// Bullets, optionally split into labelled groups so a long merged entry
// reads as sections rather than one undifferentiated wall.
const points = (r) => {
  if (!r.bullets.length) return '';
  if (!r.groups) return `<ul class="pts">${r.bullets.map((b) => `<li>${rich(b)}</li>`).join('')}</ul>`;
  return r.groups.map((g) => `
          <div class="grp">
            <span class="lbl">${esc(g.label)}</span>
            <ul class="pts">${r.bullets.slice(g.from, g.to).map((b) => `<li>${rich(b)}</li>`).join('')}</ul>
          </div>`).join('');
};

const entries = d.roles.map((r) => `
      <article class="entry${r.condensed ? ' prior' : ''}">
        <div class="when">${esc(r.dates)}${r.since
            ? `<span data-since="${esc(r.since)}">${esc(r.duration)}</span>`
            : (r.duration ? `<span>${esc(r.duration)}</span>` : '')}${r.scope ? `<span>${esc(r.scope)}</span>` : ''}</div>
        <div>
          <h3 class="job">${esc(r.title)}</h3>
          <div class="org">${mark(r)}<span>${esc(r.org)}</span></div>
          ${r.alsoHeld && r.alsoHeld.length ? `<ul class="also">
            ${r.alsoHeld.map((t) => `<li>${esc(t)}</li>`).join('')}
          </ul>` : ''}
          ${r.roleHistory && r.roleHistory.length ? `<div class="titles">
            <span class="lbl">Previously at ${esc(r.org.replace(/\s*\((EA|AWS)\)$/, ''))}</span>
            <ul>${r.roleHistory.map((h) => {
              const [t, when] = h.split(' · ');
              return `<li><span>${esc(t)}</span><i>${esc(when)}</i></li>`;
            }).join('')}</ul>
          </div>` : ''}
          ${points(r)}
          ${r.summary ? `<p class="sum">${rich(r.summary)}</p>` : ''}
          ${r.standards.length ? `<div class="tags">${r.standards.map((s) => `<span>${esc(s)}</span>`).join('')}</div>` : ''}
        </div>
      </article>`).join('');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dave Prowse — Curriculum Vitae</title>
<meta name="description" content="Dave Prowse — Strategic cybersecurity executive. Director, Security Software Engineering at Electronic Arts.">
<meta name="author" content="Dave Prowse">
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet">
<meta property="og:title" content="Dave Prowse — Curriculum Vitae">
<meta property="og:description" content="Strategic cybersecurity executive. Director, Security Software Engineering at Electronic Arts.">
<meta property="og:type" content="profile">
<meta name="theme-color" content="#fcfcfd">
<link rel="icon" type="image/svg+xml" href="../../favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500;600;700&family=Spline+Sans+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>${css}</style>
</head>
<body>
<a class="skip" href="#experience">Skip to experience</a>

<div class="wrap">

  <header class="mast">
    <h1>Dave Prowse</h1>
    <p class="role">${esc(d.title)} <em>at ${esc(d.org)}</em></p>
    <p class="lede">${esc(d.tagline)}</p>
    <p class="contact">
      <a id="contact-email" href="#" rel="nofollow">email</a>
      <i>·</i>
      <span>${esc(d.location)}</span>
      <i>·</i>
      <span>Open to senior security leadership roles</span>
    </p>
    <div class="acts">
      <a class="btn btn-a" href="../../DaveProwse_CV.pdf" download>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download CV
      </a>
      <a class="btn btn-b" href="https://www.linkedin.com/in/daveprowse/" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        LinkedIn
      </a>
    </div>
  </header>

  <div class="factbar">
    <dl class="facts">
      ${d.facts.map(([k, v]) => `<div><dt class="lbl">${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}
    </dl>
    <div class="sectors">
      <span class="lbl">Sectors</span>
      <ul>${d.sectors.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
    </div>
  </div>

  <section class="sec">
    <h2>Profile</h2>
    <div class="prose">${d.statement.map((p) => `<p>${rich(p)}</p>`).join('')}</div>
  </section>

  <section class="sec">
    <h2>Capabilities</h2>
    <div class="caps">
      ${CAPS.map(([h, items]) => `<div><h3>${esc(h)}</h3><ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')}
    </div>
  </section>

  <section id="experience">
    <h2 style="margin-bottom:var(--s6)">Experience</h2>
    ${entries}
  </section>

  <section class="sec">
    <h2>Beyond work</h2>
    <div class="prose">${(Array.isArray(d.beyond) ? d.beyond : [d.beyond]).map((x) => `<p>${esc(x)}</p>`).join('')}</div>
  </section>

  <footer>
    <span>Dave Prowse · Curriculum Vitae</span>
    <span><a id="footer-email" href="#" rel="nofollow">email</a></span>
  </footer>

</div>

<script>
// Ongoing-role durations are recomputed at view time. A hardcoded "4 yrs 8 mos"
// is correct on the day it ships and wrong a month later; this keeps it true
// without a build step. The server-rendered value stays as the no-JS fallback.
(function () {
  document.querySelectorAll('.when span[data-since]').forEach(function (el) {
    var parts = el.getAttribute('data-since').split('-');
    var start = new Date(+parts[0], +parts[1] - 1, 1);
    var now = new Date();
    var months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    if (months < 0) return;
    var y = Math.floor(months / 12), m = months % 12, out = [];
    if (y) out.push(y + ' yr' + (y === 1 ? '' : 's'));
    if (m) out.push(m + ' mo' + (m === 1 ? '' : 's'));
    el.textContent = out.length ? out.join(' ') : '<1 mo';
  });
})();
(function () {
  var user = ['h','i','r','i','n','g'].join('');
  var domain = ['p','r','o','w'].join('') + '.' + ['s','e'].join('');
  var addr = user + String.fromCharCode(64) + domain;
  function wire(el) { if (!el) return; el.textContent = addr; el.setAttribute('href', 'mailto:' + addr); }
  document.addEventListener('DOMContentLoaded', function () {
    ['contact-email','footer-email'].forEach(function (id) { wire(document.getElementById(id)); });
  });
})();
</script>
</body>
</html>`;

writeFileSync('.impeccable/options/a2-refined.html', html);
console.log(`wrote .impeccable/options/a2-refined.html (${(html.length / 1024).toFixed(1)} kB)`);
