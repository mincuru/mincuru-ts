<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <VBtn @click="log">{{ capitalize(msg) }}hoge</VBtn>
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { capitalize } from './helpers/capitalize';
const msg = 'hello';
const count = ref(0);

function log() {
  console.log(capitalize(msg));
}

// import { CarsApi, Configuration, DefaultApi } from "../api-client"
// const config = new Configuration({ basePath: 'http://localhost:3000/dev' });
// const api = new CarsApi(config);
// const car = await api.carsControllerFindOne({ id: 'car_1' });
</script>
