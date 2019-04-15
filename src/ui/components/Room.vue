<template>
  <div :class="$style['Root']">
    <div :class="$style['Room']">
      <div :class="[$style['Wall'], $style['Left']]" />
      <div :class="[$style['Wall'], $style['Right']]" />
      <div :class="[$style['Wall'], $style['Back']]" />
      <div :class="[$style['Wall'], $style['Top']]" />
      <div :class="[$style['Wall'], $style['Bottom']]" />
    </div>
  </div>
</template>

<script>

export default {
  mounted () {
    document.documentElement.style
      .setProperty('--height', window.innerHeight + 'px')
  }
}
</script>

<style lang='sass' module>
  .Root
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
    background: $black
    border: 4px solid $lightblue

  .Back
    transform-origin: center
    transform: translateZ(calc(var(--height) * -1))
    height: calc(100% - 1px)

  .Bottom
    transform-origin: center bottom
    transform: rotateX(90deg)
    bottom: -6px
    left: 0
    border-bottom: 0

  .Top
    top: 0
    left: 0
    transform-origin: center top
    transform: rotateX(-90deg)
    border-top: 0

  .Left
    top: -1px
    left: 0
    transform-origin: left center
    transform: rotateY(90deg)
    min-width: 150rem
    border-left: 0

  .Right
    top: -1px
    left: 2px
    transform-origin: right center
    transform: rotateY(-90deg)
    min-width: 32rem
    border-right: 0

</style>
