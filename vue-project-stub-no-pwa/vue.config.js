module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  transpileDependencies: [
    'vue-plugin-helper-decorator',
    'vuetify'
  ],
  publicPath: `/${process.env.VUE_APP_PATH}`,
  devServer: {
    proxy: {
    // this is needed to prevent a CORS error when running locally
      '/local-keycloak-config-url/*': {
        target: 'https://dev.bcregistry.ca/cooperatives/auth/config/kc/',
        pathRewrite: {
          '/local-keycloak-config-url': ''
        }
      }
    }
  }
}
