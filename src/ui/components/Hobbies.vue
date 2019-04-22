<template>
  <div :class="$style['Root']">
    <div :class="$style['Line']">
      <svg
        :class="[
          $style['Icon'],
          $style['Icon-boxing']
        ]"
      >
        <use xlink:href="#boxing" />
      </svg>

      <svg
        :class="[
          $style['Icon'],
          $style['Icon-netflix']
        ]"
      >
        <use xlink:href="#netflix" />
      </svg>
    </div>
    <div :class="$style['Line']">
      <svg
        :class="[
          $style['Icon'],
          $style['Icon-games']
        ]"
      >
        <use xlink:href="#games" />
      </svg>

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
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between

    .Line
      width: 100%
      display: flex
      align-items: center
      justify-content: space-between

    .Icon
      width: 10rem
      height: 10rem
      padding: 1rem
      border: 0.3rem solid $orange
      border-radius: 50%

      +sm
        width: 8rem
        height: 8rem

      &-wine,
      &-netflix
      stroke: $orange
      fill: $black

      &-boxing
        fill: $black
        color: $orange

      &-games
        fill: $black
        color: $orange
        stroke: $orange
</style>
