# The Cost of Courtesy: When “Thank You” Becomes Machine Work

*Two ordinary words led me to a much bigger question about AI: what are we optimizing, and for whom?*

I started with a question that sounded almost ridiculous.

**Does saying “thank you” to an AI assistant have an environmental cost?**

I say thank you without thinking about it. Most of us do. It isn't a request for more analysis. It's a small acknowledgment: *you helped, and we're done.*

But a chat interface can read those same two words as another prompt. The model runs, a reply appears, and a social signal becomes a computational event.

**Human meaning, meet machine work.**

I followed that mismatch into the research. What interested me wasn't just the energy consumed by two words, but the assumptions hiding beneath the numbers.

## One measurable answer. Several unanswered questions.

In *[Small Talk, Big Impact](https://arxiv.org/abs/2601.22357)*, Delavande, Pierrard and Luccioni (2026) studied generated responses to thank-you messages. Under one specified Llama 3.1–8B/H100 setup, the average reply consumed approximately **0.245 watt-hours** across reported GPU, CPU and estimated RAM components.

That's a meaningful measurement. But it is not a universal figure for a ChatGPT thank-you, a full accounting of every data-centre impact, or proof that those extra replies are always unnecessary.

The study made me ask a more interesting question: **Why must an expression of closure become another computational event?**

[**Explore Act 1 — Two words**](https://chrisdhayes.github.io/the-cost-of-courtesy/#act-1)

## Politeness is not one thing

There's a difference between saying *thank you* after a task and saying *please* while asking for one. One may invite a new reply; the other changes how an existing request is framed.

The [2026 PromptTone study](https://doi.org/10.3390/data11040088) found model-dependent differences in the length of generated code under polite versus neutral prompts. In its particular Italian-language Vue coding tasks, polite prompts corresponded to slightly shorter mean code outputs for GPT and Gemini, but longer ones for Claude.

It measured **code characters**—not energy, not tokens, and not the value of a completed task. The results are useful precisely because they resist an easy generalization.

[**Explore Act 2 — The contradiction**](https://chrisdhayes.github.io/the-cost-of-courtesy/#act-2)

## Maybe we're optimizing the wrong denominator

Imagine two assistants. One gives a very short answer, but you correct it twice. The other offers a longer response, and you can proceed without a retry.

Which one was more efficient?

We can't tell from the first-response length alone. And I haven't conducted that experiment; it's an illustration of what we'd need to measure.

My proposed unit is **energy per verified, useful resolution**, not simply energy per generated reply. It would account for retries, quality thresholds and the consequences of getting a task wrong. We don't yet have a dataset here that can calculate it.

[**Explore Act 3 — The value question**](https://chrisdhayes.github.io/the-cost-of-courtesy/#act-3)

## The average hides who pays

Then I encountered *[The Language–Energy Divide](https://aclanthology.org/2026.emnlp-main.2113/)*. The researchers measured energy and accuracy across **122 languages**. I went to their [published per-language table](https://github.com/MichiganNLP/language-energy-divide/blob/master/results/belebele_canonical_Qwen3-8B_0shot.csv) and asked a simple question: *What changes when we show the distribution, rather than just an average?*

For that specific Qwen3–8B benchmark, the **median energy per output token was 0.132 joules**; the **mean was 0.173 joules**—roughly **31% higher**. A long, expensive tail was pulling the average away from the middle.

Then the accuracy results went in the other direction: **68.3% median versus 61.5% mean** under the authors' lenient scoring. Those statistics treat all 122 language conditions equally; they're not global usage averages or evidence that a language itself causes higher computing costs.

The uncomfortable possibility is a double penalty: **more computation, less reliable results**. But evaluation rules matter, too. In the source data, French's strict and lenient accuracy diverge dramatically because of formatting failures. What looks like a language capability issue can partly be an evaluation design issue.

That's why I've added a new interactive view to the project: **The Median Isn't Neutral**. It places all 122 languages around median and mean reference lines, then reveals energy and accuracy together—without inventing a composite fairness score.

[**Explore the new interactive language distribution**](https://chrisdhayes.github.io/the-cost-of-courtesy/#language-distribution) · [Follow Act 4 in the guided story](https://chrisdhayes.github.io/the-cost-of-courtesy/#act-4)

## The cloud isn't placeless

A separate [Google-scale study](https://arxiv.org/abs/2508.15734) reported approximately **0.24 Wh and 0.26 mL of water** for a median Gemini Apps text prompt under its full-stack accounting approach.

The apparent similarity between **0.24 Wh** and the thank-you experiment's **0.245 Wh** is tempting—and misleading. Different models, workloads and measurement boundaries. We cannot transfer Google's water estimate onto that Llama/H100 experiment.

We generally don't know which facility served any particular consumer prompt. Without that evidence, attaching its water impact to a specific community would be a guess, no matter how polished the map.

[**Explore Act 5 — The physical footprint**](https://chrisdhayes.github.io/the-cost-of-courtesy/#act-5)

## I don't think the answer is to stop saying thank you

The more I looked, the less I saw a manners problem.

I saw an **interface design and measurement problem**.

Can an AI system recognize the difference between a request and an acknowledgment? Can we test lighter-weight endings without pretending we've already proven their savings? Can we measure whether work was actually resolved, for whom, at what quality, and with what resource burden?

Those are questions about how we design intelligence.

I built **[The Cost of Courtesy — The Living Constellation](https://chrisdhayes.github.io/the-cost-of-courtesy/)** as a six-act interactive investigation. The radial network has a dense, expressive visual structure, but its evidence connections remain explicitly classified: published within-study findings, interpretation, unknowns and design hypotheses. Its decorative filaments are not disguised data.

[**Explore Act 6 — The design choice**](https://chrisdhayes.github.io/the-cost-of-courtesy/#act-6)

The question I keep coming back to isn't whether we should be less polite to machines.

**It's whether we can build systems that preserve human meaning while exercising better judgment about computation.**

I'd rather design for that future than ask people to be less human.

---

*Christopher Hayes, CDAIO · Applied AI research, evidence design and human-centred systems.*

**Research and sources:** [Read the full evidence-based essay](https://github.com/ChrisDHayes/the-cost-of-courtesy/blob/main/research/THE_COST_OF_COURTESY_RESEARCH_ESSAY.md) · [Methods and limitations](https://github.com/ChrisDHayes/the-cost-of-courtesy/blob/main/methods/METHODS.md) · [Attribution and source rights](https://github.com/ChrisDHayes/the-cost-of-courtesy/blob/main/LICENSE_AND_ATTRIBUTION.md)

*Draft for Substack, not yet published. The interactive chapter links require a successful GitHub Pages deployment. This article synthesizes published studies; it does not report original experimental measurements.*

**Suggested tags:** #ArtificialIntelligence #DataScience #HumanCentredAI #InformationDesign #AIGovernance