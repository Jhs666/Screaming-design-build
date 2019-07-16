<template>
    <div v-if="isShow">
      <Swiper v-if="datalist[0]" :key ="datalist[0].length">
          <div class="swiper-slide" v-for="data in datalist[0].moduleContent.banners" :key="data.id">
            <img :src="data.bannerImgSrc" >
          </div>
      </Swiper>
      <smallSwiper>
        
        <div class="container" v-if="newSwiperList.length">
          <div class="title" >
            <h1>{{smallSwiperList.moduleName}}</h1>
            <h3>{{smallSwiperList.moduleDescription}}</h3>
          </div>

          <div class="swiper-container xpp" >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide" v-for="data in smallSwiperList.moduleContent.products" :key="data.productId">
                <div class="list" @click = "simghandelclick(data.productId,data.parentProductId)">
                  <img :src="data.productImg" />
                  <div class="text">
                    <p>{{data.productTitle}}</p>
                    <span>￥{{data.originalPrice}}</span>
                  </div>
                </div>
              </div>

           </div>
      </div>
    <div class="lianjie" @click="allhandelclick1(smallSwiperList.moduleContent.id)">
        查看全部
    </div>

    </div>
        </smallSwiper>
         <div class="contain" >
            <Pagemodel v-for="(n,index) in 4" class="kuai" :key="index">
                    <div class="page-module-title" v-if="newlist.length">
                        <h1>{{newlist[index].moduleName}}</h1>
                        <h3>{{newlist[index].moduleDescription}}</h3>
                    </div>
                    <div class="complex">
                        <div class="brand-details-list">
                            <div class="flex-centerbox" v-if="newlist.length">
                                <div class="li"  v-for="data in newlist[index].moduleContent.products.slice(0,6)" :key="data.productId" @click="lihandleclick(data.productId,data.parentProductId)">
                                    <a href="javascript:;" >
                                        <img class="lazy" :src="data.productImg" style="display: block;">
                                        <div>
                                            <p>{{data.productName}}</p>
                                            <span class="sale-price">￥{{data.sellPrice}}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="all" v-if = 'isShow' @click="allhandelclick2(newlist[index].moduleContent.id)">查看全部</div>
                    </div>
            </Pagemodel>
            <p >已经到底了</p>
         </div>
    </div>
</template>

<script>
import Swiper from '@/components/swiper'
import smallSwiper from './Furniture/swiper-small'
import Pagemodel from '@/views/Index/Furniture/Pagemodule'
import axios from 'axios'
export default {
  data () {
    return {
      smallSwiperList: null,
      newSwiperList:[],
       datalist: [],
        index: 0,
        newlist: [],
        isShow: false

    }
  },

  
  mounted () {
    
    axios.get('/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1562636092431').then(res => {
      this.newSwiperList = res.data.data.modules
      this.smallSwiperList = res.data.data.modules[1]
      console.log(this.smallSwiperList)
      console.log(this.newSwiperList)
      // console.log(this.smallSwiperList[1].moduleContent.id)
    })

    axios.get('/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1562636092431').then(res => {
      this.isShow = true
      this.datalist = res.data.data.modules
      this.newlist = res.data.data.modules.slice(2)
      // console.log(this.datalist)
      // console.log(this.newlist[0].moduleContent.id)

      // console.log(this.datalist[0])
    })
  },
  methods:{
    simghandelclick(id,myid){
      console.log(id)
      this.$router.push(`/item/${id}`)
      this.$store.commit("changemyid",myid)
    },
    lihandleclick(id,myid){
      console.log(id)
      this.$router.push(`/item/${id}`)
      this.$store.commit("changemyid",myid)
    },
    allhandelclick1(id){
      console.log(id)
      this.$router.push(`/productGroup/${id}`)
    },
    allhandelclick2(id){
      console.log(id)
      this.$router.push(`/productGroup/${id}`)
    }

  },
  components: {
    smallSwiper,
    Swiper,
    Pagemodel

  }
}
</script>

<style lang="scss" scoped>
  html,body{
    background:#ccc;
}
    .contain{
        margin-bottom:0.88rem !important;
        line-height: 50px;
        text-align: center;
        //  background-color: #fff;
    };
    .kuai{
        margin-bottom:0.3rem;
        background:pink
    }
</style>
