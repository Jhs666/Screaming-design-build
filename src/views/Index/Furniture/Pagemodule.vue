<template>
    <div>
        <div class="page-module-product" >
            <slot></slot>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

    .page-module-product{
            background-color: #fff;
            margin-bottom: 0.3rem;
            margin-bottom: 0.88rem;
            .page-module-title{
                padding: 0.26rem 0rem 0rem;
                h1 {
                    font-weight: bold;
                    font-size: 0.36rem;
                    line-height: 0.36rem;
                    color: #333;
                    margin: 0.3rem 0;
                    text-align: center;
                };
                h3 {
                    font-size: 0.24rem;
                    color: #808080;
                    margin-bottom: 0.2rem;
                    font-weight: normal;
                    text-align: center;
                    line-height: 0.2rem;
                }
            };

            .complex{
                .all{
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    font-size: 0.24rem;
                    line-height:normal;
                    color: #4A4A4A;
                    background: url(https://m.wowdsgn.com/static/img/arrow-7e182571cb6e748f212f5c413849017d.png ) no-repeat right center;
                    // background-size: 10%;
                    background-position-x:4.4rem;
                    background-position-y:.35rem;
                    padding: 0.3rem;
                    text-align: center;
                    padding: 0.3rem 0.4rem;
                    margin: 0;
                };
                .brand-details-list{
                    background: #fff;
                    overflow: hidden;
                    .flex-centerbox{
                        border-top: 1px solid #F5F5F5;
                        display: flex;
                        flex-flow: wrap;
                        width: 100%;
                        -webkit-box-pack: center;
                        align-items: center;
                        margin: 0px;
                        zoom: 1;
                        .li {
                            float: left;
                            width: 50%;
                            height: 5.9rem;
                            border-bottom: 1px solid #F5F5F5;
                            border-right: 1px solid #F5F5F5;
                            box-sizing: border-box;
                            -moz-box-sizing: border-box;
                            -webkit-box-sizing: border-box;
                            -o-box-sizing: border-box;
                            -ms-box-sizing: border-box;
                            a {
                                display: block;
                                width: 100%;
                                position: relative;
                                height: 4.9rem;
                                text-decoration: none;
                                color: #000;
                                img{
                                    display: block;
                                    width: 3.73rem;
                                    border: none;
                                     height: auto;
                                    box-sizing: border-box;
                                    -moz-box-sizing: border-box;
                                    -webkit-box-sizing: border-box;
                                    -o-box-sizing: border-box;
                                    -ms-box-sizing: border-box;
                                };
                                div {
                                    padding: 0rem 0.32rem;
                                    position: relative;
                                    margin-top: 0.2rem;
                                    font-size: 0;
                                    p {
                                        padding-top: 0.1rem;
                                        color: #808080;
                                        font-size: 0.28rem;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                        box-sizing: border-box;
                                        -moz-box-sizing: border-box;
                                        -webkit-box-sizing: border-box;
                                        -o-box-sizing: border-box;
                                        -ms-box-sizing: border-box;
                                    };
                                    span.sale-price {
                                        font-size: 0.32rem;
                                        margin-right: 0.1rem;
                                    }
                                }
                            }
                        }
                     }
                 }
            }
}

</style>
