const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: 'docs',
  publicPath: '/text-memo-only',
  transpileDependencies: [
    'vuetify'
  ],
})
