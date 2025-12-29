# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router pages and shared components (e.g., `app/account/[address]/page.jsx`).
- `utils/`: Core scan logic and helpers. `utils/scan/` holds RPC, parsers, validation, and storage helpers; `utils/stellar/` has Stellar-specific formatting.
- `__tests__/`: Jest unit tests for parsers, RPC query structure, helpers, and validation.
- `public/`: Static assets.

## Build, Test, and Development Commands
- `npm install`: Install dependencies.
- `npm run dev`: Run the app locally with Next.js dev server at `http://localhost:3000`.
- `npm run build`: Production build.
- `npm run start`: Run the production build locally.
- `npm test`: Run Jest test suite (ESM).
- `npm run test:watch`: Watch mode for faster iteration.

## Coding Style & Naming Conventions
- JavaScript/React with ES modules (`type: module`).
- Indentation is 2 spaces; semicolons are used consistently.
- Files use `.jsx` for React components and `.js` for utilities.
- Prefer descriptive, camelCase naming for functions/variables; React components are PascalCase.
- No explicit lint/format config in repo; follow existing style in nearby files.

## Testing Guidelines
- Framework: Jest (see `jest.config.js`).
- Test files live in `__tests__/` and use `.test.mjs` naming.
- Favor pure function tests for `utils/scan/` parsers/validation and helper formatting.
- Run relevant tests after changes, especially when adjusting parsing or RPC query logic.

## Commit & Pull Request Guidelines
- Recent commits use imperative, sentence-case messages (e.g., “Fix …”, “Add …”).
- Keep commits focused and include a brief summary plus key behavior changes.
- PRs should include: summary of changes, testing notes (`npm test` or targeted files), and screenshots for UI changes.
- Do not `git push` unless explicitly requested; if there are unpushed commits or changes, call that out as a reminder.

## Configuration & Runtime Notes
- Network selection is client-side and persisted in localStorage; URLs can include `?network=testnet`.
- RPC calls are made via Soroban `getEvents` and are sensitive to topic formats—validate changes with tests in `__tests__/rpc-queries.test.mjs`.
