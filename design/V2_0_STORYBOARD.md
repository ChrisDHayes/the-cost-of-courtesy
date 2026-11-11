# The Cost of Courtesy — V2.0 narrative storyboard
**Status:** Proposed, reviewable design blueprint; not implemented  
**Design decision register:** S01–S07 accepted, November 11, 2026  
**Protected baseline:** V1.5.1 — existing index.html, research data, charts, source IDs, and published URL remain unchanged.

## Editorial premise

**Opening question:** What happens when an ordinary human goodbye becomes another task for a machine?

**Thesis, revealed rather than announced:** Courtesy is not a fixed computational expense. Its consequences depend on how an interface interprets intent, how models respond, what the task achieves, which languages are served, and where inference happens. The responsible design objective is not to make people less polite; it is to make systems more discerning about when work is useful.

**Narrative promise:** A reader who starts by asking "Should I stop saying thank you?" should finish asking "Who designed the system to respond, how do we know that response helps, and for whom does the design work?"

**Voice:** Personal and observant before technical; precise, evidence-conscious and occasionally reflective. First-person voice is present at the opening and closing and at the moment of the author's discovery, not used to invent reported research or fictional experiences. No playful guilt about politeness, no moral scolding.

## Story architecture

The six acts remain, but the current 15 short checkpoints become **approximately 12 meaningful visual reveals** embedded in substantial paragraphs. An act may contain two or three visual changes without requiring a full-viewport pause for each. The default reading experience is a story; Explore remains a separate, complete investigative mode.

| Section | Reader's question | Emotional movement | Dominant visual | Exit question |
|---|---|---|---|---|
| Prologue | Why would a thank-you matter? | Recognition → curiosity | One chat message, a pause | What did the machine hear? |
| Act 1 · Two words that don't mean the same thing | Where did the extra work come from? | Surprise → understanding | Conversation becomes a restrained computation trace | Is polite wording always the same kind of intervention? |
| Act 2 · Does being polite actually change the answer? | Does tone help, and for whom? | Assumption → complication | One highlighted pair → model–language courtesy matrix reveal | Is a shorter answer a better outcome? |
| Act 3 · The cheapest answer isn't always the best one | What should we optimize? | Doubt → reframing | Two hypothetical task pathways, then complete-attempt view | Who benefits from an average? |
| Act 4 · Not every language gets the same deal | Does everyone receive equal quality and effort? | Statistical surprise → concern | 122-point language atlas → median/mean → linked accuracy | Where does this effort happen? |
| Act 5 · Where does the computation go? | Can we place the environmental burden? | Certainty → humility | Infrastructure boundary diagram with deliberately unknown location | Could the interaction itself be redesigned? |
| Act 6 · Should we change our manners—or our machines? | Who gets to decide when AI speaks? | Agency → reflection | Three completion designs → original thank-you returns | What constitutes a useful reply? |
| Epilogue | What remains unresolved? | Clarity → invitation | Human message restored, quiet space | Explore the evidence or carry the question onward |

### Pacing specification

- Prologue: 90–140 words, one meaningful visual.
- Acts 1–6: target 150–230 **narrative** words per act, excluding on-demand evidence and labels. This is guidance, not a minimum to fill.
- Typical act: introduction (2–4 sentences), one or two discovery passages, a plain-language interpretation, a forward-driving question.
- Only **~12 substantive transitions** across six acts. Scrolling should not require repeated full-screen blank padding to reveal a single 25-word paragraph.
- Preserve silence after consequential findings: a visual can hold for a moment without a new control or label.

## Prologue — The smallest human gesture

**Headline:** Two words. Another response.

**Proposed copy (reader-facing):**

You've just finished asking an AI assistant for help. Maybe it explained something you didn't understand, helped you write a difficult message, or solved a small problem that had been on your mind.

You type two familiar words.

**Thank you.**

To another person, those words often mean the conversation is over. No more work is being requested. You're simply acknowledging the help.

But an AI chat can treat them as the start of another turn. More text appears. Behind that small reply, a system may have processed the conversation again.

That's the puzzle behind this investigation. Is the problem our manners—or the way we've taught machines to respond to them?

