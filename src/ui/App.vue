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
    font-size: 1.4rem
    height: 100%
    background: $black

    +sm
      font-size: 1.2rem
</style>
