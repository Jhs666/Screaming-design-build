<template>
  <div>
    <!-- 头部 -->
    <header class="header">
      <h3>注册</h3>
      <a href="/login" class="header-div-right">登录</a>
    </header>
    <!-- 登录 -->
    <div class="frombox" id="captchaForm">
      <div class="up3 up">
        <table>
          <tr>
            <td>
              <input
                type="text"
                name="telephoneNumber"
                placeholder="请输入手机号"
                class="phone"
                id="phone"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="captcha" placeholder="请输入图形验证码" id="captcha" />
              <img id="imgObj" alt src="#" />
              <a href="#" id="renew">换一张</a>
            </td>
          </tr>
        </table>
      </div>
      <input id="submit" type="button" name="submit" value="注册" />
    </div>

    <div class="frombox" id="valCodeForm" hidden>
      <div class="up up3">
        <!-- 获取验证码 -->
        <div class="huoqu">
          <input type="text" name="yanzhengma" placeholder="请输入短信验证码" id="valCode" />
          <input
            type="button"
            id="sendValCode"
            name="button"
            value="获取短信验证码"
            onclick="sendCode(this)"
            placeholder="获取短信验证码"
          />
        </div>
        <input type="password" name="password" id="password" placeholder="设置密码（6-20位）" />
      </div>
      <input id="submit1" type="button" name="submit" value="注册" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  height: 700px;
  font-size: 0.2rem;
  position: relative;
}
body {
  nav{
  display: none ;
}
  overflow: hidden;
  height: 300rem;
  background: #cccccc;
  input {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-appearance: textfield;
    background-color: white;
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 0px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
  }
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
  .header {
    display: block;
    background: #fff;
    height: 0.88rem;
    line-height: 0.88rem;
    box-sizing: border-box;
    position: relative;
    padding: 0rem 0.2rem 0rem 0.2rem;
    border-bottom: 1px solid #f5f5f5;
    font-size: 0.32rem;
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
    .header-div-right {
      display: inline-block;
      position: absolute;
      height: 0.64rem;
      line-height: 0.64rem;
      font-size: 0.3rem;
      right: 0.2rem;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 50%;
      color: black;
      text-decoration: none;
    }
  }
  .frombox {
    position: relative;
    width: 6.9rem;
    height: 4.2rem;
    margin: 0 auto;
    font-size: 0.32rem;
    .up {
      width: 6.9rem;
      padding: 0 0.3rem;
      background-color: #fff;
      z-index: 5;
      color: #000;
      margin: 0.3rem auto;
      font-size: 0.32rem;
      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        display: table;
        tr {
          display: table-row;
          vertical-align: inherit;
          border-color: inherit;
        }
        td {
          display: table-cell;
          vertical-align: inherit;
          input {
            width: 100%;
            height: 1rem;
            line-height: 1rem;
            font-size: 0.28rem;
            color: #000;
            font-family: "PingFangSC-Regular";
            letter-spacing: normal;
            word-spacing: normal;
            text-transform: none;
            text-indent: 0px;
            text-shadow: none;
            display: inline-block;
            text-align: start;
            -webkit-rtl-ordering: logical;
            cursor: text;
            text-rendering: auto;
            -webkit-appearance: none;
            background-color: transparent;
            line-height: normal;
            outline: none;
            font-size: 0.28rem;
            border: none;
          }
        }
        a {
    color: #2C3030;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;  
    position: absolute;
    right: .3rem;  
    top:1.32rem;
        }
      }
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
    top:3.4rem;

    
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    border: none;
    text-align: center
}
}
</style>

