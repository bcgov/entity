[Generated with Amp](http://ampcode.com/)

# Agent Guidelines for BCGov Entity Repository

## Commands
- Vue Build: `cd [vue-project-dir] && npm run build`
- Vue Lint: `cd [vue-project-dir] && npm run lint`
- Vue Unit Test: `cd [vue-project-dir] && npm run test:unit`
- Vue E2E Test: `cd [vue-project-dir] && npm run test:e2e`
- E2E Single Test: `cd e2e && npm run single -- --test [test_path]`
- E2E Local Test: `cd e2e && npm run local-test`

## Code Style
- Indentation: 2 spaces
- Component names: PascalCase (in templates and definitions)
- Component IDs: kebab-case
- CSS classes: kebab-case (with double-underscores for deep elements)
- Variables/properties: camelCase
- Interfaces/Types/Enums: PascalCase
- Max line length: 120 characters
- TypeScript is used with strict mode enabled
- Use JSDoc comments for function documentation
- Whitespace between template, script, and style blocks in Vue files

Follow Vue/TypeScript/ESLint standards and maintain consistency with surrounding code.

## Vue 3 Migration
- Log all the changes to the /vue3-migration/log.md file to keep track of what you did.
- Log all errors to the /vue3-migration/error-log.md file to keep what went wrong.
- When you complete a step in the migration, update the /vue3-migration/guide.md by checking the box. Make sure to do after you've completed the step.
- Do not use --legacy-peer-deps.