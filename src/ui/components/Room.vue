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

    window.onpopstate = this.goBack
  },
  destroyed () {
    document.removeEventListener('keydown', this.onKey)
  },
  methods: {
    ...mapActions(['setLookingSide']),
    goBack () {
      this.setLookingSide('default')
    },
    onKey (event) {
      const ESCAPE_KEY = 27

      if (event.keyCode === ESCAPE_KEY) {
        this.goBack()
      }
    }
  },
  components: {
    Wall: () => import('@/ui/components/Wall'),
    Skills: () => import('@/ui/components/Skills'),
    Description: () => import('@/ui/components/Description'),
    Lost: () => import('@/ui/components/Lost'),
    Projects: () => import('@/ui/components/Projects'),
    Hobbies: () => import('@/ui/components/Hobbies'),
    Contact: () => import('@/ui/components/Contact')
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
      >
        <Projects />
      </Wall>

      <Wall
        side="top"
        title="contact"
      >
        <Contact />
      </Wall>

      <Wall
        side="bottom"
        title="hobbies"
      >
        <Hobbies />
      </Wall>

      <Wall side="front">
        <Lost />
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
    width: var(--dimension)
    height: var(--dimension)
    perspective: var(--dimension)
    overflow: hidden

  .Box
    width: var(--dimension)
    height: var(--dimension)
    transform-style: preserve-3d
    transform-origin: center
    transition-duration: 1000ms
    transition-timing-function: ease
    pointer-events: none

    &-right
      transform: translate3d(calc(var(--dimension) / 2), 0, calc(var(--dimension) / -5)) rotateY(90deg)

    &-left
      transform: translate3d(calc(var(--dimension) / 2 * -1), 0, calc(var(--dimension) / -5)) rotateY(-90deg)

    &-front
      transform: translate3d(0, 0, calc(var(--dimension) / 1.5 * -1)) rotateX(0deg) rotateY(-180deg)

    &-default
      transform: translate3d(0, 0, 0)

    &-back
      transform: translate3d(0, 0, calc(var(--dimension) / 3.1))

    &-top
      transform: translate3d(0, calc(var(--dimension) / 2 * -1), calc(var(--dimension) / -15)) rotateX(90deg)

    &-bottom
      transform: translate3d(0, calc(var(--dimension) / 2), calc(var(--dimension) / -5)) rotateX(-90deg)

</style>
