import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Projects from './pages/Projects.vue';
import Contacts from './pages/Contacts.vue';
import Error404 from './pages/Error404.vue';
import DetailProject from './pages/DetailProject.vue';


const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes: [
    {
      path:'/',
      name:'home',
      component: Home
    },
    {
      path:'/chi-siamo',
      name:'about',
      component: About
    },
    {
      path:'/progetti',
      name:'projects',
      component: Projects
    },
    {
      path:'/contatti',
      name:'contacts',
      component: Contacts
    },
    {
      path: '/progetto/:slug?',
      name:'detailProject',
      component: DetailProject
    },


    // rotta 404
    {
      path:'/:pathMatch(.*)*',
      name: 'error404',
      component: Error404
    }
  ]
});

export { router }