<template>
  <div class="container top">
    <long-post/>
    <div class="row g-5">
      <div class="col-md-8">
        <!--   posts     -->
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
          Lasted Posts
        </h3>
        <div class="row">
            <post-feature class="col-lg-5 feat-post"/>
            <post-feature class="col-lg-5 feat-post"/>
            <post-feature class="col-lg-5 feat-post"/>
            <post-feature class="col-lg-5 feat-post"/>
        </div>
      </div>

      <div class="col-md-4">
        <div class="position-sticky">
            <AboutCard/>

          <div class="p-4">
            <h4 class="fst-italic">Archives</h4>
            <ol class="list-unstyled mb-0">
              <li><a href="#">March 2021</a></li>
              <li><a href="#">February 2021</a></li>
              <li><a href="#">January 2021</a></li>
              <li><a href="#">December 2020</a></li>
              <li><a href="#">November 2020</a></li>
              <li><a href="#">October 2020</a></li>
              <li><a href="#">September 2020</a></li>
              <li><a href="#">August 2020</a></li>
              <li><a href="#">July 2020</a></li>
              <li><a href="#">June 2020</a></li>
              <li><a href="#">May 2020</a></li>
              <li><a href="#">April 2020</a></li>
            </ol>
          </div>

          <div class="p-4">
            <h4 class="fst-italic">Elsewhere</h4>
            <ol class="list-unstyled">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LongPost from "@/components/sections/Post-Long";
import PostFeature from "@/components/sections/Post-Feature";
import AboutCard from "@/components/sections/About-Card";
export default {
  name: "Home",
  components: {AboutCard, PostFeature, LongPost}
}
</script>

<style scoped>
  .top{
    padding-top: 20px;
  }
  .feat-post{
    margin: 10px;
  }
</style>