<template>
  <div class="home">
    <div>
      Meteo du jour
    </div>  
    <div>
      Meteo de la semaine
      <!-- <hello :varenfant="test" @userClick="method">   -->
        <todayweather></todayweather>
        <weather-forecast></weather-forecast>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import WeatherForecast from "../components/WeatherForecast";
import todayweather from '../components/TodayWeather';
export default {
  
  name: 'home',
  components: {
    WeatherForecast,
    todayweather
  },

  data() {
    return {
    }
  },

  mounted(){
    this.fetchWeather();    
  },

  methods: {
    fetchWeather(){
      axios
      .get('/data/2.5/weather?id=6455259&appid=8abce26ea4b823746ee23875249a999b') 
        // 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1', {})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },

};
</script>
