<template>
  <div class="main">
    <div class="content">
      <div class="block1"></div>
      <div class="title">智慧停车</div>
      <div class="block2"></div>

      <header>
        <p><span></span>{{commodity}}</p>
        <p></p>
      </header>

      <div class="block3">

        <div class="cartype">
          <ul>
            <li v-for="(item,index) in carTypeList"
                :class="{normalcar:activeIndex==0,newenergycar:activeIndex==1}"
                @click="showColor(index)">
              <!--1 v-for定义需要填充的内容，同时拿到内容的index item来自于cartype的数据  index是它们在数据中的索引-->
              <!--2 ：class 根据activeindex的值对  填充的内容进行渲染。而activaindex的值来自于showcolor的点击.-->
              <!--2 showcolor 函数定义 点击时返回该页面的index的值 activeIndex的值 为index ,而index为0 是normalcar， index为1
              是newenergycar-->
              {{item.carTypeKey}}
            </li>
          </ul>
        </div>

        <div class="inputbox" @click="showKey">
          <!--1 点击上面的任何一格 都将显示出键盘-->
          <div v-for=" i in count"
               :class="getBoxStyle(i-1)">
            <!--{{getLetter(i - 1) }}-->
            <!--1 getchunkstyle: 根据count的值来定义 imputitem的颜色样式,=8->newcar  else normal-->
            <!--删除vfor中的index (i,index)-->
            <!--删除了get中的i-1中的-1-->
            <!--v-bind:key="i"   什么作用????-->
            <!--@click="showKey"   ，暂时都没有什么作用???.-->
            <!--@click="deleteCarNo"如果已经填满再 点击一次删除掉全部，相当于初始化  -->
            <!--4  @click="deleteCarNo"，用处 ？？？ 先拿掉-->


            {{getLetter(i-1)}}
          </div>
        </div>



        <div class="carlist">
          <ul>
            <li v-for="(item,index) in carNoList"
                :class="{carnoselect:carNoSelectIndex===index}"
                @click="selectCarNo(item,index)">
              {{item.slice(0,2,'-')+'-'+item.slice(2) }}

              <!--item是显示在car中的-->
              <!--使用selectCarNo来获得carno和carno的index-->
              <!--span 标签用来显示选中标签-->
              <span v-show="showCarSelectMark"
                    :class="{carnoselectmark:carNoSelectIndex===index}">
              </span>
            </li>
          </ul>
        </div>
      </div>


      <btn btnText="停车缴费" @submit="submit"></btn>
      <btn2 btn2Text="导航寻车" ></btn2>






      <!--<div>车辆缴费</div>-->
      <!--<div>导航寻车</div>-->
    </div>


    <div class="hidekey" v-if="startinput" @click="hideKey"></div>

    <!--<div class="isshowkey" v-if="begininput" @click="isShowKey"></div>-->
    <!--1根据begininput的值来判断是都需要显示isshowkey-->
    <!--2   @click="isShowKey" 在点击自身时隐藏键盘
    而除了特定的位置之外,整个界面上的区域都可以设为点击即可隐藏键盘.
    区域大小设置在keyboard组件中-->

    <!--3 定义一个hidekey的类  ,来隐藏键盘-->

    <keyBoard v-on:select="selectLetter"
              v-on:delete="deleteLetter"
              v-show="startinput"
              :carNoInputIndex="carNoInputIndex">
      <!--2  se le ct 必须和子组件keyboard中的$emit 中的se le ct  保持一致-->
      <!--3  de le te 必须和子组件keyboard中的$emit 中的de le te  保持一致-->
      <!--4  ca rNoI nputI ndex 作为和子组件的连接，在子组件的props中必须有-->
      <!--1  CarN oIn putI ndex  在子组件中的props 用来渲染子组件
       根据它的值来返回对应的键盘页面  省份值/数字字母值等-->

    </keyBoard>




  </div>
</template>

