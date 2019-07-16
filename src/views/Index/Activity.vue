<template>
    <div v-if="datalist.length">
        <img class = "image" :src="datalist[0].moduleContent.bannerImgSrc"/>
         <div class="contain" >
            <Pagemodel v-for="(n,index) in 4" class="kuai" :key="index" >
                    <div class="page-module-title" v-if="newlist.length">
                        <h1>{{newlist[index].moduleContent.name}}</h1>
                        <h3>{{newlist[index].moduleDescription}}</h3>
                    </div>
                    <div class="complex">
                        <div class="brand-details-list">
                            <div class="flex-centerbox" v-if="newlist.length">
                                <div class="li"  v-for="data in newlist[index].moduleContent.products" :key="data.productId" @click="lihandelclick(data.productId,data.parentProductId)">
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
                        <div class="all" @click="allhandelclick(newlist[index].moduleContent.id)">查看全部</div>
                    </div>
            </Pagemodel>
            <router-link to="/welcome2" tag="div">
              <img :src="datalist[5].moduleContent.bannerImgSrc" class = "image">
            </router-link>
            <p >已经到底了</p>
        <div>
        </div>
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
       datalist: [],
        index: 0,
        newlist: [],
        isShow: false

    }
  },
  mounted () {
    axios.get('/v2/page?pageId=1&tabId=10010&currentPage=1&pageSize=8&_=1562653657552').then(res => {
    //   this.isShow = true
      this.datalist = res.data.data.modules
      this.newlist = res.data.data.modules.slice(1)
      console.log(this.newlist)


    })
  },
  methods:{
    lihandelclick(id,myid){
      console.log(id)
      this.$router.push(`/item/${id}`)
      this.$store.commit("changemyid",myid)
    },
     allhandelclick(id){
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
    .image{
        width: 100%;
    }
</style>
