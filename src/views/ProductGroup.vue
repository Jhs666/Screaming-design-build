<template>
    <div>
        <div class="proBanner">
            <img src="https://img.wowdsgn.com/product-group/images/af662434-7008-4a93-8575-15ebeadc70d4_2dimension_750x600.jpg?imageslim" alt="">
        </div>
        <div class="complex">
            <div class="brand-details-list content">
                <div class="clearfix ul flex-cont flex-centerbox lists" id="products">
                    <div class="li" v-for="data in productlist" :key="data.productId" @click="handleChangePage(data.productId,data.parentProductId)">
                        <img :src="data.productImg" alt="" class="complexProductImg  lazy">
                        <div class="complexProductTitleDiv">
                            <p>{{data.productTitle}}</p>
                        </div>
                        <span>￥{{data.originalPrice}}</span>
                    </div>
                </div>
                <div class="dropload-down">
                    <div class="dropload-noData">没有更多了</div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { log } from 'util';
export default {
    data(){
        return{
            productlist:[]
        }
    },
    mounted(){
        axios({
            url:`/pages/productGroup/${this.$route.params.id}/products?currentPage=1&_=1562722564907`
        }).then((res)=>{
            this.productlist = res.data.data
                console.log(res.data.data)
        })
    },
    methods:{
        handleChangePage(productItemId,myid){
            console.log(productItemId);
            this.$router.push(`/item/${productItemId}`)
            this.$store.commit("changemyid",myid)
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
div{
    display: block;
}
.proBanner{
    width: 100%;
    img{
        width: 100%;
    }
}
#products{
    overflow: hidden;
}
    .li{
    float: left;
    width: 49.8%;
    border-right: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    box-sizing: border-box;
    font-size: 0;
    position: relative;
    padding-bottom: 0.1rem;
    height: 5.6rem;
    .complexProductTitleDiv {
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    margin-bottom: 0.05rem;
    margin-left: 0.3rem;
    width: 88%;
    margin-top: 0.5rem;
    p{
    color: #808080;
    font-size: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: inline-block;
    vertical-align: middle;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    }
    }
    img.complexProductImg   {
    height: 3.71rem;
    margin: 0 auto 0;   
     }
    span{
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #000;
    margin-right: 0.1rem;
    margin-left: 0.3rem;
    }
}
.dropload-down{
    text-align: center;

div.dropload-noData{
    width: 100%;
    height: 1rem;
    line-height: 1rem;   
    font-size: 12px;
    }
}
    

</style>

