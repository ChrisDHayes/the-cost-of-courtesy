# The Cost of Courtesy — V2.0 experience design specification
**Status:** Proposed for design review — no production code changed  
**Companion document:** [Six-act narrative storyboard](V2_0_STORYBOARD.md)  
**Protected release:** V1.5.1, verified against public GitHub Pages on November 11, 2026. Existing published HTML blob SHA: 8d9d31edf6c6c241e41472d3a30bb2511cc95687.  
**Accepted decisions:** S01 Story before evidence; S02 Meaningful prose; S03 Progressive evidence; S04 Dominant visual per act; S05 Plain English; S06 Mobile-first; S07 Closing loop.

## 0 · Purpose and constraints

**Problem to solve.** The V1.5.1 experience is scientifically disciplined but repeatedly places research labels, methodology controls and source receipts in front of short narrative passages. In the current source, 15 guided story beats average approximately 28 body words each, while most take up a substantial portion of a viewport. At narrow breakpoints, the sticky visual's descriptive subtitle is hidden. The result can feel sparse and technical even though the underlying research is rich.

**Desired experience.** Make the default mode read like a premium, evidence-driven editorial feature: an experience in which visuals and copy reveal a succession of discoveries. Give the research a deliberate second layer without losing the full interactive laboratory.

**Non-goals.** Do not change research measurements, infer new experiments, overwrite V1.5.1, turn the piece into a static infographic, suppress scientific caveats, or claim that a user should be less polite.

**Boundaries.** This specification is not approval to implement V2 in production. V2 design and implementation happen on a separate branch; V1.5.1 stays live until visual, editorial, scientific and browser QA are signed off.

## 1 · Architecture: two deliberate ways in

### Default experience — Read the Story

A six-act guided feature with an opening vignette, approximately 12 purposeful scene transitions, well-developed prose and one primary visual idea at a time. Each act answers a human question. Readers should never need to toggle into a research mode to understand the act's principal insight.

### Secondary experience — Explore the Research

Preserve the existing full analytical instruments with all settings, source-linked details and dataset coverage. Group them under readable categories:

1. **What happens after a thank-you?** Courtesy constellation + response-energy instrument.
2. **Does phrasing change the answer?** PLUM model × language courtesy matrix + PromptTone context.
3. **What counts as efficiency?** Resolution instrument + modeled sensitivity, clearly marked as conditional.
4. **Who experiences different costs?** 122-language atlas, scoring details and 12 × 3 energy matrix.
5. **Where does the work happen?** Geographic unknowns + separate environmental measurement boundaries.
6. **What could we design differently?** Three closure choices + governance implications.

Retain source registry, methodology, data rights and licensing in a **Sources & methods** area accessible from both modes. Explore is not a dumping ground: each instrument begins with one plain-English interpretation before controls.

### Navigation hierarchy

- Primary: **Story**, **Explore**, **Sources**. A quiet, accessible appearance switch remains.
- In Story: a restrained six-act wayfinder, current act clearly marked, jump-to-act list available but not always expanded.
- In Explore: an instrument index and a visible **Return to where I was reading** action, restoring scroll position and active scene.
- Existing article links stay valid: #act-1 through #act-6, #courtesy-response-matrix, #language-distribution, #language-energy-matrix, #constellation and related existing anchored instruments.
- Deep-linked Explore targets must automatically expose the research mode before scrolling; no hidden-target or wrong-subpath regression.

## 2 · Layout and information hierarchy

### Editorial desktop layout

Use a generous reading column and one dominant visualization. A visual may be split beside copy for sustained scrollytelling or occupy a wider section for a consequential reveal, but the reader should not face two unrelated main charts simultaneously.

**Textual wireframe:**

| Subtle progress rail | Story column | One changing visual |
|---|---|---|
| Six small chapter markers | Act heading; 150–230 words across passages | A single visualization whose state responds to the relevant passage |
| No source IDs or jargon by default | One or two natural scroll-triggered reveals | One focused annotation (not a dense legend) |
| Navigation always available | Optional "How do we know?" | No competing cards or tools |

