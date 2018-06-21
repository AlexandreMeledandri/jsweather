<script>
import WeatherIcons from "@/components/WeatherIcons";

export default {
  name: 'weather-forecast', 
  components: {
    WeatherIcons
  },
  props: {
    forecasts: {
      type: Array,
      require: true
    }
  },
  updated(){
    console.log(this.forecasts);
  }
};
</script>
<template>
  <div class="row">
    <div class="col-md-12">
    <h1>Weekly Forecast</h1>
  </div>
    <div class="col-md-1"></div>
    <div v-for="forecast in forecasts" class="col-md-2">
      <span>
        <p>{{forecast.day}}</p>
        <p>{{forecast.temperature}}</p>
        <WeatherIcons :icon="forecast.icon"/>
      </span>
    </div>
  </div>
</template>
