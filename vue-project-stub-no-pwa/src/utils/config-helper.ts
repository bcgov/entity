import axios from '@/utils/axios-auth'

/**
 * fetch config from environment and API
 *
 * @return A Promise to get & set session storage URLS with appropriate paths
 */
export const fetchConfig = (): Promise<any> => {
  const origin: string = window.location.origin
  const vueAppPath: string = process.env.VUE_APP_PATH
  const vueAppAuthPath:string = process.env.VUE_APP_AUTH_PATH

  if (!vueAppPath || !vueAppAuthPath) {
    throw new Error('failed to get env variables')
  }

  const baseUrl: string = `${origin}/${vueAppPath}/`
  sessionStorage.setItem('BASE_URL', baseUrl)
  console.log('Set Base URL to: ' + baseUrl)

  const authUrl: string = `${origin}/${vueAppAuthPath}/`
  sessionStorage.setItem('AUTH_URL', authUrl)
  console.log('Set Auth URL to: ' + authUrl)

  const url = `${origin}/${vueAppPath}/config/configuration.json`
  console.log(url)
  const headers = {
    'Accept': 'application/json',
    'ResponseType': 'application/json',
    'Cache-Control': 'no-cache'
  }

  return axios
    .get(url, { headers })
    .then((response: any) => {
      const apiUrl: string = response.data['API_URL']
      axios.defaults.baseURL = apiUrl
      console.log('Set Legal API URL to: ' + apiUrl)

      const authApiUrl: string = response.data['AUTH_API_URL']
      sessionStorage.setItem('AUTH_API_URL', authApiUrl)
      console.log('Set Auth API URL to: ' + authApiUrl)

      const payApiUrl: string = response.data['PAY_API_URL']
      sessionStorage.setItem('PAY_API_URL', payApiUrl)
      console.log('Set Pay API URL to: ' + payApiUrl)

      const keycloakConfigUrl = response.data['KEYCLOAK_CONFIG_URL']
      sessionStorage.setItem('KEYCLOAK_CONFIG_URL', keycloakConfigUrl)
      console.info('Set KeyCloak config URL to: ' + keycloakConfigUrl)
    })
}

/**
 * Validate the KeyCloak tokens
 *
 * @return A boolean indicating if all keycloak variations exist
 */
export const haveKcTokens = (): boolean => {
  return Boolean(sessionStorage.getItem('KEYCLOAK_TOKEN') &&
    sessionStorage.getItem('KEYCLOAK_REFRESH_TOKEN') &&
    sessionStorage.getItem('KEYCLOAK_ID_TOKEN'))
}
