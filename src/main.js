import { createApp } from 'vue/dist/vue.esm-bundler'
// import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/'
import Home from './pages/Home.vue'
// import About from './pages/About.vue'
import App from './App.vue'

const routes = [
  { path: '/', component: Home },
  // { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
  },
});

createApp(App).use(router).mount('#app')
