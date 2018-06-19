import Vue from 'vue';
import App from './App.vue';
import router from './router';
import HelloWorld from "./components/HelloWorld";
import WeatherForecast from "./components/WeatherForecast";
import TodayWeather from './components/TodayWeather';


Vue.config.productionTip = false;

new Vue({
  router,
  components: {
    WeatherForecast,
    TodayWeather
  },
  render: h => h(App),
}).$mount('#app');
