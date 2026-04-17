# Tests for Coffee Shop Landing Page

## How to Run
1. Install dependencies: `npm install vitest jsdom --save-dev`
2. Run tests: `npm test`

## Test Coverage
- `app.test.js`: Tests the core UI components (hero, menu, about, contact) and form validation logic using JSDOM to simulate the browser environment.
- `api.test.js`: Confirms no external API or Supabase calls are made, as this is a static frontend-only app.
- All tests validate compliance with the requirement of using vanilla JS and no backend.