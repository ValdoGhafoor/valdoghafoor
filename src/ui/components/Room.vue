<script>
import { mapState, mapActions } from 'vuex'

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
    document.addEventListener('keydown', this.onKey)
  },
  destroyed () {
    document.removeEventListener('keydown', this.onKey)
  },
  methods: {
    ...mapActions(['setLookingSide']),
    onKey (event) {
      const ESCAPE_KEY = 27

      if (event.keyCode === ESCAPE_KEY) {
        this.setLookingSide('default')
      }
    }
  },
  components: {
    Skills: () => import('@/ui/components/Skills'),
    Description: () => import('@/ui/components/Description'),
    Wall: () => import('@/ui/components/Wall')
  }
}
</script>

<template>
  <div :class="$style['Root']">
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
        title="projects"
      />

      <Wall
        side="top"
        title="contact"
      />

      <Wall
        side="bottom"
        title="hobbies"
      />

      <Wall side="front">
        Are you lost ?
      </Wall>

      <Wall
        side="back"
        title="description"
      >
        <Description />
      </Wall>
    </div>
  </div>
</template>

<style lang='sass' module>
  .Root
    --dimension: 40vw
    width: var(--dimension)
    height: var(--dimension)
    perspective: var(--dimension)
    overflow: hidden

    +md
      --dimension: 80vw

  .Box
    width: var(--dimension)
    height: var(--dimension)
    transform-style: preserve-3d
    transform-origin: center
    transition-duration: 1000ms
    transition-timing-function: ease
    pointer-events: none

    &-right
      transform: translate3d(calc(var(--dimension) / 2), 0, calc(var(--dimension) / -20)) rotateY(90deg)

    &-left
      transform: translate3d(calc(var(--dimension) / 2 * -1), 0, calc(var(--dimension) / -20)) rotateY(-90deg)

    &-front
      transform: translate3d(0, 0, calc(var(--dimension) / 2 * -1)) rotateX(0deg) rotateY(-180deg)

    &-default
      transform: translate3d(0, 0, 0)

    &-back
      transform: translate3d(0, 0, calc(var(--dimension) / 2.5))

    &-top
      transform: translate3d(0, calc(var(--dimension) / 2 * -1), calc(var(--dimension) / -20)) rotateX(90deg)

    &-bottom
      transform: translate3d(0, calc(var(--dimension) / 2), calc(var(--dimension) / -20)) rotateX(-90deg)

</style>
