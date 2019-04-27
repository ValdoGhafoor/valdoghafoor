<template>
  <div :class="$style['Root']">
    <div :class="$style['Field']">
      <label
        for="contact-name"
        :class="$style['Label']"
      >
        Name
      </label>
      <input
        id="contact-name"
        type="text"
        name="contact-name"
        v-validate="'required|alpha_spaces'"
        v-model="name"
        :class="$style['Input']"
      >
    </div>
    <div :class="$style['Field']">
      <label
        for="contact-email"
        :class="$style['Label']"
      >
        Email
      </label>
      <input
        id="contact-email"
        type="email"
        name="contact-email"
        v-validate="'required|email'"
        v-model="email"
        :class="$style['Input']"
      >
    </div>

    <div :class="$style['Field']">
      <label
        for="contact-subject"
        :class="$style['Label']"
      >
        Subject
      </label>
      <input
        id="contact-subject"
        type="subject"
        name="contact-subject"
        v-validate="'required'"
        v-model="subject"
        :class="$style['Input']"
      >
    </div>

    <div :class="$style['Field']">
      <label
        for="contact-message"
        :class="$style['Label']"
      >
        Messsage
      </label>
      <textarea
        id="contact-message"
        name="contact-message"
        v-validate="'required'"
        rows="10"
        v-model="message"
        :class="$style['Textarea']"
      />
    </div>
    <button
      :class="[
        $style['Button'],
        errors ? '' : $style['Button-disabled']
      ]"
      @click="sendMessage"
    >
      {{ sent ? 'Sent' : 'Send' }}
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
    width: 100%

    .Field
      display: flex
      flex-direction: column
      margin-bottom: 2rem

      .Label
        text-transform: uppercase
        font-weight: bold

      .Input,
      .Textarea
        padding: 0.5rem 1rem
        border: 0.2rem solid $gray
        opacity: 0.8
        background: transparent
        color: $white

        &:focus
          border-color: $colorSecondary
          opacity: 1

          + .Label
            color: $colorSecondary

      .Textarea
        resize: vertical

    .Button
      padding: 1rem 1rem
      width: 10rem
      background: $colorSecondary
      border: 0
      color: $white
      font-weight: bold

</style>
