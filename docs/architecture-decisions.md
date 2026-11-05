# Daimler EHS architecture decisions — 2026-11-05

| Decision | Value | Status |
|---|---|---|
| LMS | SCORM 2004 | Confirmed, edition pending |
| Devices | Desktop, tablet, mobile | Confirmed |
| Accessibility | WCAG 2.2 AA | Target approved; verification pending |
| Completion/pass | No approved rule | Pending; intentionally not inferred |
| Scope | Daimler EHS course only | Confirmed |
| Package | Single SCO | Proposed pending LMS review |

## Phase 1 constraints

- Course data must be separate from UI presentation.
- Commands request state transitions; domain events represent completed transitions.
- Durable learning state may only change through the future application controller.
- SCORM writes are integration concerns; never claim simulated saves are LMS-successful.
- Safety-critical content needs approved sources and SME sign-off.
- Do not claim WCAG compliance without manual and automated tests.

## Remaining release gates

Confirm exact SCORM 2004 edition, LMS launch behaviour, completion and passing rules, retries, approved safety procedures and responsive/accessibility test evidence.
