# V2.0 Story-First Prototypes — A / B / C

**Design study, not a released V2 experience.** This folder contains a working responsive HTML preview of three editorial story slices. It is intentionally isolated from the verified V1.5.1 publication at https://chrisdhayes.github.io/the-cost-of-courtesy/ and from the main branch `index.html`.

## What to review

| Design slice | Story question | Primary working interaction |
|---|---|---|
| A — Prologue + Act 1 | When a human says thank you, why might a machine respond again? | Human-scale chat vignette; choose to reveal one *illustrative* response; contextual evidence disclosure |
| B — Act 2 | Does politeness change the evaluated response consistently across models and languages? | Published GPT-4o Mini contrast → reveal 5 × 3 PLUM matrix; change five prompt categories; inspect any cell |
| C — Act 4 | What does the energy average conceal across 122 language conditions? | 122 individually selectable, non-overlapping bubbles → actual-energy distribution with labelled mean/median → strict/lenient evaluation comparison |

This is **not** the finished V2 story. Acts 3, 5 and 6, the integrated scrollytelling engine and complete V2 evidence studio will follow design review.

## How to open locally

From the repository root, run:

```sh
python3 -m http.server 4173
```

Open http://localhost:4173/prototypes/v2-story-first/ in a browser. No CDN, remote font, framework or API call is required. To run automated browser checks, install the repository's existing Playwright dependencies and run:

```sh
npm install
npx playwright install chromium
npx playwright test tests/v2-prototype.spec.cjs
```

The [prototype review workflow](https://github.com/ChrisDHayes/the-cost-of-courtesy/actions/workflows/v2-prototype-qa.yml) runs in desktop and mobile Chromium and, when completed, packages review screenshots plus all four working prototype files as a downloadable workflow artifact.

## Research and data provenance

- **Thank-you response cost:** Delavande, Pierrard and Luccioni (2026), [Small Talk, Big Impact](https://arxiv.org/abs/2601.22357). The **0.245 Wh** mean combines GPU/CPU measured and RAM estimated components in its specific Llama 3.1–8B/H100 configuration. The chat message in Prototype A is *illustrative*, not a recording of that experiment.
- **Courtesy matrix:** Mehta et al. (2026), [No Universal Courtesy / PLUM](https://arxiv.org/html/2604.16275), Table IV. The 15 cells per prompt category reproduce the source's published study-defined composite quality scores. These are not observed task success, energy or universally comparable language capability. Table V's *conversation history* is a distinct cut and is **not** merged into this design-study matrix.
- **Language atlas:** Deng et al. (2026), [The Language–Energy Divide](https://aclanthology.org/2026.emnlp-main.2113/), [canonical Qwen3–8B Belebele 0-shot records](https://github.com/MichiganNLP/language-energy-divide/blob/master/results/belebele_canonical_Qwen3-8B_0shot.csv), 122 language-condition aggregates. Data copied verbatim from the project's verified V1.5.1 attributed JSON; original metrics and 122 IDs preserved. The prototype calculates the unweighted sample mean and median from those records. **Source license CC BY-SA 4.0; preserve attribution and ShareAlike as applicable.** The resource group colour reflects the dataset's source classification, not a moral ranking, nationality, or intrinsic cost of any language.

`data.js` intentionally contains the complete source-aligned language and PLUM arrays to keep the prototype inspectable and offline-capable. Nothing combines courtesy scores with energy data.

## Design review / acceptance gates

- **Story:** Can someone follow each slice without reading its evidence disclosure? Does the next question feel earned?
- **Visual hierarchy:** Does the primary finding take precedence over research controls? One main graphic per moment.
- **Scientific fidelity:** Check numbers, study boundaries, sources, units and the hypothetical-chat disclaimer.
- **Mobile:** Check 360–430 px widths, touch selectors, no page-level overflow, chart labels and the 122-point atlas.
- **Accessible:** Read body copy, focus indicators, keyboard-operable bubbles, labelled controls, native evidence disclosures and reduced-motion behaviour.
- **V1.5.1 preservation:** Neither `index.html` on main nor original research datasets are touched by this prototype branch.

## Files

- `index.html` — all reader-facing narrative and semantic layout
- `styles.css` — midnight/slate semantic palette, editorial type, mobile layouts and reduced motion
- `app.js` — interactions and accessible 122-point visual controls
- `data.js` — published dataset extracts and provenance metadata

Related: [Six-act storyboard](../../design/V2_0_STORYBOARD.md) · [V2 design specification](../../design/V2_0_DESIGN_SPECIFICATION.md).