The hero should be a quiet editorial spread with a single chat moment and one question. Don't put several simultaneous framework summaries or a technical legend above Act 1.

### Mobile layout

The narrative comes **before** each relevant visual; the stage is inline at natural story breaks rather than an always-sticky panel occupying half the viewport. Preserve useful chart subtitles (the current mobile CSS hides the stage subtitle). Avoid a global header that consumes excessive vertical space.

Mobile sequence: short act heading → 2–4 sentences → responsive visual → a few further sentences → an optional evidence disclosure → next act. Keep charts readable via their own deliberate responsive composition; horizontal scrolling is acceptable for the full matrix but must be explicitly signalled.

### Typographic scale (design tokens; subject to actual font QA)

| Element | Desktop target | Mobile target |
|---|---:|---:|
| Hero title | 72–108 px responsive | 52–76 px responsive |
| Act heading | 52–70 px | 36–48 px |
| Story subsection heading | 29–38 px | 26–32 px |
| Story body | 18 px / ~1.65 line height | 17 px / ~1.65 |
| Chart explanatory labels | 13–15 px | 12–14 px, preferably 13+ |
| Source note / metadata | 12–13 px | 12 px minimum |
| Reading measure | about 60–68 characters | fluid with comfortable gutters |

Use a premium serif for editorial display and an accessible sans serif for body, navigation and charts. Prefer local/system font stacks and avoid dependencies on unlicensed font binaries. No paragraph or critical chart description should be silently hidden at mobile breakpoints. Remove fake full-screen whitespace from short sections.

### Colour semantics

Preserve the accepted **Human Signal / System Trace** palette:
- Midnight/slate backgrounds and warm off-white text for editorial quiet.
- Terracotta: human meaning, expressions and lower-resource category where source defined.
- Steel blue: computation and measured energy.
- Gold: useful value / verified outcome or median reference where already established.
- Moss: environmental consequences.
- Amber: uncertainty, scenarios and source-censored caution.
- Neutral slate/dashes: unobserved or not applicable.

Semantic colour meaning must be consistent between Story and Explore, with colour-blind legibility, text labels and distinct shapes/line patterns. Maintain accessible corresponding light-mode values. No red-versus-green "good/bad language" scale.

## 3 · Visual grammar: one question, one reveal, one insight

Each visual section should have a **three-step rhythm** where appropriate:

1. **Orientation:** What are we looking at? A brief human-readable description.
2. **Reveal:** One visual variable changes: a path opens, a bar extends, the mean appears, another model is introduced.
3. **Interpretation:** A single annotation connects the visual observation to the story's next question.

Keep all primary scales, units and cohorts honest. Animation conveys a change in viewpoint, not a change in the underlying measured observation. When a visual has too many labels for a clean story view, retain the full interactive variant in Explore.

### Main visual contracts

| Act | Primary story visual | Reader interaction | What stays in Explore |
|---|---|---|---|
| Prologue / 1 | One chat bubble → a restrained trace of an optional new reply | Scroll reveals event; click/tap for "How measured?" | Full courtesy constellation and energy components |
| 2 | One published PLUM contrast → a compact 5 × 3 overview | Tap model/language comparison, then "See full matrix" | Five courtesy conditions, history dimension, all 15 score cells, receipts |
| 3 | Two explicitly hypothetical task pathways → full-attempt comparison | Switch First reply / Whole task | Original resolution instrument and modeled GPU sensitivity |
| 4 | 122 unique dots → mean/median → one qualified accuracy companion | Tap/focus a language, move to full atlas | Both full source distributions, scoring, complete 12 × 3 energy matrix |
| 5 | A user and a clearly unknown service location → two distinct reporting boundaries | "What can we know?" | Geographic instrument, detailed energy/water boundaries |
| 6 / Epilogue | Three alternative completion designs → the same original thank-you | Select an ending and read trade-offs | Full design-boundary instrument and decision framework |

