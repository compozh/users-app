<template>
  <v-snackbar v-model="showNotify"
              bottom right
              :color="color"
              multi-line
              @input="closeNotify"
              :timeout=5000>
    {{ text }}
    <v-btn icon dark @click="closeNotify">
      <v-icon>mdi-window-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Notify',
  data: () => ({
    showNotify: false
  }),
  computed: {
    notify () {
      const notify = this.$store.state.notify
      if (notify) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.showNotify = true
      }
      return notify
    },
    color () {
      return this.notify && this.notify.color
        ? this.notify.color
        : 'secondary'
    },
    text () {
      return this.notify && this.notify.text
        ? this.notify.text
        : 'No messages'
    }
  },
  methods: {
    closeNotify () {
      this.showNotify = false
      this.$store.commit('SET_NOTIFY', null)
    }
  }
}
</script>
