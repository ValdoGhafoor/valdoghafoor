<template>
  <div :class="$style['Root']">
    <div :class="$style['Infos']">
      <div :class="$style['Info']">
        contact@valdoghafoor.com
      </div>
      <div :class="$style['Info']">
        06.51.40.40.74
      </div>
    </div>

    <button
      :class="$style['Button']"
      @click="$modal.show('contactModal')"
    >
      Send me a message
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      name: null,
      email: null,
      subject: null,
      message: null,
      sent: false,
      error: null
    }
  },
  methods: {
    async sendMessage () {
      try {
        await axios.post(process.env.VUE_APP_EMAIL_URL, {
          name: this.name,
          email: this.email,
          message: this.message,
          subject: this.subject
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        this.sent = true
      } catch (err) {
        console.error(err)
        this.error = 'Failed to send message'
      }
    }
  }
}
</script>

<style lang='sass' module>
  .Root
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-around
    width: 100%
    height: 100%

    .Button
      padding: 1rem
      background: $colorSecondary
      border: 0
      color: $white
      border-radius: 0.4rem
      font-weight: bold
      cursor: pointer
</style>
