<template>
  <div
    @click="$store.commit('fire', eachFilter)"
    :class="`${eachFilter} filter-item`"
    :style="`background-image:url(${imageUrl})`"
  >
    {{ eachFilter }}
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    imageUrl: String,
    eachFilter: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
