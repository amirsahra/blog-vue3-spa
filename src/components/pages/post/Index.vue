<template>
  <div class="container top">
    <div class="row g-3 p-5">
      <post-feature v-for="post in postList" :post="post" class="col-lg-6 feat-post"/>
    </div>
  </div>
</template>

<script>
import PostFeature from "@/components/sections/Post-Feature";
import {ref} from "vue";
import axios from "axios";

export default {
  name: "Index",
  components: {PostFeature},
  setup() {
    const postList = ref({});
    const loading = ref(true)

    function getUsers() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(function (response) {
            // handle success
            postList.value = response.data;
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

    getUsers();
    return {postList, loading};
  }
}
</script>

<style scoped>

</style>