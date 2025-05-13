# Vue 3 Migration Error Log

## Vue CLI to Vite Migration Errors

### Build Errors
- TypeScript configuration error: Cannot find type definition file for 'jest' and 'webpack-env'
  - Solution: Updated tsconfig.json to use Vitest instead

- Vuetify not installed error: Cannot find module 'vuetify' or its corresponding type declarations
  - Solution: Vuetify is referenced but not installed. Need to either install Vuetify or remove references

### Linting Errors
- v-model directives require no argument in old .vue files
- '<template v-for>' cannot be keyed. Place the key on real elements instead
- Component name "About" should always be multi-word