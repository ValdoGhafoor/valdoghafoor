<script>
export default {
  mounted () {
    setTimeout(() => this.$modal.show('disclaimerModal'), 200)
  },
  components: {
    Scene: () => import('@/ui/components/Scene'),
    SvgSprite: () => import('@/ui/components/SvgSprite'),
    ContactModal: () => import('@/ui/components/ContactModal'),
    DisclaimerModal: () => import('@/ui/components/DisclaimerModal'),
    ProjectModal: () => import('@/ui/components/ProjectModal')
  }
}
</script>

<template>
  <div :class="$style['Root']">
    <Scene />
    <SvgSprite />
    <ContactModal />
    <DisclaimerModal />
    <ProjectModal />
  </div>
</template>

<style src="normalize.css/normalize.css"></style>
<style lang='sass' src="@/assets/styles/globals.sass"></style>

<style lang="sass" module>
  .Root
    height: 100%
    background: $colorBackground
    color: $colorPrimary
    font-size: 1.4rem

    +md
      font-size: 1.6rem

    +lg
      font-size: 3rem
</style>
