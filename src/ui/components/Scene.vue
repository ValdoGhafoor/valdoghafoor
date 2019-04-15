<template>
  <div
    :class="$style['Root']"
  >
    <Room />
    <!-- <Desk :class="$style['Desk']" /> -->
  </div>
</template>

<script>

export default {
  mounted () {
    document.documentElement.style
      .setProperty('--height', window.innerHeight + 'px')
  },
  components: {
    Room: () => import('@/ui/components/Room')
  }
}
</script>

<style lang='sass' module>
  .Root
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    position: relative
    overflow: scroll
    background: $black

    .Desk
      position: absolute
      bottom: 5%
      left: 50%
      transform: translate(-50%, 0)
      height: 40%

</style>
