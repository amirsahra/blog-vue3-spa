<template>
  <Header/>
  <div class="container top p-3">
    <router-view></router-view>
  </div>
  <Footer/>
</template>

<script>
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
