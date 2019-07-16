<template>
  <div>
    <div id="zbt">
      <header class="header">
        <span class="header-left" @click="isIndex">
          <img src="../assets/house.png" alt />
        </span>
        <h3>商品详情</h3>
        <span class="header-right" @click="isSearch">
          <img src="../assets/fangdajing.png" alt />
        </span>
      </header>

      <swiper v-if="datalist[0]" >
        <div class="swiper-slide" v-for="data in datalist[0].moduleContent.banners" :key="data.id">
          <img :src="data.bannerImgSrc" />
        </div>
      </swiper>

      <div class="titleCon">
        <p>沙发（假）</p>
        <b>￥7999</b>
      </div>
      <div class="logo">
        <div class="brand">
          <div class="weizhi">
            <img src="../assets/icon-location.png" alt class="location" />
            <span class="state">中国</span>
          </div>

          <img src="../assets/logo.jpg" alt class="logopic" />
          <div class="textcont">
            <p class="brandName">尖叫实验室</p>
            <p class="brandContent">
              尖叫实验室于2016年1月诞生于中国上海，是一个由北欧原创家具集合品牌尖叫设计投资，国内知名设计师团队创立，聚焦北欧文化与生活的家居设计品牌。
              尖叫实验室与众多国际知名设计师联合进行设计及研发, 致力于为都市年轻群体带来实用而又充满想象力的日常家具产品。
            </p>
          </div>
        </div>
      </div>

      <div v-for="data in piclist"  class="xiangqing" :key="data.length">
            <div v-if="data.type===2"><img :src="data.content" /></div>
            <div v-if="data.type===1"><p class="productIntroductionDec">{{data.content}}</p></div>
      </div>
      <span class="guige">详细规格参数</span>
      <div class="guigecanshu">
        <div class="cont">
          <p v-for="data in canshulist" :key="data.length">
            <span class="one">{{data.attributeName}}</span>
            <span class="two">{{data.attributeValueText}}</span>
          </p>
        </div>
      </div>

      <div class="wenzhangbox" v-if="swplist">
        <div class="article">
          <p class="lp">—</p>
          <div class="cen" >
            <span class="xiangguanwenzhang">相关文章</span>
            <br />
            <span class="englishwenzhang">ARTICLE</span>
          </div>
          <p class="rp">—</p>
        </div>
        <div>
          <div class="swcon">
            <swiper>
              <div class="swiper-slide" v-for="data in swplist" :key="data.linkTargetId">
                <img :src="data.imgSrc" />
              </div>
            </swiper>
          </div>
        </div>
      </div>

      <div class="othersdiv">
        <div class="article">
          <p class="lp">—</p>
          <div class="cen">
            <span class="xiangguanwenzhang">其他信息</span>
            <br />
            <span class="englishwenzhang">OTHERS</span>
          </div>
          <p class="rp">—</p>
        </div>

        <div class="promise">
          <div class="promiseTitle">
            <span>服务承诺</span>
            <i class="iconfont">&#xe501;</i>
          </div>
          <div class="propic">
            <img src="../assets/pro_bg.png" class="bgt" />
            <div class="promiseItem" @click="bjhandelclick">
              <img src="../assets/promise2.png" alt class="promiseImg" />
              <div class="promisetitle">价格保障/变动返差价</div>
              <div class="promiseDesc">7日保价</div>
              <img src="../assets/dashLine.png" class="promiseLine" />
            </div>
            <div class="promiseItem2" @click="thhandelclick">
              <img src="../assets/promise3.png" alt class="promiseImg" />
              <div class="promisetitle">三年内质保</div>
              <div class="promiseDesc">7日退换</div>
              <img src="../assets/dashLine.png" class="promiseLine" />
            </div>
          </div>
        </div>
        <div class="price">
          <div class="priceTitle">
            <span>价格说明</span>
            <i class="iconfont">&#xe501;</i>
          </div>
          <div class="priceTXT">
            <p>划线价格：划线的价格可能是商品的专柜价、吊牌价、正品零售价、指导价、曾经展示过的销售价等，仅供您参考</p>
            <p>未划线价格：未划线的价格是商品的销售标价，具体的成交价格可能因会员使用优惠券、积分等发生变化，最终以订单结算价格为准。</p>
            <p>* 此说明仅当出现价格比较时有效。若这件商品针对划线价格进行了特殊说明，以特殊说明为准</p>
            <p></p>
          </div>
        </div>
      </div>
      <div class="likesdiv">
        <div class="article">
          <p class="lp">—</p>
          <div class="cen">
            <span class="xiangguanwenzhang">猜你喜欢</span>
            <br />
            <span class="englishwenzhang">WHAT’S HOT</span>
          </div>
          <p class="rp">—</p>
        </div>
      </div>
      <div class="complex">
        <div class="complex2">
          <ul class="likehot">
            <li class="likehotList" v-for="data in hotlist" :key="data.productId" @click="liclick(data.productId,data.parentProductId)">
              <img :src="data.productImg" class="productImg" />
              <div class="complexProductTitleDiv">
                <p class="complexProductTitle">{{data.productTitle}}</p>
              </div>
              <span class="zheshispan">￥{{data.sellPrice}}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="help">
        <span class="needHelpText">需要帮助</span>
        <span class="workTime">周一至周五 9:00~18:30</span>
        <img src="../assets/icon-service.png" alt class="lazy" />
      </div>

      <div class="app-down">
        <ul>
          <li>
            <i class="iconfont">&#xe60a;</i>
            <i class="iconfont">&#xe606;</i>
          </li>
          <li>加入购物车</li>
          <li>立即购买</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swiper from '../components/swiper'
