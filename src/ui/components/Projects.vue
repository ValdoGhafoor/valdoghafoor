<script>

export default {
  data () {
    return {
      projects: [
        {
          image: require('@/assets/images/portfolios/ly.png'),
          logo: require('@/assets/images/logos/ly.png'),
          name: 'Luxurynsight'
        },
        {
          image: require('@/assets/images/portfolios/agorize.png'),
          logo: require('@/assets/images/logos/agorize.jpg'),
          name: 'Agorize'
        },
        {
          image: require('@/assets/images/portfolios/bm.png'),
          logo: require('@/assets/images/logos/bm.png'),
          name: 'BackMarket'
        },
        {
          image: require('@/assets/images/portfolios/bof.png'),
          logo: require('@/assets/images/logos/bof.png'),
          name: 'Bank of Fashion'
        },
        {
          image: require('@/assets/images/portfolios/frk.png'),
          logo: require('@/assets/images/logos/frk.png'),
          name: 'FreelanceRepublik'
        }
      ]
    }
  }
}
</script>

<template>
  <div :class="$style['Root']">
    <div :class="$style['List']">
      <template v-for="(project, index) in projects">
        <img
          :class="$style['Portfolio']"
          :src="project.image"
          :key="`portfolio-${index}`"
        >

        <img
          :src="project.logo"
          :class="$style['Logo']"
          :key="`logo-${index}`"
        >
      </template>
    </div>
  </div>
</template>

<style lang='sass' module>
  .Root
    font-size: 2.5rem
    max-width: 100%
    max-height: 100%
    overflow-y: scroll
    scrollbar-color: $colorPrimary
    scrollbar-width: 1rem
    width: 100%
    height: 100%
    padding: 1rem
    user-select: unset

    +md
      padding: 2rem

    .List
      display: grid
      align-content: space-around
      grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr))
      grid-gap: 1rem
      width: 100%
      height: 100%
      padding: 0

      .Logo,
      .Portfolio
        margin: 0 auto
        height: auto
        width: 100%

      .Logo
        background: transparent no-repeat center fixed
        background-size: cover
        margin: 0 auto
        width: 5rem
        height: 5rem

        +sm
          width: 8rem
          height: 8rem

        +md
          display: none

      .Portfolio
        width: 100%
        height: auto
        box-shadow: 0 .5rem 1rem rgba(0,0,0,0.19), 0 .2rem .2rem rgba(0,0,0,0.23)
        display: none
        margin: 0 auto
        cursor: pointer
        transition: box-shadow .3s ease-out

        &:hover
          box-shadow: 0 2rem 3rem rgba(0,0,0,0.19), 0 .8rem .8rem rgba(0,0,0,0.23)

        +md
          display: block

      +md
        grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr))
        grid-gap: 4rem
        align-content: initial

      +lg
        grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr))

      +xl
        grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr))

</style>
