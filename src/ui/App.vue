<script>
export default {
  components: {
    Scene: () => import('@/ui/components/Scene'),
    SvgSprite: () => import('@/ui/components/SvgSprite')
  }
}
</script>

<template>
  <div :class="$style['Root']">
    <Scene />
    <ModalTarget />
    <SvgSprite />
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
