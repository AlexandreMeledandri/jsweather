<template>
  <div class="home">
    <div>
      Meteo du jour
    </div>  
    <div>
      Meteo de la semaine
      <!-- <hello :varenfant="test" @userClick="method">   -->
        {{weatherData}}
        <todayweather v-if="weatherData.icon" :icon="weatherData.icon" :temperature="weatherData.temperature"></todayweather>
        <weather-forecast></weather-forecast>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import WeatherForecast from "../components/WeatherForecast";
import todayweather from '../components/TodayWeather';
import {WEATHER_ICONS} from "@/utils/weather-icons-mapping.js";

export default {
  
  name: 'home',
  components: {
    WeatherForecast,
    todayweather
  },

  data() {
    return {
      weatherData: {}
    }
  },

  mounted() {
    this.fetchWeather();
    this.fetchForecast();    
  },

  methods: {
    fetchWeather(){
      axios
      .get('/data/2.5/weather?q=Cergy,FR&appid=8abce26ea4b823746ee23875249a999b&units=metric') 
      .then(({data}) => this.mappingWeather(data))
      .catch(function (error) {
        console.log(error);
      });
    },
    fetchForecast(){
      axios
      .get('/data/2.5/forecast?q=Cergy,FR&appid=8abce26ea4b823746ee23875249a999b&units=metric') 
      .then(({data}) => this.mappingForecast(data))
      .catch(function (error) {
        console.log(error);
      });
    },

    mappingWeather(_todayweather){
      const icon = WEATHER_ICONS[_todayweather.weather[0].description] || '';
      const temperature = Math.floor(_todayweather.main.temp) || "";

      this.weatherData = {
        icon,
        temperature
      };
    },
    mappingForecast(_forecastweather){
     /*  const icon = WEATHER_ICONS_todayweather.list[0].weather[0].description || ''; */
      let array = _forecastweather.list.map(value => {
        console.log(value);
        
      });
    }
  }
};
</script>
