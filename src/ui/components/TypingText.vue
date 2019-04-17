<script>
export default {
  data () {
    return {
      lettersPerSecond: 8
    }
  },
  mounted () {
    setTimeout(() => this.$emit('end'), this.text.length * 50)
  },
  computed: {
    text () {
      return this.$slots.default[0].text
    }
  }
}
</script>

<template>
  <div :class="$style['Root']">
    <p
      :class="$style['Text']"
      :style="{
        animationDuration: `${text.length / 20}s`,
      }"
    >
      {{ text }}
    </p>
  </div>
</template>

<style lang='sass' module>
  .Root
    .Text
      color: $white
      white-space: nowrap
      overflow: hidden
      width: 100%
      color: $lightblue
      font-size: 2rem
      animation-name: typing
      animation-timing-function: steps(60, end)

  @keyframes typing
    from
      width: 0
</style>
