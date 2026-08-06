---
name: Dave Prowse CV
description: Restrained near-monochrome editorial system with a contrast-derived orange accent, for a senior cybersecurity executive's CV
colors:
  c00: "#1a1c1f"
  c12: "#33373d"
  c24: "#4e535a"
  c36: "#686e76"
  c48: "#8a9098"
  c72: "#c9ccd1"
  c84: "#dfe1e4"
  c92: "#eef0f2"
  c99: "#fcfcfd"
  accent: "#c2410c"
  accent-hover: "#9a3412"
  accent-ink: "#ffffff"
  print-ink: "#000000"
  print-ink-muted: "#3a3a3a"
  print-rule: "#999999"
  print-rule-light: "#cccccc"
typography:
  display:
    fontFamily: "Libre Franklin, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.6rem, 6.4vw, 4.6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.038em"
  headline:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "clamp(1.12rem, 1.9vw, 1.32rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  role:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "clamp(1.06rem, 1.9vw, 1.28rem)"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.014em"
  body:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "-0.005em"
  small:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "0.94rem"
    fontWeight: 400
    lineHeight: 1.6
  fine:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 400
    lineHeight: 1.55
  contact:
    fontFamily: "Spline Sans Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.5
  data:
    fontFamily: "Spline Sans Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: "Spline Sans Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.1em"
rounded:
  button: "4px"
  skip: "3px"
  tag: "3px"
spacing:
  s1: "0.25rem"
  s2: "0.5rem"
  s3: "0.75rem"
  s4: "1rem"
  s6: "1.5rem"
  s8: "2rem"
  s12: "3rem"
  s16: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.button}"
    padding: "0.7rem 1.1rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.accent-ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.c00}"
    borderColor: "{colors.c72}"
    rounded: "{rounded.button}"
    padding: "0.7rem 1.1rem"
---

# Design System: Dave Prowse CV

<!-- impeccable:design-schema 1 -->

## Overview

**Creative North Star: "The Considered Record"**

A senior career stated plainly, on white, with nothing between the reader and the
facts. Authority comes from restraint and precision rather than decoration: a
tight modular type scale, a numeric neutral ramp, hairline rules, and exactly one
warm accent used sparingly. The reference point is a Swiss annual report or a
top-tier consultancy document, not a designer's portfolio.

The system was chosen after an explicit rejection. An earlier industrial
"machine rating plate" direction (dark teal enamel, riveted anodised plate, CSS
bevels) was rejected by the user as reading like "early 2000s Geocities". The
diagnosis was correct and is recorded here as a standing constraint: **imitation
material is banned**. No bevels, embossing, faux-3D, gradient metal, rivets, or
any effect imitating a physical surface. Depth is expressed with hairline rules
and tonal steps only.

Structure and density follow a user-supplied reference,
`luciano-pereira.pages.dev`: a modular scale driven by `--f-base` and
`--f-scale`, a numeric grey ramp, monospace reserved for data and labels, a
middot-separated contact row, and a dense capability grid. That reference's own
muted greys fail WCAG AA (its `#7a7a7a` on near-white is 4.18:1), so every value
here was re-derived to clear the floor.

**Key Characteristics:**
- Near-monochrome: nine-step neutral ramp plus one accent
- Modular type scale, no hand-picked sizes
- Monospace strictly for data, labels, and metadata, never for prose
- Hairline rules and tonal steps as the only depth mechanism
- Print is a first-class path; recruiters print this
- Every text pair passes WCAG 2.2 AA (worst case 4.50:1)

## Colors

A single neutral ramp numbered by lightness, plus one warm accent. The ramp
replaces ad-hoc greys so any new surface picks a documented step.

