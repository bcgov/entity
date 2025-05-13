# Vue 2 to Vue 3 Migration Guide

This guide outlines the steps to migrate Vue 2 applications to Vue 3 in the Entity repository.

## Prerequisites

- [x] Backup your codebase or create a dedicated branch for the migration
- [ ] Ensure all tests are passing in Vue 2 before starting migration
- [x] Update Node.js to version 12.0.0 or higher

## Preparation

- [x] Create a comprehensive list of all Vue components in your application
- [x] Identify critical components that might be challenging to migrate
- [x] Document third-party dependencies and check Vue 3 compatibility
- [x] Setup a testing environment for migrated components

## Migration Strategy

1. ✅ Start with smaller, less complex components
2. ✅ Update one component at a time
3. ✅ Maintain a working application throughout the process
4. ⏳ Add thorough tests before and after migration
5. ⏳ Consider using the [Vue 3 Migration Build](https://v3-migration.vuejs.org/migration-build.html) for incremental migration

For detailed migration strategy, see [migration/strategy.md](./strategy.md)

## Dependency Updates

- [x] Update Vue from 2.x to 3.x
  ```bash
  npm uninstall vue vue-template-compiler
  npm install vue@next
  ```

- [x] Update Vue CLI (if used)
  ```bash
  npm update -g @vue/cli
  vue upgrade
  ```

- [x] Update Vue Router
  ```bash
  npm uninstall vue-router
  npm install vue-router@4
  ```
  
  ```js
  // Vue 2 Router
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  
  Vue.use(VueRouter)
  
  const router = new VueRouter({
    routes: [...]
  })
  
  // Vue 3 Router
  import { createRouter, createWebHistory } from 'vue-router'
  
  const router = createRouter({
    history: createWebHistory(),
    routes: [...]
  })
  
  app.use(router)
  ```

- [x] Update Vuex (to Vuex 4 or Pinia)
  ```bash
  npm uninstall vuex
  npm install vuex@next
  # OR
  npm install pinia
  ```
  
  ```js
  // Vue 2 Vuex
  import Vue from 'vue'
  import Vuex from 'vuex'
  
  Vue.use(Vuex)
  
  const store = new Vuex.Store({
    state: {...},
    mutations: {...},
    actions: {...}
  })
  
  // Vue 3 Vuex
  import { createStore } from 'vuex'
  
  const store = createStore({
    state() {
      return {...}
    },
    mutations: {...},
    actions: {...}
  })
  
  app.use(store)
  ```

- [x] Update ESLint plugins for Vue
  ```bash
  npm uninstall eslint-plugin-vue
  npm install eslint-plugin-vue@latest
  ```

- [x] Update TypeScript configuration (if using TypeScript)
  - Update tsconfig.json to include Vue 3 types
  - Install vue-tsc for template type checking

## Build Tool Updates

- [x] Update webpack configuration (if custom)

## Migrate to Vite from Vue CLI
- [x] Install Vite dependencies: `@vitejs/plugin-vue`, `vite`, `vitest` (for testing)
- [x] Create vite.config.ts file
- [x] Create vitest.config.ts for testing
- [x] Create index.html entry point file
- [x] Update package.json scripts
- [x] Remove Vue CLI dependencies and Babel dependencies
- [x] Update main.ts file
- [x] Add env.d.ts for TypeScript support

## Testing Updates

- [x] Update Vue Test Utils
  ```bash
  npm uninstall @vue/test-utils
  npm install @vue/test-utils@next
  ```

- [x] Update testing approach for components
  - No more mount() with localVue
  - Use global mounting options instead

## Composition API (Optional)

- [ ] Install @vue/composition-api for transitional usage in Vue 2
- [ ] Start refactoring components to use Composition API
  ```js
  import { ref, computed, onMounted } from 'vue'
  
  export default {
    setup() {
      const count = ref(0)
      const doubleCount = computed(() => count.value * 2)
      
      function increment() {
        count.value++
      }
      
      onMounted(() => {
        console.log('Component mounted')
      })
      
      return {
        count,
        doubleCount,
        increment
      }
    }
  }
  ```

## Breaking Changes

### Global API Changes

- [x] Replace global Vue API calls with new application instance
  ```js
  // Vue 2
  import Vue from 'vue'
  Vue.use(VueRouter)
  Vue.component('my-component', {...})
  Vue.directive('my-directive', {...})
  
  // Vue 3
  import { createApp } from 'vue'
  const app = createApp(App)
  app.use(router)
  app.component('my-component', {...})
  app.directive('my-directive', {...})
  app.mount('#app')
  ```

- [x] Update plugin installation (plugins that rely on Vue.prototype)
  ```js
  // Vue 2
  Vue.prototype.$http = () => {}
  
  // Vue 3
  const app = createApp(App)
  app.config.globalProperties.$http = () => {}
  ```



### Template Directives Changes

- [x] Replace v-bind.sync with v-model with arguments
  ```html
  <!-- Vue 2 -->
  <MyComponent v-bind:title.sync="title" />
  
  <!-- Vue 3 -->
  <MyComponent v-model:title="title" />
  ```

- [x] Update v-model usage on components
  ```html
  <!-- Vue 2 -->
  <MyComponent v-model="value" />
  
  <!-- Vue 3 -->
  <MyComponent v-model:modelValue="value" />
  ```
  
  ```js
  // Vue 2 component implementation
  export default {
    props: ['value'],
    methods: {
      updateValue(val) {
        this.$emit('input', val)
      }
    }
  }
  
  // Vue 3 component implementation
  export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    methods: {
      updateValue(val) {
        this.$emit('update:modelValue', val)
      }
    }
  }
  ```

- [x] Replace v-on.native with emits option
  ```html
  <!-- Vue 2 -->
  <MyComponent v-on:click.native="onClick" />
  
  <!-- Vue 3 -->
  <!-- No .native needed, just declare the event in emits -->
  <MyComponent v-on:click="onClick" />
  ```
  
  ```js
  // Vue 3 component implementation
  export default {
    emits: ['click']
  }
  ```

- [x] Update key usage on v-for
  ```html
  <!-- Vue 2 (allowed) -->
  <template v-for="item in items">
    <div :key="item.id">...</div>
  </template>
  
  <!-- Vue 3 (required) -->
  <template v-for="item in items" :key="item.id">
    <div>...</div>
  </template>
  ```

### Component API Changes

- [x] Replace functional components with regular components
  ```js
  // Vue 2 functional component
  export default {
    functional: true,
    render(h, { props, slots, listeners }) {
      // ...
    }
  }
  
  // Vue 3 component
  export default {
    props: [...],
    emits: [...],
    setup(props, { slots, attrs, emit }) {
      // ...
    }
  }
  ```

- [x] Update async component definitions
  ```js
  // Vue 2
  const AsyncComponent = () => import('./AsyncComponent.vue')
  
  // Vue 3
  import { defineAsyncComponent } from 'vue'
  const AsyncComponent = defineAsyncComponent(() => import('./AsyncComponent.vue'))
  ```

- [x] Replace filters with computed properties or methods
  ```js
  // Vue 2 filter
  filters: {
    formatDate(value) {
      return new Date(value).toLocaleDateString()
    }
  }
  
  // Vue 3 method or computed
  methods: {
    formatDate(value) {
      return new Date(value).toLocaleDateString()
    }
  }
  ```
  
  ```html
  <!-- Vue 2 -->
  <div>{{ date | formatDate }}</div>
  
  <!-- Vue 3 -->
  <div>{{ formatDate(date) }}</div>
  ```

- [x] Replace event bus with mitt or other event library
  ```js
  // Vue 2
  Vue.prototype.$bus = new Vue()
  // Usage: this.$bus.$emit('event') / this.$bus.$on('event')
  
  // Vue 3 with mitt
  import mitt from 'mitt'
  const emitter = mitt()
  app.config.globalProperties.$bus = emitter
  // Usage: this.$bus.emit('event') / this.$bus.on('event')
  ```



## Common Pitfalls and Considerations

- [x] Check for usage of Vue.observable() (use ref() or reactive() in Vue 3)
- [x] Review use of mixins (consider composables instead)
- [x] Check all components for template refs access (this.$refs.x in Vue 2)
- [x] Review usage of scoped slots (simplified syntax in Vue 3)
- [x] Check for reliance on this.$listeners (merged into this.$attrs in Vue 3)
- [x] Ensure all components explicitly declare emitted events with emits option
- [x] Check for components that access parent/root instances directly
- [x] Review use of render functions and JSX (different syntax in Vue 3)
- [x] Watch out for libraries that haven't been updated for Vue 3
- [x] Check for components that rely on destroyed lifecycle hook (use unmounted in Vue 3)
- [x] Review any custom directives (different hooks in Vue 3)
- [x] Check two-way v-model props in components
- [x] Be cautious with third-party component libraries that might not be Vue 3 compatible
- [x] Watch for CSS styles that target Vue-specific attributes that may have changed
- [ ] Test thoroughly on multiple browsers after migration

## Resources

- [Official Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
- [Vue 3 Documentation](https://vuejs.org/guide/introduction.html)
- [Vue Router 4 Documentation](https://router.vuejs.org/)
- [Vuex 4 Documentation](https://vuex.vuejs.org/)
- [Migration Build Documentation](https://v3-migration.vuejs.org/migration-build.html)

## Verification Steps

- [x] Install the updated dependencies
  ```bash
  npm install
  ```

- [x] Check for any deprecated or incompatible dependencies
  ```bash
  npm ls
  npm outdated
  ```

- [x] Run linting to check for any code style issues (requires ESLint update)
  ```bash
  npm run lint
  ```

- [x] Attempt a build to verify compilation
  * Note: TypeScript errors need to be resolved before build can succeed
  * Interface updates required for store & components
  ```bash
  npm run build
  ```

- ⏳ Run unit tests to ensure components work as expected
  ```bash
  npm run test:unit
  ```

- ⏳ Run end-to-end tests if available
  ```bash
  npm run test:e2e
  ```

- ⏳ Test the application in development mode
  ```bash
  npm run dev  # For Vite projects
  ```