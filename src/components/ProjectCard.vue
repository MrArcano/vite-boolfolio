<script>
  export default {
    name: 'ProjectCard',
    props:{
      project: Object,
    },
    data() {
      return {}
    },
    computed: {

    },
    mounted(){

    },
    methods: {

    }
  }
</script>

<template>

  <div class="card text-bg-secondary my-3 m-auto " style="max-width: 540px; min-height:200px">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="'http://127.0.0.1:8000/storage/'+ project.image" class="img-fluid rounded-start" :alt="project.name">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ project.name }}</h5>
          <p class="card-text">{{ project.description }}</p>
          <p class="card-text"><strong>Type:</strong> <span class="badge text-bg-info">{{ project.type.name}}</span></p>
          <p class="card-text"><strong>Tecnologies:</strong> <span class="badge text-bg-info me-2" v-for="tecnology in project.tecnologies" :key="tecnology.id">{{ tecnology.name}}</span></p>
        </div>
      </div>
    </div>
  </div>

</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>