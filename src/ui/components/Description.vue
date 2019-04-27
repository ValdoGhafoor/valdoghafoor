<script>
export default {
  mounted () {
    document.querySelector(this.$styles['Line'])
  }
}
</script>

<template>
  <div :class="$style['Root']">
    <div
      :class="$style['Line']"
      :style="{
        animationDuration: '1s',
      }"
    >
      <span :class="$style['Declaration']">const</span> freelance = <span :class="$style['Declaration']">{</span>
    </div>
    <div
      :class="$style['Line']"
      :style="{
        animationDelay: '0.3s',
        animationDuration: '0.3s',
      }"
    >
      <div :class="$style['Spacer']" />
      fullname: <span :class="$style['Value']">'Valdo Ghafoor',</span>
    </div>
    <div
      :class="$style['Line']"
      :style="{
        animationDelay: '0.6s',
        animationDuration: '0.3s',
      }"
    >
      <div :class="$style['Spacer']" />
      type: <span :class="$style['Value']">'Fullstack developer',</span>
    </div>
    <div
      :class="$style['Line']"
      :style="{
        animationDelay: '0.9s',
        animationDuration: '0.3s',
      }"
    >
      <div :class="$style['Spacer']" />
      location: <span :class="$style['Value']">'Paris, Earth',</span>
    </div>
    <div
      :class="$style['Line']"
      :style="{
        animationDelay: '1.2s',
        animationDuration: '0.3s',
      }"
    >
      <div :class="$style['Spacer']" />
      preferences: <span :class="$style['Declaration']">[</span>
    </div>
    <div
      :class="$style['Line']"
      :style="{
        animationDelay: '1.5s',
        animationDuration: '0.3s',
      }"
    >
      <div :class="$style['Spacer']" />
      <div :class="$style['Spacer']" />
      <span :class="$style['Value']">'Clean code',</span>
    </div>
    <div
      :class="$style['Line']"
      :style="{
        animationDelay: '1.8s',
        animationDuration: '0.3s',
      }"
    >
      <div :class="$style['Spacer']" />
      <div :class="$style['Spacer']" />
      <span :class="$style['Value']">'CSS Tricks',</span>
    </div>
    <div
      :class="$style['Line']"
      :style="{
        animationDelay: '0.3s',
        animationDuration: '0.3s',
      }"
    >
      <div :class="$style['Spacer']" />
      <div :class="$style['Spacer']" />
      <span :class="$style['Value']">'Boxing'</span>
    </div>
    <div
      :class="$style['Line']"
      :style="{
        animationDelay: '2.1s',
        animationDuration: '0.01s',
      }"
    >
      <div :class="$style['Spacer']" />
      <span :class="$style['Declaration']">]</span>
    </div>
    <div
      :class="$style['Line']"
      :style="{
        animationDelay: '2.11s',
        animationDuration: '0.01s',
      }"
    >
      <span :class="$style['Declaration']">}</span>
    </div>
  </div>
</template>

<style lang='sass' module>
  .Root
    font-size: 2.5rem

    .Line
      margin: 0.5rem 0
      width: 100%
      white-space: nowrap
      overflow: hidden
      animation-name: typing
      animation-timing-function: steps(60, end)
      animation-iteration-count: 1
      color: $colorTertiary

      .Spacer
        width: 2rem
        display: inline-block
        min-width: 2rem

      .Value
        color: $colorPrimary
        margin-left: 1rem

      .Declaration
        color: $colorSecondary
        margin-right: 1rem

    +sm
      font-size: 1.6rem

    @keyframe typing
      from
        width: 0%
</style>
