# 移动通用Tabbar-Vue

> SEVENSUN

## 使用步骤及封装内容

##### 下载导入项目，并且初始化
### 项目包含：
#### Tabbar组件：
###### Tabbar.vue
###### Tabbaritem.vue
###### Home.vue
###### Cart.vue
###### List.vue
###### User.vue

### 项目功能：
###### 传入未激活ico 激活ico 以及文字即可使用
###### 激活改变当前激活位置的颜色 textcolor可以自定义传入默认red
###### 根据用户添加的数量进行自动排版对齐
~~~javascript
<Tabbaritem path="/home" textcolor="blue">
  <img slot="item-img" src="./assets/img/home.svg" alt="">
  <img slot="item-img-active" src="./assets/img/home-active.svg" alt="">
  <div slot="item-text">首页</div>
</Tabbaritem>
~~~

