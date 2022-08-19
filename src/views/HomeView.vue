<template>
  <div class="home container">
    <countries />
  </div>
</template>

<script>
// @ is an alias to /src
import Countries from "@/components/Countries/Countries.vue";

export default {
  name: "HomeView",
  components: {
    Countries
  },
};
</script>
<style scoped>
  .home{
    margin-top:40px;
  }
</style>
