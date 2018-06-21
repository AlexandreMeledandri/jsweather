<template>
  <div class="home"> 
    <div>
      <div class="col-md-12">
        <b-form @submit="onSubmit">
        <b-form-input 
          v-model="searchInput"
          type="text"
          placeholder="City">
        </b-form-input>
        <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </div>
        <todayweather v-if="weatherData.icon" :icon="weatherData.icon" :temperature="weatherData.temperature"></todayweather>
        <weather-forecast v-if="forecastData" :forecasts="forecastData"></weather-forecast>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import WeatherForecast from "../components/WeatherForecast";
import todayweather from '../components/TodayWeather';
import {WEATHER_ICONS} from "@/utils/weather-icons-mapping.js";
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
import bForm from 'bootstrap-vue/es/components/form/form';
import bButton from 'bootstrap-vue/es/components/button/button';

export default {
  
  name: 'home',
  components: {
    WeatherForecast,
    todayweather,
    bForm,
    bFormInput,
    bButton
    
  },

  data() {
    return {
      weatherData: {},
      forecastData: [],
      searchInput: ''
    }
  },

  mounted() {
    this.fetchWeather();
    this.fetchForecast();    
  },

  methods: {
    fetchWeather(location = 'Cergy'){
      axios
      .get('/data/2.5/weather?q='+location+',FR&appid=8abce26ea4b823746ee23875249a999b&units=metric') 
      .then(({data}) => this.mappingWeather(data))
      .catch(function (error) {
        console.log(error);
      });
    },
    fetchForecast(location = 'Cergy'){
      axios
      .get('/data/2.5/forecast?q='+location+',FR&appid=8abce26ea4b823746ee23875249a999b&units=metric') 
      .then(({data}) => this.mappingForecast(data))
      .catch(function (error) {
        console.log(error);
      });
    },
    onSubmit(event){
      event.preventDefault();
      console.log('test', event);
      console.log(this.searchInput);
    },
    mappingWeather(_todayweather){
      const icon = WEATHER_ICONS[_todayweather.weather[0].main] || '';
      const temperature = Math.round(_todayweather.main.temp) || "";

      this.weatherData = {
        icon,
        temperature
      };
    },
    mappingForecast(_forecastweather){
     /*  const icon = WEATHER_ICONS_todayweather.list[0].weather[0].description || ''; */
      let array = _forecastweather.list
        .filter(value => {
          return RegExp('12:00').test(value.dt_txt) 
          })
        .map(value =>{
          return {
            icon: WEATHER_ICONS[value.weather[0].main] || '',
            temperature: Math.round(value.main.temp),
            day: new Date(value.dt_txt).toDateString().substr(0,3)
            };
        })
        this.forecastData = array;
    }
  }
};
</script>
