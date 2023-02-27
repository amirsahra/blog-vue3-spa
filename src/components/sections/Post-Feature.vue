<template>
  <div>
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col p-4 d-flex flex-column position-static">
        <h3 class="mb-0">{{ post.title }}</h3>
        <div class="mb-1 text-muted">{{ date }}</div>
        <a href="#" class="stretched-link">Continue reading</a>
      </div>
      <div class="col-auto d-none d-lg-block">
        <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
             aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>
          Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Post-Feature",
  props: ['post'],
  setup() {
    const date = ref({})

    function getRandomDate() {
      const maxDate = Date.now();
      const timestamp = Math.floor(Math.random() * maxDate);
      return new Date(timestamp);
    }

    date.value= getRandomDate();
    return {date};
  }

}
</script>

<style scoped>
.feat-img {
  padding: 10px;
}
</style>