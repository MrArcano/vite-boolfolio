<script>
import axios from "axios";
import { store } from "./data/store";
import ProjectCard from "./components/ProjectCard.vue";
import Paginator from "./components/Paginator.vue";

export default {
  name: "App",
  components: {
    ProjectCard,
    Paginator,
  },
  data() {
    return {
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
      axios
        .get(url)
        .then((response) => {
          // handle success
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

    prova(e) {
      console.log(e);
    },
  },
  mounted() {
    this.getAPI(store.ApiUrl);
  },
};
</script>

<template>
  <div class="container my-5">
    <h1 class="text-center">Vite Boolfolio</h1>
    <div class="row">
      <div class="col-6" v-for="project in projects" v-bind:key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
    <Paginator @changePage="getAPI($event)" :paginator="paginator" />
  </div>
</template>

<style></style>
