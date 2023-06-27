<template>
  <v-main>
    <v-navigation-drawer v-model="drawer.drawer">
      <v-list select-strategy="classic">
        <v-list-subheader>メーカー</v-list-subheader>
        <v-list-item
          v-for="makerName in navDrawerData.makerNames"
          :key="makerName"
          :value="makerName"
        >
          <template v-slot:prepend="{ isActive }">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
          </template>
          <v-list-item-title>{{ makerName }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list select-strategy="classic">
        <v-list-subheader>ボディタイプ</v-list-subheader>
        <v-list-item
          v-for="bodyType in navDrawerData.bodyTypes"
          :key="bodyType"
          :value="bodyType"
        >
          <template v-slot:prepend="{ isActive }">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
          </template>
          <v-list-item-title>{{ bodyType }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list select-strategy="classic">
        <v-list-subheader>パワートレイン</v-list-subheader>
        <v-list-item
          v-for="powerTrain in navDrawerData.powerTrains"
          :key="powerTrain"
          :value="powerTrain"
        >
          <template v-slot:prepend="{ isActive }">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
          </template>
          <v-list-item-title>{{ powerTrain }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list select-strategy="classic">
        <v-list-subheader>駆動方式</v-list-subheader>
        <v-list-item
          v-for="driveSystem in navDrawerData.driveSystems"
          :key="driveSystem"
          :value="driveSystem"
        >
          <template v-slot:prepend="{ isActive }">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
          </template>
          <v-list-item-title>{{ driveSystem }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list select-strategy="classic">
        <v-list-subheader>使用燃料種類</v-list-subheader>
        <v-list-item
          v-for="fuelType in navDrawerData.fuelTypes"
          :key="fuelType"
          :value="fuelType"
        >
          <template v-slot:prepend="{ isActive }">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
          </template>
          <v-list-item-title>{{ fuelType }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list select-strategy="classic">
        <v-list-subheader>ボディサイズ</v-list-subheader>
        <v-list-item>
          <v-select
            label="全長"
            :items="[
              { title: '〜3400mm', value: 'u3400' },
              { title: '〜4700mm', value: 'u4700' },
              { title: '4701mm〜', value: 'l4701' },
            ]"
            item-title="title"
            item-value="value"
          ></v-select>
        </v-list-item>
        <v-list-item>
          <v-select
            label="全幅"
            :items="[
              { title: '〜1480mm', value: 'u1480' },
              { title: '〜1700mm', value: 'u1700' },
              { title: '〜1850mm', value: 'u1850' },
              { title: '1851mm〜', value: 'l1851' },
            ]"
            item-title="title"
            item-value="value"
          ></v-select>
        </v-list-item>
        <v-list-item>
          <v-select
            label="全高"
            :items="[
              { title: '〜1550mm', value: 'u1550' },
              { title: '〜2000mm', value: 'u2000' },
              { title: '2001mm〜', value: 'l2001' },
            ]"
            item-title="title"
            item-value="value"
          ></v-select>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list select-strategy="classic">
        <v-list-subheader>価格</v-list-subheader>
        <v-list-item>
          <v-select
            label="価格"
            :items="[
              { title: '〜200万円', value: 'u2000000' },
              { title: '〜300万円', value: 'u3000000' },
              { title: '〜400万円', value: 'u4000000' },
              { title: '〜500万円', value: 'u5000000' },
              { title: '〜750万円', value: 'u7500000' },
              { title: '〜1000万円', value: 'u10000000' },
              { title: '〜1500万円', value: 'u15000000' },
              { title: '〜2000万円', value: 'u20000000' },
              { title: '2001万円〜', value: 'l20010000' },
            ]"
            item-title="title"
            item-value="value"
          ></v-select>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar>
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <v-select
              label="並び順"
              :items="[
                { title: '新着順', value: 'newer' },
                { title: '人気順', value: 'stars' },
                { title: '燃費順', value: 'fcrWltc' },
                { title: '最大出力順', value: 'maxPower' },
                { title: '最大トルク順', value: 'maxTorque' },
                { title: '電費順', value: 'ecrWltc' },
                { title: '一充電走行距離順', value: 'mpcWltc' },
              ]"
              item-title="title"
              item-value="value"
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar>

    <div class="d-flex flex-wrap">
      <v-card class="mt-4 ml-4" width="340" v-for="car in cars" :key="car.id">
        <NuxtLink to="cars?id=1">
          <v-hover v-slot="{ isHovering, props }">
            <v-img
              :src="car.imageUrl"
              class="align-end"
              height="180"
              cover
              v-bind="props"
            >
              <v-fade-transition>
                <div
                  v-if="isHovering"
                  class="transition-fast-in-fast-out"
                  style="
                    height: 180px;
                    background-color: rgba(255, 255, 255, 0.15);
                  "
                ></div>
              </v-fade-transition>
            </v-img>
          </v-hover>
        </NuxtLink>
        <v-toolbar density="compact" color="rgba(0, 0, 0, .5)">
          <v-card-title class="text-white">
            <v-btn class="text-h6" href="/cars?id=1">
              <p class>{{ car.modelName }}</p>
            </v-btn>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon class="text-white">mdi-star</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-item>
          <v-card-subtitle>{{ car.makerName }}</v-card-subtitle>
        </v-card-item>
        <v-card-text>
          <div>{{ price.toTenThousandYen(car.price) }}</div>
          <div>
            全長 {{ car.body.length.toLocaleString() }}mm, 全幅
            {{ car.body.width.toLocaleString() }}mm, 全高
            {{ car.body.height.toLocaleString() }}mm
          </div>
          <div>
            {{ body.toTypeLabel(car.body.type) }},
            {{ driveSystem.toLabel(car.driveSystem) }},
            {{ powerTrain.toLabel(car.powerTrain) }},
            {{ fuel.toLabel(car.fuelType) }}
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-main>
</template>

