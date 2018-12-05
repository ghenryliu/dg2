<template>

  <div class="main">

    <div class="block1"></div>
    <div class="title">缴费订单</div>
    <div class="content">


        <div class="paytitle">
          <p>东莞国际汇一城</p>
          <p>{{carNo}}沪A266YH</p>
        </div>

        <div class="orderdetail">
          <ul>
            <li>
              <p><span></span>入场日期</p>
              <p>{{newStartDate}}2018/08/21</p>
            </li>
            <li>
              <p><span></span>入场时间</p>
              <p>{{newStartTime}}10：20</p>
            </li>

            <li>
              <p><span></span>停车时长</p>
              <p>{{stayTime}}2小时56分</p>
            </li>

          </ul>
        </div>

        <div class="order">
          <p>
          <span>需缴费</span>
          <span>￥18.00</span>
          </p>
        </div>

        <btn3 btnText="立即支付" @submit="pay">立即支付</btn3>





    </div>
    <p>缴费后请在20分钟内离场，超时将重新计费</p>
  </div>


</template>

<script>

  import btn3 from "./P06_payBtn"
  // import {myGetTime, timestampToTime} from '../Time'
  // import btn from './BtnBox'
  // import {Toasts,open,close} from "../mintUi";


  export default {
    name: "P05_order",

    components: {btn3},
    }
</script>

