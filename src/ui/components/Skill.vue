
<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
  computed: {
    widthClass () {
      switch (this.skill.value) {
        case 7:
          return this.$style['Root-width7']

        case 8:
          return this.$style['Root-width8']

        case 9:
          return this.$style['Root-width9']

        case 10:
          return this.$style['Root-width10']

        default:
          return null
      }
    }
  }

}
</script>

<template>
  <div
    :class="[
      $style['Root'],
      widthClass
    ]"
    :data-skill="skill.label"
  />
</template>

<style lang='sass' module>
  .Root
    background-color: $black
    padding: 0.2rem
    border-radius: 1.5rem
    font-size: 1.8rem
    border: 0.1rem solid $lightblue
    margin-bottom: 0.5rem
    color: $black
    font-weight: bold
    width: 100%

    &::before
      padding-left: 1rem
      content: attr(data-skill)
      background-color: $lightblue
      display: inline-block
      border-radius: inherit
      animation: load 2s linear

    &-width7::before
      width: calc(70% - 1rem)

    &-width8::before
      width: calc(80% - 1rem)

    &-width9::before
      width: calc(90% - 1rem)

    &-width10::before
      width: calc(100% - 1rem)

  @keyframes load
    from
      width: 0%
</style>
