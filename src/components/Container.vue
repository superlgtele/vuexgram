<template>
  <div>
    <div v-if="$store.state.step == 0">
      <Post
        v-bind:InstaData="a"
        v-bind:selectIndex="i"
        v-for="(a, i) in $store.state.instadata"
        :key="i"
      />
    </div>

    <div v-if="$store.state.step == 1">
      <div
        :class="$store.state.publishBoard.filter"
        class="upload-image"
        :style="`background-image:url(${imageUrl})`"
      ></div>
      <div class="filters">
        <FilterBox
          v-bind:imageUrl="imageUrl"
          v-bind:eachFilter="selectFilter"
          v-for="selectFilter in manyfilters"
          :key="selectFilter"
        />
      </div>
    </div>

    <div v-if="$store.state.step == 2">
      <div
        :class="$store.state.publishBoard.filter"
        class="upload-image"
        :style="`background-image:url(${imageUrl})`"
      ></div>
      <div class="write">
        <textarea
          @input="$store.commit('publish', $event.target.value)"
          class="write-box"
        >
글을 작성해주세요!</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
  name: "Container",
  data() {
    return {
      manyfilters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  components: {
    Post,
    FilterBox,
  },
  props: {
    imageUrl: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
