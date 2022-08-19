<template>
  <div class="app" :class="( mode === 'dark') ? 'dark': 'light'">
    <main-header @changeMode="changeMode"/>
    <router-view />
  </div>
</template>
<script>
import MainHeader from "@/components/Shared/MainHeader.vue";
export default {
  data(){
    return {
      mode:'light'
    }
  },
  components: {
    MainHeader,
  },
  methods:{
    changeMode(value){
      this.mode = value
    }
  }
};
</script>
<style lang="scss">

</style>
