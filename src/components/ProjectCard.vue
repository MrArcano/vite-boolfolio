<script>
import { store } from "../data/store";

export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },
  data() {
    return {
      store,
    };
  },
  computed: {},
  mounted() {
    console.log();
  },
  methods: {},
};
</script>

<template>
  <router-link :to="({ name: 'datailProject', params: { slug: project.slug } })">
    <div
      class="card text-bg-secondary my-3 m-auto"
      style="max-width: 400px; min-height: 220px"
    >
      <div class="row g-0">
        <div class="col-12">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text">
              <strong>Type:</strong>
              <span
                class="badge mx-1"
                :class="[project.type?.name ? 'text-bg-dark' : 'text-bg-warning']"
              >
                {{ project.type?.name || "No Type" }}
              </span>
            </p>
            <p class="card-text">
              <strong>Tecnologies:</strong>
              <span v-if="!project.tecnologies.length" class="badge text-bg-warning mx-1">
                No Tecnology
              </span>
              <span
                class="badge text-bg-dark mx-1"
                v-for="tecnology in project.tecnologies"
                :key="tecnology.id"
              >
                {{ tecnology.name }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
