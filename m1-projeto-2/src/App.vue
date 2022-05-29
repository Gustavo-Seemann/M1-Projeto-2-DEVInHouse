<template>
<div class="app">
  <NavSideBar />
  <router-view/> 
</div>
</template>

<script>
import NavSideBar from "./components/NavSideBar.vue";

export default {
  components: {
    NavSideBar,
  },
};
</script>


<style>
</style>
