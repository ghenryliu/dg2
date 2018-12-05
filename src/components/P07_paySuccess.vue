<template>
  <div class="main">

    <div class="content">
      <div class="tophead"></div>
      <div class="title">车牌缴费</div>
      <div class="info">
        <p><span :class="{detailsimg:retCode==1}"></span>缴费成功{{okornot}}</p>
        <p>{{greetingword}}感谢您的使用,祝您旅途愉快!</p>
      </div>

      <div class="freetimeremain">
        <p><span>免费离场时间剩余</span><span>{{}}20分钟</span></p>
      </div>


      <btn :btnText="btnText1" @submit="comfirm"></btn>
      <btn :btnText="btnText2" @submit="searchCar"></btn>

    </div>


  </div>


</template>

<script>

  import btn from "./P03_feeBtn"
  import btn2 from "./P08_searchCarBtnG"


  export default {
    name: "P07_paySuccess",

    components:{btn,btn2},
    data(){
      return{
        btnText1:'确定',
        btnText2:'导航寻车',

      }
    }
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

    display: flex;
    justify-content: center;



    /*background-color: darkolivegreen;*/

  }

  .content{
    width: 92%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /*background-color: gray;*/
  }

  .tophead{
    position:absolute;
    /*left:0;*/
    top:0;
    width: 100%;
    height:6.4rem;
    background: #353639;
  }
  .title{
    position:absolute;
    top:2.8rem;
    width:100%;
    font-family: PingFangSC-Regular;
    font-size: 1.8rem;
    color: #FFFFFF;
  }

  .info{
    margin-top: 5rem;
    width:15.6rem;
    height:6rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /*background-color: orangered;*/
  }


  .info p:first-child{
    font-family: PingFangSC-Medium;
    font-size: 2.4rem;
    color: #000000;
    height: 3.35rem;
  }

  .info p:first-child span{
    display: inline-block;
    margin-right: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    background: url("../assets/success.png") no-repeat center/ 100% 100%;

  }

  .detailsimg {
    background: url("../assets/failure.png") no-repeat center/ 100% 100% !important;
  }

  .freetimeremain{
    margin:7.75rem 0 7.5rem 0;
    /*background-color: darkolivegreen;*/
  }

  .freetimeremain span:first-child{
    font-family: PingFangSC-Regular;
    font-size: 1.4rem;
    color: #4A4A4A;
  }

  .freetimeremain span:last-child{
    font-family: PingFangSC-Regular;
    font-size: 1.8rem;
    color: #F5A623;
  }







</style>
