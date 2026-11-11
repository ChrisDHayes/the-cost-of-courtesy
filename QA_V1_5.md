# V1.5 evidence-atlas verification · 11 November 2026

## Scope and publication state

Reviewed `index.html`, the research essay, the Substack draft, and the repository README. The interactive site is [GitHub Pages](https://chrisdhayes.github.io/the-cost-of-courtesy/). This document records source-level checks, **not** a claim of successful browser-based or mobile-device testing.

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

- Static code/data inspection cannot certify that the page **renders and responds correctly** on Chrome, Safari, Android, iOS, different viewport sizes or with keyboard-only navigation. No browser runtime, network-served GitHub Pages deployment, or mobile test was exercised in this check.
- Before a publication announcement, open the GitHub Pages URL in a real browser, navigate to both anchors, toggle every matrix option, select first/last/censored cells, verify source links, inspect narrow-screen horizontal scrolling, switch light/dark mode, and check the browser console for uncaught errors.
- No new experimental results were generated. The two matrices are **separate study surfaces**. The evidence does not establish a joint model × language × politeness × energy experiment.
