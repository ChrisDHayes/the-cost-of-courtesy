# V1.5 evidence-atlas verification · 11 November 2026

## Scope and publication state

Reviewed `index.html`, the research essay, the Substack draft, and the repository README. The interactive site is [GitHub Pages](https://chrisdhayes.github.io/the-cost-of-courtesy/). This document records source-level checks, V1.5.1 desktop/mobile Chromium browser testing against the repository snapshot, and independent testing of the publicly served GitHub Pages website. Real-device Safari and iOS hardware were not tested.

## Verified checks

| Check | Result |
|---|---|
| Act 2 courtesy matrix anchor `#courtesy-response-matrix` | Present |
| Act 4 energy matrix anchor `#language-energy-matrix` | Present |
| Model × language courtesy grid | 5 models × 3 languages; prompt categories Table IV; history Table V |
| Courtesy numerical values | Compared with arXiv v1 Tables IV and V; transcribed values match |
| Language × model energy grid | 12 language conditions × 3 models; values compared with MichiganNLP `cross_model_12lang_table.csv` |
| Tibetan Qwen3–14B source-censored flag | Preserved and surfaced |
| Main 122-language cohort | Inline 122 records retained in original dedicated visualization |
| HTML fragment navigation | Internal `href="#..."` targets checked; no unresolved targets |
| JavaScript syntax | All five executable inline scripts compile successfully; both embedded JSON blocks parse; 122 language records confirmed |
| Matrix interactive code | Buttons, select controls, accessible labels, source links and detail containers present |
| Research essay | Contains PLUM and cross-model energy synthesis with evidence boundaries |
| Substack draft | Contains PLUM and links to the interactive matrix |

## Research provenance

1. Mehta et al. (2026), *No Universal Courtesy*, arXiv preprint v1, Tables IV and V: https://arxiv.org/html/2604.16275 — composite quality scores averaged from eight automated metrics. **Do not** equate CQS with task correctness or causal effects of tone.
2. Deng et al. (2026), *The Language–Energy Divide*, EMNLP: https://aclanthology.org/2026.emnlp-main.2113/ ; original twelve-language cross-model extract: https://github.com/MichiganNLP/language-energy-divide/blob/master/results/cross_model_12lang_table.csv — J per output token, not total energy/request.
3. PromptTone (2026): https://doi.org/10.3390/data11040088 — separate Italian-language code-generation setting; output character counts are not energy or code quality measurements.

## Important limitations and release gate

- **Automated deployment verification passed.** GitHub Pages returned HTTP 200, the deployed HTML matched the checked-in release byte for byte, and desktop and mobile Chromium successfully exercised the published site's core interactions.
- **Not tested:** real Android/iOS hardware, iOS Safari, macOS Safari, Firefox, visual contrast review on physical screens or an exhaustive WCAG accessibility audit. A final human editorial and design review is appropriate before publicizing widely.
- No new experimental results were generated. The two matrices are **separate study surfaces**. The evidence does not establish a joint model × language × politeness × energy experiment.

## V1.5.1 browser test update — November 11, 2026

**Passed: 10 of 10 Playwright browser tests** in GitHub Actions run [43017445936](https://github.com/ChrisDHayes/the-cost-of-courtesy/actions/runs/43017445936) on an Ubuntu 24.04 runner. Five tests ran in desktop Chromium and five in mobile Chromium, exercising direct links, the courtesy and energy matrices, row selection, the Tibetan Qwen3–14B censored flag, all 122 distinct language bubbles, theme switching and guided/explore navigation. The QA runner fix was merged in [PR #1](https://github.com/ChrisDHayes/the-cost-of-courtesy/pull/1).

**Boundary:** the 10 local tests verify the repository snapshot. Separate production-hosted tests are documented below. Neither suite uses physical Android/iOS devices.

## V1.5.1 live GitHub Pages verification — November 11, 2026

**Passed: 10 of 10 production-hosted Playwright tests** in GitHub Actions [run 43019642597](https://github.com/ChrisDHayes/the-cost-of-courtesy/actions/runs/43019642597). Five desktop and five Pixel 7-profile Chromium tests loaded the actual public URL, validated the root page, exercised direct links into the two source-backed matrices, checked the 122-language cohort, and verified dark/light and Guided/Explore interactions. The final run showed no uncaught JavaScript runtime errors in its tested views.

**HTTP and source parity:** GET https://chrisdhayes.github.io/the-cost-of-courtesy/ returned **HTTP 200** and **259,489 bytes**. The deployed body exactly matched the repository `index.html` at verification time (SHA-256: `d67cd1a357dcadce2279304fc579778455ecc00d1206c09ae656ea1930b85e9a`). This confirms the release code is being publicly served.

**Test harness correction:** An earlier [live QA attempt](https://github.com/ChrisDHayes/the-cost-of-courtesy/actions/runs/43019157255) mistakenly navigated to the domain root `/` rather than the project subpath `/the-cost-of-courtesy/`, causing 404s in the test harness despite the HTTP/source-parity check passing. Corrected relative navigation to `./`, and the rerun passed all tests. This was not an HTML-site defect.

Production verification code was merged via [PR #2](https://github.com/ChrisDHayes/the-cost-of-courtesy/pull/2). It is available for subsequent releases in `tests/live-pages.spec.cjs`, `playwright.live.config.cjs` and `.github/workflows/live-pages-verify.yml`.

## V1.5.1 editorial publication review — November 11, 2026

**Interactive HTML remains locked:** no changes were made to `index.html` during this review. The technically verified production baseline and all existing interactive tests are preserved.

**Research essay:** integrated the PLUM courtesy-response discussion into Section 3 and the separate twelve-language cross-model energy comparison into Section 5, instead of appending new evidence after the conclusion. Added inline source bounds, references [6] and [7], stronger factorial-study criteria, and a conclusion that includes model/language differences without implying a common energy experiment.

**Substack draft:** moved the 5 × 3 courtesy matrix into the prompt-tone discussion and the 12 × 3 energy matrix into the multilingual passage; restored the final human-centred conclusion as the actual ending. Simplified navigation language and confirmed the draft is unpublished.

**Editorial structural checks:** all 18 document-specific unique deep-link targets (nine in each document) were checked against actual `id` values in the locked HTML and resolved; research essay references 1–7 are present; title/section flow reviewed. The arXiv PLUM preprint, the peer-reviewed EMNLP multilingual study and the PromptTone paper were independently reviewed for key source claims.

**Remaining scope:** Substack publication remains a manual editorial decision. This review did not publish the draft, conduct a new experiment, revise HTML, or claim that PLUM CQS is task success or that its response scores can be combined directly with MichiganNLP energy values.
