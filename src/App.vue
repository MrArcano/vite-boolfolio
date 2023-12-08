<script>
import axios from "axios";
import { store } from "./data/store";
import ProjectCard from "./components/ProjectCard.vue";
import Paginator from "./components/partials/Paginator.vue";

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
  <div>
    <h1>APP</h1>
    <router-view></router-view>
  </div>
</template>

<style></style>
