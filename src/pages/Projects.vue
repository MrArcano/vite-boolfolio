<script>
export default {
  name: "Projects",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<template>
  <div class="container my-5">
    <h1 class="text-center">Boolfolio - Projects</h1>
    <div class="row">
      <div class="col-4" v-for="project in projects" v-bind:key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
    <Paginator @changePage="getAPI($event)" :paginator="paginator" />
  </div>
</template>

<style lang="scss" scoped></style>
