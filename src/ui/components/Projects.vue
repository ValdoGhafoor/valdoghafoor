<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: mapState({
    projects: 'projects'
  }),
  methods: {
    ...mapActions(['setCurrentProject']),
    onClick (project) {
      this.setCurrentProject(project)
      this.$modal.show('projectModal')
    }
  }
}
</script>

<template>
  <div :class="$style['Root']">
    <div :class="$style['List']">
      <template v-for="(project, index) in projects">
        <div
          :class="$style['Thumbnail']"
          :key="`thumbnail-${index}`"
          :data-name="project.name"
          @click="onClick(project)"
        >
          <img
            :class="$style['ThumbnailImage']"
            :src="project.thumbnail"
          >
        </div>

        <img
          :src="project.logo"
          :class="$style['Logo']"
          :key="`logo-${index}`"
          @click="onClick(project)"
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
      grid-template-columns: 1fr 1fr
      grid-gap: 1rem
      width: 100%
      height: 100%
      padding: 0

      .Logo,
      .Thumbnail
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

      .Thumbnail
        width: 100%
        box-shadow: 0 .5rem 1rem rgba(0,0,0,0.19), 0 .2rem .2rem rgba(0,0,0,0.23)
        display: none
        margin: 0 auto
        cursor: pointer
        transition: box-shadow .3s ease-out
        position: relative

        .ThumbnailImage
          width: 100%
          height: auto

        &::after
          content: attr(data-name)
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
          background: rgba(0, 0, 0, 0.8)
          display: flex
          align-items: center
          justify-content: center
          z-index: 1
          opacity: 0
          transition: opacity 0.4s ease-out
          color: $white
          font-weight: bold

        &:hover::after
          opacity: 1

        +md
          display: block

      +md
        grid-gap: 3rem
        align-content: initial

</style>
