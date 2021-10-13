import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.mixin({
  methods:{
    refreshToken(callback){
      let refresh = this.$store.state.user.refresh
      if(!refresh){
        this.$store.state.user = null;
      }
      axios.post(this.url+"/refresh/", {"refresh":refresh})
      .then((response) => {
        this.$store.state.user.access = response.data.access
        callback()
      }).catch((error) => {
        if (!!error.response && error.response.status == 401) {
          this.$store.state.user = null;
        } else {
          console.error(error)
        }
      })
    }
  },
  computed:{
    url(){
      return this.$store.state.url
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