**Visual / interaction notes:** An uncluttered, full-width chat vignette. The human message appears; after reader-initiated scroll, a very restrained reply outline and a fine computational thread appear. Do not invent a numerical energy meter. No citations or methods labels in the first screen. Optional accessible "Read this scene" label describes the visual without requiring animation.

**Hand-off:** "To answer that, we need to follow the work."

## Act 1 — Two words that don't mean the same thing

**Core insight:** A thank-you after completion is not automatically another request for content.

**Reader-facing draft:**

Most of us don't think of a conversation as a string of computing tasks. We think of it as an exchange of meaning. A question asks for help; an answer tries to provide it; a thank-you often tells the other person the exchange is complete.

A chat interface has a different responsibility. It receives another message and must decide what to do with it. One possible behaviour is to generate another answer, even though the person may not have wanted anything more.

Researchers measured this behaviour in a specific experiment using Llama 3.1–8B and an H100 GPU. A generated response to a thank-you averaged about **0.245 watt-hours** across their reported GPU, CPU and estimated memory components. That is a real measurement in that setup. It is not the universal energy cost of thanking ChatGPT.

What matters here is the mismatch: an ordinary gesture of closure can become another round of machine work. The response might be welcome. It might also be unnecessary. The study measures what happened when the system replied; it doesn't settle which design people would prefer.

**Visual beats:**
1. **Meaning / action fork:** Left: "I was saying we're done." Right: "The system may generate another answer." Two paths; no default moral judgement.
2. **The measured response:** 0.245 Wh grows from the observed response event. A small contextual label reads "One Llama/H100 study; mean for generated replies." An optional "How was that measured?" opens the evidence layer.

**Transition:** "But the word 'polite' hides more than one behaviour."

**Evidence contract:** Source R01 / Delavande et al. No comparison to facility water consumption. Clearly distinguish GPU and CPU measurement from RAM estimation.

## Act 2 — Does being polite actually change the answer?

**Core insight:** Politeness within an existing request and a stand-alone thank-you are different interventions; model response quality is conditional.

**Reader-facing draft:**

There's a second kind of courtesy we use almost without noticing. We don't say thank you after the work is finished. We say **please** while asking for the work itself.

That doesn't necessarily add a new task. It may change how an answer is written, how much detail a model gives, or how an automated evaluation scores the result. And it turns out there isn't one reliable rule for every model and language.

In a 2026 preprint, researchers compared response scores from five language models in English, Hindi and Spanish. In the study's English results, GPT-4o Mini scored **0.636** for a direct request and **0.567** for a positively polite request. Other models and language conditions showed different patterns. Earlier conversational tone mattered too.

That doesn't mean directness is the "best" way to speak to AI. These are study-defined, automatically calculated composite scores—not universal measures of correctness or human satisfaction. But they challenge a simple belief: that being more polite always produces a better answer, or always makes it worse.

The question is no longer "Is politeness good for AI?" It's "Good for which model, in which language, doing what task—and according to whose definition of good?"

**Visual beats:**
1. **Not the same experiment:** Split a thank-you after completion from a polite prompt *inside* a task. Animate only the distinction, not invented cost savings.
2. **One contrast first:** Reveal two observed English GPT-4o Mini composite scores with prominent wording "Study-defined response score". Explain the values before showing other cells.
3. **The pattern expands:** The background transitions to a lightly annotated 5 × 3 matrix. Highlight only a few grounded differences; a "Compare all conditions" link opens the complete Act 2 matrix in Explore, preserving its switches for prompt category vs conversation history.

**Transition:** "Even if a model writes less, have we actually saved anything?"

**Evidence contract:** PLUM preprint, Tables IV and V, separate aggregate cuts. Do not synthesize joint prompt-tone × conversational-history cells or translate score into accuracy, energy or causality. PromptTone's Italian coding result may appear as an optional secondary disclosure, never confused with PLUM.

## Act 3 — The cheapest answer isn't always the best one

**Core insight:** We need outcomes across an entire task, not just a small first reply.

**Reader-facing draft:**

Imagine asking two assistants to help you prepare an important message.

The first gives you a very short answer. You notice that it misses something essential. You ask it to try again. Then you ask for one more correction.

The second takes a little longer to answer, but the first response is useful. You're able to move on.

Which assistant was more efficient?

