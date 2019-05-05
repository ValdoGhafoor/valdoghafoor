<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    side: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      lookingSide: 'lookingSide'
    }),
    selected () {
      return this.lookingSide === this.side
    },
    isOpposite () {
      switch (this.lookingSide) {
        case 'top':
          return this.side === 'bottom'
        case 'bottom':
          return this.side === 'top'
        case 'left':
          return this.side === 'right'
        case 'right':
          return this.side === 'left'
        case 'front':
          return this.side === 'back'
        case 'back':
        case 'default':
          return this.side === 'front'
        default:
          return false
      }
    },
    sideClass () {
      return this.$style[`Root-${this.side}`]
    }
  },
  methods: mapActions(['setLookingSide'])
}
</script>

<template>
  <div
    :class="[
      $style['Root'],
      selected ? $style['Root-selected'] : '',
      isOpposite ? $style['Root-hidden'] : '',
      sideClass
    ]"
    @click="setLookingSide(side)"
  >
    <transition name="fade">
      <div
        :class="$style['Content']"
        v-if="selected"
      >
        <slot />
      </div>
      <h2
        :class="$style['Title']"
        v-else
      >
        {{ title }}
      </h2>
    </transition>
  </div>
</template>

<style lang='sass' module>
  .Root
    width: 100%
    height: 100%
    position: absolute
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    background: $colorBackground
    border: .8rem solid transparent
    border-image: $colorVerticalGradient 5
    background-repeat: repeat
    background-position: center
    transition-duration: 500ms
    transition-timing-function: ease
    pointer-events: all
    cursor: pointer
    user-select: none

    +md
      border-width: 1rem

    &:not(&-selected):hover
      background: $gray

    &-hidden
      background: transparent
      color: transparent
      pointer-events: none

    &-back
      transform-origin: center
      transform: translateZ(calc(var(--dimension) * -1))
      border: none

    &-front
      transform-origin: center
      transform: scaleX(-1)
      border: none

    &-bottom
      transform-origin: center bottom
      transform: rotateX(90deg)
      bottom: 0
      left: 0
      border-left: none
      border-right: none

    &-top
      top: 0
      left: 0
      transform-origin: center top
      transform: rotateX(-90deg)
      border-left: none
      border-right: none

    &-left
      top: 0
      left: 0
      transform-origin: left center
      transform: rotateY(90deg)

    &-right
      top: 0
      left: 0
      transform-origin: right center
      transform: rotateY(-90deg)

    .Content
      width: 100%
      height: calc(100% - 2px)
      padding: 1rem
      display: flex
      color: $colorSecondary
      justify-content: center
      align-items: center

    .Title
      text-transform: uppercase
      position: absolute
      top: 50%
      transform: translate(0, -50%)
      font-size: 1.6rem
      user-select: none

      +md
        font-size: 2.5rem

      +lg
        font-size: 3rem
</style>
