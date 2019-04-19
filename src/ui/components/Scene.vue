<template>
  <div
    :class="$style['Root']"
  >
    <h1 :class="$style['Title']">
      Welcome to the Cube.<br>
      Click on faces to naviguate.<br>
      Press escape if you need to step back.
    </h1>
    <Room />
  </div>
</template>

<script>

export default {
  components: {
    Room: () => import('@/ui/components/Room')
  }
}
</script>

<style lang='sass' module>
  .Root
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    flex-direction: column
    align-items: center
    position: relative
    overflow: scroll
    background: $black

    .Title
      color: $white
      font-size: 2rem
      text-align: center

      +sm
        font-size: 1.6rem

</style>
