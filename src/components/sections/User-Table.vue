<template>
  <div class="table-responsive">
    <table class="table table-sm table-hover">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Website</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in userList" :key="user.id">
        <td v-text="user.id"></td>
        <td v-text="user.name"></td>
        <td v-text="user.username"></td>
        <td v-text="user.email"></td>
        <td v-text="user.phone"></td>
        <td v-text="user.website"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "User-Table",
  props:['userList'],
}
</script>

<style scoped>

</style>