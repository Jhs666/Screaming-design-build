<template>
    <div v-if="datalist.length">
        <Swiper v-if="datalist[0]" :key ="datalist[0].length">
          <div class="swiper-slide" v-for="data in datalist[0].moduleContent.banners" :key="data.id">
            <!-- <a :href="data.bannerLinkUrl"> -->
              <img :src="data.bannerImgSrc" > 
            <!-- </a> -->
          </div>
        </Swiper>
        <div class="commodity">
          <div class="con" >
            <div v-for="(n,index) in newdatalist"  :key="index">
              <div class="title">
                <h1>{{newdatalist[index].moduleName}}</h1>
                <h3>{{newdatalist[index].moduleDescription}}</h3>
              </div>
              <div class="banner" v-for="(data,n) in newdatalist[index].moduleContent.banners" :key="data.id">
                <!-- <a :href="newdatalist[index].moduleContent.banners[n].bannerLinkUrl"> -->
                 <img :src="newdatalist[index].moduleContent.banners[n].bannerImgSrc" />
                <!-- </a> -->
              </div>
            </div>
          <p>已经到底了</p>
        </div>
      </div>
    </div>
</template>

<script>

import Swiper from '../../components/swiper'
import commodity from '../../components/commodity'
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      newdatalist:[]
    }
  },
  components: {
    commodity,
    Swiper
  },


  mounted () {
    axios.get('/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1562384647110').then(res => {
      // console.log(res.data.data)
      this.datalist = res.data.data.modules
      this.newdatalist = this.datalist.slice(1)
      // console.log(this.datalist)
      // console.log(this.newdatalist)
    })
  },
}
</script>

<style lang="scss" scoped>
.con{
  margin-bottom: 0.88rem;
  p{
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 12px;
  }
}
.commodity {
  padding: 0.3rem 0.3rem 0rem;
  background-color: #fff;
    margin-bottom: 0.3rem;
  .title {
      padding: 0;
    padding-bottom: 0.26rem;
    h1 {
      font-weight: bold;
      font-size: 0.36rem;
      color: #333;
      margin: 0.3rem 0;
      text-align: center;
    }
    h3 {
      font-size: 0.24rem;
      color: #808080;
      margin-bottom: 0.2rem;
      text-align: center;
    }
  }
  .banner{
    img{
      width: 100%;
      height: auto;
    }
  }
}
</style>
