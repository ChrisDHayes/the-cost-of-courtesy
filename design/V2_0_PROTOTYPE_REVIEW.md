# V2.0 Story-First Design Study — Prototype Review

**Status:** Three working slices ready for editorial/design evaluation; not a V2 production release  
**Reviewed:** 11 November 2026  
**Branch:** `v2-story-first-prototypes`; draft pull request #4, targeting the design-blueprint branch  
**Production baseline:** V1.5.1 remains unchanged on `main`.

## The prototypes

| Slice | What readers experience | Primary design test |
|---|---|---|
| A — Human moment | The opening “thank you” and one optional, explicitly illustrative AI response | Does the reader feel the mismatch before seeing a statistic? |
| B — Courtesy matrix | One grounded PLUM score contrast, then a progressive 5-model × 3-language Table IV matrix | Does the reader understand contingency without drawing a simplistic universal rule? |
| C — Language atlas | One point per 122 published language conditions → mean/median distribution → strict/lenient evaluation | Can a complex statistical result feel comprehensible and humane? |

## Acceptance decisions S01–S07, prototype status

- **S01 Story before evidence — implemented in slices.** All three default to human questions and prose before showing source control panels.
- **S02 Meaningful prose — implemented in slices.** Act text gives context, a particular observed or hypothetical contrast and a forward-driving question.
- **S03 Progressive evidence — implemented in slices.** Three native “How do we know?” disclosures preserve scope, limitations and direct sources; the complete V1.5.1 research studio is linked but not rebuilt into this prototype.
- **S04 One dominant visual per act — implemented as progressive scenes.** The full Act 2 matrix is hidden until requested; the 122-language figure changes stage without spawning separate competing dashboards.
- **S05 Plain English — implemented with residual depth where necessary.** Technical terms such as composite quality and lenient scoring are explained on first encounter and remain in optional details.
- **S06 Mobile-first — checked in responsive browser tests.** Native dropdown alternative to densely packed points; responsive type and cards; reduced-motion rules.
- **S07 Narrative closing loop — specified, not implemented.** The completed V2 Act 6 will revisit the initial chat message and present three completion designs as testable alternatives.

## Findings from the visual review

1. **Prologue / A:** The restrained orbital field and chat scene visually differentiate human meaning from possible machine work. The opening feels less like a methods page. Protect that restraint when adding future visuals.
2. **Courtesy / B:** The English GPT-4o Mini comparison (direct 0.636 vs positive politeness 0.567) has a clear source unit and a useful story beat before the larger 5 × 3 matrix appears. Keep the prompt-category and conversational-history analyses separate.
3. **Language / C:** All 122 source records render as discrete marks in the grid; the alternate distribution positions all 122 records without collisions, with independent median/mean labels. The selected-language detail makes access possible without hover. Use scoring examples as *evaluation critiques*, never statements about communities.
4. **Mobile:** The story is read vertically instead of behind an oversized sticky visual. Tables may scroll within their own clearly bounded instrument. Full-section automated screenshots are for review; the sticky navigation header has been hidden **only during screenshot capture**, not in the interactive site.
5. **Evidence:** Sources remain available when requested, with fewer persistent labels competing for attention. The original source registries, quantitative measurements and complete research essays remain outside this design-branch change.

## Verified functional checks

- **10 of 10** Playwright checks passed on [desktop and mobile Chromium](https://github.com/ChrisDHayes/the-cost-of-courtesy/actions/runs/43052822624) after correcting a test-only case-sensitive text assertion.
- Programmatic source/DOM inspection confirmed 39 unique HTML IDs, no broken internal fragment links or missing JS-targeted IDs, and syntax-valid JavaScript.
- All 122 language conditions and 15 PLUM cells per selected category preserved; a separate calculation verified the unweighted energy mean (~0.173014 J) and median (~0.131876 J), with no collisions among the distribution points under the plotting radius.
- Verified that branch/main blob SHAs for `index.html`, the existing research essay and original 122-language JSON are identical.
- Design sample is source-derived and makes no new experimental, causal or energy-from-politeness claim.

## Remaining review questions

**For the three prototypes:** Does the opening move too slowly, or is its quieter pace an improvement? Can every reader tell when a result is measured versus an illustration? Does the Act 2 chart make the source-defined CQS intuitively comprehensible? On a physical phone, is the 122-language point grid pleasant to use with its selector fallback? Does the attribution stay accessible without interrupting reading?

**For the complete V2:** How do Acts 3, 5 and 6 share the same visual grammar without becoming repetitive? Can the complete evidence studio be reorganized under Story / Explore / Sources without losing any current functionality? Can we restore article deep links and same-position return after exploring?

## Next phase, only after design review

1. Revise any prototype copy/visual treatment chosen during review.
2. Map the approved visual components onto Acts 3, 5 and 6, including the narrative return to the original thank-you.
3. Integrate a reusable V2 scene system and retained full Research Studio on a **separate** implementation branch.
4. Conduct source reconciliation, contrast and accessibility audits, desktop/mobile browser QA, physical-device review if available, and independent live deployment verification.
5. Promote V2 only after explicit approval; V1.5.1 remains the verified public baseline until then.