<style scoped>

  * {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .main{

    top: 0;
    bottom:0;
    left:0;
    right:0;


    position:fixed;  /*fixed和absolute的区别*/

    display: flex;
    flex-direction: column;            /* 按轴向来进行排列 */
    /*justify-content: center;    !* 让元素在列的中心*!*/
    background-color: #F0EFF6;
    align-items: center;
    box-sizing: border-box;


    /*box-sizing: border-box;          !* 此两行的作用？？？*!*/
    /*padding: 4% 2.5rem 0 2.5rem;    !* 此两行的作用？？？*!*/
  }

  .block1{
    /*position:relative;*/           /*使用的height和width已经将位置确定！*/
    /*top:0;*/
    /*left: 0;*/
    height:6.4rem;
    width:100%;
    background: #353639;
  }
  .title{
    position:absolute;
    top: 2.8rem;
    width: 100%;
    text-align: center;

    font-family: PingFangSC-Regular;
    font-size: 1.8rem;
    color: red;
  }


  /*.content{*/
    /*!*box-shadow: 0 2px 14px 0 rgba(39, 52, 125, 0.10);*!*/
    /*!*border-radius: 1.5rem;*!*/
    /*!*background: url("../assets/top.png")  #fff no-repeat top /100% 1.5rem;*!*/



    /*background-color: lightgoldenrodyellow;*/
  /*}*/



 .main .content{
    width:85%;
    margin-top:1.5rem ;

   display:flex;
   flex-direction:column;
   display: -webkit-flex;
   -webkit-flex-direction: column;
   /*justify-content: center;    !* 让元素在主轴，这里的株洲是列的中心*!*/
   align-items: center;
   /*width:100%;*/
   /*margin-top: 6.4rem;*/

    box-shadow: 0 2px 14px 0 rgba(39, 52, 125, 0.10);
    border-radius: 1.5rem;
    background: url("../assets/top.png")  #fff no-repeat top /100% 1.5rem;
  }

  .paytitle{
   /*margin-top: 3rem;*/
 }

  .paytitle p:first-child{
   margin-top:3rem;
   font-family: PingFangSC-Regular;
   font-size: 2.4rem;
   color: #000000;
 }

  .paytitle p:last-child{
    font-family: PingFangSC-Regular;
    font-size: 1.8rem;
    color: #636363;
    letter-spacing: 0;

    margin: 2.5rem 0 3.5rem 0;
  }



  .orderdetail{
    width:100%;
    position:relative;                 /*用于添加两个半圆*/


    display: flex;
    justify-content: center;

    /*border-top: 1px dashed #ccc;*/
    /*border-bottom: 1px dashed #ccc;*/

    /*background-color: orange;*/
  }

  .orderdetail:before  {
    content: '';
    position: absolute;
    width: 2rem;
    height: 4rem;
    bottom: -2rem;
    right: -1rem;
    transform: rotate(180deg);
    background: url("../assets/yuan.png")  no-repeat center/100% 100%;
  }

  .orderdetail:after {
    content: '';
    position: absolute;
    width: 2rem;
    height: 4rem;
    bottom: -2rem;
    left: -1rem;
    background: url("../assets/yuan.png")  no-repeat center/100% 100%;
  }

  .orderdetail ul{
    width: 88%;
    height: 8.75rem;
    box-sizing: border-box;
    padding: 2rem 1rem 2.3rem 1rem;
    border-top: 1px dashed #ccc;
    border-bottom: 1px dashed #ccc;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-content: space-between;
    align-items: center;
    box-sizing: border-box;


    /*background-color: deeppink;*/

  }

  .orderdetail ul li span{
    display: inline-block;
    width: 0.5em;             /*正方形边长*/
    height: 0.5rem;
    border-radius: 50%;        /*在>=50%时就是一个圆*/
    background: #4A90E2 100%;
    margin-right: 1rem;
  }

  .orderdetail ul li p{
    font-family: PingFangSC-Regular;
    font-size: 1rem;
    color: #9B9B9B;

  }
  .orderdetail ul li p:last-child{
    margin-top: 1rem;
    font-family: PingFangSC-Regular;
    font-size: 1.4rem;
    color: #4A4A4A;
  }

  .order{
    width:88%;
    margin:2.5rem 0 5rem 0;

    border-bottom: 1px dashed #ccc;
  }

  .order p {
    /*background-color: green;*/
    height: 5.5rem;
    display: flex;
    justify-content: center;
    align-items: start;
    margin-bottom: 2rem;

    background-color: orange;



  }

  .order p span:first-child{
    font-family: PingFangSC-Regular;
    font-size: 1.4rem;
    color: #636363;
    letter-spacing: 0;
  }

  .order p span:last-child{
    font-family: PingFangSC-Regular;
    font-size: 2.4rem;
    color: #63C8A9;
    letter-spacing: 0;

  }























  /*.commodity{*/
    /*margin-top:1.5rem;*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: 2.4rem;*/
    /*color: #000000;*/
  /*}*/
  /*.carno{*/
    /*margin-top:2.5rem;*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: 1.8rem;*/
    /*color: #636363;*/
    /*letter-spacing: 0;*/
  /*}*/
  /*hr{*/
    /*width:87.7%;*/
    /*border: 0.05rem dashed #979797;  !*   #979797  *!*/
  /*}*/


  /*.maincontent hr:nth-child(3){*/
    /*margin-top: 3.5rem;*/
    /*!*border: 0.05rem dashed black;*!*/

  /*}*/


  /*.maincontent hr:nth-child(5){*/
    /*margin-top: 2rem;*/
  /*}*/
  /*.maincontent hr:nth-child(7){*/
    /*margin-top: 2rem;*/
  /*}*/

  /*.orderdetail{*/
    /*margin-top:2rem;*/
    /*width:82%;*/
    /*height:4.4rem;*/

    /*display: flex;*/

    /*flex-direction: column;*/
    /*justify-content: space-between;*/
    /*background-color: darkolivegreen;*/
  /*}*/

  /*.orderdetail > ul{*/
    /*list-style:disc ;*/
    /*display:flex;*/
    /*justify-content: space-between;*/
  /*}*/

  /*.orderdetail ul li p span {*/

  /*}*/

  /*.orderdetail ul li > p {*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: 3px;*/
    /*color: red;*/

    /*background: green;*/

  /*}*/


  /*hr:before  {*/
    /*content: '';*/
    /*position: absolute;*/
    /*width: 2rem;*/
    /*height: 4rem;*/
    /*bottom: -2rem;*/
    /*right: -1rem;*/
    /*transform: rotate(180deg);*/
    /*background: url("../assets/yuan.png")  no-repeat center/100% 100%;*/
  /*}*/

  /*hr:after {*/
    /*content: '';*/
    /*position: absolute;*/
    /*width: 2rem;*/
    /*height: 4rem;*/
    /*bottom: -2rem;*/
    /*left: -1rem;*/
    /*background: url("../assets/yuan.png")  no-repeat center/100% 100%;*/
  /*}*/







  /*.order{*/
    /*margin-top: 2.5rem;*/

    /*height:5.5rem;*/
    /*width:69%;*/

    /*display: flex;*/
    /*!*flex-direction: row;*!*/

    /*justify-content: center;*/
    /*align-items: center;*/

    /*background-color: orangered;*/


  /*}*/

  /*.order :first-child{*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: 1.4rem;*/
    /*color: #636363;*/
    /*letter-spacing: 0;*/
  /*}*/

  /*.order :last-child{*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: 2.4rem;*/
    /*color: #63C8A9;*/
    /*letter-spacing: 0;*/
  /*}*/


  /*.main :last-child{*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: 1rem;*/
    /*color: #9B9B9B;*/
  /*}*/





  /*.block3{*/

    /*width:100%;*/
    /*box-sizing: content-box;!*使用只有在框框中*!*/

    /*display:flex;*/
    /*flex-direction: column;*/
    /*align-items: center;*/

    /*padding-top:1.5rem;*/


    /*background: rgba(255,255,255,0.90);*/
    /*box-shadow: 0 2px 14px 0 rgba(39,52,125,0.10);*/
    /*border-radius: 0.5rem;*/

    /*!*background-color: orangered;*!*/


  /*}*/

  /*.block3 .pic{*/
    /*!*display: inline-block;*!*/
    /*box-shadow: 0 2px 14px 0 rgba(39, 52, 125, 0.10);*/
    /*border-radius: 1.5rem;*/
    /*background: url("../assets/top.png") #4146ff no-repeat top /100% 1.5rem;*/

  /*z-index: 3}*/



  /*!*.block3 .tophead {*!*/
     /*!*!*display: inline-block;*!*!*/
     /*!*!*position: absolute;*!*!*/
     /*!*!*width: 1.5rem;*!*!*/
     /*!*!*height: 1.5rem;*!*!*/
     /*!*!*top: -0.75rem;*!*!*/
     /*!*!*right: -0.75rem;*!*!*/
     /*!*!*border: none;*!*!*/
     /*!*background：url("../assets/top.png") }*!*/



  /*.main {*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*position: absolute;*/
    /*top: 0;*/
    /*right: 0;*/
    /*width: 100%;*/
    /*min-height: 100%;*/
    /*background: #F0EFF6;*/
    /*box-sizing: border-box;*/
    /*padding: 4% 2.5rem 0 2.5rem;*/
  /*}*/

  /*.main .content {*/
    /*box-shadow: 0 2px 14px 0 rgba(39, 52, 125, 0.10);*/
    /*border-radius: 1.5rem;*/
    /*background: url("../assets/top.png")  #fff no-repeat top /100% 1.5rem;*/
  /*}*/


</style>
