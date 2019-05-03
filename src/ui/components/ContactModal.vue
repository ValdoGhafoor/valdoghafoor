
<script>
import axios from 'axios'

export default {
  data () {
    return {
      sent: false,
      name: null,
      email: null,
      subject: null,
      message: null
    }
  },
  methods: {
    reset () {
      this.email = null
      this.name = null
      this.subject = null
      this.message = null
      this.sent = false
      this.$validator.reset()
    },
    async sendMessage () {
      if (this.fields['contact-email'].pristine) return

      try {
        this.sent = true

        setTimeout(() => this.reset(), 2000)

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
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<template>
  <Modal
    name="contactModal"
    transition="fade"
    :adaptive="true"
    :max-height="800"
    :max-width="900"
    height="100%"
    width="100%"
  >
    <div :class="$style['Content']">
      <div
        :class="$style['Close']"
        @click="$modal.hide('contactModal')"
      >
        <svg :class="$style['CloseIcon']">
          <use xlink:href="#close" />
        </svg>
      </div>
      <div
        :class="[
          $style['Field'],
          errors.first('contact-name') ? $style['Field-error'] : ''
        ]"
      >
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
      <div
        :class="[
          $style['Field'],
          errors.first('contact-email') ? $style['Field-error'] : ''
        ]"
      >
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

      <div
        :class="[
          $style['Field'],
          errors.first('contact-subject') ? $style['Field-error'] : ''
        ]"
      >
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

      <div
        :class="[
          $style['Field'],
          errors.first('contact-message') ? $style['Field-error'] : ''
        ]"
      >
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
        :disabled="!!errors.items.length"
        :class="$style['Button']"
        @click="sendMessage"
      >
        <svg
          :class="[
            $style['SendIcon'],
            sent ? $style['SendIcon-sent'] : '',
          ]"
        >
          <use xlink:href="#paperplane" />
        </svg>

        <svg
          :class="$style['SentIcon']"
          v-show="sent"
        >
          <use xlink:href="#valid" />
        </svg>
      </button>
    </div>
  </Modal>
</template>

<style lang='sass' module>
  .Content
    display: flex
    flex-direction: column
    width: 100%
    height: 100%
    padding: .5rem

    .Close
      margin-left: auto
      cursor: pointer
      padding: 1rem

      .CloseIcon
        width: 2rem
        height: 2rem
        stroke: $colorSecondary
        fill: $colorSecondary
        stroke-width: 1.2rem

    .Field
      display: flex
      flex-direction: column
      margin-bottom: 2rem
      padding: 0 1rem

      &-error
        .Input,
        .Label
          color: $colorDanger !important

        .Input
          border-color: $colorDanger !important

          &:focus
            border-color: $colorDanger !important

      .Label
        text-transform: uppercase
        font-weight: bold
        font-size: 1rem
        color: $colorSecondary

        +sm
          font-size: 1.2rem

        +md
          font-size: 1.4rem

      .Input,
      .Textarea
        font-size: 1.5rem
        padding: .5rem 1rem
        border: .2rem solid $gray
        opacity: .8
        background: transparent
        transition: border-color .3s linear
        resize: vertical
        border-radius: .4rem
        box-shadow: none

        +sm
          font-size: 2rem

        &:focus
          border-color: $colorSecondary
          opacity: 1

          + .Label
            color: $colorSecondary

    .Button
      background: $colorSecondary
      border-radius: 50%
      border: 0
      width: 5rem
      height: 5rem
      cursor: pointer
      margin: auto 1rem 0 1rem
      position: relative

      &:disabled
        opacity: .6
        cursor: not-allowed

      .SendIcon
        width: calc(100% - 2rem)
        height: calc(100% - 2rem)
        stroke: $colorSecondary
        fill: $white
        position: absolute
        top: 1rem
        left: 1rem

        &-sent
          animation: fly 1.3s ease
          animation-fill-mode: forwards

          & + .SentIcon
            animation: scale .3s ease-in-out
            animation-fill-mode: forwards
            animation-delay: 1.3s

      .SentIcon
        width: calc(100% - 2rem)
        height: calc(100% - 2rem)
        fill: $white
        position: absolute
        top: 1rem
        left: 1rem
        opacity: 0

      .Textarea
        resize: vertical

  @keyframes fly
    10%
      transform: translate(-10px, 10px)
    40%
      transform: translate(-15px, 15px)
    100%
      transform: translate(100vw, -100vh)
      display: none

  @keyframes scale
    0%
      opacity: 0
      transform: scale(0, 0)
    1%
      opacity: 1
    100%
      opacity: 1
      transform: scale(1, 1)
</style>
