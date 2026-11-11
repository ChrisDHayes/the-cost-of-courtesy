# V1.4 Browser and Mobile QA — Release Verification

**Project:** The Cost of Courtesy · The Living Constellation
**Release:** V1.4, integrated 122-language distribution
**Review date:** 11 November 2026
**Status:** **PASS for the automated browser/viewport checks documented below**. This is not a formal accessibility certification, third-party scientific replication, or physical-device field test.

## Outcome

**192 checks passed · 0 failed** on the GitHub-hosted QA workflow:

[GitHub Actions run 43005103583](https://github.com/ChrisDHayes/the-cost-of-courtesy/actions/runs/43005103583) · [Screenshots and JSON artifact](https://github.com/ChrisDHayes/the-cost-of-courtesy/actions/runs/43005103583/artifacts/13847144427)

The test runs against the **committed self-contained `index.html` served by a local HTTP server** within the GitHub runner. A separate deployment smoke test uses an HTTPS fetch of the **public Pages URL** and confirms the Act 4 `language-distribution` exhibit is present. GitHub Pages completed a successful deployment of the release changes.

## Browser and viewport matrix

| Engine | Mode | Viewport | Status |
| --- | --- | --- | --- |
| Chromium / Playwright | Desktop | 1440 × 900 | PASS |
| Chromium / Playwright | Large desktop | 1920 × 1080 | PASS |
| Chromium / Playwright | Tablet/touch emulation | 768 × 1024 | PASS |
| Chromium / Playwright | Mobile/touch emulation | 430 × 932 | PASS |
| Chromium / Playwright | Mobile/touch emulation | 390 × 844 | PASS |
| Chromium / Playwright | Small mobile/touch emulation | 320 × 700 | PASS |
| WebKit / Playwright | Mobile/touch emulation | 390 × 844 | PASS |
| Firefox / Playwright | Desktop | 1440 × 900 | PASS |
| GitHub Pages (public HTTPS) | Availability | Published URL | PASS |

**Note:** WebKit mobile emulation exercises the Safari browser engine, but **does not mean the site was tested on an actual iPhone or Safari mobile application**.

## Covered behaviours

- Main HTML loads without JavaScript exceptions; all six acts and 15 original checkpoints remain.
- Guided and Explore modes are reachable and switch correctly.
- Direct chapter/exhibit links (including `#language-distribution`) reveal the intended interactive view.
- Original 12-language illustration and new 122-language distribution initialize.
- Both 122-point energy and accuracy charts render; arithmetic mean and median values match canonical source-derived figures.
- Distance versus linked distribution toggle and strict/lenient/scoring-gap controls operate as designed.
- Language selection updates the source inspector; the French evaluation-format sensitivity example returns expected values.
- Theme toggle, methods panel open/close, source presentation structures and keyboard-focusable chart scrolling are verified.
- No **document-level** horizontal overflow was detected at the tested viewport widths. The energy and accuracy plots intentionally allow **region-level** horizontal scrolling on narrow screens.
- Mobile swipe guidance is visible and the Guided/Explore switch remains accessible at 320px.
- Chromium, WebKit and Firefox cross-engine smoke checks report no page errors.
- The live Pages HTTP response is 200 and its served HTML includes the Act 4 language-distribution exhibit.

## Issues found and resolved during QA

1. **QA runner compatibility:** GitHub's default runner had migrated to Ubuntu 26.04, unsupported by the pinned Playwright 1.56.1 browser installer. Pinned workflow to **Ubuntu 24.04**. This was test infrastructure, not an application error.
2. **320px navigation:** The original CSS hid the Guided/Explore control for screens narrower than 380px, blocking discovery of the primary Explore mode. Introduced a compact two-row header that keeps this control operable.
3. **Stale edition label:** The current V1.4 header still displayed `/ 1.3`. Corrected to `/ 1.4`.
4. **Horizontal-chart discoverability:** On compact phones the bubble charts need internal horizontal scrolling. Added visible swipe guidance, thin scrollbars and keyboard-focusable labelled plot regions.

## Reviewed visual artifacts

GitHub Actions saves per-viewport screenshots of the Guided opening and the interactive Act 4 instrument, plus WebKit mobile and Firefox desktop captures. The screenshots were reviewed for legible structure, non-overlapping primary controls, the new language bubbles, and responsive instrument behaviour.

The 320px and 390px versions are dense, and some plot axis labels remain small due to the intentionally information-rich chart. This is a **further readability/usability refinement opportunity**, not an error observed by the regression checks. The sticky compact header also occupies meaningful vertical space.

## Unverified / not claimed

- Physical iOS/Android device testing, real hardware touch responsiveness and browser chrome/safe-area behaviour.
- Safari desktop, alternate Android browsers, older browsers, and assistive-technology screen-reader field tests.
- Formal WCAG 2.2 conformance, complete keyboard-navigation audit or colour-contrast audit.
- External academic source URL availability under every user network/region.
- Independent replication of study measurements or scientific peer review of this project's new derived summaries.
- A controlled comprehension/usability study with representative readers or production performance monitoring.

## Reproducible testing

- [QA workflow](../.github/workflows/courtesy_browser_qa.yml)
- [Automated browser harness](browser_qa.mjs)
- [V1.4 release notes](../RELEASE_NOTES_V1_4.md)
- [Methods and evidence contract](../methods/METHODS.md)
- [V1.3 preserved baseline](../releases/v1.3/index.html)

The workflow runs on future pushes to `index.html`, `qa/browser_qa.mjs`, or the QA workflow definition, and can also be started manually.

**Conclusion:** V1.4 has passed a substantive multi-viewport, multi-engine automated regression check and a real HTTPS Pages availability smoke test. Remaining risks relate primarily to real-device and accessibility validation rather than defects surfaced by this automated suite.
