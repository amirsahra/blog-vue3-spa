<template>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="validate">
        <div class="mb-3">
          <label for="inputTitle" class="form-label">Title</label>
          <input type="text" v-model.lazy.trim="form.title" class="form-control" id="inputTitle">
          <div class="form-text text-danger">{{ form.titleInputError }}</div>
        </div>
        <div class="mb-3">
          <label for="inputBody" class="form-label">Body</label>
          <textarea class="form-control" v-model.lazy="form.body" id="inputBody" rows="5"></textarea>
          <div class="form-text text-danger">{{ form.bodyInputError }}</div>

        </div>
        <button type="submit" class="btn btn-outline-success mb-3">
          Insert
          <div v-if="loading" class="spinner-border text-warning spinner-border-sm" role="status"></div>
        </button>

      </form>
    </div>
  </div>
</template>

<script>
import {reactive, ref} from "vue";
import axios from "axios";

export default {
  name: "Create",
  setup() {
    const loading = ref(false);
    const form = reactive({
      title: "",
      body: "",
      titleInputError: "",
      bodyInputError: "",
    });

    function createPost() {
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        'title': form.title, body: form.body, userId: 1
      })
          .then(function (response) {
            console.log(response.data)
            loading.value = false
          })
          .catch(function (error) {

          })
          .finally(function () {

          });
    }

    function validate() {
      if (form.title === "") {
        form.titleInputError = "Title is required."
      } else {
        form.titleInputError = ""
      }

      if (form.body === "") {
        form.bodyInputError = "Body is required."
      } else {
        form.bodyInputError = ""
      }

      if (form.title !== "" && form.body !== "") {
        loading.value = true
        createPost();
      }
    }

    return {form, validate,loading};
  },
}
</script>

<style scoped>

</style>