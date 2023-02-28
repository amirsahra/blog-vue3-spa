<template>
  <article class="blog-post">
    <h2 class="blog-post-title mb-1">{{ postInfo.title}}</h2>
    <p class="blog-post-meta">January 1, 2021 by </p>
    <hr>
    <p>{{postInfo.body}}</p>
  </article>
  <router-link to="/posts" >Back</router-link>
</template>

<script>
import {ref} from "vue";
import {useRoute} from "vue-router/dist/vue-router";
import axios from "axios";

export default {
  name: "Show",
  setup() {
    const postInfo = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getPost() {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then(function (response) {
            // handle success
            postInfo.value = response.data;
            loading.value = false;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    }

    getPost();
    return {postInfo, loading, route}
  }
}
</script>

<style scoped>

</style>