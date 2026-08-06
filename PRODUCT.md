# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Single self-contained `index.html` — inline `<style>` and `<script>`, no build step, no
framework, no bundler. Served statically by GitHub Pages at the custom domain
`dave.prow.se` (see `CNAME`). Supporting files at the repo root only:
`DaveProwse_CV.pdf`, `favicon.svg`, `robots.txt`.

Web fonts load from Google Fonts (Libre Franklin, Spline Sans Mono). Everything else is
local. The self-contained single-file constraint is binding, not incidental.

## Users

Three audiences, all arriving from a link Dave sent or passed on rather than from search:

- **Executive search and in-house recruiters** assessing him for CISO, VP, or
  Director-level security roles. Skimming first for level, scope, and scale before
  deciding whether to read.
- **Hiring executives and boards** — CTOs, CISOs, CEOs, board members — doing due
  diligence before or after a conversation. Reading for judgement, strategy, and whether
  the scale claims hold up.
- **Peers and professional network** — security leaders, conference organisers, advisory
  and board approaches. Reading for authority and point of view.

All three are reading on their own time, unprompted, and can leave at any point. None of
them arrived by accident.

## Product Purpose

A personal CV site for Dave Prowse. Success is a conversation started about a senior
security leadership role: the reader finishes convinced he is obviously worth a call, and
has an unmistakable way to make contact.

It is not a portfolio, not a blog, and not a lead-generation funnel. It exists to make the
case and hand over the email address.

## Positioning

A security executive who builds the platforms himself. The differentiator is not the
seniority — it is the combination of C-suite and board-level strategy with hands-on
delivery of the systems that carry it out: an enterprise scanning platform, a gameplay
integrity platform, an agentic-AI security guidance platform, and an adversarial
multi-agent scanning harness, all shipped under his direction at Electronic Arts.

The through-line is developer-first security: security as an enabler, embedded into the
workflows engineers already use, extending into agentic AI and adversarial multi-agent
approaches to vulnerability discovery. A peer with the same title would not truthfully be
able to claim the same build record.

**Current role (as of Jun 2026):** Director, Developer Security at EA, covering security
products, platforms, automation, and DevSecOps capabilities across software development,
plus gameplay integrity operations tooling used by anti-cheat teams. The remit is
enterprise-wide and includes a dotted-line reporting relationship into the CISO. Per the
user's instruction, that reporting line is **conveyed through scope language only and never
drawn as an org chart** on the page.

He has held three titles at EA and four at Dyson. The progression is itself a selling
point: it is shown as **one entry per company** with earlier titles listed beneath, never
flattened into a single undated role and never split into separate per-title entries.

- **EA** (Jan 2022 – present): Senior Manager, Security Automation (Jan 2022 – Jun 2024);
  Director, Security Software Engineering (Jun 2024 – Jun 2026); Director, Developer
  Security (Jun 2026 – present).
- **Dyson** (Feb 2016 – Oct 2020): IT Security Architect Team Leader (Feb 2016 – Aug 2016);
  Lead Cybersecurity Architect (Aug 2016 – Jul 2018); Head of Security Architecture
  (Aug 2018 – Mar 2019); Global Director, Product and Manufacturing Security
  (Apr 2019 – Oct 2020), on international assignment in Singapore.

At Dyson he **concurrently held Deputy CISO and Product CISO**, and was appointed Interim
CISO. These are formal appointments, not descriptors, and the user considers them a material
seniority signal: note that UK "Global Director" is closer to a US VP in scope. They are
displayed prominently, never as org subtext.

Companies are referred to by their recognisable names (Electronic Arts, Dyson, Atos), not
their legal entity names, except in prose where the full name reads naturally.

## Operating Context

- The site is **link-shared, never search-discoverable**. Readers arrive with a name
  already in mind; there is no need to establish who the page is about, and no SEO
  audience to serve.
- Readers frequently **print the page or save it as PDF**, and frequently **download
  `DaveProwse_CV.pdf`** as the formal artefact to circulate internally. Both paths matter.
- Reading happens on desktop and on phones, often mid-triage between many candidate
  profiles.
