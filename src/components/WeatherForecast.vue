<script>
import WeatherIcons from "@/components/WeatherIcons";

export default {
  name: 'weather-forecast', 
  components: {
    WeatherIcons
  }
};
</script>
<template>
  <div class="row">
    <div class="col-md-2 offset-md-1">
      <span>
        <p>Lundi</p>
        <p>1°</p>
        <WeatherIcons  icon="sunny"/>
      </span>
    </div>
    <div class="col-md-2">
      <span>
        <p>Mardi</p>
        <p>1°</p>
        <WeatherIcons  icon="sunny"/>
      </span>
    </div>
    <div class="col-md-2">
      <span>
        <p>Mercredi</p>
        <p>1°</p>
        <WeatherIcons  icon="sunny"/>
      </span>
    </div>
    <div class="col-md-2">
      <span>
        <p>Jeudi</p>
        <p>1°</p>
        <WeatherIcons  icon="sunny"/>
      </span>
    </div>
    <div class="col-md-2">
      <span>
        <p>Vendredi</p>
        <p>1°</p>
        <WeatherIcons  icon="sunny"/>
      </span>
    </div>
  </div>
</template>
