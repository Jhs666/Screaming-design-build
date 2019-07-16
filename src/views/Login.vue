<template>
  <div id="login" style="width:100%">
    <div class="box">
      <header class="header">
        <a href="/index" class="header-left">
          <img
            src="https://m.wowdsgn.com/static/img/bottom-tap-icon/home-07bdcdd36c9df74ef30110623d2d708b.png"
          />
        </a>
        <h3>登录</h3>
        <a href="/register" class="header-right">注册</a>
      </header>
      <div class="centerbox">
        <ul>
          <li
            v-for="(data,index) in datalist"
            :key="data"
            @click="handleClick(index)"
            :class="current===index?'on':''"
          >{{data}}</li>
        </ul>
        <component :is="aa"></component>
      </div>
      <a href="/register" class="register">快速注册</a>
    </div>
  </div>
</template>

<script>
import Mima from "./Login/Mima";
import Duanxin from "./Login/Duanxin";
export default {
  data() {
    return {
      aa: "Mima",
      datalist: ["密码登录", "短信登录"],
      list: ["Mima", "Duanxin"],
      current: 0
    };
  },
  mounted(){
      window.addEventListener('scroll',this.handleScroll,true)
    },
  methods: {
         handleScroll(e){
       	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
       	console.log(scrollTop )
      },
    handleClick(index) {
      // console.log(index)
      this.aa = this.list[index];
      this.current = index;
    }
  },
  components: {
    Mima,
    Duanxin
  }
};
</script>

<style lang="scss" scoped>

html,body {
  width: 100%;
  font-size: 0.2rem;
  position: relative;
  user-select: none;
  background-color: #f5f5f5;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 0.32rem;
  background-color: #f5f5f5;
  font-family: "PingFangSC-Regular", "STHeiti", "Microsoft YaHei", Helvetica,
    Arial, sans-serif;
  position: relative;

  #login {
    height: 10rem;
    overflow: hidden;
  }

  .header {
    display: block;
    background: #fff;
    height: 0.88rem;
    line-height: 0.88rem;
    box-sizing: border-box;
    position: relative;
    padding: 0rem 0.2rem 0rem 0.2rem;
    border-bottom: 1px solid #f5f5f5;
    // background: yellow;
    a {
      color: #2c3030;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
    }
    .header-left {
      display: inline-block;
      width: 0.64rem;
      height: 0.64rem;
      line-height: 0.5rem;
      position: absolute;
      left: 0.2rem;
      top: 50%;
      img {
        display: inline-block;
        width: 0.52rem;
        margin-top: 0.06rem;
        margin-bottom: 0.06rem;
        vertical-align: middle;
            position: absolute;
    top: -0.3rem;
      }
    }
    .header-right {
    display: inline-block;
    position: absolute;
    height: 0.64rem;
    line-height: 0.64rem;
    font-size: 0.3rem;
    right: 0.2rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;    
    }
    h3 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.34rem;
      margin: 0;
      padding: 0;
      border: 0;
      display: block;
    }
  }
}
.centerbox {
      width: 6.9rem;
    margin: 0 auto;
    background-color: #fff;
    margin-top: 0.3rem;
    height: 2.9rem;
        padding: 0;
  ul {
    height: 0.88rem;
    line-height: 0.88rem;
    padding: 0;
    margin: 0;
    background: #FCFCFC;
    overflow: hidden;
        display: block;
    li.on {
    border-bottom: 0.06rem solid #202020;
    color: #000;
    height: 0.88rem;
    }
     li {
    float: left;
    margin: 0 0.92rem;
    font-size: 0.28rem;
    padding: 0 0.24rem;
        list-style: none;
            display: list-item;
    text-align: -webkit-match-parent;
        box-sizing: border-bo
    }
  }
}
.register {
  position: absolute;
    right: 0.5rem;
    width: 1.2rem;
    text-decoration: none;
    color: black;
    top: 5.5rem;
    font-size: 0.3rem;
}
</style>
