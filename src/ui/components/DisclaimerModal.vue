<template>
  <modal
    class="DisclaimerModal"
    name="disclaimerModal"
    transition="fade"
    height="50%"
    width="90%"
  >
    <div
      :class="$style['Close']"
      @click="$modal.hide('disclaimerModal')"
    >
      <svg :class="$style['CloseIcon']">
        <use xlink:href="#close" />
      </svg>
    </div>
    <div :class="$style['Content']">
      <h1 :class="$style['Title']">
        Welcome to my <span :class="$style['Colored']">CUBEFOLIO.</span>
      </h1>
      Click on faces to naviguate.<br>
      Press back or escape if you need to step back.
    </div>
  </modal>
</template>

<style lang='sass'>
  .DisclaimerModal
    .v--modal-box.v--modal
      top: 50% !important
      left: 50% !important
      position: absolute !important
      max-width: 60rem
      max-height: 50rem
      transform: translate(-50%, -50%)
</style>

<style lang='sass' module>
  .Close
    width: 4rem
    height: 4rem
    margin-left: auto
    cursor: pointer
    padding: 1rem

    .CloseIcon
      width: 2rem
      height: 2rem
      stroke: $colorPrimary
      fill: $colorPrimary
      stroke-width: 1.2rem

  .Content
    font-size: 1.4rem
    color: $colorPrimary
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    text-align: center
    font-weight: bold
    height: calc(100% - 8rem)

    .Title
      font-size: 2rem
      text-transform: uppercase

      .Colored
        background: $colorHorizontalGradient
        background-clip: text
        -webkit-text-fill-color: transparent

      +md
        font-size: 2.2rem
    +md
      font-size: 2.1rem

</style>