- The PDF is the formal record. The page must never contradict it.
- **Known divergence (Aug 2026):** the page carries the Jun 2026 role change and the
  three-title EA progression; `DaveProwse_CV.pdf` predates it and does not. The user is
  aware and will update the PDF separately. Until then the page is ahead of the PDF rather
  than in conflict with it, and the PDF must not be treated as authority on the current
  title.
- The PDF writes titles with hyphens and "and" rather than em dashes and "&". Where the two
  differ on punctuation, the PDF is correct: em dashes in job titles were AI additions from
  the original web draft, not the user's own record.

## Capabilities and Constraints

Binding constraints, confirmed by the user:

1. **Single self-contained HTML file.** No build step, no framework, no bundler. CSS and
   JS stay inline in `index.html`.
2. **Unindexed and unlisted.** The `noindex, nofollow, noarchive, nosnippet` meta tags and
   the blanket `robots.txt` disallow — including the explicit AI-training-crawler
   blocklist — stay in place. Do not add sitemaps, structured data for search, or anything
   that invites indexing.
3. **The PDF stays downloadable and consistent.** `DaveProwse_CV.pdf` remains linked from
   the page, and page content must not diverge from it.
4. **Email stays obfuscated.** `hiring@prow.se` is assembled at runtime in JavaScript; the
   literal address must never appear in the raw HTML source. Any contact affordance added
   later must preserve this.

Content constraint — **confidentiality ceiling.** The named EA systems (Talos, Pallas,
Dashy, Zipline, EA Guardians, Docs Portal, EA Security Portal) and the one-line
descriptions currently on the page sit deliberately at the edge of what Dave is
comfortable disclosing. Treat the existing wording as a ceiling: do not add architecture
detail, internal metrics, vendor names, or further specifics, and flag any rewrite that
reads as more revealing than the current text.

Terminology: British English throughout ("organisations", "defences", "programmes",
"artefacts", "licence"). Job titles, company legal names, and date ranges are factual and
must be reproduced exactly.

## Brand Commitments

- Name: Dave Prowse. Domain: `dave.prow.se`.
- Voice: measured, precise, senior. First person, plainly stated, no hype and no
  self-congratulation. The scale does the persuading, not the adjectives.
- Visual direction is recorded in DESIGN.md, not here. The user has confirmed an orange
  accent as a preference; imitation material (bevels, faux-3D, gradient metal) is banned
  outright after an industrial direction was rejected as reading like early-2000s Geocities.

## Evidence on Hand

The CV text is the entire evidentiary record. Confirmed by the user: there are **no**
public talks, published writing, open-source repositories, press coverage, or
company-published material available to cite.

Assets on hand:

- `DaveProwse_CV.pdf` — the formal downloadable CV.
- `favicon.svg`.
- Company logos embedded in the page as base64 WebP (~11 KB total). EA and AWS were
  supplied by the user as SVG in Aug 2026; the rest derive from each company's own
  favicon. Sources are kept in `.impeccable/logos.json` and read at build time.
- LinkedIn profile: `https://www.linkedin.com/in/daveprowse/`.
- Contact: `hiring@prow.se` (runtime-assembled).

Absences that future work must not fabricate: testimonials, endorsements, quotes,
named references, client logos, company logos, headcount figures, budget figures,
percentage improvements, awards, certifications, education detail, and any metric not
already present in the text. The one figure in the record — 700 million players — is a
public EA figure and is the exception, not a licence to invent siblings.

No photograph of Dave has been supplied.

## Product Principles

1. **Scale and scope must be legible in seconds.** The skim-first reader decides whether
   to read at all. Level, breadth, and the build record must survive a ten-second scan.
2. **Never invent proof.** With no external evidence available, the only credibility
   source is the accuracy and specificity of the record itself. Fabricated social proof
   would be both dishonest and instantly detectable by this audience.
3. **The build record is the differentiator.** Anything that flattens Dave into a generic
   security executive has removed the reason to call him.
4. **One clear way to make contact.** Success is a conversation. Reaching out must never
   require hunting.
5. **Respect the confidentiality ceiling.** Specificity is the asset, but the current
   level of disclosure is the maximum. Sharper writing, not more revealing writing.

## Accessibility & Inclusion

**WCAG 2.2 AA is the standing floor.** Hold contrast ratios, visible focus indicators,
full keyboard operability, and `prefers-reduced-motion` support as binding requirements on
all future work.
