<template>
  <div
    :class="$style['Root']"
  >
    <Room />
    <Desk :class="$style['Desk']" />
  </div>
</template>

<script>

export default {
  mounted () {
    document.documentElement.style
      .setProperty('--height', window.innerHeight + 'px')
  },
  components: {
    Desk: () => import('@/ui/components/Desk'),
    Room: () => import('@/ui/components/Room')
  }
}
</script>

<style lang='sass' module>
  .Root
    min-height: 80rem
    min-width: 90rem
    max-height: 100%
    height: 100%
    display: flex
    justify-content: center
    position: relative
    overflow: scroll

    .Desk
      position: absolute
      bottom: 5%
      left: 50%
      transform: translate(-50%, 0)
      height: 40%

</style>
