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
    <div class="container my-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<style></style>
