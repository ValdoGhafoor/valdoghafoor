
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
    width: 100%
    padding: .2rem
    border: 1px solid $colorPrimary
    border-radius: 1.5rem
    font-size: 1.2rem
    font-weight: bold
    color: $white

    +md
      font-size: 2rem
      margin-bottom: .5rem

    +lg
      font-size: 2.5rem

    &::before
      padding-left: 1rem
      content: attr(data-skill)
      background: $colorHorizontalGradient
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
