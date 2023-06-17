<template>
  <v-app>
    <v-container>
      <v-card
        width="400"
        title="This is a title"
        subtitle="This is a subtitle"
        text="This is content"
      ></v-card>

      <div class="mt-4 text-subtitle-2">With slots</div>

      <v-card width="400">
        <template v-slot:title>
          This is a title
        </template>

        <template v-slot:subtitle>
          This is a subtitle
        </template>

        <template v-slot:text>
          This is content
        </template>
      </v-card>

      <div class="mt-4 text-subtitle-2">With markup</div>

      <v-card width="400">
        <v-card-item>
          <v-card-title>This is a title</v-card-title>

          <v-card-subtitle>This is a subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          This is content
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<!-- <template>
  <v-app>
    <v-app-bar color="primary">
      <template v-slot:prepend>
          <v-app-bar-nav-icon
            valiant="text"
            @click.stop="drawer != drawer"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>
        Application
      </v-app-bar-title>
      <template v-slot:append>
        <v-btn>
          Sign-In
        </v-btn>

        <v-btn>
          <v-icon>
            mdi-home
          </v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
    >
      <v-list nav>
        <v-list-item title="Home" value="home"></v-list-item>
        <v-list-item title="About" value="about"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <p>Hoge 1</p>
        <p>Hoge 2</p>
        <p>Hoge 3</p>
        <p>Hoge 4</p>
        <p>Hoge 5</p>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const drawer = null;
// import { MainLayouts } from './layouts/MainLayouts.vue';
// import { capitalize } from './helpers/capitalize';
// const msg = 'hello';
// const count = ref(0);
// const simpleId = 'undefined';

// function log() {
//   console.log(capitalize(msg));
// }


// const state = reactive({
//   count: 0
// });
// function increment() {
//   state.count++;
// }

// const countRef = ref(0);
// console.log(countRef);
// console.log(countRef.value);
// countRef.value++;
// console.log(countRef.value);

// const obj = {
//   foo: ref(0),
//   bar: ref(1),
// }
// const { foo, bar } = obj;
// console.log(`foo.value: ${foo.value}`);
// console.log(`bar.value: ${bar.value}`);

// const now = computed(() => Date.now());

// const values = reactive({
//   a: 0,
//   b: 0,
// });
// const added = computed(() => values.a + values.b);
// function incrementA() {
//   values.a++;
// }
// import { CarsApi, Configuration, DefaultApi } from "../api-client"
// const config = new Configuration({ basePath: 'http://localhost:3000/dev' });
// const api = new CarsApi(config);
// const car = await api.carsControllerFindOne({ id: 'car_1' });
</script> -->
