<template>
  <div>
    <!-- <Nav></Nav> -->
    <router-view></router-view>
    <!-- <Tabbar></Tabbar> -->
    <BackTop :height="200" :bottom="65" :right="15">
      <div class="top">
        <img src="./assets/hddb.png" alt />
      </div>
    </BackTop>
  </div>
</template>

<script>
// import Nav from './views/nav/Nav'
import Tabbar from "./components/Tabbar";
export default {
  components: {
    // Nav,
    Tabbar
  }
};
</script>

<style lang=scss>
html,
body {
  background: rgb(245, 245, 245);
}
.top {
  padding: 10px;
  /* background: rgba(0, 153, 229, .7); */
  color: #fff;
  text-align: center;
  border-radius: 2px;
  img {
    width: 0.7rem;
    height: 0.7rem;
  }
}
</style>
