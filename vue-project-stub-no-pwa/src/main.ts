import 'core-js/stable' // to polyfill ECMAScript features
import 'regenerator-runtime/runtime' // to use transpiled generator functions

// Vue Libraries
import { createApp } from 'vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import { store } from '@/store'

// Styles
import '@/assets/styles/base.scss'
import '@/assets/styles/layout.scss'
import '@/assets/styles/overrides.scss'
import '@mdi/font/css/materialdesignicons.min.css' // ensure you are using css-loader

// Base App
import App from './App.vue'

// Helpers
import { fetchConfig, haveKcTokens } from '@/utils'

// ********************** THIS IS FOR TESTING & DEVELOPMENT ONLY ***************************************
// The following information allows the front to bypass authentication when developing locally
// whilst still being able to consume the entities and relationships apis.

// eslint-disable-next-line
sessionStorage.setItem('KEYCLOAK_TOKEN', '...')
// eslint-disable-next-line
sessionStorage.setItem('KEYCLOAK_REFRESH_TOKEN', '...')
// eslint-disable-next-line
sessionStorage.setItem('KEYCLOAK_ID_TOKEN', '...')
sessionStorage.setItem('BUSINESS_IDENTIFIER', 'CP...')
sessionStorage.setItem('USER_FULL_NAME', 'Firstname Lastname')
// ***************************************************************************************************

/**
 * Fetch config from server, then load Vue
 */
fetchConfig()
  .then(() => {
    // ensure we have the necessary Keycloak tokens
    if (!haveKcTokens()) {
      console.info('Redirecting to Auth URL...')
      const authUrl: string | null = sessionStorage.getItem('AUTH_URL')
      // assume Auth URL is always reachable
      authUrl && window.location.assign(authUrl)
      return // do not execute remaining code
    }

    // Create Vue 3 app
    const app = createApp(App)
    
    // Use plugins
    app.use(vuetify)
    app.use(router)
    app.use(store)
    
    // Mount the app
    app.mount('#app')
  })
  .catch((error: string) => {
    console.error('error fetching config -', error)
    alert('Fatal error loading app')
  })
