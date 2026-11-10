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

The experience uses a **purposive, twelve-row subset** of published MichiganNLP viewer results from an investigation covering 122 languages. The 12 displayed rows are *not representative*. X = reported steady-state energy per output token (joules); Y = strict or lenient evaluation accuracy (proportion), user selectable. Formatting errors and exact scoring definitions can change apparent relative performance. No regression, national characterization, causal inference about language or politeness, or general population ranking is claimed.

If redistributing the selected rows from MichiganNLP, preserve the applicable **CC BY-SA 4.0** attribution and ShareAlike terms. See [rights and attribution](../LICENSE_AND_ATTRIBUTION.md).

## Exhibit 4 — Geography and water

The geographic instrument intentionally contains **no inferred serving-location point and no invented data-centre route**. The Llama/H100 thank-you hardware figure and Google's separately published production-median Gemini Apps text-prompt estimate (0.24 Wh; 0.26 mL water) differ in **workload, hardware, sampling, boundary and attribution**. The apparent closeness of their energy numbers does not establish comparability. Neither can be applied to an unknown user's single request without workload- and system-specific evidence. Aqueduct is used for water-risk context, not to label an unobserved facility or watershed.

## Proposed design comparison

Full model reply, lightweight interface acknowledgment and silent closure are **design hypotheses**, not evidence-backed per-request savings. Evaluate them through preregistered, randomized interface trials where feasible, including task completion, misunderstandings, retry rates, accessibility, user trust, latency, workload energy, and indirect displacement effects. Any inference to an enterprise setting must consider the cost of incorrect or delayed decisions.

## Replication and disclosure

The publication includes source URLs and an analytical receipt for each central number. No independently reproduced inference-run measurements, original controlled A/B tests, joined request-level facility data, or validated per-resolution efficiency dataset are claimed. QA reported for V1.3 is targeted browser-functional testing, not independent scientific replication, Safari/Firefox field validation, or a formal WCAG conformance audit.

**Citation practice:** cite primary papers for their own results, and label all cross-paper reasoning as interpretation. See the [research essay](../research/THE_COST_OF_COURTESY_RESEARCH_ESSAY.md) for the argument, alternatives and source notes.