export default {
  data () {
    return {
      datalist: [],
      piclist: [],
      canshulist: [],
      swplist: [],
      hotlist: []
    }
  },
  mounted () {
    console.log(this.$store.state.myid)
    // console.log(this.$route.params.myid,this.$route.params.id)
    axios.get('/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1562384647110').then(res => {
        this.datalist = res.data.data.modules
        // console.log(this.datalist)
      })
      ///itemdetail/spuInfos/10750?_=1562763395473
      console.log(this.$route.params.id)
    axios.get(`/itemdetail/spuInfos/${this.$store.state.myid}?_=1562669846245`).then(res => {
      this.piclist = res.data.data.itemDetailIntroVoList
      this.swplist = res.data.data.itemArticleVoList
      console.log(this.piclist);
    })

    axios.get(`/itemdetail/skuInfos/${this.$route.params.id}?_=1562669846244`).then(res => {
      this.canshulist = res.data.data.skuAttrPairs
      // console.log(this.canshulist);
    })
    axios.get(`/recommend/item?skuId=${this.$route.params.id}&_=1562735714898`).then(res => {
      this.hotlist = res.data.data
      // console.log(this.hotlist)
    })
  },
  watch:{
    $route(){
      axios
      .get('/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1562384647110')
      .then(res => {
        this.datalist = res.data.data.modules
      })
    axios.get(`/itemdetail/spuInfos/${this.$store.state.myid}?_=1562669846245`).then(res => {
      this.piclist = res.data.data.itemDetailIntroVoList
      this.swplist = res.data.data.itemArticleVoList
      // console.log(this.piclist);
    })
    axios.get(`/itemdetail/skuInfos/${this.$route.params.id}?_=1562669846244`).then(res => {
      this.canshulist = res.data.data.skuAttrPairs
      // console.log(this.canshulist);
    })
    axios.get(`/recommend/item?skuId=${this.$route.params.id}&_=1562735714898`).then(res => {
      this.hotlist = res.data.data
      console.log(this.hotlist)
    })
    }
  },
  methods: {
    isIndex () {
      this.$router.push('/index')
    },
    isSearch () {
      this.$router.push('/search')
    },
    liclick(id,myid){
     this.$store.commit("changemyid",myid)
     this.$router.push(`/item/${id}`)
     document.documentElement.scrollTop = 0
    },
    bjhandelclick(){
       this.$router.push('/baojia')
    },
    thhandelclick(){
       this.$router.push('/tuihuan')
    }

  },
  components: {
    swiper
  }
}
</script>

