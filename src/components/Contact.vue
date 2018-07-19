<template>
  <div class="paraContact2">
    <div class="container">
      <h1>CONTACT</h1>
      <b-container fluid>
        <b-card-group columns>
          <b-card class="">
            <a href="http://twitch.tv/xalbia"><icon name="brands/twitch"></icon> twitch.tv/xalbia</a><br>
            <a href="http://www.youtube.com/channel/UCwJEDjd-4kOnbKTXqBauolQ/videos"><icon name="brands/youtube"></icon> YouTube Videos</a><br>
            <a href="http://twitter.com/xalbia1"><icon name="brands/twitter"></icon> twitter.com/xalbia1</a><br>
            <a href="https://github.com/JATaber"><icon name="brands/github"></icon> github.com/JATaber</a>
          </b-card>
          <b-card class="ml-auto">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show" novalidate>
              <b-form-group id="email"
                            horizontal
                            label="Email:"
                            lable-for="emailInput"
                            description="We'll never share your email with anyone else.">
                <b-form-input id="emailInput"
                              type="email"
                              name="email"
                              v-model="form.email"
                              :state="!$v.form.email.$invalid"
                              placeholder="Enter email">
                </b-form-input>
              </b-form-group>
              <b-form-group id="name"
                            horizontal
                            label="Name:"
                            description="What should I call you?"
                            label-for="nameInput">
                <b-form-input id="nameInput"
                              type="text"
                              name="name"
                              v-model="form.name"
                              :state="!$v.form.name.$invalid"
                              placeholder="Enter Name">
                </b-form-input>
              </b-form-group>
              <b-form-group id="subject"
                            horizontal
                            label="subject:"
                            description="What is this message about?"
                            label-for="nameInput">
                <b-form-input id="subjectInput"
                              type="text"
                              name="subject"
                              v-model="form.subject"
                              :state="!$v.form.subject.$invalid"
                              placeholder="Enter Name">
                </b-form-input>
              </b-form-group>
              <b-form-textarea id="textArea"
                               name="message"
                               v-model="form.comment"
                               placeholder="Please type your question or comment here."
                               :state="!$v.form.comment.$invalid"
                               :rows="3"
                               :max-rows="12">
              </b-form-textarea>
              <b-button-group>
                <b-button class="submit" type="submit" :disabled="$v.form.$invalid" variant="primary">Submit</b-button>
              </b-button-group>
              <b-button-group>
                <b-button class="reset" type="reset" variant="primary">Reset</b-button>
              </b-button-group>
            </b-form>
          </b-card>
        </b-card-group>
      </b-container>
      <b-modal id="formSub" ref="formSub" hide-footer centered title="Thank You!">
        <div class="d-block text-center">
          <h3>We will get back to you as soon as we can!</h3>
        </div>
        <b-btn class="mt-3" variant="primary" block @click="hide">OK</b-btn>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'commentForm',
  metaInfo: {
    title: 'James Taber',
    titleTemplate: '%s - Contact',
    meta: [
      {name: 'keywords', content: 'James Taber Resume, Web Dev on Twitch, Fort Smith, AR Website Designer'},
      {name: 'description', content: 'This is the page you can inquire about my total Web Solutions (SEO, Front-End Dev, Server-side Dev, Full Stack Dev).'}
    ]
  },
  data () {
    return {
      form: {
        email: '',
        name: '',
        comment: ''
      },
      show: true
    }
  },
  mixins: [
    validationMixin
  ],
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      subject: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      comment: {
        required
      }
    }
  },
  methods: {
    onReset (evt) {
      this.form.email = ''
      this.form.name = ''
      this.form.comment = ''
      this.form.subject = ''
      this.show = false
      this.$nextTick(() => { this.show = true })
    },
    onSubmit (evt) {
      evt.preventDefault()
      window.emailjs.send(
        'gmail',
        'portfolio',
        {email: this.form.email, name: this.form.name, subject: this.form.subject, text: this.form.comment}
      )
      this.$refs.formSub.show()
    },
    hide () {
      this.$refs.formSub.hide()
      this.form.email = ''
      this.form.name = ''
      this.form.subject = ''
      this.form.comment = ''
    }
  }
}
</script>
