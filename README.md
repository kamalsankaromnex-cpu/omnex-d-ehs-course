# Daimler EHS eLearning

React + TypeScript + Vite foundation for the **Daimler EHS course only**. Development scaffolding, **not a completed or LMS-tested SCORM course**.

## Approved decisions

- SCORM 2004; exact edition remains to be confirmed by Daimler LMS owner.
- Responsive desktop, tablet and mobile.
- WCAG 2.2 AA target; compliance not yet tested.
- Completion / passing policy awaiting approval.
- Single-SCO packaging proposed, not approved.

## Development

Use Node.js 22 (`nvm use`) and npm 10 or later:

```sh
npm ci
npm run dev
npm run build
npm run test
```

## Repository workflow

Work in feature branches and submit pull requests to `main`. Never commit `dist/`, `.env` files, unapproved assets, learner data or secrets.

See `docs/architecture-decisions.md`. Next: course graph, application controller, tests, SCORM 2004 adapter and WCAG validation.

## Foundation boundaries

The baseline contains metadata validation, typed command/event schemas, central logging,
validated application configuration, and a responsive shell. It does not yet load a
course graph or execute navigation commands. Section reference resolution belongs to
Phase 2; an empty section list is valid for this foundation preview.

The technical architecture v1.1 document was not found in this checkout. The schema
version marker alone is not evidence of compliance with an external architecture.
See `docs/architecture-decisions.md` for the decisions available here.

CI uses Node.js 22 and locked installation, then builds and runs tests. Phase 2 must
wait for successful remote CI and an updated Phase 1 PR. Neither PR is auto-merged.
