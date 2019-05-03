<template>
  <div :class="$style['Root']">
    <div :class="$style['IconContainer']">
      <svg
        :class="[
          $style['Icon'],
          $style['Icon-boxing']
        ]"
      >
        <use xlink:href="#boxing" />
      </svg>
    </div>

    <div :class="$style['IconContainer']">
      <svg
        :class="[
          $style['Icon'],
          $style['Icon-netflix']
        ]"
      >
        <use xlink:href="#netflix" />
      </svg>
    </div>
    <div :class="$style['IconContainer']">
      <svg
        :class="[
          $style['Icon'],
          $style['Icon-games']
        ]"
      >
        <use xlink:href="#games" />
      </svg>
    </div>

    <div :class="$style['IconContainer']">
      <svg
        :class="[
          $style['Icon'],
          $style['Icon-wine']
        ]"
      >
        <use xlink:href="#wine" />
      </svg>
    </div>
  </div>
</template>

<style lang='sass' module>
  .Root
    width: 100%
    height: 100%
    display: grid
    grid-template-columns: 1fr 1fr
    grid-template-rows: 1fr 1fr

    .IconContainer
      width: 100%
      height: 100%
      display: flex
      justify-content: center
      align-items: center

      .Icon
        width: 10rem
        height: 10rem
        padding: 1rem
        border: .3rem solid $colorSecondary
        border-radius: 50%
        margin: 0 auto

        +sm
          width: 12rem
          height: 12rem

        +md
          width: 15rem
          height: 15rem

        &-wine,
        &-netflix
        stroke: $colorSecondary
        fill: $white

        &-boxing
          fill: $white
          color: $colorSecondary

        &-games
          fill: $white
          color: $colorSecondary
          stroke: $colorSecondary
</style>
