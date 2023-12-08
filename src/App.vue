<script>
import Header from "./components/partials/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<style></style>
