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
// @ is an alias to /src
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

  methods: {
  }
};
</script>