**Act 2 source rule:** PLUM's CQS cells are study-defined composite scores, not percentages, task success or energy. Prompt categories (Table IV) and previous conversational tone (Table V) are separate grouped views and cannot be multiplied into unreported joint scores.

**Act 4 source rule:** The complete 122-language Qwen3–8B dataset must remain intact. The 12 × 3 cross-model energy matrix is a different subset and remains visibly separate. The Qwen3–14B Tibetan observation remains source-censored and explicitly flagged. Position, size and colour must not imply a language is intrinsically expensive or worse for its speakers.

**Act 5 source rule:** No fabricated server location, map route or user-to-data-centre link; 0.245 Wh and 0.24 Wh belong to different studies and cannot be coupled with a common 0.26 mL water estimate.

**Act 6 source rule:** The three interface choices are design hypotheses. No numeric savings, predicted user behaviour or ranking unless explicitly and prospectively measured.

## 4 · Evidence architecture: preserve rigor; lower its visual volume

### Layer 1 — The main story (default, always readable)

A plain-English finding, its visual, and at most one quiet affordance near a quantitative passage: **"How do we know?"**. Important limitations are woven naturally into the sentence ("in one benchmark", "under the study's scoring method") rather than presented as repeated uppercase evidence stamps.

Remove from default story chrome: persistent "REPORTED MEASUREMENT", "INTERPRETATION", "MODELED SCENARIO", "R01", "evidence receipt" on every passage, and duplicate methodology buttons. These are valuable research metadata, not the spine of a public narrative.

### Layer 2 — Behind this finding (contextual panel)

Use a compact drawer/accordion for each numbered factual finding. The same four-part structure makes depth predictable:

- **What was observed:** Metric and magnitude in simple words.
- **What it may mean:** An appropriately bounded interpretation.
- **What it does not show:** Explicit limitation or missing outcome.
- **Read the study:** Direct primary link, source title, model/cohort/task and a familiar status such as "Measured in one experiment", "Derived from published results", "Illustrative proposal", or "Unknown".

On desktop, the panel may open alongside the narrative without obscuring the key graphic. On phone, it opens inline or in a responsive bottom sheet with a close control and focus management. No popover that requires hover alone.

**Example copy (Act 4):**

**How do we know the average can mislead?**  
Researchers published energy-per-output-token values across 122 language conditions for Qwen3–8B in one benchmark. Recalculating the unweighted figures gives a median of about 0.132 J and a mean of about 0.173 J. The higher mean reflects a costly tail. **It does not mean every conversation or every user of a particular language consumes that amount.** Source: Deng et al., EMNLP 2026.

### Layer 3 — The Research Studio (full evidence)

Retain the existing high-resolution charts, controls, complete value tables, raw sources, provenance, licensing and source distinctions. The interface can use measured/derived/inference/unknown terminology here after a one-sentence explanation. Source metadata should be inspectable, searchable and keyboard operable. Layer 3 is linked contextually from Layer 2 and from global Explore.

### Data/evidence contract

Each numeric claim needs a stable evidence identifier that resolves to: original source URL, publication type/date, study conditions, source dataset, metric, unit, measure boundary, derivation (if any), cohort, limitation, status and its on-page appearances.

Preserve current source IDs (such as R01 and R05) as stable internal keys, while **not exposing them as the main narrative label**.

Never combine two sources with different models, prompts and tasks to compute a polished new "cost of politeness" number.

## 5 · Detailed micro-interaction requirements

### Scene progression

- A normal browser scroll reveals the next narrative passage; avoid scroll-jacking and long snap-to-screen transitions.
- Scroll checkpoints affect only the related visual state. A user can read the prose without keeping the graphic constantly in view.
- Explicit Next / Previous alternatives for keyboard and reduced-motion users.
- Scrolling back restores the corresponding previous visual state. Deep-linked entry must render the correct visual immediately.
- Reduced-motion mode replaces transitions with instantaneous state changes; content is not gated behind motion.
- If JavaScript fails, basic narrative copy, image descriptions, static source links and section anchors remain useful.

