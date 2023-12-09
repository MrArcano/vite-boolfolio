<script>
import axios from "axios";
import Loader from "../components/partials/Loader.vue";

export default {
  name: "DetailProject",
  created() {},
  components:{
    Loader
  },
  data() {
    return {
      isLoaded: false,
      project: {},
    };
  },
  props: {},
  methods: {
    getAPI(url) {
      axios.get(url)
        .then((response) => {
          // handle success
          this.isLoaded = true;
          console.log(response.data);
          this.project = response.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAPI('http://127.0.0.1:8000/api/get-project/' + this.$route.params.slug)
  },
};
</script>

<template>
  <div v-if="isLoaded">
    <h1 class="text-center">DetailProject</h1>
    <p>{{ project.name }}</p>
    <p>{{ project.description }}</p>
    <p>{{ project.start_date }} - {{ project.end_date }}</p>
  </div>
  <Loader v-else />
</template>

<style lang="scss" scoped></style>
