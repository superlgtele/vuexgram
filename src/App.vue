<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li
          v-if="$store.state.step == 1 || $store.state.step == 2"
          @click="$store.commit('stepdown')"
        >
          Back
        </li>
      </ul>
      <ul class="header-button-right">
        <li
          v-if="$store.state.step == 0 || $store.state.step == 1"
          @click="$store.commit('stepup')"
        >
          Next
        </li>
        <li
          v-if="$store.state.step == 2"
          @click="$store.commit('finalPublish', imageUrl)"
        >
          발행
        </li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <Container v-bind:imageUrl="imageUrl" />

    <button v-if="$store.state.step == 0" @click="$store.dispatch('more')">
      더보기
    </button>

    <div v-if="$store.state.step == 0" class="footer">
      <ul class="footer-button-plus">
        <input
          @change="upload"
          accept="image/*"
          type="file"
          id="file"
          class="inputfile"
        />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from "./components/Container.vue";

export default {
  name: "App",
  data() {
    return {
      imageUrl: "",
    };
  },
  components: {
    Container: Container,
  },
  methods: {
    upload(e) {
      this.imageUrl = URL.createObjectURL(e.target.files[0]);
      this.$store.commit("stepup");
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
