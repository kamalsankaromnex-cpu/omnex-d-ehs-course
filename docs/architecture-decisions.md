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

## Foundation audit and decisions

Preserved the existing React 19 / TypeScript 5.8 / Vite 6 / Vitest 3 / Zod 4
baseline; dependency compatibility is checked by locked installation and the build.
Use Node 22 and npm; commit the lockfile and remove the redundant write-enabled
lockfile bootstrap workflow. CI has read-only contents permission.

Command and event contracts are strict runtime schemas with inferred TypeScript
unions. Phase 1 only defines navigation requests and a successful course-load event;
there is no event bus, controller, scoring, or LMS write implementation. Unsupported
assessment commands were removed until their behavior is specified and implemented.

Application configuration explicitly disables LMS writes. Invalid course data renders
a controlled unavailable screen; startup and configuration validation use the central
logger. Log context accepts only course/slide/correlation IDs, not learner records.
Design tokens are neutral implementation colors, not approved Daimler branding.

State management, course graph references, templates, CSS Modules for engine layouts,
and browser/accessibility test coverage are Phase 2 work. Full WCAG conformance and
LMS certification are not established by foundation validation.