<style lang="scss" scoped>
#zbt {
  margin-bottom: 0.88rem;
  overflow: hidden;
  background: rgb(245, 245, 245);
}
.header {
  background: #fff;
  height: 0.88rem;
  line-height: 0.88rem;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  position: relative;
  padding: 0rem 0.2rem 0rem 0.2rem;
  border-bottom: 1px solid #f5f5f5;

  .header-left {
    display: inline-block;
    width: 0.64rem;
    height: 0.64rem;
    line-height: 0.5rem;
    position: absolute;
    left: 0.2rem;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    border-radius: 50%;
    -moz-border-radius: 50%;
  }
  img {
    display: inline-block;
    width: 0.52rem;
    margin-top: 0.06rem;
    margin-bottom: 0.06rem;
    vertical-align: middle;
  }
  h3 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    font-size: 0.34rem;
    margin: 0;
    padding: 0;
    border: 0;
  }
  .header-right {
    display: inline-block;
    width: 0.64rem;
    height: 0.64rem;
    line-height: 0.5rem;
    position: absolute;
    right: 0.2rem;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    border-radius: 50%;
    -moz-border-radius: 50%;
  }
}
.titleCon {
  padding: 0.3rem 0.5rem 0rem;
  background: #fff;
  margin-bottom: 0.1rem;
  p {
    text-align: initial;
    margin-bottom: 0.2rem;
    font-size: 16px;
  }
  b {
    font-size: 0.36rem;
    color: #000;
    font-family: PingFangSC-Semibold;
    margin-right: 0.1rem;
    vertical-align: sub;
  }
}

