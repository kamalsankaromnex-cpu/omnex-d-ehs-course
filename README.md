# Daimler EHS eLearning

React + TypeScript + Vite foundation for the **Daimler EHS course only**. Development scaffolding, **not a completed or LMS-tested SCORM course**.

## Approved decisions

- SCORM 2004; exact edition remains to be confirmed by Daimler LMS owner.
- Responsive desktop, tablet and mobile.
- WCAG 2.2 AA target; compliance not yet tested.
- Completion / passing policy awaiting approval.
- Single-SCO packaging proposed, not approved.

## Development

Install a supported Node.js LTS release and npm:

```sh
npm install
npm run dev
npm run build
npm run test
```

## Repository workflow

Work in feature branches and submit pull requests to `main`. Never commit `dist/`, `.env` files, unapproved assets, learner data or secrets.

See `docs/architecture-decisions.md`. Next: course graph, application controller, tests, SCORM 2004 adapter and WCAG validation.
