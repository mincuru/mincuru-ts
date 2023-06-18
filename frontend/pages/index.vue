<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon
        valiant="text"
        @click.stop="drawer != drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-title>みんクル</v-app-bar-title>
      <v-btn> サインイン </v-btn>
      <v-btn>
        <v-icon> mdi-home </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-navigation-drawer>
        <v-list select-strategy="classic">
          <v-list-subheader>メーカー</v-list-subheader>
          <v-list-item value="マツダ">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title>マツダ</v-list-item-title>
          </v-list-item>

          <v-list-item value="トヨタ">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title>トヨタ</v-list-item-title>
          </v-list-item>

          <v-list-item value="ホンダ">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title>ホンダ</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list select-strategy="classic">
          <v-list-subheader>ボディタイプ</v-list-subheader>
          <v-list-item value="SUV">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title>SUV</v-list-item-title>
          </v-list-item>

          <v-list-item value="セダン">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title>セダン</v-list-item-title>
          </v-list-item>

          <v-list-item value="ステーションワゴン">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title>ステーションワゴン</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list select-strategy="classic">
          <v-list-subheader>パワートレイン</v-list-subheader>
          <v-list-item value="エンジン">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title>エンジン</v-list-item-title>
          </v-list-item>

          <v-list-item value="ストロングハイブリッド">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title>ストロングハイブリッド</v-list-item-title>
          </v-list-item>

          <v-list-item value="マイルドハイブリッド">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title>マイルドハイブリッド</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list select-strategy="classic">
          <v-list-subheader>駆動方式</v-list-subheader>
          <v-list-item value="FF">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title>FF</v-list-item-title>
          </v-list-item>

          <v-list-item value="FR">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title>FR</v-list-item-title>
          </v-list-item>

          <v-list-item value="AWD">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title>AWD</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list select-strategy="classic">
          <v-list-subheader>使用燃料種類</v-list-subheader>
          <v-list-item value="レギュラーガソリン">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title>レギュラーガソリン</v-list-item-title>
          </v-list-item>

          <v-list-item value="ハイオク">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title>ハイオク</v-list-item-title>
          </v-list-item>

          <v-list-item value="軽油">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title>軽油</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list select-strategy="classic">
          <v-list-subheader>ボディサイズ</v-list-subheader>
          <v-list-item value="全長">
            <v-select
              label="全長"
              :items="['〜3400mm以下', '3401mm〜', '4701mm〜']"
            ></v-select>
            <v-select
              label="全幅"
              :items="['〜1480mm', '1481mm〜', '1701mm〜', '1850mm〜']"
            ></v-select>
            <v-select
              label="全高"
              :items="['〜1550mm', '〜2000mm', '2001mm〜']"
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
                '〜200万円',
                '〜300万円',
                '〜400万円',
                '〜500万円',
                '〜750万円',
                '〜1000万円',
                '〜1500万円',
                '〜2000万円',
                '2001万円〜',
              ]"
            ></v-select>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar density="compact">
        <v-container fluid>
          <v-row>
            <v-col cols="2">
              <v-select
                label="並び順"
                :items="[
                  '新着順',
                  '人気順',
                  '燃費順',
                  '最大出力順',
                  '最大トルク順',
                  '電費順',
                  '一充電走行距離順',
                ]"
                value="新着順"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-toolbar>

      <v-container fluid class="ma-4 pa-0">
        <v-row v-for="j in 4" :key="j">
          <v-col v-for="i in 4" :key="i">
            <v-card max-width="320">
              <v-img
                src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200"
                cover
              >
                <v-toolbar density="compact" color="rgba(0, 0, 0, 0)">
                  <v-toolbar-title class="text-white">CX-5</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon class="text-white">mdi-star</v-icon>
                  </v-btn>
                </v-toolbar>
              </v-img>
              <v-card-item>
                <v-card-subtitle>マツダ</v-card-subtitle>
              </v-card-item>
              <v-card-text>
                <div>320万円</div>
                <div>全長 4747mm, 全幅 1850mm, 全高 1690mm</div>
                <div>SUV, AWD, エンジン, レギュラーガソリン</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer v-model="drawer">
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
    </v-main> -->
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
</script>
