<template>
  <div
    :class="$style['Root']"
  >
    <button
      :class="$style['BackButton']"
      @click="setLookingSide('default')"
      :style="{ visibility: lookingSide === 'default' ? 'hidden' : 'visible' }"
    >
      <svg :class="$style['BackIcon']">
        <use xlink:href="#back" />
      </svg>
      Back
    </button>
    <div :class="$style['Container']">
      <Room />
    </div>
    <div :class="$style['Dummy']" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Room: () => import('@/ui/components/Room')
  },
  computed: mapState({
    lookingSide: 'lookingSide'
  }),
  methods: mapActions(['setLookingSide'])
}
</script>

<style lang='sass' module>
  .Root
    --dimension: 80vw
    width: 100%
    height: 100%
    display: flex
    justify-content: space-between
    flex-direction: column
    position: relative
    overflow: scroll
    padding: 1rem 2rem

    +sm
      --dimension: 80vw

    +md
      --dimension: 60vw

    +lg
      --dimension: 50vw

    +xl
      --dimension: 40vw

    +landscape
      --dimension: 80vh

    .Container
      display: flex
      flex-direction: column
      align-items: center

    .BackButton,
    .Dummy
      height: 3rem
      width: 10rem

    .BackButton
      background: none
      border: 0
      cursor: pointer
      display: flex
      align-items: center
      color: $colorPrimary
      font-weight: bold
      text-transform: uppercase
      padding: 0

      .BackIcon
        width: 2rem
        height: 2rem
        fill: $colorPrimary
        margin: 1rem

</style>
