<script>
import axios from 'axios';
import { store } from './data/store';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name:'App',
  components:{
    ProjectCard
  },
  data() {
    return {
      projects:[],
    }
  },
  methods: {
    getAPI(){
      axios.get(store.ApiUrl)
        .then((response) => {
          // handle success
          console.log(response.data.data);
          this.projects = response.data.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
    }
  },
  mounted() {
    this.getAPI();
  },
}
</script>

<template>
  <div class="container my-5">
    <h1 class="text-center">Vite Boolfolio</h1>
    <div class="row">
      <div class="col-6" v-for="project in projects" v-bind:key="project.id">
        <ProjectCard :project="project"/> 
      </div>
    </div>
  </div>
</template>


<style>

</style>