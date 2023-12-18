const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../board/src/main/resources/static', // Build Directory
  devServer: {
    proxy: 'http://localhost' // Spring Boot Server
  }
})