<script>
import axios from "axios";
import { store } from "../data/store";
import ProjectCard from "../components/ProjectCard.vue";
import Paginator from "../components/partials/Paginator.vue";
import Loader from "../components/partials/Loader.vue";

export default {
  name: "Projects",
  components: {
    ProjectCard,
    Paginator,
    Loader,
  },
  data() {
    return {
      isLoaded: false,
      projects: [],
      paginator: {
        links: [],
        first_page_url: "",
        last_page_url: "",
        last_page: "",
      },
    };
  },
  methods: {
    getAPI(url) {
      this.isLoaded = false;
      axios.get(url)
        .then((response) => {
          // handle success
          this.isLoaded = true;
          console.log(response.data.data);
          this.projects = response.data.data;
          this.paginator.links = response.data.links;
          this.paginator.first_page_url = response.data.first_page_url;
          this.paginator.last_page_url = response.data.last_page_url;
          this.paginator.last_page = response.data.last_page;
          console.log(this.paginator);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAPI(store.ApiUrl);
  },
};
</script>

<template>
  <h1 class="text-center">Boolfolio - Projects</h1>
  
  <div v-if="isLoaded">
    <div class="row">
      <div class="col-4" v-for="project in projects" v-bind:key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
    <Paginator @changePage="getAPI($event)" :paginator="paginator" />
  </div>

  <Loader v-else />  
</template>

<style lang="scss" scoped></style>