### Accent
- **Accent** (#c2410c): The one warm colour. Used for the primary action's fill,
  the stamped platform names in the experience record, and link/focus states.
  Contrast-derived: 5.05:1 as text on `--bg`, 4.53:1 on `--bg-2`, and white ink
  clears 4.5:1 on it as a solid fill.
- **Accent Hover** (#9a3412): Darker fill for the primary action's hover state.
- **Accent Ink** (#ffffff): The only ink permitted on an accent fill.

### Neutral ramp
- **c00** (#1a1c1f): Primary text, headings, and the strong rules under the facts
  strip and first experience entry.
- **c12** (#33373d): Reserved step; not currently used on text.
- **c24** (#4e535a): Body prose, bullet text, and capability items.
- **c36** (#686e76): Section labels, field labels, and secondary metadata.
- **c48** (#8a9098): Middot separators only. Decorative, never text.
- **c72** (#c9ccd1): Secondary button borders and bullet dashes.
- **c84** (#dfe1e4): Hairline rules between entries and around tags.
- **c92** (#eef0f2): Tag and company-logo backgrounds.
- **c99** (#fcfcfd): Page ground.

### Named Rules

**The Contrast Floor Rule.** WCAG 2.2 AA is binding. All 12 shipped pairs pass;
worst case is 4.50:1 (`--subtle` on `--bg-2`). Two values are contrast-derived
and **must not be lightened**: `--c36` (#686e76), which clears AA on both `--bg`
and `--bg-2`, and `--accent` (#c2410c). Brighter oranges were tested and
rejected: #e8590c fails as text (3.49:1), #d24317 fails on `--bg-2` (4.03:1).

**The c48 Rule.** `--c48` (#8a9098) is 2.96:1 on the page ground and is therefore
**decorative only**. It is used for middot separators. Never put text on it.

**The One Accent Rule.** Orange appears in three places: the primary action, the
platform names in the record, and link/focus states. It marks what matters; it is
not a decorative wash.

## Typography

**Sans:** Libre Franklin (300, 400, 500, 600, 700)
**Mono:** Spline Sans Mono (400, 500)

Both were chosen deliberately against a defaults list. Inter, Roboto, Fraunces,
Geist, Plus Jakarta Sans, and Space Grotesk are flagged as convergent AI choices;
Geist shipped briefly in an interim build and was replaced for exactly this
reason. Do not substitute any of those faces.

### Scale

Driven by `--f-base: 17px` and `--f-scale: 1.28`, dropping to 16px below 820px
and 10.5pt in print. Fluid `clamp()` values handle display sizes.

Seven screen steps. Anything not on this ramp is drift.

| Step | Size | Used for | Weight |
|---|---|---|---|
| display | `clamp(2.6rem, 6.4vw, 4.6rem)` | h1 | 600 |
| headline | `clamp(1.12rem, 1.9vw, 1.32rem)` | job titles | 600 |
| role | `clamp(1.06rem, 1.9vw, 1.28rem)` | role line, lede | 500 / 400 |
| body | `1.02rem` | profile and beyond-work prose | 400 |
| small | `0.94rem` | bullets, summaries, facts values, capability headings | 400 / 600 |
| fine | `0.88rem` | capability items, organisation, button labels | 400 / 600 |
| contact | `0.82rem` mono | contact row | 400 |
| data | `0.8rem` mono | dates, durations, scope | 500 |
| label | `0.72rem` mono, `0.1em` tracked, uppercase | section and field labels, tags, footer | 500 |

Two exceptions are deliberate and documented: `.pl` (platform names) uses `0.9em`
so it scales with its containing bullet rather than fixing a size, and the skip
link uses `13px` because it is chrome that never participates in the page's scale.

### Named Rules

**The Mono Discipline Rule.** Spline Sans Mono is for dates, durations, scope
markers, field labels, section labels, the contact row, tags, and platform names,
all of which are data or reference marks. It is never used for prose. Monospace as
a costume for "technical" is the failure mode this rule exists to prevent.

**The Measure Rule.** Prose caps at 66ch, bullets and summaries at 70ch, the lede
at 52ch, and h1 at 14ch. Long-form text never runs the full container width.

## Layout

A single centred column, `--max: 1180px`, with fluid padding
`clamp(1.25rem, 4vw, 3.5rem)`.

Sections use a two-column grid: a 180px label column and a flexible content
column, so section labels sit in a consistent left margin and prose starts at the
same x-position throughout. Experience entries use the same 180px/flex split,
with dates in the label column.

The fact bar (`.factbar`) is bounded by a strong `--c00` rule above and a hairline
below, and holds two rows separated by a hairline: identity facts (`.facts`) and
sectors (`.sectors`). Both use a **flex row, not a grid**: the values differ in
length from "Global" to "Agentic AI & adversarial security", and equal-width
columns leave visibly ragged optical gaps. Flex sizes each column to its own
content with a consistent `--s8` gap.

The capability grid is a fixed 3 columns, dropping to 2 below 1000px and 1 below
560px, so it fills evenly rather than leaving an orphan row.

The experience list closes with a hairline (`#experience` `border-bottom`) and
`--s12` of padding. Every entry carries a rule above it, so without a closing rule
the ruled sequence stops mid-pattern and leaves the following section unbounded.

Spacing uses an 8px-derived rem scale (`--s1` … `--s16`). Sections are separated
by `--s12` (3rem), tightening to `--s8` below 820px.

**Breakpoints:** 1000px (capability grid to 2 columns), 820px (single-column
sections, dates become an inline row, base font to 16px), 560px (capability grid
to 1 column).

## Elevation & Depth

**There are no shadows in this system, and that is deliberate.** Depth comes from
hairline rules (`--line`), tonal steps (`--bg-2` for tags), and whitespace. Rule
weight carries hierarchy: `--c00` 1px marks a major boundary (above the facts
strip, above the first experience entry), `--line` 1px marks a minor one (between
entries, under capability headings).

### Named Rules

**The No Imitation Rule.** No `box-shadow`, no `inset` highlights, no
`text-shadow`, no bevels, no embossing, no gradient "material", no faux-3D. This
is a standing constraint from the rejected industrial direction, not a stylistic
preference. If an element needs separation, use a rule, a tonal step, or space.

## Shapes

Minimal radii: 4px on buttons, 3px on tags and the skip link. Everything else is
square. These are the corner treatments of a printed document, not of a soft UI.

Borders are hairlines at 1px. No border is thicker than 1px anywhere, including
the strong `--c00` rules, which differ by colour rather than weight.

## Components

### Buttons
- **Primary:** Accent fill (#c2410c), white ink, 4px radius, `0.7rem 1.1rem`
  padding, mono label at 0.9rem/600. Hover darkens to `--accent-hover`. No
  shadow. Used once, for Download CV.
- **Secondary:** Transparent, `--c00` text, 1px `--c72` border. Hover darkens the
  border to `--c00`. Used for LinkedIn.
- **Transition:** 0.15s on background-color, border-color, and color.

### Fact bar (`.factbar`)

Two rows inside one bounded block. Row one is identity: Based, Scope, Experience,
and "Working on". Row two is Sectors, a middot-separated list of the domains the
work has landed in. Labels use the mono `label` step in `--subtle`; values sit at
the `small` step in `--text`.

A third row of round-number scale metrics (players protected, developers enabled,
platforms shipped) was built and then removed: "Thousands" and "Seven" read as
vague where the label promised precision, and the 700 million figure already
appears in the profile paragraph directly below. Do not reintroduce it.

Every entry in the Sectors row is traceable to a real engagement in the record.
It is a factual index of domains worked in, not a claim of specialism.

### Contact row
Mono at 0.82rem in `--muted`, items separated by middot characters in `--c48`.
Links carry a `--line-2` underline that turns accent on hover.

### Experience entry
180px mono date column (date, duration, scope stacked) beside title, organisation,
bullets, and optional tags. Bullets use a 0.4rem `--line-2` dash, not a glyph.
Earlier roles use the `.prior` variant: reduced padding and a 1rem title.

### Tags
Mono 0.72rem in `--muted` on `--bg-2` with a `--line` border and 3px radius. Used
for the named standards against the Dyson role.

### Company logos (`.org .mark`)

Real company logos, embedded as base64 WebP at 64px source, rendered in a fixed
20x20 box with `object-fit:contain` so mixed source shapes align on one baseline
(14px in print). Total payload ~11 KB.

They are embedded rather than hotlinked because this site is unlisted and
privacy-guarded: loading logos from a third-party CDN would leak visits to that
CDN and break the single-self-contained-file constraint. Embedding keeps the page
to exactly one external request, the Google Fonts stylesheet.

Sources: EA and AWS logos supplied by the user as SVG (the AWS mark is the
monochrome wordmark; the orange version was replaced because it lost legibility
against the near-white ground). Dyson, Atos, Ensono,
Broadcom, and Claranet from each company's own favicon. Attenda, Symantec.cloud,
and Star Technology Services display their successor brands (Ensono, Broadcom,
Claranet), which is what the page's own labels already tell the reader. Each
`img` carries an empty `alt` because the company name sits beside it as text.

Trademarks belong to their owners and are used here as factual employment
references. To replace one, drop a new source into `.impeccable/logos.json`; the
generator reads it at build time.

### Favicon

`favicon.svg`, a 32x32 rounded square (`rx=7`) filled with `--accent` (#c2410c),
carrying a lowercase "dp" in white at 5.18:1.

The letters are **real Libre Franklin outlines at weight 600, converted to SVG
paths**, not a `font-family` reference. An SVG favicon cannot load a webfont, so a
font-family declaration would silently fall back to whatever system face the
browser picked and stop matching the page. Extracted with fontTools from the
variable font instantiated at `wght=600`.

Glyph size is 18px on the 32px canvas with a 21.7px baseline, giving ~5px side
margins. Verified legible at 48, 32, and 16px, and against both light and dark
browser chrome. `theme-color` stays `#fcfcfd` (the page ground) rather than the
accent, so mobile browser chrome reads as an extension of the page.

The previous favicon belonged to the rejected design (`#161512` ink, `#a8321e`
terracotta, italic Georgia) and was replaced with the visual world; the original
is kept at `.impeccable/favicon-old.svg`.

### Ongoing role durations (`[data-since]`)

A role still in progress carries `data-since="YYYY-MM"` on its duration span, and
a script recomputes the value on load. A hardcoded duration is correct on the day
it ships and silently wrong a month later, which is exactly the kind of rot nobody
notices on a page that is only read occasionally.

The server-rendered value stays in the markup as the no-JS fallback, so the page
degrades to a stale-but-plausible figure rather than an empty gap. Output format
matches the hand-written entries: "4 yrs 7 mos", "5 yrs", "<1 mo".

Any future ongoing role needs `since` set in `content.json`; the generator wires
the attribute up automatically.

### Concurrent titles (`.also`)

Formal appointments held *alongside* a headline role, in accent-outlined chips at
`0.82rem/600`. Used for the Dyson Deputy CISO and Product CISO appointments. These
are real titles, not descriptors, so they sit directly under the company at full
weight rather than as org subtext. Accent text passes AA at 5.05:1.

### Bullet groups (`.grp`)

Labelled subsections inside a long merged company entry, so a 15-bullet record
reads as "Current remit" and "Platforms and programmes delivered" rather than one
undifferentiated wall. Label uses the documented `label` step.

### Title progression (`.titles`)

Earlier titles at the same company, under a `Previously at <company>` label. The
**most recent title is omitted** because the entry heading already states it;
repeating it reads as a duplicate. Every entry keeps the same shape (title as
heading, company beneath), so grouped and single-role entries stay consistent.

### Focus & skip link
`:focus-visible` is a 2px accent outline at 3px offset, applied globally. The skip
link is offscreen until focused, then appears at top-left with `--text` fill and
`--bg` ink.

## Print

Print is a first-class path, not an afterthought; recruiters print this and
circulate the PDF. Current output is 6 pages.

Print uses its own four-value ink set, deliberately outside the screen ramp
because screen greys are tuned for a `#fcfcfd` ground rather than paper:
`#000` for all text, `#3a3a3a` for labels and secondary metadata, `#999` for tag
borders, and `#ccc` for entry rules.

### Named Rules

**The Visible Emphasis Rule.** Every colour used on text must be explicitly reset
to `#000` in the print block. In an earlier build, `strong` inherited white and
printed invisibly, silently deleting AstraZeneca, Arm, Mercedes-Benz, and the
FIND → VERIFY → CRITIQUE → JUDGE loop from the printed page. Any new coloured
text element must be added to the print reset.

**The Flow Rule.** Long entries use `break-inside: auto`. Using
`page-break-inside: avoid` on the EA entry, which is taller than one page, pushed
it whole and produced a near-blank page. Headings use `break-after: avoid` and
individual bullets and paragraphs use `break-inside: avoid` with
`orphans: 3; widows: 3`.

Actions and the skip link are hidden in print. The grid narrows to a 132px label
column.

## Accessibility

WCAG 2.2 AA is a binding floor, not an aspiration.

- All 12 shipped text pairs pass; worst case 4.50:1.
- `:focus-visible` is present globally with a 2px accent ring.
- A skip link targets the experience section.
- `prefers-reduced-motion` disables smooth scrolling and all transitions.
- No overflow at 500, 700, 1100, or 1440px (measured).
- There is no motion to disable beyond transitions: this build has no animation.

## Do's and Don'ts

### Do
- **Do** pick colours from the documented ramp rather than inventing greys.
- **Do** keep monospace for data, labels, and metadata only.
- **Do** add any new coloured text element to the print reset block.
- **Do** use hairline rules, tonal steps, and space for separation.
- **Do** keep the email address assembled at runtime in JavaScript.
- **Do** re-check contrast when changing any colour; two values are
  contrast-derived and sit close to the floor.

### Don't
- **Don't** introduce shadows, bevels, embossing, gradient material, or any
  faux-3D effect. This is the constraint that the rejected direction violated.
- **Don't** lighten `--c36` (#686e76) or `--accent` (#c2410c); both are
  contrast-derived and will drop below AA.
- **Don't** put text on `--c48` (#8a9098): it is 2.96:1 and decorative only.
- **Don't** substitute Inter, Roboto, Fraunces, Geist, Plus Jakarta Sans, or
  Space Grotesk. All are convergent defaults; Geist was already removed for this.
- **Don't** use monospace for prose.
- **Don't** spread the accent into a decorative wash. Three uses, no more.
- **Don't** hoist role-specific claims to page level. The named standards belong
  to the Dyson role that applied them; page-level claims must hold for the whole
  career.
- **Don't** hardcode a duration for an ongoing role. Use `since` in
  `content.json` so it recomputes at view time.
- **Don't** rebuild the fact bar as an equal-column grid. Flex is deliberate; a
  grid reintroduces the ragged optical gaps it was changed to fix.
- **Don't** give the favicon a `font-family`. An SVG favicon cannot load a
  webfont, so it would silently fall back to a system face. The letterforms are
  committed as real Libre Franklin path outlines.