### Matrix interaction

- The guided preview shows **one curated contrast** first; the full model × language table is a deliberate click away.
- A selected cell updates a persistent, labelled detail panel. Hover may preview but cannot be the only way to inspect.
- Keep numeric values in table cells, not colour alone. A legend explains the direction and scale of the colour mapping.
- Existing separate prompt-category and conversation-history control semantics remain intact.
- Missing data uses "Not measured" / hatch, not zero; censored values get an explicit symbol and explanation.

### 122-language interaction

- Exactly one point per published language-condition aggregate in the full atlas; no hidden clustering that permanently removes individual languages.
- Every language can be selected by a searchable alphabetical selector; points can also be activated by click, touch and keyboard.
- On mobile, selection populates a detail section **below** the graphic; no hovering tooltip that covers the plot.
- Story view highlights 2–3 evidence-backed examples only after first showing the whole population; it may narrow the view but cannot claim the remainder disappeared.
- Show median and mean with distinct labelled lines, never only colour or symbol differences.
- Independent strict, lenient and formatting-failure detail remains accessible in Explore.

### Closing decision interaction

Three options: **A generated reply**, **A lightweight acknowledgment**, **Quiet closure**.
- No default "best" option.
- On selection, show potential benefits, potential failure modes, required user comprehension/consent, and missing measurement.
- The original human thank-you remains visually identical to the prologue, showing that **the interface behaviour—not the words—varies**.
- Provide an accessible "Compare all three" option so readers don't need to click repeatedly.

## 6 · Responsive, accessibility and interaction quality

- Keyboard order follows the natural reading narrative. Every interactive control has visible focus and a meaningful accessible name.
- Story state changes must not trigger excessive live-region announcements. Updates to critical selected details are announced politely.
- Contrast targets: WCAG AA for normal text (4.5:1) and non-text information-bearing shapes/controls (3:1) where applicable; contrast to be measured in both themes.
- Touch target sizing: aim for at least 44 × 44 CSS px for primary mobile actions; provide adequate spacing.
- Do not rely on colour, animation, fine filaments or exact point size alone to communicate meaning.
- SVGs require descriptive titles and text equivalents for findings; complex dense charts should provide an adjacent accessible table or list.
- On a 360–430 px viewport, no horizontal overflow in the story frame. Data-heavy matrices may scroll within their **clearly marked** own container.
- Respect prefers-reduced-motion, system zoom, large text and portrait/landscape changes. No critical context hidden at 390 px or 730 px breakpoints.
- Preserve dark mode as default and the user's ability to toggle to light. Theme state should not reset the story or selected data.
- Avoid hover-dependent evidence or unlicensed font assets.

## 7 · Editorial and visual prototype package — first implementation gate

Do **not** rebuild all six acts at once. Produce three high-fidelity, responsive **working design slices** before general implementation:

### Prototype A — Prologue + Act 1

Demonstrates restrained hero, human-scale prose, a chat-to-computation visual reveal, one source disclosure and a real narrative transition. Essential test: reader understands closure vs. a new generated response without opening methods.

### Prototype B — Act 2

Demonstrates one-source PLUM contrast, a plain-English explanation of composite scoring, progressive reveal of five models × three languages and the correct hand-off to the full matrix. Essential test: reader does not conclude that being blunt is universally better.

### Prototype C — Act 4

Demonstrates 122 individually represented points, labelled mean/median, one focused interpretation, qualified accuracy and a clean hand-off to separate 12 × 3 model energy comparisons. Essential test: reader understands that the averages are language-condition summaries under one benchmark, not a statement about people.

**Design-review deliverables for each:** desktop and phone prototype, exact reader-facing copy, annotated visual states, evidence-layer sample, keyboard/reduced-motion behaviour, screenshots at key widths and a failure/edge-case checklist.

Once these three pass, apply the approved visual grammar to Acts 3, 5 and 6.

## 8 · Versioning and implementation safeguard

