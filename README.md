# The Cost of Courtesy

### The Living Constellation · Interactive research experience · V1.3

**What does it cost when we say “thank you” to AI—and is that the right question?**

A six-act, evidence-linked investigation into how everyday human communication becomes machine work, how that work relates to useful outcomes, and why its environmental consequences are harder to measure than a token count suggests.

**[Explore the interactive experience](https://chrisdhayes.github.io/the-cost-of-courtesy/)** · [Research methods](methods/METHODS.md) · [Sources and attribution](LICENSE_AND_ATTRIBUTION.md) · [Latest release notes](RELEASE_NOTES_V1_3.md)

> **The argument:** The cost of a conversation is not determined by the words alone. It depends on how systems interpret them, the work they perform, the value they create and the resources they consume.

![A preview of the Courtesy Constellation, an interactive radial evidence network](previews/desktop_act2_v13.png)

*The Courtesy Constellation is a conceptual evidence map. The fine radial filaments are an artistic structural motif—not individual data records, statistical distances or measured causal links.*

## Why this exists

A short acknowledgment can trigger a new model response. Politeness inside a substantive request, however, can influence the length and usefulness of the answer in ways that differ across models and tasks. And a model's energy consumption is not automatically a measure of its water footprint or of a completed task's value.

The project puts these otherwise separate findings in conversation with one another **without treating them as a single experiment**. It is a secondary synthesis of published research, not an original trial or a universal estimate of ChatGPT's environmental impact.

## Follow the story

| Act | Question |
| --- | --- |
| **01 — Two words** | What happens when a thank-you generates another response? |
| **02 — The contradiction** | Why might courtesy add work in one setting but affect output length in another? |
| **03 — The value question** | Is the shortest answer necessarily the most useful or efficient? |
| **04 — The language divide** | Why can model efficiency and evaluation results vary across languages? |
| **05 — The physical footprint** | Where do electricity and water impacts actually arise? |
| **06 — The design choice** | What should responsible AI systems do differently? |

Use **Guided Story** to follow 15 scroll-driven evidence checkpoints, **Explore** to inspect the full radial Constellation and supporting instruments, and **Evidence & Methods** to examine measurement boundaries and limitations. Source-linked evidence receipts explain what is measured, derived, inferred or still unknown.

### Three linked visual instruments

- **The Courtesy Constellation:** an eight-node conceptual network with nine typed research relationships. Relationship styles distinguish within-study evidence, interpretation, evidence gaps and design proposals.
- **Resolution Signal Plate:** published hardware energy components, explicitly *modelled* GPU sensitivity scenarios and PromptTone output-length comparisons, shown in their own units.
- **Geography of a Thank You:** environmental accounting context without inventing the route, serving region or data centre used by any individual request.

## Evidence and scientific boundaries

| Source | What it supports | Important boundary |
| --- | --- | --- |
| [Delavande, Pierrard & Luccioni (2026), *Small Talk, Big Impact*](https://arxiv.org/abs/2601.22357) | Reported **0.245 Wh** average total hardware energy per generated thank-you response in a specific Llama 3.1–8B / H100 setup | Not a universal ChatGPT figure; GPU/CPU measured and RAM estimated using the study's method |
| [Andruccioli et al. (2026), *PromptTone*](https://doi.org/10.3390/data11040088) | Model-dependent differences in mean *generated code characters* under different prompt tones | Characters are not tokens, electricity or proven task completion |
| [Deng et al. (2026), *The Language–Energy Divide*](https://aclanthology.org/2026.emnlp-main.2113/) | Language-dependent energy and evaluation outcomes, including strict versus lenient accuracy | Not a test isolating politeness; this project uses a selected excerpt, not all 122 languages |
| [Elsworth et al. (2025), Google-scale inference measurement](https://arxiv.org/abs/2508.15734) | Published production energy and cooling-water estimates | Not measurements of the thank-you experiment; the numbers must not be fused |
| [WRI Aqueduct 4.0](https://www.wri.org/data/aqueduct-global-maps-40-data) | Environmental water-stress context | No request-level infrastructure location or site-specific water burden is claimed |

The project uses **measured → derived/modelled → interpreted** labels and documents evidence relationships in [`data/research_relationships.json`](data/research_relationships.json). Additional primary sources and terms are listed in [LICENSE_AND_ATTRIBUTION.md](LICENSE_AND_ATTRIBUTION.md).

**What this experience does not claim:** a single causal effect of politeness on AI energy; verified energy per successfully resolved task; real-world routing of a user's prompt; universal national or cultural rankings; or independently replicated raw results for all cited studies.

## Run the project

**Online:** The [GitHub Pages experience](https://chrisdhayes.github.io/the-cost-of-courtesy/) uses `index.html`, `app.css`, `radial_engine.js`, `app.js`, `story.js` and the `data/` directory. The Pages URL works after GitHub Pages is enabled for `main` → `/(root)`.

**Offline:** Open `standalone.html` in a browser. That version embeds the visual code and source extracts in one file.

**Local development:** Serve the repository over a local HTTP server (rather than opening modular `index.html` with `file://`):

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

```text
index.html                 GitHub Pages entry point
standalone.html            Self-contained offline edition
app.css / app.js           Interface and analytical interactions
radial_engine.js           Radial evidence architecture
story.js                   Scrollytelling states
 data/                     Source-linked research extracts and relationships
 methods/                  Methods, QA, scientific boundaries and design rationale
 previews/                 Project screenshots
LICENSE_AND_ATTRIBUTION.md Rights and research credits
RELEASE_NOTES_V1_3.md      Current release changes
```

## Reuse, licenses and attribution

**Research synthesis and original visual design:** Christopher Hayes, CDAIO · 2026.

This repository mixes original writing/code with **third-party research excerpts that may have different licenses**. In particular, selected MichiganNLP rows are adapted from [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) data and must retain attribution and applicable ShareAlike conditions. PromptTone is cited with the paper's identified CC BY 4.0 dataset license; no full third-party PromptTone dataset is redistributed. The independently hosted thank-you measurement records are not redistributed here while their separate reuse terms remain unresolved. See [LICENSE_AND_ATTRIBUTION.md](LICENSE_AND_ATTRIBUTION.md) before reusing or redistributing any component. No blanket open-source license for all repository contents is implied.

## Quality and publication status

V1.3 is a **research-led interactive release candidate**. Its 15 checkpoints and evidence-link controls were tested in four Chromium viewport emulations, including keyboard selection and return from Explore mode. See [QA details](methods/QA_V1_3.json) and [testing notes](methods/TESTING.md).

Not yet certified: full WCAG conformance, Safari/Firefox, physical-device field testing, an independent academic review or complete replication of all underlying raw datasets.

## About the project

Created by **Christopher Hayes, CDAIO** as an exploration of applied data science, evidence synthesis, data visualization, human-centred information design and responsible Data & AI leadership. Wealth management appears as a secondary applied example; the central research question extends across industries.

**The question worth keeping:** Should people have to change how they communicate to make AI more efficient—or should we design systems that understand human communication while using computation more responsibly?