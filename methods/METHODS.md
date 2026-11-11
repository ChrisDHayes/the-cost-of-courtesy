# Methods and evidence contract — V1.3

*The Cost of Courtesy: The Living Constellation* is an **evidence-linked, secondary research synthesis**. It is not an independent experiment, a systematic review with an exhaustive search, a production energy audit, or a unified dataset.

## Research questions

1. What measurable incremental computation occurs when a standalone acknowledgment elicits a new model response?
2. How does politeness **within** a substantive request differ from a subsequent thank-you?
3. Can a response be considered efficient without measuring successful task resolution, quality, and retries?
4. Are model performance and energy burdens distributed evenly across languages?
5. What can and cannot be attributed to electricity, water, and geography when serving location is unknown?
6. Which interface interventions could preserve human meaning while routing work more proportionately?

## Sources and design

This project synthesizes independent published work: Delavande, Pierrard & Luccioni (2026), [Small Talk, Big Impact](https://arxiv.org/abs/2601.22357); Andruccioli et al. (2026), [PromptTone](https://doi.org/10.3390/data11040088); Deng et al. (2026), [The Language–Energy Divide](https://aclanthology.org/2026.emnlp-main.2113/); Elsworth et al. (2025), [Google-scale inference accounting](https://arxiv.org/abs/2508.15734); and [WRI Aqueduct 4.0](https://www.wri.org/data/aqueduct-global-maps-40-data). Study populations, workloads, model architectures, measurement instruments, metrics, and source rights differ. They are **not** pooled as if they measured the same intervention.

**Epistemic labels:** Reported (published observation or estimate under the cited authors' design); Derived (transparent arithmetic from a published figure); Modelled (published fitted equation evaluated at illustrative inputs); Interpreted (our conceptual synthesis); Unknown (a missing cross-study or real-world measurement); Hypothesis (an untested interface intervention). These categories must not be collapsed.

## Exhibit 1 — The Courtesy Constellation

The eight semantic concepts are human intention, courtesy, task, computation, energy, quality, geography, and interface design. The V1.3 network has **nine typed relationships**; source-specific observations are drawn differently from conceptual interpretations, evidence gaps, and hypotheses. The **416 decorative filaments and 260 orbital fibres** are composition, not data values: they do not represent sample sizes, statistical distances, effects, network routes, or causal strength. Nodes use editorial positions. Selecting an evidence relationship shows a source or an explicitly stated gap.

## Exhibit 2 — Resolution Signal Plate

The display maintains four **non-interchangeable** tracks:

- **Measured/reported H100 hardware energy, specific experiment:** GPU 0.202 Wh; CPU 0.024 Wh; RAM 0.019 Wh **estimated according to authors' method**; arithmetic total **0.245 Wh** per generated thank-you reply under the reported Llama 3.1–8B apparatus, using 10,000 conversations. Do not generalize to an average ChatGPT request or to full facility overhead.
- **Modelled GPU-only sensitivity:** selected authors' fitted prefill/decoding relationships, applied to 4 input lengths (250, 1,000, 4,000, 8,000 tokens) × 3 output lengths (20, 60, 120). These are **scenario outputs**, not additional measured replies, and exclude CPU/RAM/facility overhead.
- **Prompt tone:** Table 5's published *mean code-character lengths* for polite versus neutral inputs. Formula: `100 * (polite_mean - neutral_mean) / neutral_mean`. Descriptive results are approximately GPT −3.34%, Claude +9.62%, Gemini −4.63%. Do not equate characters with tokens, energy savings, statistical significance, or user success.
- **Energy per verified resolution:** intentionally absent because no combined, paired dataset in these studies records energy, retries and verified task quality on comparable task attempts.

## Exhibit 3 — Language and scoring

**V1.4 primary Act 4 instrument — full 122-language distribution.** The experience now includes every row from the authors' [canonical Qwen3–8B, 0-shot Belebele benchmark CSV](https://github.com/MichiganNLP/language-energy-divide/blob/master/results/belebele_canonical_Qwen3-8B_0shot.csv), preserved in [the attributed source-derived extract](../data/language122_qwen3_8b_belebele.json). The full 122-row cohort, not the purposive guided subset, determines all reference lines.

Each record is a **language-condition aggregate**, not a user, nation, random observation of worldwide activity or causal intervention. For a metric `x`, the unweighted mean is `sum(x_i)/122`; the median is the midpoint of the 61st and 62nd ordered records. The interquartile band uses the source cohort's 25th and 75th percentile order statistics (indices 30 and 90 in zero-based, 122-row indexing). Bubble size is constant; vertical jitter is deterministic and represents **no data dimension**. Higher- and lower-resource colouring follows the authors' classification and does not grade language complexity or importance.

For **steady-state energy per generated output token**, the 122-language median is **0.131875976 J** and mean **0.173013988 J**, about **31.19% higher than the median**. Distance-to-median cost positions use `log2(language J/token / cohort median J/token)`, with ratios explicitly marked on the x-axis. The mean and median reference rules are transformed onto this axis, preserving their **arithmetic**, not geometric, definitions.

For **lenient benchmark accuracy**, median = **68.33%**, mean = **61.54%**; strict accuracy and the lenient-minus-strict scoring gap are alternative, independently labelled lenses. Accuracy positions show **percentage-point deviation** from the median for that accuracy metric, not a log ratio. The descriptive double-penalty flag identifies only records with energy above the energy median **and lenient accuracy below the lenient median**. It is *not* a composite index, causal effect, hypothesis test, or population fairness estimate. Total output tokens across 900 tasks are retained in the inspector but **not** equated with energy per token.

The older **12-language illustrative scatterplot is preserved** below the new chart, with strict/lenient switching and exact formatting-failure counts. It remains a *purposively selected*, nonrepresentative drill-down. The full 122-row instrument and the 12-row scatter are two views of the same study, not independent replications.

In the source record for French, strict accuracy is approximately **0.11%** versus **91.67%** lenient accuracy, with **899 formatting failures in 900 tasks**. This shows why scoring criteria are part of the result, not a claim that French speakers have near-zero real-world model accuracy. No regression, national characterization, causal inference about language or politeness, or universal model/population ranking is made.

**Reuse:** Original MichiganNLP repository code is Apache 2.0, while the selected data from the authors' Hugging Face dataset is identified as **CC BY-SA 4.0**. Preserve source attribution and applicable ShareAlike conditions on source-derived data; do not treat the whole original visualization codebase as automatically subject to that dataset license. See [rights and attribution](../LICENSE_AND_ATTRIBUTION.md).

## Exhibit 4 — Geography and water

The geographic instrument intentionally contains **no inferred serving-location point and no invented data-centre route**. The Llama/H100 thank-you hardware figure and Google's separately published production-median Gemini Apps text-prompt estimate (0.24 Wh; 0.26 mL water) differ in **workload, hardware, sampling, boundary and attribution**. The apparent closeness of their energy numbers does not establish comparability. Neither can be applied to an unknown user's single request without workload- and system-specific evidence. Aqueduct is used for water-risk context, not to label an unobserved facility or watershed.

## Proposed design comparison

Full model reply, lightweight interface acknowledgment and silent closure are **design hypotheses**, not evidence-backed per-request savings. Evaluate them through preregistered, randomized interface trials where feasible, including task completion, misunderstandings, retry rates, accessibility, user trust, latency, workload energy, and indirect displacement effects. Any inference to an enterprise setting must consider the cost of incorrect or delayed decisions.

## Replication and disclosure

The publication includes source URLs and an analytical receipt for each central number. No independently reproduced inference-run measurements, original controlled A/B tests, joined request-level facility data, or validated per-resolution efficiency dataset are claimed. QA reported for the original V1.3 is targeted browser-functional testing. V1.4's new distribution has had source and JavaScript syntax checks, but not a formal accessibility, device or comprehensive browser validation, not independent scientific replication, Safari/Firefox field validation, or a formal WCAG conformance audit.

**Citation practice:** cite primary papers for their own results, and label all cross-paper reasoning as interpretation. See the [research essay](../research/THE_COST_OF_COURTESY_RESEARCH_ESSAY.md) for the argument, alternatives and source notes.

## V1.5 — model–language matrix protocols

The two new matrices are source-separated, not a pooled meta-analysis.

**Courtesy Response Matrix (Act 2):** Transcribes Mehta et al. (2026) arXiv:2604.16275v1, Table IV (five model rows × five prompt categories × English, Hindi, Spanish) and Table V (same model-language rows × three prior-interaction histories). The interface displays one published marginal dimension at a time. It does not estimate category × history interactions, standard errors, causal mechanisms, real-world outcome quality, or resource cost. The CQS is the authors' equal-weight average of eight automated metrics; cultural and cross-language validity remain open questions. Per-cell source link: https://arxiv.org/html/2604.16275.

**Multilingual Energy Matrix (Act 4):** Transcribes MichiganNLP's source CSV https://github.com/MichiganNLP/language-energy-divide/blob/master/results/cross_model_12lang_table.csv; dimensions are twelve language-condition IDs × three models, numeric unit joules per output token. Source row ordering, alphabetical order and descending Qwen3–8B energy ordering are available. Colour can represent either relative within-model position or the common absolute scale, and the exact source number remains printed in every cell. The Tibetan Qwen3–14B value is source-censored and must not be treated as a fully observed estimate. No model-imputation or synthetic data are permitted. This comparison is independent of the primary 122-language Qwen3–8B Belebele distribution.

**Caution:** J/output token is not total J/task; PLUM CQS is not task success; source models differ. Neither matrix measures the energy cost of politeness as a factorial experiment. Avoid comparing their cell colours or subtracting values across studies. QA includes value-level reconciliation to source-published tables and presence checks; comprehensive browser/accessibility/device tests remain outstanding.
