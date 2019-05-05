
<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      sent: false
    }
  },
  computed: mapState({
    currentProject: 'currentProject'
  }),
  methods: mapActions(['nextProject', 'previousProject'])
}
</script>

<template>
  <Modal
    name="projectModal"
    transition="fade"
    :adaptive="true"
    :max-width="1200"
    height="auto"
    width="95%"
  >
    <div :class="$style['Content']">
      <img
        v-show="currentProject"
        :src="currentProject ? currentProject.portfolio : null"
        :class="$style['Image']"
      >
      <div :class="$style['Banner']">
        {{ currentProject ? currentProject.name : null }}
      </div>

      <div
        :class="$style['Previous']"
        @click="previousProject"
      >
        <svg :class="$style['Icon']">
          <use xlink:href="#previous" />
        </svg>
      </div>

      <div
        :class="$style['Next']"
        @click="nextProject"
      >
        <svg :class="$style['Icon']">
          <use xlink:href="#next" />
        </svg>
      </div>
    </div>
  </Modal>
</template>

<style lang='sass' module>
  .Content
    width: 100%
    height: 100%
    position: relative

    .Image
      width: 100%
      height: auto
      display: block

    .Banner
      position: absolute
      padding: 1rem 0
      width: 100%
      background: rgba(0, 0, 0, 0.5)
      color: $white
      font-weight: bold
      text-align: center
      bottom: 0
      z-index: 1

      +md
        padding: 1.5rem 0

    .Previous,
    .Next
      position: absolute
      top: 0
      height: 100%
      display: flex
      align-items: center
      z-index: 1
      cursor: pointer
      user-select: none
      transition: transform 0.2s ease-out

      &:hover
        transform: scale(1.2)

      .Icon
        width: 4rem
        height: 4rem

        +sm
          width: 6rem
          height: 6rem

        +md
          width: 8rem
          height: 8rem

    .Previous
      left: -0.5rem

    .Next
      right: -0.5rem

</style>
