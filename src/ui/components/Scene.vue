<template>
  <div
    :class="[
      $style['Root'],
      isDay || isLightOn ? '' : $style['Root-noEvents'],
    ]"
  >
    <div :class="$style['Wrapper']">
      <div :class="$style['Room']">
        <div :class="[$style['Wall'], $style['Left']]" />
        <div :class="[$style['Wall'], $style['Right']]" />
        <div :class="[$style['Wall'], $style['Back']]" />
        <div :class="[$style['Wall'], $style['Top']]" />
        <div :class="[$style['Wall'], $style['Bottom']]" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      isLightOn: 'isLightOn',
      isDay: 'isDay'
    })
  },
  mounted () {
    document.documentElement.style
      .setProperty('--height', window.innerHeight + 'px')
  },
  methods: mapActions(['switchLight'])
}
</script>

<style lang='sass' module>
  .Root
    min-height: 80rem
    max-height: 100%
    height: 100%
    display: flex
    justify-content: center
    position: relative
    overflow: scroll

    &-noEvents > :not(.Middle .Top)
      pointer-events: none

    .Wrapper
      width: 100%
      height: 100%
      perspective: var(--height)

    .Room
      width: 100%
      height: 100%
      transform-style: preserve-3d

    .Wall
      position: absolute
      width: 100%
      height: 100%
      font-size: 5rem
      color: white
      display: flex
      justify-content: center
      align-items: center
      background-image: url('@/assets/images/stars.png')

    .Back
      transform-origin: center
      transform: translateZ(calc(var(--height) * -1))

    .Bottom
      transform-origin: center bottom
      transform: rotateX(90deg)
      bottom: 0
      left: 0

    .Top
      top: 0
      left: 0
      transform-origin: center top
      transform: rotateX(-90deg)

    .Left
      top: 0
      left: 0
      transform-origin: left center
      transform: rotateY(90deg)
      min-width: 100rem

    .Right
      top: 0
      right: 0
      transform-origin: right center
      transform: rotateY(-90deg)
      min-width: 100rem

</style>
