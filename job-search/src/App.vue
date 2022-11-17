<template>
  <!--router-view and router-link are both global component -->
  <div>
    <!-- static component -->
    <main-nav />

    <!-- dynamic component -->
    <router-view />
  </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";

export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
