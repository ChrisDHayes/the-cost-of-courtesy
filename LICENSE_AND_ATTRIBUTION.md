# Source attribution, research rights and analytical reuse

**Original interactive experience:** Research synthesis, prose, visual architecture and implementation prepared for Christopher Hayes, CDAIO (2026). Original code and original text are separate from any third-party source data; choose their explicit publication licenses before opening the GitHub repository for reuse.

## R01 — thank-you energy study
Julien Delavande, Régis Pierrard and Sasha Luccioni (2026), *Small Talk, Big Impact: The Energy Cost of Thanking AI*, https://arxiv.org/abs/2601.22357.
- The published core experiment reports mean 0.202 Wh GPU + 0.024 Wh CPU + 0.019 Wh RAM (estimated by their method) = 0.245 Wh total per generated thank-you response in their stated hardware context.
- Our 12 GPU-only scenario calculations reproduce arithmetic from the paper's **fitted equations** with illustrative token lengths. These are not newly observed results.
- The paper's own reuse status and the independently hosted raw-record dataset's terms must be checked separately. **No individual thank-you energy records or substantial copies of their raw measurement dataset are redistributed here.**

## R02 — PromptTone
Manuel Andruccioli, Giovanni Delnevo, Silvia Mirri and Paola Salomoni (2026), *PromptTone*, *Data* 11(4), 88, https://doi.org/10.3390/data11040088; dataset https://doi.org/10.5281/zenodo.19224813.
- The paper identifies **CC BY 4.0** for its dataset. We attribute and provide a link to the source.
- The three percentage differences in this project are arithmetic derived from the authors' published Table 5 **mean output characters**. These do not establish token or energy savings.
- We do not reproduce the complete code-generation dataset.

## R05/R06 — MichiganNLP
Naihao Deng and colleagues (2026), *The Language–Energy Divide*, EMNLP 2026: https://aclanthology.org/2026.emnlp-main.2113/. Dataset: https://huggingface.co/datasets/MichiganNLP/language-energy-divide.
- The dataset card identifies **Creative Commons Attribution–ShareAlike 4.0 (CC BY-SA 4.0)**: https://creativecommons.org/licenses/by-sa/4.0/.
- `data/michigannlp_selected_viewer_rows_NOT_FULL_DATASET.csv` and the corresponding selected records in `data/evidence.json` are a **source-attributed adaptation of 12 manually selected viewer rows**; they retain CC BY-SA 4.0 obligations and are not representative of the whole 122-language study.
- Modifications: selection of 12 source rows, renaming and omission of certain columns, presentation formatting and visual transformations. The selected excerpt does not imply the authors endorse this interpretation.
- The project's original interface code is distinct from the CC BY-SA adapted dataset; determine license boundaries appropriately before redistribution.

## R07 — Google production environmental methodology
Cooper Elsworth and colleagues (2025), *Measuring the environmental impact of delivering AI at Google Scale*: https://arxiv.org/abs/2508.15734. Google Cloud summary: https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference.
- The 0.24 Wh and 0.26 mL values are attributed **published production medians for Gemini Apps text prompts**. They are not measurements of a Llama/H100 thank-you and should not be combined into a synthetic per-request energy-water figure.
- No Google raw inference data or proprietary figures are copied.

## R08 — WRI Aqueduct
World Resources Institute, *Aqueduct 4.0 Global Maps*: https://www.wri.org/data/aqueduct-global-maps-40-data. WRI's licensing and registration requests should be observed for redistribution of maps or data.
- This exhibit **does not redistribute Aqueduct geospatial data or claim site-specific water stress**. It links the source to explain that physical geography is necessary for an attributable local-impact estimate.

## Other cited studies
References R03, R04 and R09–R13 are linked and identified in `data/evidence.json`. We cite research findings, not copied full papers, proprietary tables or embedded published diagrams.

## Use of the graphics
The network positions, visual grammar and conceptual flow are original explanatory design. They **do not encode statistical distance, observed request routing or an experimentally identified causal chain**. Source measurements and fitted model estimates carry distinct labels. No material from Depeche Mode or other musical artists was used in the exhibit.
### Act 4 — Data provenance (V1.4)
The full 122-row language distribution is derived without altering numeric source values from the canonical [Qwen3–8B / Belebele 0-shot CSV](https://github.com/MichiganNLP/language-energy-divide/blob/master/results/belebele_canonical_Qwen3-8B_0shot.csv) accompanying Deng et al. (EMNLP 2026). The [attributed JSON extract](data/language122_qwen3_8b_belebele.json) and [calculation rules](methods/METHODS.md) are published with the interactive. The author's model/experiment boundaries, upstream dataset license (**CC BY-SA 4.0**) and distinct code license (**Apache 2.0** in MichiganNLP's repository) should be preserved for reuse. These are not measurements of thank-you messages or worldwide language usage.
## V1.5 — source-bounded model–language matrices

**PLUM politeness matrix:** Mehta, H., Saxena, A., Chhikara, G., and Kumar, R. (2026), *No Universal Courtesy: A Cross-Linguistic, Multi-Model Study of Politeness Effects on LLMs Using the PLUM Corpus*, arXiv:2604.16275v1 (17 April 2026), https://arxiv.org/html/2604.16275. The response atlas transcribes the published aggregate CQS values in Tables IV and V (5 models × 3 languages × 5 prompt categories, and 5 × 3 × 3 history categories, respectively). No model responses or raw prompt corpus are redistributed. This is a preprint; the authors' automated equally weighted CQS is not human-evaluated success or energy. Preprint page states CC BY 4.0; verify redistribution terms before additional source data reuse.

**Cross-model energy matrix:** Deng et al. (2026), *The Language–Energy Divide*, EMNLP, https://aclanthology.org/2026.emnlp-main.2113/; twelve-language comparison CSV at https://github.com/MichiganNLP/language-energy-divide/blob/master/results/cross_model_12lang_table.csv. Values transcribed as published for Qwen3–8B, Qwen3–14B and Llama 3.1–8B; the Qwen3–14B Tibetan observation is source-censored. Underlying research repository/data license notices remain controlling; this matrix reports only brief attributed numerical observations and links to the source.

Do not merge PLUM CQS with cross-model joules per token or present the pair as a validated causal language–politeness–energy model. Their model, hardware, prompt, scoring and task boundaries are distinct.
