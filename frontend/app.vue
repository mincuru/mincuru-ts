<template>
  <div>
    <NuxtWelcome />
    <VBtn>Vuetify のボタン</VBtn>
  </div>
</template>

<script setup lang="ts">
// import { Configuration, CarsApi } from './utils/api-client';
import { CarsApi, Configuration, DefaultApi } from "../api-client"
const config = new Configuration({ basePath: 'http://localhost:3000/dev' });
const api = new CarsApi(config);
const car = await api.carsControllerFindOne({ id: 'car_1' });
console.log(car.modelName);
</script>