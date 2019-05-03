
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      sent: false
    }
  },
  computed: mapState({
    currentProject: 'currentProject'
  })
}
</script>

<template>
  <Modal
    name="projectModal"
    transition="fade"
    :adaptive="true"
    :max-width="1200"
    height="auto"
    width="100%"
  >
    <div :class="$style['Content']">
      <img
        v-if="currentProject"
        :src="currentProject.portfolio"
        :class="$style['Image']"
      >
    </div>
  </Modal>
</template>

<style lang='sass' module>
  .Content
    width: 100%
    height: 100%

    .Image
      width: 100%
      height: auto

</style>
