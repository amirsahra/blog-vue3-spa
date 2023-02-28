<template>
  <div>
    <div class="col-md-12">
      {{ user }}
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">{{ userInfo.name }}</h3>

          <hr class="bg-danger border-2 border-top border-danger">
          <strong class="d-inline-block mb-2 text-primary">User Info</strong>
          <div class="mb-1 text-muted">Username : {{ userInfo.username }}</div>
          <hr class="mt-1 mb-1"/>
          <div class="mb-1 text-muted">Email : {{ userInfo.email }}</div>
          <hr class="mt-1 mb-1"/>
          <div class="mb-1 text-muted">Phone : {{ userInfo.phone }}</div>
          <hr class="mt-1 mb-1"/>
          <div class="mb-1 text-muted">Website : {{ userInfo.website }}</div>

          <hr class="bg-danger border-2 border-top border-danger">
          <strong class="d-inline-block mb-2 text-primary">User Address</strong>
          <div class="mb-1 text-muted">Street : {{ userInfo.address.street }}</div>
          <div class="mb-1 text-muted">Suite : {{ userInfo.address.suite }}</div>
          <div class="mb-1 text-muted">City : {{ userInfo.address.city }}</div>
          <div class="mb-1 text-muted">Zipcode : {{ userInfo.address.zipcode }}</div>

          <hr class="bg-danger border-2 border-top border-danger">
          <strong class="d-inline-block mb-2 text-primary">Company</strong>
          <div class="mb-1 text-muted">Name : {{ userInfo.company.name }}</div>
          <div class="mb-1 text-muted">Catch Phrase : {{ userInfo.company.catchPhrase }}</div>
          <div class="mb-1 text-muted">BS : {{ userInfo.company.bs }}</div>

          <hr class="bg-danger border-2 border-top border-danger">
          <router-link to="/users" >Back</router-link>
        </div>
        <div class="col-md-5 p-3">
          <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
               height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
               preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"></rect>
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";

export default {
  name: "User",
  setup() {
    const userInfo = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getUser() {
      axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
          .then(function (response) {
            // handle success
            userInfo.value = response.data;
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

    getUser();
    return {userInfo, loading, route}
  }
}
</script>

<style scoped>

</style>