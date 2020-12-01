<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar>
      <!--   自定义激活颜色 textcolor:"color   -->
      <Tabbaritem path="/home">
        <img slot="item-img" src="./assets/img/home.svg" alt="">
        <img slot="item-img-active" src="./assets/img/home-active.svg" alt="">
        <div slot="item-text">首页</div>
      </Tabbaritem>
      <Tabbaritem path="/list">
        <img slot="item-img" src="./assets/img/category.svg" alt="">
        <img slot="item-img-active" src="./assets/img/category-active.svg" alt="">
        <div slot="item-text">分类</div>
      </Tabbaritem>
      <Tabbaritem path="/cart">
        <img slot="item-img" src="./assets/img/cart-Empty.svg" alt="">
        <img slot="item-img-active" src="./assets/img/cart-Empty-active.svg" alt="">
        <div slot="item-text">购物车</div>
      </Tabbaritem>
      <Tabbaritem path="/user">
        <img slot="item-img" src="./assets/img/user-center.svg" alt="">
        <img slot="item-img-active" src="./assets/img/user-center-active.svg" alt="">
        <div slot="item-text">我的</div>
      </Tabbaritem>

    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from "./components/tabbar/Tabbar";
  import Tabbaritem from "./components/tabbar/Tabbaritem";
export default {
  name: 'App',
  components:{
    Tabbar,
    Tabbaritem
  }
}
</script>

<style>
  @import "assets/css/bass.css";

</style>
