module.exports = {
  css: {
    modules: true,
    loaderOptions: {
      sass: {
        data: `
          @import "~@/assets/styles/vars.sass"
          @import "~@/assets/styles/mixins.sass"
        `
      }
    }
  }
}
