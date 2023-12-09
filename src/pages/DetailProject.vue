<script>
import axios from "axios";
import Loader from "../components/partials/Loader.vue";
import { store } from '../data/store';

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
    // chiamata axios per il progetto
    getAPI(url) {
      axios.get(url)
        .then((response) => {
          // handle success
          this.isLoaded = true;
          this.project = response.data;
          console.log(Object.keys(response.data).length);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },

    // funzione per formattare le date
    dateFormat(date){
      if(date){
        const newdate = new Date(date);
        const userLang = navigator.language || navigator.userLanguage; 
        const options = {
          dateStyle: 'long',
          // weekday: 'long',
          // year: '2-digit',
          // month: 'long',
          // day: 'numeric',
        };
        return (newdate).toLocaleString(userLang,options);
      }else{
        return 'in corso'
      }
    }
  },
  mounted() {
    this.getAPI(store.ApiUrl + 'get-project/' + this.$route.params.slug)
  },
  computed: {
    
  },
};
</script>

<template>
  <div v-if="isLoaded">
    <div v-if="Object.keys(project).length == 0" class="text-center">
      <h1 class="d-inline-block my-5">Progetto non trovato</h1>
    </div>
    <div v-else>
      <div class="text-center">
        <h1 class="d-inline-block my-5">DetailProject</h1>
        <span class="badge text-bg-warning mx-3">
          {{ project.status }}
        </span>
      </div>
      <div class="text-bg-secondary rounded rounded-5 overflow-hidden">
        <div class="row">
          <div class="col-4">
            <img class="img-fluid" :src="project.image" :alt="project.name">
          </div>
          <div class="col-8">
            <div class=" p-5">
              <h3>{{ project.name }}</h3>
              
              <p><strong>Descrizione: </strong>{{ project.description }}</p>
              
              <p>
                <strong>Type:</strong>
                <span class="badge mx-1" :class="[project.type?.name ? 'text-bg-dark' : 'text-bg-warning']">
                  {{ project.type?.name || "No Type" }}
                </span>

                <strong class="ms-lg-5">Tecnologie:</strong>
                <span v-if="!project.tecnologies.length" class="badge text-bg-warning mx-1">
                  No Tecnology
                </span>
                <span class="badge text-bg-dark mx-1" v-for="tecnology in project.tecnologies" :key="tecnology.id">
                  {{ tecnology.name }}
                </span>
              </p>

              <p>
                <strong>Dal </strong>
                <span>{{ dateFormat(project.start_date) }}</span>
                <strong v-if="project.end_date"> al </strong>
                <span v-else> - </span>
                <span>{{ dateFormat(project.end_date) }}</span>
              </p>

              <p>
                <strong v-if="project.is_group_project === 'Sì'">Progetto di gruppo</strong>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    
  </div>
  <Loader v-else />
</template>

<style lang="scss" scoped></style>
