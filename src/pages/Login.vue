<template>
  <v-container fluid class="fill-height justify-center">
    <v-row align="center" justify="center">
      <v-col cols="10" sm="7" md="5" lg="4" xl="3">
      <v-card style="opacity: .9">
        <v-row class="pa-5" align="center">
          <v-col class="d-flex flex-column">
            <h3 class="mb-4">Sign In</h3>
            <p>Welcome, please log in with your account.</p>

              <v-form v-model="valid">
                <v-text-field v-model="login"
                              label="Email"
                              :rules="[rules.required, rules.email]"
                              placeholder="Type your email..."
                              outlined
                              name="login"
                              type="text"
                              autocomplete="email"
                              class="body-1"
                              @keyup.enter="loginMethod">
                  <template #prepend-inner>
                    <v-icon>mdi-email</v-icon>
                  </template>
                </v-text-field>
              </v-form>
            <div class="d-flex align-center justify-space-between">
              <v-spacer/>
              <v-btn color="primary"
                     @click="loginMethod"
                     :disabled="!valid">
                <span class="mx-2">Login</span>
                <v-icon>mdi-login</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Login',
  data: () => ({
    login: '',
    valid: true
  }),
  computed: {
    rules: () => ({
      required: value => !!value || 'Email is required',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail'
      }
    })
  },
  methods: {
    async loginMethod () {
      await this.$store.dispatch('login', this.login)
    }
  }
}
</script>
