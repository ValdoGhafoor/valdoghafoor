<template>
  <div :class="$style['Root']">
    <Skill
      v-for="(skill, index) in skills"
      :key="index"
      :class="$style['Skill']"
      :skill="skill"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      skills: [
        {
          label: 'Vue.js',
          value: 10
        },
        {
          label: 'Javascript',
          value: 9
        },
        {
          label: 'HTML5',
          value: 9
        },
        {
          label: 'Node.js',
          value: 9
        },
        {
          label: 'GraphQL',
          value: 9
        },
        {
          label: 'CSS3',
          value: 8
        },
        {
          label: 'SASS',
          value: 8
        },
        {
          label: 'MongoDB',
          value: 7
        },
        {
          label: 'Jest',
          value: 7
        }
      ]
    }
  },
  components: {
    Skill: () => import('@/ui/components/Skill')
  }
}
</script>

<style lang='sass' module>
  .Root
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 100%
    max-width: 40rem

    .Skill
      margin: 0.5rem 0
</style>
