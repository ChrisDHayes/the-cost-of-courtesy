# V1.4 — The Median Isn't Neutral (Integrated Language Divide)

**Status:** Research and visualization enhancement applied to `main` · 11 November 2026.

## Scope

The previously approved V1.3 "Evidence Threads" HTML was archived unchanged at [releases/v1.3/index.html](releases/v1.3/index.html) before the new language analysis was integrated. **No original datasets, Constellation evidence links, six-act structure, 15 guided checkpoints, or existing supporting instruments were deliberately removed.**

### What changed

- Guided Act 4 first checkpoint now presents the **122-language distribution** with an explicit arithmetic median and mean for energy per output token; second checkpoint preserves the crucial strict/lenient scoring caution.
- Explore Act 4 has a new fully embedded **The Median Isn't Neutral** instrument with two reading modes: distance from the median and synchronized energy/accuracy distributions. Mean and median reference lines, an IQR band, constant-size bubbles, resource-level categories, 12 guided highlights, an exploratory higher-energy/lower-accuracy outline, and a source-record inspector make the research traceable.
- The original 12-language scatterplot remains as an additional close-reading lens. Its deliberate subset selection remains disclosed.
- A new direct link `#language-distribution` opens Explore and navigates to the full-cohort instrument.
- Full source data are attributed in `data/language122_qwen3_8b_belebele.json`; methods, research essay, Substack draft, README, and licensing credits have been updated.

### Derived findings — one study, one benchmark

From Deng et al. (2026), the canonical Qwen3–8B 0-shot Belebele file (122 language aggregates, one per condition, each equally weighted):

| Metric | Median | Mean |
| --- | ---: | ---: |
| Steady-state energy per output token | 0.131875976 J | 0.173013988 J |
| Lenient accuracy | 0.6833333 | 0.6154189 |

Mean energy is approximately **31.2% above median energy**; mean lenient accuracy is approximately **6.8 percentage points below its median**. These are descriptive summaries of language-condition aggregates, not worldwide traffic-weighted usage estimates or per-user environmental costs. The relative cost and accuracy distributions do not establish that language or politeness *causes* an observed gap.

### Scientific and visual contract

- The horizontal energy axis uses a **labelled logarithmic ratio to the arithmetic median**; mean and median reference lines are transformed correctly onto it. The accuracy axis uses percentage-point deviation from its own median. Do not infer that the two axes share a unit.
- The IQR is the central half of the source cohort using the 25th and 75th order-statistic indices specified in `methods/METHODS.md`.
- Bubble size is constant; vertical jitter is cosmetic to reduce occlusion.
- The higher-energy/lower-accuracy flag is a transparent descriptive threshold based on medians, not a synthesized index, causal relationship, or fairness test.
- The paper's approximately **179× total energy** result is a separate source comparison for fixed request sets; it should not be substituted for mean or median *per-token* energy.
- Strict accuracy may be extremely sensitive to formatting. French is the important illustration: 0.11% strict versus 91.67% lenient, 899 formatting failures out of 900 cases. These scores are not general measures of human language capacity or production system accuracy.
- Research data reuse terms and attribution are documented separately in `LICENSE_AND_ATTRIBUTION.md`.

### QA status and further review

Static checks confirm 122 records, 12 retained highlights, all Act 4 anchors, retained six-act/15-step structure, and syntactically valid inline script blocks. **Full browser interaction QA, physical mobile/Safari/Firefox testing, formal WCAG review and independent scientific replication are not yet complete for V1.4.** The recorded V1.3 browser QA does not imply equivalent V1.4 acceptance.

## Sources

- [Deng et al., The Language–Energy Divide, EMNLP 2026](https://aclanthology.org/2026.emnlp-main.2113/)
- [Canonical Qwen3–8B Belebele CSV](https://github.com/MichiganNLP/language-energy-divide/blob/master/results/belebele_canonical_Qwen3-8B_0shot.csv)
- [Published source dataset](https://huggingface.co/datasets/MichiganNLP/language-energy-divide)
- [Previous approved V1.3 release](releases/v1.3/index.html)
