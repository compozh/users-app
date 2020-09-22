<template>
  <div>
    <pre-loader/>
    <router-view/>
  </div>
</template>

<script>
const PreLoader = () => import('@/components/PreLoader')

export default {
  name: 'App',
  components: {
    PreLoader
  }
}
</script>

<style>
  html { overflow-y: auto !important; }
</style>
