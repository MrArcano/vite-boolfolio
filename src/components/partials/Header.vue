<script>
export default {
  name: "App",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<template>
  <header>
    <nav>
      <ul class="nav nav-underline justify-content-center">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'about'}">Chi siamo</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'projects'}">Progetti</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'contacts'}">Contatti</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style></style>