<script>
  import keyBoard from "./P02_keyBoard"
  import btn from "./P03_feeBtn"
  import btn2 from "./P04_searchCarBtn"

  import { Toasts , open ,close} from "../mintUi";



  export default {
    name: "Page01_carNoInput",
    components: {keyBoard,btn,btn2},
    data() {
      return {
        commodity: '东莞国际汇一城',//社区名称

        carTypeList: [{carTypeKey: '普通车'}, {carTypeKey: '新能源车'}],  //carType: [{cartype: '普通车'}, {cartype: '新能源车'}],
        activeIndex: 0,

        carno: '',
        count: 7,


        carNoList: ['沪A266YH', '沪CG768GT', '粤AQD8JB'],
        carNoSelectIndex: -1,//初始值,表示在开始时没有车牌号被选中，此时没有渲染效果.  ==> carNoListIndex

        showCarSelectMark: false,   //==> showCarNoList

        startinput: false,  //用于显示或隐藏键盘！  begininput
      }

    },


    created() {
      // localStorage.removeItem('carNoList')
      // localStorage.removeItem('carNo')
      document.title = '智慧停车'

      if (localStorage.getItem('carNo') == null) {
        this.carno = '粤'
      } else {
        this.carno = localStorage.getItem('carNo')
        localStorage.getItem('carNo').length == 8 ? this.activeIndex = 1 : this.activeIndex = 0
        this.begininput = false
      }
    },

    watch: {  //用于按车型来  对 输入框进行渲染.
      activeIndex: function (val) {
        if (val == 1) {
          this.count = 8;
          // if (localStorage.getItem('carNo') != null && localStorage.getItem('carNo').length == 8) {
          //   this.carno = localStorage.getItem('carNo')}
        }
        else {
          this.count = 7;
          // if (localStorage.getItem('carNo') != null && localStorage.getItem('carNo').length == 7) {
          //   this.carno = localStorage.getItem('carNo')           }
        }
      }
    },


    methods: {

      //车型的函数
      showColor(index) {
        this.activeIndex = index;  //在点击后,活动的页面的得到赋值(0或者1)
        this.carNoSelectIndex = -1  //将选mark隐藏掉
      },

      //输入框的格式函数
      getBoxStyle(index) {
        if (this.count == 8) {
          return 'boxstyle newenergycarcolor'
        }
        else {
          return 'boxstyle normalcarcolor'
        }
      },

      //输入框输入函数
      getLetter(index) {    //获得车牌号码的函数
        if (index >= this.carno.length) {
          return ''
        }
        return this.carno[index]
      },

      //选择车型函数
      selectCarNo(val, index) {
        if (val.length == 8) {
          this.activeIndex = 1;
        }
        else {
          this.activeIndex = 0;
        }
        this.showCarSelectMark = true;  //显示标签
        this.startinput = false;//当选中时隐藏键盘
        this.carno = val;//
        this.carNoSelectIndex = index;
      },

      //键盘的函数
      showKey() {
        this.startinput = true
      },
      hideKey() {
        this.startinput = false
      },

      selectLetter(value) {
        if ((this.count == 7 && this.carno.length == 7) || (this.count == 7 && this.carno.length == 8)) {
          return//结束输入
        }
        this.carno = this.carno + value
      },
      deleteLetter() {
        this.carno = this.carno.substr(0, this.carno.length == 0 ? 0 : this.carno.length - 1)
      },

      submit() {
        console.log("ABC")

        this.activeIndex == 0 ? this.carno = this.carno.substring(0, 7) : this.carno = this.carno.substring(0, 8)
        //substring() 方法用于提取字符串中介于两个指定下标之间的字符  .即提取车牌号用于提交
        if ((this.carno.length != 7 && this.activeIndex == 0) || (this.carno.length != 8 && this.activeIndex == 1)) {
          Toasts('车牌格式输入有误!!!')
          return
        }

        open()
        inputcarno({'carNo': this.carno})
          .then(data => {
            close()
            if (localStorage.getItem('carNoList') != null) {
              this.carNoList = localStorage.getItem('carNoList').split(',')
            }

            localStorage.setItem('carNo', this.carno)
            if (!this.carNoList.includes(this.carno)) {
              this.carNoList.push(this.carno)
            }

            localStorage.setItem('carNoList', this.carNoList)
            const {startTime, endTime, totalFee, carNo, couponValue, orderNo} = data
            this.$router.push({
              path: 'PayDetails',
              query: {
                'startTime': startTime,
                'endTime': endTime,
                'totalFee': totalFee,
                'carNo': carNo,
                'couponValue': couponValue,
                'orderNo': orderNo
              }
            })
          })
          .catch(msg => {
            close()
            Toasts(msg)
          })
      },
    },

    computed: {
      carNoInputIndex() {
        if (this.carno.length == 0) {             //此时需要输入省份
          return 0
        }
        else if (this.carno.length == 1) {           //此时必须输入字母
          return 1
        }
        else if ((this.activeIndex == 0 && this.carno.length == 6) || (this.activeIndex == 1 && this.carno.length == 7)) {
          return 3   //此时可以输入除港澳学领 等字符的所有字符
        }
        return 2    //此时可以输入所有字符
      }
    }

  }

