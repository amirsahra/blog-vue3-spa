<template>
  <div class="container p-3">
    <h2 class="p-3">Users list</h2>
    <div v-if="loading" class="spinner-border m-5" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <UserTable v-else :userList="userList"/>
  </div>
</template>

<script>
import axios from 'axios';
import UserTable from "@/components/sections/User-Table";
import {ref} from "vue";

export default {
  name: "Users",
  components: {UserTable},
  setup() {
    const userList = ref([]);
    const loading = ref(true)

    function getUsers() {
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(function (response) {
            // handle success
            userList.value = response.data;
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
    return {userList,loading};
  }
}
</script>

<style scoped>

</style>