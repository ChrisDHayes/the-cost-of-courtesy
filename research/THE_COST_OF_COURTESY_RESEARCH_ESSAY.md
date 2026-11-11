# The Cost of Courtesy
## When Human Meaning Becomes Machine Work—and Why Efficiency Needs a Better Denominator

**Christopher Hayes, CDAIO**  
*Research essay / evidence synthesis · November 2026 · Accompanying [interactive research experience](https://chrisdhayes.github.io/the-cost-of-courtesy/)*

### Abstract

A simple “thank you” can trigger an additional language-model response. A controlled experiment reports an average of 0.245 watt-hours (Wh) of device-level energy for that response under one Llama 3.1–8B/H100 configuration [1]. Yet this number tells us much less than a universal “cost of politeness.” Courtesy appended **after** a task differs from politeness **within** a task; response length is not task success; hardware energy is not full-stack resource use; and an unknown serving location prevents defensible claims about local water stress. Research on prompt tone, multilingual inference and production environmental accounting shows why the boundaries matter [2–5].

This essay proposes a different unit of inquiry: **the resources required to achieve a verified, useful outcome**, alongside the quality of that outcome, the distribution of burdens across users, and the system's ability to recognize when no substantive reply is needed. It presents a structured, source-bounded synthesis—*not* a new experiment or a causal meta-analysis—and articulates five practical frames for human-centred AI design. The accompanying six-act visualization makes observed measurements, derived scenarios, interpretations and missing evidence inspectable.

**Keywords:** language models; inference energy; interface design; task resolution; multilingual evaluation; water accounting; evidence visualization; AI governance.

---

## 1. A question that sounded almost too small

I began with a question that seemed borderline ridiculous: *Is saying “thank you” to an AI assistant bad for the environment?*

In human conversation, those two words often close an exchange. They acknowledge someone's help, without asking the person to perform another task. In a conventional chat interface, however, a new message may be treated as a new inference request. The system can process the prior conversation and generate a reply to an expression that—socially—was an ending.

Neither of these descriptions is a complete theory of human communication or model serving. A person might genuinely want a response, and a well-designed interface need not generate one. But the mismatch reveals something important: **human meaning and machine work are not naturally aligned**.

When people are encouraged to stop being polite to reduce computing costs, we risk asking humans to accommodate an architecture that may be capable of making more proportionate decisions itself. The interesting design question is not whether manners should survive AI. It is whether systems should understand the difference between an instruction, an acknowledgment, a correction and a request for further work.

[Interactive exhibit — Act 1: the meaning-to-inference transition](https://chrisdhayes.github.io/the-cost-of-courtesy/#act-1)

## 2. What the “thank you” experiment actually establishes

Delavande, Pierrard and Luccioni's *Small Talk, Big Impact* studies responses generated after thank-you messages appended to conversation histories [1]. In one reported configuration—Llama 3.1–8B served with an NVIDIA H100, across 10,000 conversations—their mean per-response components were:

| Component | Mean energy | Evidence status |
| --- | ---: | --- |
| GPU | 0.202 Wh | Reported device measurement |
| CPU | 0.024 Wh | Reported device measurement |
| RAM | 0.019 Wh | Estimated under the authors' approach |
| **Combined** | **0.245 Wh** | Arithmetic sum of those components |

The study demonstrates that generating these responses has a measurable device-level cost, and that cost changes with conversation length, response length, model and serving conditions. It does **not** measure the incremental environmental impact of saying “thank you” in every ChatGPT product, at every time of day, across every model and serving system.

Four distinctions matter.

**Hardware is not a whole facility.** Device-level energy components do not automatically include data-centre cooling, networking, idle capacity, electricity sourcing or associated water use.

**An average is not a fixed price per message.** Variation around a published mean is a property of the experiment. It is not legitimate to apply the mean to all conversations and claim a precise global total without credible usage rates, hardware mixes, model distributions and operating assumptions.

**A generated response is not always necessary.** The paper studies the energy cost *when the system responds*. A different product design might acknowledge or close the interaction without generating fresh text. Whether that improves the overall user experience remains an empirical question.

**The counterfactual matters.** If a suppressed acknowledgment causes the user to repeat themselves or seek reassurance, the resulting workload may undo some nominal savings. We need to study what happens across the interaction, not merely what happens after the first prompt.

The most useful finding is therefore not a number to attach to every act of courtesy. It is proof that **an interface decision can turn a social signal into a measurable computational event**.

## 3. Politeness is not one intervention

We often combine several behaviours under the label *politeness*, even though they have different computational implications.

A standalone “thank you” at the end of a completed task can generate a new inference event. A “please” inside a request that the assistant must answer anyway changes how the task is expressed. An apology, correction or expression of uncertainty may also change the task's meaning. Those are not equivalent treatments.

The 2026 *PromptTone* dataset offers an instructive contrast [2]. Andruccioli and colleagues released 396 generated Vue components under different prompt tones, comparing three model families in Italian-language development tasks. In the authors' Table 5, polite versus neutral instructions were associated with the following differences in **mean generated code characters**:

| Model family in the study | Difference: polite vs neutral |
| --- | ---: |
| GPT | −3.34% |
| Claude | +9.62% |
| Gemini | −4.63% |

Those values are descriptive arithmetic from published group means: (polite − neutral) / neutral × 100. They suggest that tone does not have a uniform direction of association with output length across model families in that task setting.

But **characters are not tokens, tokens are not electricity, and shorter output is not necessarily better output**. A model can write fewer characters and still miss requirements. Another can write more characters because it includes essential structure. The experiment's task, language, provider mix, and evaluation scope limit generalization. It would be particularly misleading to merge this dataset with the H100 thank-you experiment to invent a common cost-of-politeness coefficient.

The distinction is central to the [Act 2 courtesy paradox](https://chrisdhayes.github.io/the-cost-of-courtesy/#act-2): human intent is one dimension; interface behaviour is another; model response is a third. Confusing them leads to confident but ungrounded claims.

## 4. The missing denominator: value, not just volume

Organizations have spent years optimizing operational systems using metrics that are easy to collect. Token counts and request counts now fit into that habit. They are useful operational signals, but incomplete performance objectives.

Consider a hypothetical task requiring a usable, accurate explanation:

- **System A:** a short first answer consumes less energy, but requires two corrections before the person can proceed.
- **System B:** a longer first answer consumes more energy, but meets the required quality threshold without a retry.

Which is more efficient? The answer is **unknown** without measuring the combined interaction. The illustration is not a result from either cited study.

A conceptually better measure is:

\[
E_{\text{verified resolution}} = \frac{\sum_{i=1}^{N} E_{\text{attempt},i} + E_{\text{associated overhead}}}{\text{number of tasks that meet a predefined quality criterion}}
\]

Here, the denominator must be based on **task outcomes**, not the number of model replies. The numerator needs clearly specified measurement boundaries; otherwise two vendors could report identically named metrics that capture very different infrastructure. This equation is a proposed evaluation frame, not an estimate produced by the evidence in this project.

Even this measure is incomplete. Failed or harmful outputs are not interchangeable with successfully resolved tasks. A patient-facing health explanation, a school exercise, an administrative question and a decision affecting a client's finances have radically different error costs. Responsible measurement therefore also needs severity, human review, latency, uncertainty and the value of giving a correct answer—or appropriately declining.

This is the **Resolution Dividend**: the possibility that better first-pass judgment reduces total rework even when individual responses are longer. The hypothesis is plausible, not proven by the existing cross-study synthesis. A proper test would compare complete task histories with quality outcomes and energy observations under comparable conditions.

[Interactive exhibit — Act 3: the missing denominator](https://chrisdhayes.github.io/the-cost-of-courtesy/#beat-3-1)

## 5. The inequity hiding inside “average” inference costs

There is a second reason aggregate efficiency numbers can mislead: not all users encounter the same costs or model quality.

Deng and colleagues' *The Language–Energy Divide* investigates multilingual inference across 122 languages in its main measurement setting [3]. The authors report that energy per output token can vary by as much as 8.3 times across languages in a model, while total energy for a fixed set of requests differs by as much as 179 times between the least and most expensive languages in their reported comparison. They identify two compounding mechanisms: different per-token costs and differences in the number of tokens generated. Their work also reports a troubling association between higher energy costs and lower task accuracy under studied conditions.

One interpretation is the **linguistic double penalty**: a user can incur more computational work and receive a less reliable outcome. But it would be wrong to translate these specific benchmark findings into a claim that any language is inherently “inefficient,” or that the same gap exists in every model, device and task. Tokenizer and serving configurations, task translation, evaluation format, output behaviour and language-resource availability all shape the measured result.

### A distribution, not a universal average

To understand the shape of that divide, I reanalysed the authors' [canonical Qwen3–8B / Belebele 0-shot table](https://github.com/MichiganNLP/language-energy-divide/blob/master/results/belebele_canonical_Qwen3-8B_0shot.csv), using all **122 reported language-condition aggregates** and giving each language equal weight.

| Measure across 122 language conditions | Median | Unweighted mean |
| --- | ---: | ---: |
| Reported steady-state energy / output token | **0.132 J** | **0.173 J** |
| Lenient benchmark accuracy | **68.3%** | **61.5%** |

*My derived summaries of the published source table, rounded for reading. The mean per-token energy is approximately **31.2% above** its median. These are not users, populations, model-independent language costs, confidence intervals, or worldwide-traffic-weighted averages.*

Why show both reference lines? Because a right-tailed distribution can make the arithmetic mean look like the normal case when many observations lie below it. On the accuracy side, the direction reverses: the mean is **below** the median. The two distributions cannot be reduced to one fairness score, but viewing them in parallel exposes an important risk of managing AI by an enterprise-wide average.

The published source associates cost differences with **both per-output-token energy and inflated output-token counts**. A per-token chart cannot substitute for end-to-end request energy. The paper's approximately **179×** total-energy contrast refers to its particular fixed request-set benchmark; it is not a universal multiplier between languages [3]. Nor does a descriptive higher-energy/lower-accuracy flag prove a direct causal relationship.

Even accuracy needs careful interpretation. A strict scoring rule that rejects an otherwise valid answer with extra formatting can produce a different ranking from a lenient rule. In the source row for French, for instance, strict accuracy is about **0.1%** while lenient accuracy is about **91.7%**, with **899 formatting failures among 900 evaluated items**. This is a dramatic warning against equating a strict benchmark number with general language understanding. It does not mean French-language users receive 0.1% accuracy in ordinary conversations.

The updated Act 4 instrument displays **all 122** language records, independent median and mean markers, and synchronized energy and accuracy strips. The original twelve highlighted languages remain as a nonrepresentative guided subset and detailed scoring view. Each point is a single *language-condition aggregate*, not an individual request or person. **Measurement design can change what appears to be model competence.**

This changes the governance question. Instead of asking for one average energy-per-token KPI, an AI service may need to examine **quality, resource cost and accessibility by language, task and user context**. A system optimized only for the most common language can look efficient in a consolidated dashboard while shifting cost and frustration to others.

[Interactive exhibit — The Median Isn't Neutral: all 122 languages](https://chrisdhayes.github.io/the-cost-of-courtesy/#language-distribution) · [Act 4 guided explanation](https://chrisdhayes.github.io/the-cost-of-courtesy/#act-4)

## 6. Two geographies—and an important unknown

Computing happens somewhere. Yet the word *cloud* encourages us to think of infrastructure as placeless.

There are at least two relevant geographies: the location of the **person asking the question**, and the physical infrastructure that serves the request, including the electricity and water systems on which that infrastructure depends. These locations do not need to coincide. Without verified routing or facility information, an individual user cannot reliably infer which data centre processed an interaction.

Elsworth and colleagues' Google-scale production study reports a **median Gemini Apps text-prompt** energy estimate of 0.24 Wh and associated water use of 0.26 mL under the authors' full-stack methodology [4]. The value of this work lies in its explicit accounting scope. It would, however, be a fundamental error to attach the 0.26 mL estimate to Delavande and colleagues' Llama/H100 thank-you measurement simply because the two energy numbers happen to be close.

Different studies are not independent pieces of the same request receipt.

And water is not a single interchangeable quantity. Withdrawals and consumption differ; direct cooling loads and indirect electricity-related water uses differ; local water scarcity and annual gross volumes are different dimensions of impact. WRI Aqueduct 4.0 provides a framework for assessing water-related risk across geographies [5], but it cannot tell us where a particular consumer request ran when the serving location is unknown. This project's geographic instrument deliberately leaves that information blank.

An honest visualization sometimes needs to show an **unknown** rather than a pin on a map.

[Interactive exhibit — Act 5: the physical footprint](https://chrisdhayes.github.io/the-cost-of-courtesy/#act-5)

## 7. Five practical frames for responsible design

The evidence suggests a design problem broader than manners. I use five connected frames to keep its implications practical, while labelling them as **my synthesis**, not validated empirical models.

**1. Intent-to-Inference Gate.** Before running costly inference, distinguish an actual request for work from a social signal. An interface might classify a clear acknowledgment as closure or offer a lightweight non-generative signal. False classifications, accessibility and user trust must be tested. The objective is not to silence people.

**2. Resolution Dividend.** Optimize for outcomes across the full attempt sequence: useful first-pass answers, necessary corrections, verified completion and severity-aware quality. Treat energy per verified resolution as a *candidate measurement goal*, not a number already established.

**3. Linguistic Double-Penalty Atlas.** Expose how efficiency and quality differ across languages under comparable tasks and measurement boundaries, with explicit warning labels for incomplete, strict and lenient evaluation. Use this as an equity diagnostic, not a ranking of communities.

**4. Two Geographies of Intelligence.** Separate user location, serving facility location, electricity mix and water-risk context. When a link in that chain cannot be verified, preserve the uncertainty rather than drawing a plausible-looking route.

**5. Human–Machine Design Boundary.** Keep decisions about the degree of delegation, interaction style and computational effort in a human-governed product design. A model can help interpret a request; product owners must define when a response is needed, what quality means, which errors deserve escalation and what evidence permits the system to act.

An applied example makes the distinction concrete. An advisor might ask an assistant to prepare for a client meeting. A short answer that omits a material suitability consideration can be much more costly than a careful, slightly longer response; an acknowledgment after the meeting-prep answer is completed has different value again. That does **not** establish empirical savings for wealth-management workflows. It illustrates why task stakes and human authority should shape the evaluation.

The system should be designed to recognize **when it has completed its work**.

## 8. What would actually prove a better design?

It would be premature to declare that silent closure or lightweight acknowledgments are universally superior. A credible next experiment would randomly assign eligible completed-task interactions to different closing designs while preserving explicit user requests for further help. It would capture:

1. Whether users understand that the task is complete, including accessibility and multilingual comprehension.
2. Whether they reopen, repeat or escalate the conversation.
3. The number of model calls and actual energy within an explicitly stated serving boundary.
4. Verified task completion and quality, including severity of errors.
5. Latency, satisfaction and other human outcomes—not only computation saved.
6. Distribution of effects across language groups, task types and usage contexts.

Prerequisite decisions include consent, logging minimization, safety exclusions and clear stop rules. High-stakes interactions should not be routed solely by an unvalidated gratitude classifier.

This design could adjudicate the central question: can an interface **preserve human expression while avoiding computation that adds little value**? The existing literature motivates the test. It does not supply its answer.

## 9. Scientific and information-design limitations

This project was built as a **structured cross-study synthesis**, not an exhaustive systematic literature review. Study selection was purposive. No raw H100 energy records were independently acquired or re-measured, no original production prompt traces were obtained, and no harmonized individual-level dataset links energy, response quality, retries, facility site and water accounting. The source-specific comparisons use different tasks, models, serving arrangements and metrics. Some supporting chart values are transparent calculations or model scenarios derived from published authors' results, not new observed facts.

That distinction is also a visual obligation. The interactive [Courtesy Constellation](https://chrisdhayes.github.io/the-cost-of-courtesy/#constellation) uses eight conceptual nodes and nine explicitly typed evidence relationships. Act 4's [Language Distance instrument](https://chrisdhayes.github.io/the-cost-of-courtesy/#language-distribution) provides a separate, source-specific distributional view, not another set of network edges. Hundreds of fine radial filaments provide a visual structure; they do **not** represent observation counts, causal effect sizes, measured distances or request routes. Solid source-specific links, interpretive links, gaps and design hypotheses are distinct.

If a reader cannot determine what was measured, what was calculated, what was interpreted and what remains unobserved, the visualization has not done its job—regardless of how polished it looks.

The methods and source-rights documentation distinguish original synthesis from externally licensed data. In particular, the selected MichiganNLP excerpt carries source-specific attribution and CC BY-SA obligations; full individual thank-you study records are not redistributed. See the project's [methods](../methods/METHODS.md) and [source attribution](../LICENSE_AND_ATTRIBUTION.md).

## 10. Conclusion: design the intelligence, not the manners

I began with a thank-you because it was small enough to make the question approachable. I stayed with it because it exposed the limitations of several metrics that organizations are increasingly tempted to treat as definitive.

A token is not an outcome. A reply is not a resolved task. A device-level watt-hour is not an environmental footprint. An average is not an equitable experience. And a social acknowledgment is not necessarily a request for more work.

The stronger design objective is **not simply to minimize computation**. It is to use computation proportionately, measure the quality of completed work, surface uncertainty instead of manufacturing certainty, and preserve the human meanings that make an interaction worth having.

I don't think people should have to abandon ordinary courtesy to make AI responsible. I think responsible AI should be capable of recognizing it.

---

## New evidence: courtesy has no universal model–language response

The [2026 PLUM study by Mehta, Saxena, Chhikara and Kumar](https://arxiv.org/html/2604.16275) adds a useful but methodologically distinct layer to this investigation. It evaluates 22,500 prompt–response pairs across five models (Gemini-Pro, GPT-4o Mini, Claude 3.7 Sonnet, DeepSeek-Chat and Llama 3), English, Hindi and Spanish, five conversational-prompt categories, and three prior-history conditions. The authors report an equally weighted **composite quality score (CQS)** derived from eight automated indicators, including coherence, clarity, depth, responsiveness, context adherence, toxicity, conciseness and readability. This is **not** a task-success rate, human preference estimate, correctness percentage or energy measurement.

The published Table IV gives sharply different within-model patterns. In English, GPT-4o Mini scores **0.636** for the direct bald-on-record category versus **0.567** for positive politeness; Claude 3.7 Sonnet instead reaches **0.626** for positive politeness versus **0.573** for positive impoliteness. For Hindi, Llama 3 scores **0.630** under negative politeness versus **0.506** for positive politeness. In Spanish, DeepSeek-Chat scores **0.643** for positive impoliteness versus **0.583** for positive politeness. Those are associations in the authors' design, not rules for better human conduct, recommendations to be rude, or guarantees of superior answers on real tasks.

Conversation history is a second dimension, not something we can reconstruct by multiplying the paper's marginal tables. In Table V, English Llama 3 scores **0.639** after polite history and **0.578** after impolite history. Yet in Hindi DeepSeek-Chat records **0.582** after impolite history versus **0.565** after polite history. The effect changes across model and language. Our interactive **[Courtesy Response Matrix](https://chrisdhayes.github.io/the-cost-of-courtesy/#courtesy-response-matrix)** lets readers inspect each published mean by category or history, separately, preserving this important distinction.

### What this does—and does not—establish

The contribution is not a universal instruction to say *please*, avoid *please*, or become abrasive. It is a challenge to treating social tone as a uniform parameter of computation. A model's apparent response to a prompt depends on the language and task design, its conversational context and the evaluation instrument. As a secondary synthesis, we should resist assigning causality to individual numerical cells or inferring that the reported CQS differences translate directly into accuracy or user value.

The PLUM preprint offers human-validated prompts, but its cross-linguistic comparison still depends on the validity of automated scoring pipelines. Notably, language-sensitive readability and English-focused automated evaluators can distort comparisons; the eight-factor equal weighting is an analytical choice, not a universally agreed objective function. It is also a preprint rather than independently replicated production-system evidence. Consequently we retain the exact source scores and do not normalize the exhibit into a new, supposedly scientific universal courtesy index.

## Another distinction: language-related computation varies by model

The [Deng et al. EMNLP 2026 study](https://aclanthology.org/2026.emnlp-main.2113/) provides a source-controlled twelve-language cross-model table distinct from its full 122-language Qwen3–8B experiment. The new [Multilingual Energy Matrix](https://chrisdhayes.github.io/the-cost-of-courtesy/#language-energy-matrix) compares measured **joules per output token** for Qwen3–8B, Qwen3–14B and Llama 3.1–8B. In this table, Pashto is **0.774**, **2.041** and **0.230 J/token**, respectively; Shan is **1.080**, **2.731** and **1.179 J/token**. The Qwen3–14B Tibetan value **2.900 J/token** is source-censored and is explicitly marked in the exhibit.

A model-level language cost cannot be inferred from national electricity grids, and J/output token is not total J/request. The energy exhibit therefore cannot be directly joined to PLUM's model–language courtesy outcomes: the models, tasks, datasets, metrics and measurement settings differ. **The interaction surface is multilingual; the cost surface is model-dependent; the evidence surfaces are not yet a common experiment.** The research opportunity is to design a factorial experiment measuring language, culturally validated politeness categories, model version, success, generation length, hardware energy and history together.

### An emerging research question: equitable resolution efficiency

A linguistically disadvantaged user may face two distinct burdens: extra inference resources for the same visible unit of output, and a lower probability of a correct or useful completion. We cannot quantify a joint penalty from these two studies. A responsible future metric would use **verified task-resolution energy conditional on language and model** alongside success probability, latency and error costs. This would test whether a shorter, apparently cheaper response actually delivers greater human value or merely shifts the cost to retries and human correction.

**Editorial interpretation:** The duty of courtesy should not be shifted from people to an imagined efficient style. The design duty is to build systems that can recognize closure, perform robustly across linguistic communities, measure useful outcomes and explicitly account for disparate computational burdens.

### New source notes

6. Mehta, H., Saxena, A., Chhikara, G., & Kumar, R. (2026). *No Universal Courtesy: A Cross-Linguistic, Multi-Model Study of Politeness Effects on LLMs Using the PLUM Corpus*. arXiv:2604.16275, version 1, 17 April 2026. Tables IV and V: https://arxiv.org/html/2604.16275. Preprint and automated composite-quality evaluation; no reported energy measurements.
7. Deng et al. (2026). *The Language–Energy Divide*. EMNLP. Twelve-language cross-model comparison: https://github.com/MichiganNLP/language-energy-divide/blob/master/results/cross_model_12lang_table.csv. One source-censored Qwen3–14B Tibetan value.


## References

1. **Delavande, J., Pierrard, R., & Luccioni, S.** (2026). *Small Talk, Big Impact: The Energy Cost of Thanking AI*. arXiv. https://arxiv.org/abs/2601.22357. See also the [authors' measurement explainer](https://huggingface.co/blog/jdelavande/thank-you-energy).
2. **Andruccioli, M., Delnevo, G., Mirri, S., & Salomoni, P.** (2026). PromptTone: A Dataset for Evaluating Large Language Model Code Generation Under Varying Prompt Politeness Levels. *Data, 11*(4), 88. https://doi.org/10.3390/data11040088. Associated dataset: https://doi.org/10.5281/zenodo.19224813.
3. **Deng, N., Shen, A., Feng, Y., Nwatu, J., Chung, J.-W., Chowdhury, M., Chen, Y., & Mihalcea, R.** (2026). The Language–Energy Divide: Measuring Energy Costs of Multilingual LLM Inference. *Proceedings of EMNLP 2026*, 48057–48075. https://doi.org/10.18653/2026.emnlp-main.2113. [Project and methods](https://github.com/MichiganNLP/language-energy-divide).
4. **Elsworth, C., et al.** (2025). *Measuring the environmental impact of delivering AI at Google Scale*. arXiv. https://arxiv.org/abs/2508.15734. [Google Cloud methodology overview](https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference).
5. **World Resources Institute.** (2023; ongoing updates). *Aqueduct 4.0 Current and Future Global Maps Data*. https://www.wri.org/data/aqueduct-global-maps-40-data. [Aqueduct licensing and attribution FAQ](https://www.wri.org/aqueduct/faq).

**Author's disclosure:** The arguments, frameworks and interactive visualization are my synthesis of published evidence. I have not run new LLM energy experiments, performed a systematic evidence review, or independently replicated all source datasets. Deep links into the interactive exhibit depend on GitHub Pages deployment being enabled.