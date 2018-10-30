<template>
  <v-app>
    <app-header/>
    <v-content>
      <router-view/>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>

  import AppHeader from '@/components/AppHeader.vue'
  import AppFooter from '@/components/AppFooter.vue'

  export default {
    components:{
      AppHeader, AppFooter
    }
  }

</script>

<style></style>
