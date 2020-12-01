<template>
  <div class="tab-bar-iiem" @click="changeurl">
    <slot v-if="!isActive" name="item-img"></slot>
    <slot v-else name="item-img-active"></slot>
    <div :style="activestyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
      name: "Tabbaritem",
      props:{
        path: String,
        textcolor:{
          type:String,
          default:'red'
        }
      },
      data(){
          return{
            // isActive: true
          }
      },
      methods:{
        changeurl(){
          this.$router.push(this.path)
        }
      },
      computed:{
        isActive(){
          return this.$route.path.indexOf(this.path) !== -1
        },
        activestyle(){
          return this.isActive ? {color:this.textcolor} : {}
        }
      }
    }
</script>

<style scoped>
  .tab-bar-iiem{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-iiem img{
    width: 23px;
    height: 23px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active{
    color: red;
  }
</style>
