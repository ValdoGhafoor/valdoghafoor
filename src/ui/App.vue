<script>
export default {
  components: {
    Scene: () => import('@/ui/components/Scene')
  }
}
</script>

<template>
  <div :class="$style['Root']">
    <Scene />
    <ModalTarget />
  </div>
</template>

<style src="normalize.css/normalize.css"></style>
<style lang='sass' src="@/assets/styles/globals.sass"></style>

<style lang="sass" module>
  .Root
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    font-size: 1.4rem
    font-family: Montserrat, Helvetica, Arial
    height: 100%
    overflow: hidden
</style>