.logo {
  margin-bottom: 0.3rem;
  box-sizing: border-box;
  .brand {
    width: 100%;
    background: url(../assets/logobg.png) no-repeat left top;
    background-size: 100%;
    height: 1.92rem;
    position: relative;
    padding: 0.26rem 0;
  }
  .logopic {
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 100%;
    /* margin: 0.5rem 2.65rem 0.3rem; */
    /* margin: 0.5rem auto 0.3rem; */
    position: absolute;
    display: block;
    top: 0.3rem;
    left: 0.5rem;
  }
  .weizhi {
    text-align: right;
    height: 0.5rem;
    float: right;
    margin-right: 0.5rem;
    .location {
      width: 0.3rem;
      height: 0.3rem;
      vertical-align: middle;
      display: inline-block;
      text-align: right;
    }
    .state {
      font-size: 0.26rem;
      color: #fff;
      vertical-align: middle;
      text-align: right;
      margin-left: 0.1rem;
    }
  }
}
.textcont {
  position: absolute;
  top: 0.5rem;
  left: 2.2rem;
  right: 0.3rem;
  .brandName {
    font-family: PingFangSC-Medium;
    font-size: 0.32rem;
    color: #ffffff;
    letter-spacing: 0.01rem;
    text-align: left;
    margin-bottom: 0.1rem;
  }
  .brandContent {
    font-family: PingFangSC-Light;
    font-size: 0.24rem;
    color: #ffffff;
    line-height: 0.4rem;
    margin-bottom: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}
.xiangqing {
  img {
    width: 100%;
    margin: 0.1rem auto;
  }
  .productIntroductionDec {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #707070;
    margin-bottom: 0.3rem;
    padding: 0 0.5rem;
        text-align: justify;
}
}
.guige {
  display: block;
  height: 1rem;
  line-height: 1rem;
  background-color: white;
  padding-left: 0.5rem;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #000000;
  letter-spacing: 1px;
  box-sizing: border-box;
}
.guigecanshu {
  margin-bottom: 0.3rem;
  box-sizing: border-box;
  padding: 0rem 0.5rem 0.4rem;
  background: #fff;
  .cont {
    p {
      line-height: 0.64rem;
      color: #707070;
      font-size: 0.26rem;
      border-top: 1px solid #eaeaea;
      .one {
        width: 30%;
        vertical-align: top;
        display: inline-block;
      }
      .two {
        width: 70%;
        text-align: left;
        display: inline-block;
      }
    }
  }
}

.wenzhangbox {
  background-color: #f5f5f5;
  overflow: hidden;
  .article {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0.3rem 0;
    position: relative;
    .lp {
      // padding-top: 0.2rem;
      padding-right: 0.1rem;
      text-align: justify;
    }
    .cen {
      text-align: center;
      .xiangguanwenzhang {
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #000000;
        letter-spacing: 0;
      }
      .englishwenzhang {
        font-family: PingFangSC-Semibold;
        font-size: 12px;
        color: #000000;
        letter-spacing: 0;
      }
      .rp {
        padding-top: 0.2rem;
        padding-left: 0.1rem;
        text-align: justify;
      }
    }
  }

  .swcon {
    padding: 0rem 0.5rem 0.4rem;
    background: #fff;
  }
}

.othersdiv {
  background-color: #f5f5f5;
  overflow: hidden;
  .article {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0.3rem 0;
    position: relative;
    .lp {
      // padding-top: 0.2rem;
      padding-right: 0.1rem;
      text-align: justify;
    }
    .cen {
      text-align: center;
      .xiangguanwenzhang {
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #000000;
        letter-spacing: 0;
      }
      .englishwenzhang {
        font-family: PingFangSC-Semibold;
        font-size: 12px;
        color: #000000;
        letter-spacing: 0;
      }
      .rp {
        padding-top: 0.2rem;
        padding-left: 0.1rem;
        text-align: justify;
      }
    }
  }

  .promise {
    border-bottom: 1px solid #f5f5f5;
    background-color: white;
    padding: 0 0.4rem;
    .promiseTitle {
      padding: 0.4rem 0;
      position: relative;
      font-size: 0.32rem;
      background: #fff;
      font-family: PingFangSC-Regular;
      color: #000000;
      text-align: left;
      span {
        padding: 0.4rem 0;
        position: relative;
        font-size: 0.32rem;
        background: #fff;
        font-family: PingFangSC-Regular;
        color: #000000;
        text-align: left;
      }
      i {
        color: #707070;
        position: absolute;
        right: 0.4rem;
        right: 0.4rem;
        top: 0.4rem;
      }
    }

    .propic {
      position: relative;
      padding: 0px;
      display: block;
      transform-origin: 0px 0px;
      opacity: 1;
      transform: scale(1, 1);
      .bgt {
        width: 100%;
        height: 2.8rem;
      }

      .promiseItem {
        position: absolute;
        top: 0.5rem;
        left: 0;
        width: 50%;
        .promiseImg {
          width: 0.84rem;
          height: 0.84rem;
          display: inline-block;
          text-align: center;
          position: relative;
          left: 1.2rem;
        }
        .promisetitle {
          margin-top: 0.15rem;
          text-align: center;
          font-family: PingFangSC-Light;
          font-size: 0.18rem;
          color: #ffffff;
        }
        .promiseDesc {
          text-align: center;
          font-family: PingFangSC-Medium;
          font-size: 0.26rem;
          color: #ffffff;
          letter-spacing: 2px;
        }
        .promiseLine {
          position: absolute;
          right: 0;
          top: 50%;
          height: 50%;
          transform: translateY(-50%);
        }
      }
      .promiseItem2 {
        position: absolute;
        top: 0.5rem;
        right: 0;
        width: 50%;
        .promiseImg {
          width: 0.84rem;
          height: 0.84rem;
          display: inline-block;
          text-align: center;
          position: relative;
          left: 1.2rem;
        }
        .promisetitle {
          margin-top: 0.15rem;
          text-align: center;
          font-family: PingFangSC-Light;
          font-size: 0.18rem;
          color: #ffffff;
        }
        .promiseDesc {
          text-align: center;
          font-family: PingFangSC-Medium;
          font-size: 0.26rem;
          color: #ffffff;
          letter-spacing: 2px;
        }
        .promiseLine {
          position: absolute;
          right: 0;
          top: 50%;
          height: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }

  .price {
    border-bottom: 1px solid #f5f5f5;
    background-color: white;
    padding: 0 0.4rem;
    .priceTitle {
      padding: 0.4rem 0;
      position: relative;
      font-size: 0.32rem;
      background: #fff;
      font-family: PingFangSC-Regular;
      color: #000000;
      text-align: left;
      span {
        padding: 0.4rem 0;
        position: relative;
        font-size: 0.32rem;
        background: #fff;
        font-family: PingFangSC-Regular;
        color: #000000;
        text-align: left;
      }
      i {
        color: #707070;
        position: absolute;
        right: 0.4rem;
        right: 0.4rem;
        top: 0.4rem;
      }
    }
    .priceTXT {
      padding: 0rem 0.5rem 0.4rem;
      background: #fff;
      margin-bottom: 0.2rem;
      line-height: 0.48rem;
      color: #707070;
      font-size: 0.28rem;
      p {
        margin-bottom: 0.2rem;
        line-height: 0.48rem;
        color: #707070;
        font-size: 0.28rem;
      }
    }
  }
}
.likesdiv {
  background-color: #f5f5f5;
  overflow: hidden;
  .article {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0.3rem 0;
    position: relative;
    .lp {
      // padding-top: 0.2rem;
      padding-right: 0.1rem;
      text-align: justify;
    }
    .cen {
      text-align: center;
      .xiangguanwenzhang {
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #000000;
        letter-spacing: 0;
      }
      .englishwenzhang {
        font-family: PingFangSC-Semibold;
        font-size: 12px;
        color: #000000;
        letter-spacing: 0;
      }
      .rp {
        padding-top: 0.2rem;
        padding-left: 0.1rem;
        text-align: justify;
      }
    }
  }
}

.complex {
  background: #fff;
  margin-bottom: 0.3rem;
  border-bottom: 1px solid #f5f5f5;
  border-top: 1px solid #f5f5f5;
  .complex2 {
    border-top: 1px solid #f5f5f5;
  }
  .likehot {
    display: flex;
    flex-flow: wrap;
    width: 100%;
    -webkit-box-pack: center;
    -webkit-justify-content: left;
    justify-content: left;
    -webkit-box-align: left;
    -webkit-align-items: center;
    align-items: center;
    margin: 0px;
    border-bottom: 1px solid #f5f5f5;
    .likehotList {
      float: left;
      width: 49.8%;
      /* border-top: 1px solid #f5f5f5; */
      border-right: 1px solid #f5f5f5;
      border-bottom: 1px solid #f5f5f5;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -o-box-sizing: border-box;
      -ms-box-sizing: border-box;
      font-size: 0;
      position: relative;
      padding-bottom: 0.1rem;
      height: 5.6rem;

      .productImg {
        width: 3.7rem;
        height: 3.71rem;
        margin: 0 auto 0;
        display: block;
      }
      .complexProductTitleDiv {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
        margin-bottom: 0.05rem;
        margin-left: 0.3rem;
        width: 88%;
        margin-top: 0.5rem;

        .complexProductTitle {
          color: #808080;
          font-size: 0.25rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }
      }
      .complex .productSalePrice {
        font-family: PingFangSC-Regular;
        font-size: 0.26rem;
        color: #000;
        /* margin-bottom: 0.05rem; */
        margin-right: 0.1rem;
        margin-left: 0.3rem;
        display: inline-block;
      }
      .zheshispan {
        font-family: PingFangSC-Regular;
        font-size: 0.26rem;
        color: #000;
        /* margin-bottom: 0.05rem; */
        margin-right: 0.1rem;
        margin-left: 0.3rem;
        display: inline-block;
      }
    }
  }
}

.help {
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  background: #fff;
  font-size: 0;
  margin-bottom: 0.3rem;
  text-align: left;

  .needHelpText {
    font-size: 0.2rem;
    color: #000;
    margin-right: 0.2rem;
    margin-left: 0.5rem;
    display: inline-block;
    vertical-align: middle;
  }

  .workTime {
    color: #ff7070;
    margin-right: 2.16rem;
    display: inline-block;
    font-size: 0.2rem;
    vertical-align: middle;
  }
  .lazy {
    width: 0.6rem;
    display: inline-block;
    vertical-align: middle;
  }
}

.app-down {
  width: 7.5rem;
  height: 0.88rem;
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #eaeaea;
  z-index: 3;
  ul {
    display: table;
    width: 100%;
    height: 0.88rem;
    vertical-align: middle;

    li {
      display: table-cell;
      vertical-align: middle;
      font-size: 0.3rem;
      text-align: center;
    }
    li:nth-child(1) {
      width: 33.33%;
      background-color: #fff;
      position: relative;
      i:nth-child(1) {
        position: absolute;
        left: 30%;
        top: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        font-weight: bold;
        color: #000;
      }
      i:nth-child(2) {
        position: absolute;
        left: 60%;
        top: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        color: #000;
        font-weight: bold;
      }
    }
    li:nth-child(2) {
      width: 33.33%;
      background-color: #f5f5f5;
    }
    li:nth-child(3) {
      width: 50%;
      background-color: #ffd444;
    }
  }
}
</style>
