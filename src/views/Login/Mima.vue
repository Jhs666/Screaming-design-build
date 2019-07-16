<template>
  <div class="frombox">
    <div class="up up3">
      <input type="text" name="telephoneNumber" placeholder="请输入手机号" class="phone" id="phone2" />
      <!-- 获取验证码 -->
      <div class="huoqu">
        <input type="password" name="yanzhengma" placeholder="请输入密码" id="yanzhengma2" />
        <input
          type="button"
          id="btn-huoqu2"
          name="button"
          value="忘记密码?"
          onclick="resetPwd()"
          placeholder="忘记密码?"
        />
      </div>
      <input type="button" id="loginBtn" name="submit" value="确认" />
      <!-- 一个月内免登录 -->
      <div class="input-checkbox">
        <i id="autoLogin" class="icon iconfont checked">&#xe61e;</i>
        <span>一个月内记住登录</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.frombox {
  position: relative;
  height: 3.87rem;
      font-size: .28rem;
  .up {
    width: 6.9rem;
    padding: 0 0.3rem;
    background-color: #fff;
    z-index: 5;
    color: #000;
    margin: 0 auto;
  }
  input {
    -webkit-appearance: none;
    background-color: transparent;
    line-height: normal;
    outline: none;
    font-size: 0.28rem;
    border: none;
  }
  .phone {
    width: 100%;
    height: 1rem;
border-bottom: 1px solid #EAEAEA;   
 font-size: 0.28rem;
    color: #000;
    font-family: "PingFangSC-Regular";
    outline: none;
    line-height: normal;
    border: none;
    -webkit-appearance: none;
    font: inherit;
    margin: 0;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-rtl-ordering: logical;
    cursor: text;
    padding: 1px 0px;
  }
  .huoqu {
    position: relative;
      input[name="button"] {
    width: 2rem;
    height: 1rem;
    border: none;
    position: absolute;
    right: 0.3rem;
        top: 0;
    padding: 0;
    text-align: right;
        font-size: 0.28rem;
    color: #000;
    font-family: 'PingFangSC-Regular';
    }
    input {
    width: 100%;
    height: 1rem;
    font-size: 0.28rem;
    color: #000;
    font-family: 'PingFangSC-Regular';
        outline: none;
            line-height: normal;
      font: inherit;
    margin: 0;
        }
  }
.input-checkbox {
    position: absolute;
    top: 3.5rem ;
    font-size: 0.28rem;
    left: 0rem;
    padding: 0;
    margin: 0;
}
}
input[name="submit"] {
    margin: 0 auto;
    vertical-align: middle;
    width: 6.9rem;
    height: 0.88rem;
    background-color: #FFD444;
    font-size: 0.28rem;
    position: absolute;
    top:2.4rem;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    .input-checkbox {
  position: absolute;
  margin-top: 1rem;
}
}
</style>