We can't know from the length of the first answer. The shorter one might have used less energy *at first* while causing more work across the full conversation. The longer one might have prevented rework. Or not. To know, we'd have to measure the complete interaction and check whether the task was successfully resolved.

That is the measure I think matters most: **resources used for a verified, useful result**. We don't yet have a common dataset that makes this calculation across the studies in this experience.

Efficiency without an outcome is a partial story. In high-stakes work, a technically cheap wrong answer could be a very expensive mistake.

**Visual beats:**
1. **First answer:** Two hypothetical message pathways shown with equal visual prominence; clearly stamped "Illustrative example—not experimental data." Avoid fabricated numerical energy bars.
2. **Whole task:** Expand the paths to show corrections and a verified completion marker. The visual headline changes from "Shortest reply?" to "Useful resolution?" but does not declare which path is empirically more energy efficient.

**Transition:** "And a single average can hide another uncomfortable difference: who gets the better outcome?"

**Evidence contract:** Editorial thought experiment, not measured comparison. Proposed "energy per verified resolution" is a candidate evaluation metric, not a published result.

## Act 4 — Not every language gets the same deal

**Core insight:** Aggregated language efficiency and evaluation quality can differ; model and scoring decisions matter.

**Reader-facing draft:**

An average is reassuring because it's simple. It suggests there is one typical experience.

But people don't all use an AI system in the same language, and models don't always spend the same computational effort producing their answers.

In one published benchmark of 122 language conditions using Qwen3–8B, the **median** energy per generated token was about **0.132 joules**. The **mean** was about **0.173 joules**—roughly 31% higher. A relatively expensive tail was pulling the average upward.

When the researchers examined benchmark accuracy, another complication appeared: the way an answer was scored could change its apparent success. Some languages could involve more computation without reliably better benchmark results. That's a reason to investigate equity, not to label a language or its speakers as inefficient.

And the picture changes with the model. In a separate twelve-language comparison, the same language can have a very different per-token energy value depending on which model serves the request.

If we optimize AI only for the average case, whose experience becomes invisible?

**Visual beats:**
1. **All 122 belong:** Each published language condition has a unique visible point, with discoverable name and value. Introduce one mark per record before the reader sees axes or a legend.
2. **Mean versus median:** Reveal both reference lines and label the skew. In the default story, do not overload with accuracy, tokens and a language list simultaneously.
3. **Two careful windows:** Reveal a small accuracy companion strip and a grounded two- or three-row slice of the separate three-model energy matrix, clearly marked *different study setup*. An additional optional example of French strict/lenient scoring may appear under "How was accuracy judged?" rather than as a startling unqualified headline.

**Transition:** "Even when we can measure the work, we can't always tell where it happened."

**Evidence contract:** Deng et al. (EMNLP 2026); 122 Qwen3–8B language aggregates and separate 12 × 3 comparison. Energy per output token is not total request energy. No joining to PLUM. Source-censored Tibetan Qwen3–14B value remains flagged only in full matrix.

## Act 5 — Where does the computation go?

**Core insight:** The physical consequences depend on infrastructure and measurement boundaries, and request-serving location is generally unknown.

**Reader-facing draft:**

We call it the cloud, as though the work has floated away from the physical world.

But every generated response depends on real equipment, electricity and, in some settings, water used in cooling or power production. Those consequences don't necessarily happen where the person typed the question.

This creates a difficult gap in the story. We may know the language of a prompt. We may know something about the hardware in a published study. But for an ordinary consumer conversation, we usually can't verify the specific facility that served the request.

Two reported energy figures look strikingly close: about **0.245 Wh** for generated thank-you replies in the Llama/H100 experiment, and **0.24 Wh** for a separate median Gemini Apps text prompt in a Google-scale analysis. The latter study also reported a water estimate under its own accounting method.

Those figures aren't interchangeable. They refer to different workloads and measurement boundaries. Borrowing a water number from one and attaching it to the other would turn uncertainty into false precision.

Sometimes the most truthful thing a visualization can show is what we do **not** know.

**Visual beats:**
1. **Two places, not a route:** A human on one side and an unknown serving-location area on the other. No fabricated data-centre dots, traffic route or geolocated inference arrows.
2. **Two measurements, two boundaries:** Side-by-side source cards that visually keep hardware-response and Google-scale production estimates separate. Water stays only with its source and scope. An "About water accounting" disclosure explains the boundaries.