<style scoped></style>

<script setup lang="ts">
import { useDrawer } from '../composables/states';
import { useDriveSystem } from '../composables/drive-system';
import { usePrice } from '../composables/price';
import { useBody } from '../composables/body';
import { useFuel } from '../composables/fuel';
import { usePowerTrain } from '../composables/power-train';
const drawer = useDrawer();
const driveSystem = useDriveSystem();
const price = usePrice();
const body = useBody();
const fuel = useFuel();
const powerTrain = usePowerTrain();

// バックエンドからデータ取得
const navDrawerData = await Promise.resolve({
  makerNames: ['マツダ', 'トヨタ', 'ホンダ', '日産'],
  bodyTypes: ['SUV', 'セダン', 'ステーションワゴン'],
  powerTrains: ['エンジン', 'ストロングハイブリッド', 'マイルドハイブリッド'],
  driveSystems: ['FF', 'FR', 'AWD'],
  fuelTypes: ['レギュラーガソリン', 'ハイオク', '軽油'],
});

const cars = await Promise.resolve([
  {
    id: 1,
    modelName: 'CX-5',
    makerName: 'マツダ',
    url: 'https://www.mazda.co.jp/cars/cx-5/',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg',
    price: 3200000,
    body: { type: 'SUV', length: 4747, width: 1850, height: 1690 },
    powerTrain: 'ICE',
    driveSystem: 'AWD',
    fuelType: 'REGULAR',
  },
  {
    id: 2,
    modelName: 'カローラツーリング',
    makerName: 'トヨタ',
    url: 'https://toyota.jp/corollatouring/',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/8a/Toyota_COROLLA_TOURING_HYBRID_W%C3%97B_2WD_%286AA-ZWE211W-AWXSB%29_front.jpg',
    price: 2678500,
    body: {
      type: 'STATION_WAGON',
      length: 4495,
      width: 1745,
      height: 1460,
    },
    powerTrain: 'StrHV',
    driveSystem: 'AWD',
    fuelType: 'REGULAR',
  },
  {
    id: 3,
    modelName: 'NSX',
    makerName: 'ホンダ',
    url: 'https://www.honda.co.jp/NSX/types/',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/e/ea/2019_Honda_NSX_3.5_CAA-NC1_%2820190722%29_01.jpg',
    price: 27940000,
    body: { type: 'COUPE', length: 4535, width: 1940, height: 1215 },
    powerTrain: 'MldHV',
    driveSystem: 'AWD',
    fuelType: 'PREMIUM',
  },
  {
    id: 4,
    modelName: 'Honda e',
    makerName: 'ホンダ',
    url: 'https://www.honda.co.jp/honda-e/',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/9/9e/Honda_e_Advance_%28ZAA-ZC7%29_front.jpg',
    price: 4950000,
    body: { type: 'HATCHBACK', length: 3895, width: 1750, height: 1510 },
    powerTrain: 'BEV',
    driveSystem: 'RR',
    fuelType: '',
  },
  {
    id: 5,
    modelName: 'ノート',
    makerName: '日産',
    url: 'https://www3.nissan.co.jp/vehicles/new/note.html',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/0/0a/Nissan_Note_e-POWER_%28E13%29%2C_2021%2C_front-left.jpg',
    price: 2445300,
    body: { type: 'HATCHBACK', length: 4045, width: 1695, height: 1520 },
    powerTrain: 'SerHV',
    driveSystem: 'FF',
    fuelType: 'REGULAR',
  },
  {
    id: 6,
    modelName: '3シリーズツーリング',
    makerName: 'BMW',
    url: 'https://www.bmw.co.jp/ja/all-models/3-series/touring/2019/bmw-3-series-touring-inspire.html',
    imageUrl: '',
    price: 6340000,
    body: {
      type: 'STATION_WAGON',
      length: 4715,
      width: 1825,
      height: 1475,
    },
    powerTrain: 'ICE',
    driveSystem: 'AWD',
    fuelType: 'DIESEL',
  },
]);

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
</script>
