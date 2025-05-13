module.exports = {
  transpileDependencies: [],
  configureWebpack: {
    resolve: {
      alias: {
        // Handle Vue 3 JSX properly
        vue: '@vue/runtime-dom'
      }
    }
  },
  chainWebpack: config => {
    // Remove the old Vue 2 JSX transform
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        refSugar: true // Enable ref sugar syntax
      }))
  }
}