**Transition:** "If a response isn't automatically required, the design itself becomes the next decision."

**Evidence contract:** Delavande et al. vs Elsworth et al.; don't imply 0.26 mL applies to the H100 thank-you observation. Separate water withdrawal, consumption and local scarcity.

## Act 6 — Should we change our manners—or our machines?

**Core insight:** Closing an interaction is a product design decision; optimization needs verified quality and human meaning.

**Reader-facing draft:**

After all these comparisons, it's tempting to look for one new rule of etiquette: use fewer words, skip the thank-you, be direct.

I don't think the evidence supports that conclusion.

The difficult question belongs partly to the people designing AI systems. When a person says thank you, should the assistant write another full reply? Would a lightweight acknowledgment be enough? Could it quietly recognize that the task is complete? Different contexts—and different people—may need different answers.

Those possibilities aren't proven energy savings. An ignored acknowledgment could confuse someone and create more work. A longer reply could add genuine value. A well-designed system would have to test comprehension, accessibility, task completion, rework and actual resource use.

The point isn't to make people communicate less naturally. It's to build systems that understand more about the work they're being asked to do.

Return to the words that started this story.

**Thank you.**

They were never a universal instruction to compute. The decision about what should happen next is something we can design—and evaluate.

**Visual beats:**
1. **Three possible endings:** Generated reply, lightweight acknowledgment, quiet closure. Clicking one reveals a *trade-off*, never a fabricated environmental score or a "winner".
2. **Return to the first message:** The chat bubble from the prologue returns unchanged. The visual reveals the system's decision boundary—what response would add value and how would we know?
3. **Epilogue invitation:** "Go behind the findings" leads to Explore; "Read the research" leads to the essay. This is an invitation, not another full-screen control panel.

**Evidence contract:** Three design alternatives are hypotheses requiring comparative, ethical, multilingual UX/energy studies. Default interface must not silently dismiss genuine requests for support or closure when they are not confidently identified.

## Narrative microcopy / vocabulary rules

| First encounter (story language) | Optional evidence-layer term |
|---|---|
| When a message becomes another task | Intent-to-Inference Gate |
| What does a useful answer cost? | Energy per verified resolution / Resolution Dividend |
| Some languages require more work | Multilingual inference energy distribution |
| The scoring rule changes the picture | Strict vs lenient benchmark accuracy |
| An average hides the expensive tail | Mean, median, skew, outliers |
| A study-defined response score | Composite Quality Score (CQS) |
| Energy for each piece of generated text | Joules per output token |
| We don't know where this request ran | Serving region unobserved |
| One result is incomplete | Source-censored run |

Rule: define a technical term in plain English the first time it is necessary; otherwise leave the jargon in Layer 2 or 3. Limit visible evidence classification to one unobtrusive disclosure per finding.

## Research integrity / permitted visual storytelling

- Never use fictional scenes as if they are recorded user events or real experiments.
- Never infer individual users' nationality, capability or politeness from a language condition.
- Never claim the 122-language cohort covers all global languages or that every language has measurements for every model.
- Never use a visual comparison to imply energy has been measured as a function of PLUM politeness conditions.
- Every quantitative annotation must be tied to its original source and unit, even if the detailed citation appears one layer deeper.
- Honest negative space is allowed: unknown facility, unknown task success, unknown cost of alternative closings.

## Review checkpoints prior to coding

**Gate A — Copy:** Read aloud. Can a general reader explain the difference between a thank-you after completion and politeness inside a request? Does each act change the reader's understanding? Is any passage repeating the intro?

**Gate B — Visual storytelling:** High-fidelity prototypes for the prologue, Act 2 and Act 4. A reader should understand the primary finding before activating Explore or evidence disclosures.

**Gate C — Evidence:** Research reviewer checks every number and caveat against the existing source registry; no experimental facts invented to improve the narrative.

**Gate D — Design:** Compare desktop and phone storyboards side by side, including keyboard and reduced-motion alternatives.

**Next deliverable after approval:** Implement V2 on a new branch; keep the fully verified V1.5.1 HTML, research essay, Substack draft and data untouched until an explicitly approved release.