</script>

<style scoped>

  * {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 10px;
  }

  .main{
    top:0rem;
    right:0rem;
    bottom:0rem;
    left:0rem;

    position:fixed;

    display:flex;
    /*flex-direction:row;*/  /*main类中只有一个content元素,context居中*/
    justify-content: center;

    background-color: gray;
  }

  .content{
    display:flex;
    flex-direction:column;
    display: -webkit-flex;
    -webkit-flex-direction: column;

    margin-top:2.8rem;
    width:92%;
    /*background-color:gray;*/
  }

  .block1{
    position: absolute;
    top:0rem;
    left:0rem;
    width:100%;
    height:6.4rem;
    background: #353639;
    z-index: -1;
  }
  .title{
    text-align: center;

    font-family: PingFangSC-Regular;
    font-size: 1.8rem;
    color: #FFFFFF;
  }
  .block2{
    position: absolute;
    top:6.4rem;
    left:0rem;
    width:100%;
    height:17.5rem;
    background:  #64C6E7;
    z-index: -1;
  }

  header{
    margin-top:3.6rem;
    display:flex;
    /*flex-direction: row;*/
    align-items: center;
    justify-content: space-between;
  }
  header p:first-child {           /*header中的第一个p元素*/
    font-family: PingFangSC-Regular;
    font-size: 1.8rem;
    color: #FFFFFF;
    letter-spacing: 0;
  }
  header p span{
    display: inline-block;
    width: 1em;             /*正方形边长*/
    height: 1rem;
    border-radius: 50%;     /*在>=50%时就是一个圆*/
    background: #fff;
    margin-right: 1rem;
  }
  header p:last-child {           /*header中的最后一个p元素*/
    width: 12.5rem;
    height: 5rem;
    background: url("../assets/carPic.png") no-repeat center/ 100% 100%;
  }

  .block3{
    box-sizing: content-box;/*使用只有在框框中*/

    display:flex;
    flex-direction: column;
    align-items: center;

    padding:2.5rem 0rem;


    background: rgba(255,255,255,0.90);
    box-shadow: 0 2px 14px 0 rgba(39,52,125,0.10);
    border-radius: 0.5rem;

  }

  .cartype{
    /*margin: 2.5rem 0rem 0rem 0rem;*/  /*在设置了父的内padding之后， cartype的margin没有意义啦*/
    /*border-radius: 0.2rem;*/    /*重复定义*/
    /*height:3.5rem;*/            /*重复定义*/
  }
  .cartype ul{
    /*!*width:18rem;*! /  /*重复定义*/
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    -webkit-justify-content: space-around;
    /*margin: 0 auto;*/
    list-style: none;   /*去除列表前面的小标签*/

    /*background-color: #9b9b9b;*/
  }
  .cartype ul li{
    box-sizing: border-box;
    width:9rem;
    line-height:3.5rem;
    font-size:1.2rem;
    color:#1C75BC;
    text-align: center;


  }
  .normalcar {
    border: 0.05rem solid #1C75BC;
    color: #1C75BC;
    border-radius: 0 0.5rem 0.5rem 0;
  }
  .normalcar:first-child {
    background: #1C75BC;
    color: #fff;
    border-radius: 0.5rem 0 0 0.5rem;
  }
  .newenergycar {
    border: 0.05rem solid #63C8A9;
    color: #63C8A9;
    border-radius: 0.5rem 0 0 0.5rem;
  }
  .newenergycar:last-child {
    background: #63C8A9;
    color: #fff;
    border-radius: 0 0.5rem 0.5rem 0;
  }



  .inputbox{
    margin-top: 2rem;
    padding:0 1.5rem;  /*padding的设置为挤压box的尺寸！！！*/

    box-sizing: border-box;

    /*height: 4.5rem;*/  /*重复定义*/
    width: 100%;/*在孩子的宽度是不确定的情况下，需要在父亲这里设置宽度*/

    display: flex;  /*设置为flex时，默认按row排列，不设置时  继承父亲的默认按纵轴排列*/  /*flex-direction: row;*/
    display: -webkit-flex;

    background-color: greenyellow;
  }
  .boxstyle{
    width: 0.5rem; /*设置无意义:因为box的宽度是活动的：
                    *设置的一个作用是使得 每个方格的宽度一致,如果
                    *如果不设置的话，方格的宽度回随方格中内容的变化（如汉字，数字）而变化.*/
    border: 0.05rem solid #646464;
    /*border-left: 1rem;*/
    height: 4.5rem;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: center;
    color: #1b1c1c;
    line-height: 4.5rem;
    font-size: 1.8rem;
    font-family: "Microsoft Yahei", "Arial", "Helvetica";
  }
  .normalcarcolor{
    border: 0.05rem solid #646464;
  }
  .normalcarcolor:not(:last-child) {
    border-right: none;
  }
  .newenergycarcolor{
    color: #63C8A9;
    border: 0.05rem solid #63C8A9;
  }
  .newenergycarcolor:not(:last-child) {
    border-right: none;
  }


  .carlist{
    box-sizing: border-box;
    margin-top:2.5rem;
    width: 100%;
    padding:0 2.3rem;
    /*display: block;*/   /*????*/


    /*display: flex;*/
    /*justify-content: space-between;*/
    background-color:yellowgreen;

  }

  .carlist ul{
    height:2.5rem;

    display: flex;
    display: -webkit-flex;
    align-content: space-between;
    justify-content: space-between;
    list-style: none;
    text-align: center;
  }

  .carlist ul li{
    position: relative;/*在设置又上角标签  的时候起作用！！！*/

    width:7rem;
    /*height:2.5rem;*/
    font-family: PingFangSC-Regular;
    font-size: 1.2rem;
    color: #636363;
    letter-spacing: 0;

    line-height: 2.5rem;
    border: 0.05rem dotted #979797;

  }


  .carnoselect {
    background: #E6E6E6 !important;
    border:none;
  }



  .carlist ul li span.carnoselectmark {   /*span和后面的类之间不能有空格*/
    display: inline-block;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: -0.75rem;
    right: -0.75rem;
    border: none;
    background: url("../assets/carSelectMark.png") no-repeat center/1.5rem 1.5rem;
    /*background-color:blue;   !*设置背景颜色*!*/
    /*z-index: 3;*/
  }



  .hidekey {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0%)                          ;/*rgba(255, 255, 255, 0);*/
    z-index: 3;
  }


  /*keyBoard {*/
  /*bottom:0;*/
  /*}*/


</style>
