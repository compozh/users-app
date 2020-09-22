<template>
  <v-app>
    <notify/>
    <v-main class="layout--full-page">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Notify from '@/components/Notify'

export default {
  name: 'FullPage',
  components: {
    Notify
  }
}
</script>

<style scoped>

  .layout--full-page {
    background: url(../assets/love-road-bg.png) center center/cover no-repeat;
  }

</style>