1. Freeze V1.5.1 publication artefacts, studies and source definitions as a recoverable reference. Its published GitHub Pages URL stays pointed at the existing main-branch experience throughout design and prototype review.
2. Author V2 work on a separate branch and review it through pull requests. Do not replace index.html on main before explicit promotion approval.
3. Structure implementation as separable story content, scene-to-visual mapping, evidence registry and existing reusable instruments. Avoid rewriting source numerical arrays inside narration components.
4. Preserve the functioning model/category selectors, existing dataset representations and source-linked research controls in Explore even when Story uses curated fragments.
5. Maintain legacy deep links through stable IDs, with guided mode for #act-* and Explore mode for research anchors. Restore position accurately on Back/Forward navigation.
6. Link V2 back to the unchanged full research essay; publication copy may get a separate V2 editorial pass after the new live reading experience is approved.
7. Document any new derived statistics and their calculations in a reviewable manifest. No new dataset means no new quantitative claims.

## 9 · Acceptance criteria and release gates

| Gate | How to judge it | Minimum standard |
|---|---|---|
| Story / coherence | A reader can describe the opening question, six-act progression and final design decision after one pass | All acts answer a distinct question; no repetitive method-first pacing |
| Plain English | Read-aloud review and jargon review | Technical terms defined at first necessary use; no unexplained abbreviations in story |
| Information hierarchy | Desktop and mobile side-by-side screenshots | One dominant visual per reveal; evidence does not visually outvote the prose |
| Scientific accuracy | Compare all claims and chart cells to source registry | Zero invented energy, quality, geography or politeness effects |
| Complete data | Automated assertions | 122 language records, 15 PLUM matrix cells per condition, 36 energy cells, censored flag preserved |
| Accessibility | Keyboard, contrast, zoom, reduced motion, screen reader spot checks | No inaccessible essential content or hover-only controls |
| Mobile | Browser tests plus real-device review | No obscured explanation; selectors and charts usable at 360–430 px |
| Navigation | Deep-link and mode-restoration automated tests | All existing Substack / essay anchors lead to visible correct content |
| Engineering | CI and production-hosted Playwright checks | Existing baseline tests pass or are explicitly migrated; new V2 tests pass |
| Publication | Final author approval | V2 becomes default only after copy, evidence, UX and live-deployment verification |

### Suggested review rubric

Score **1–5** separately for human connection, clarity, discovery, design restraint, visual comprehension, evidence trust, mobile readability and accessibility. Require at least **4/5** on the first five measures and **no critical failures** for evidence trust or accessibility. Do not average away a scientific or usability failure with aesthetic strengths.

## 10 · Accepted decisions converted into implementation outcomes

- **S01 — Story before evidence:** main page leads with a human moment; no source registry atop the opening.
- **S02 — More meaningful prose:** six substantial acts replace repeated 20–40-word checkpoints; transitions earn the reader's next scroll.
- **S03 — Progressive evidence:** contextual four-part disclosures; complete, preserved research studio.
- **S04 — Dominant visual:** one central explanatory graphic per beat; detailed matrices opened only after orientation.
- **S05 — Plain English:** visible names reflect everyday questions; research nomenclature remains accessible in depth.
- **S06 — Mobile first:** stage no longer suppresses meaningful explanation; touch, readable type and inline composition verified.
- **S07 — Closing loop:** return to the exact opening chat bubble; three possible endings framed as alternatives requiring evidence.

## 11 · Proposed decision sequence after this specification

**Next:** Review the narrative storyboard and this specification together. Then build and critique **Prototype A (opening), Prototype B (courtesy matrix), and Prototype C (122-language story)**, in that order. Do not promote a V2 experience until those slices are approved and the complete six-act build passes regression and real production verification.

**Linked baseline:** [V1.5.1 public experience](https://chrisdhayes.github.io/the-cost-of-courtesy/) · [Published sources and essay](../research/THE_COST_OF_COURTESY_RESEARCH_ESSAY.md) · [QA results](../QA_V1_5.md).
