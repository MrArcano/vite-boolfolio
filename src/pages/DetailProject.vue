<script>
import axios from "axios";

export default {
  name: "DetailProject",
  created() {},
  data() {
    return {
      project: {},
    };
  },
  props: {},
  methods: {
    getAPI(url) {
      axios
        .get(url)
        .then((response) => {
          // handle success
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
  <div>
    <h1 class="text-center">DetailProject</h1>
    <p>{{ this.$route.params.slug }}</p>
    <p>{{ project.name }}</p>
    <p>{{ project.description }}</p>
    <p>{{ project.start_date }} - {{ project.end_date }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
