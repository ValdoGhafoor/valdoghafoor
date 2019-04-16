<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      lookingSide: 'lookingSide'
    }),
    sideClass () {
      return this.$style[`Box-${this.lookingSide}`]
    }
  },
  mounted () {

  },
  components: {
    Skills: () => import('@/ui/components/Skills'),
    Wall: () => import('@/ui/components/Wall')
  }
}
</script>

<template>
  <div :class="$style['Root']">
    <div :class="$style['Root-v']">
      <div
        :class="[
          $style['Box'],
          sideClass
        ]"
      >
        <Wall
          side="left"
          title="skills"
        >
          <Skills />
        </Wall>

        <Wall
          side="right"
          title="dunno"
        />
      </div>
    </div>
    <div :class="$style['Root-h']">
      <div
        :class="[
          $style['Box'],
          sideClass
        ]"
      >
        <Wall
          side="top"
          title="dunno"
        />

        <Wall
          side="bottom"
          title="dunno"
        />
        <Wall
          side="front"
          title="extra"
        />

        <Wall
          side="back"
          title="description"
        >
          <h1>Hey, I'm Valdo.<br> Not any web developer.</h1>
        </Wall>
      </div>
    </div>
  </div>
</template>

<style lang='sass' module>
  .Root
    position: relative
  .Root-v
    position: absolute
    top: 0
    left: 0
    --dimension: 100vw
    width: var(--dimension)
    height: 100vh
    perspective: var(--dimension)

  .Root-h
    position: absolute
    top: 0
    left: 0
    --dimension: 100vh
    width: 100vh
    height: var(--dimension)
    perspective: var(--dimension)

    // +md
    //   --dimension: 80vw

  .Box
    width: 100vw
    height: 100vh
    transform-style: preserve-3d
    transform-origin: center
    transition-duration: 1000ms
    transition-timing-function: ease
    pointer-events: none

    &-right
      transform: translate3d(calc(var(--dimension) / 2), 0, calc(var(--dimension) / 3)) rotateY(90deg)

    &-left
      transform: translate3d(calc(var(--dimension) / 2 * -1), 0, calc(var(--dimension) / 3)) rotateY(-90deg)

    &-front
      transform: translate3d(0, 0, calc(var(--dimension) * -1)) rotateX(0deg) rotateY(-180deg)

    &-back
      transform: translate3d(0, 0, 0)

    &-top
      transform: translate3d(0, calc(var(--dimension) / 2 * -1), calc(var(--dimension) / 3)) rotateX(90deg)

    &-bottom
      transform: translate3d(0, calc(var(--dimension) / 2), calc(var(--dimension) / 3)) rotateX(-90deg)

</style>
