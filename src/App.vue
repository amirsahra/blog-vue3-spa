<template>
  <Header/>
  <router-view></router-view>
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
