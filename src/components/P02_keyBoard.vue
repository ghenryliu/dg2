<template>
  <div class="keyboard">
    <div class="container">
      <div v-for=" (item,index) in items"
           :class="unusable"
           class="line">
        <!--1  items是一个函数，根据catNoInputIndex返回需要的页面的按键值-->
        <!--2  :class="unusable”  如果字符属于不能使用的字符,使用unseable来尽心渲染-->
        <!--3  将items换作return中的keyboarditem可以调试键盘界面！！！-->
        <span v-for="unit in item"
              class="item"
              @click="selectInKeyBoard(unit)">
          {{unit}}
          <!--1 unit展示键盘-->
          <!--2 点击键盘的函数-->
        </span>

        <div v-if="index==items.length-1"
             class="delete"
             @click="deleteInKeyBoard">
          <!--1 因为只需要显示最后一个删除键， 而按照循环的要求会显示4个  使用index来控制显示的是哪一个删除键-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>


  const keyboarditems_0 = [
    ['粤', '川', '津', '沪', '渝', '蒙', '新', '藏', '宁', '桂'],
    ['浙', '晋', '冀', '青', '鲁', '豫', '苏', '皖', '闽'],
    ['赣', '湘', '鄂', '京', '琼', '甘', '陕', '贵'],
    ['云', '黑', '吉', '辽', '港', '澳']
  ]
  const keyboarditems_1 = [
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'P', '港', '澳'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '学'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M','领', '', '']]
  const keyboarditems_2 = [
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'P', '港', '澳'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '学'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M','领', '', '']]
  const keyboarditems_3 = [
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'P', '港', '澳'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '学'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '领', '','']]



  export default {
    name: "Page02_keyBoard",
    props:['carNoInputIndex'],   //和父组件的联系
    data(){
      return{
        inputIndex:0, //？？？？
        // keyboarditems: [['粤', '川', '津', '沪', '渝', '蒙', '新', '藏', '宁', '桂'],
        //   ['浙', '晋', '冀', '青', '鲁', '豫', '苏', '皖', '闽'],
        //   ['赣', '湘', '鄂', '京', '琼', '甘', '陕', '贵'],
        //   ['云', '黑', '吉', '辽', '港', '澳']],
      }
    },

    computed: {
      unusable:function () {
        if (this.carNoInputIndex == 1) {
          return "count"    //返回一个类——count
        }
        else if (this.carNoInputIndex == 2) {
          return "special"
        }
      },


      // items:function(){
      //   if(this.carNoInputIndex==0){
      //     return keyboarditems_0
      //   }
      //   if(this.carNoInputIndex==1){
      //     return keyboarditems_1
      //   }
      //   if(this.carNoInputIndex==2){
      //     return keyboarditems_2
      //   }
      //   if(this.carNoInputIndex==3){
      //     return keyboarditems_3
      //   }
      // }

      items: function () {
        switch (this.carNoInputIndex) {
          case 0:
            return keyboarditems_0;
          case 1:
            return keyboarditems_1;
          case 2:
            return keyboarditems_2;
          case 3:
            return keyboarditems_3;
        }
      }
    },
    methods:{
      selectInKeyBoard:function(value){
        if(this.carNoInputIndex==1){  //==1时禁止输入字母
          for(var i=0;i<10;i++){
            if (value==i){
              return
            }
          }
        }
        if((this.carNoInputIndex==1 || this.carNoInputIndex==2)&&( value=='港' || value=='澳' || value=='学' || value=='领'))
        {
          return    //==1或者==2时禁止港澳学领
        }
        this.$emit('select',value)
      },

      deleteInKeyBoard:function(){
        this.inputIndex=Math.max(0,this.inputIndex-1)
        this.$emit('delete')
        //del ete是键盘点击的时候     -->  -on:del ete="del ete le tter"   这两个 del ete需要一致，
        //表示当点击delete时，执行的是ond el ete这个函数
      },
    }










  }
</script>

<style scoped>


  .count:first-child .item,                       /* count 必须输入字母(车牌第二位) 选中第一排*/
  .count:nth-child(2) .item:nth-child(10),        /* count 必须输入字母(车牌第二位) 选中第2排,第10个  澳*/
  .count:nth-child(2) .item:nth-child(9),         /* count 必须输入字母(车牌第二位) 选中第2排,第9个   港*/
  .count:nth-child(3) .item:nth-child(10),        /* count 必须输入字母(车牌第二位) 选中第3排,第10个  学*/
  .count:nth-child(4) .item:nth-child(8),         /* count 必须输入字母(车牌第二位) 选中第4排,第8个   领*/
  .special:nth-child(2) .item:nth-child(9),
  .special:nth-child(2) .item:nth-child(10),
  .special:nth-child(3) .item:nth-child(10),
  .special:nth-child(4) .item:nth-child(8)
  {
    background: #e6e6e6;        /*   #e6e6e6 */
  }

  .keyboard{
    position:absolute;
    z-index: 666;
    /*left:0;*/
    bottom:0rem;  /*设置下缘距离*/   /*实际键盘的位置控制*/

    width:100%;
    /*display:flex;*/
    /*justify-content: center;*/
    box-shadow: 0 -2px 4px 0 rgba(0,0,0,0.20);

    background-color: #000000 20%;
  }

  .container{
    box-sizing: border-box;
    padding:  1.5rem  0  2rem  0;


    background-color: cadetblue;
  }
  .line{
    display:flex;
    justify-content: center;
    align-items: center;    /*此行中因为最后又加入了一个删除键，导致 可能不在一条水平线上， */
    background: #FFFFFF;
    /*box-shadow: 0 0 3px 0 #C8C8C8;*/
    /*border-radius: 4px;*/
  }
  .item{
    color: #636363;
    font-size: 1.6rem;
    background: #fff; /*#FFF*/
    box-shadow: 0 0 3px 0 #C8C8C8;
    height: 4rem;
    width: 8%;
    line-height: 4rem;
    border-radius: 0.2rem;
    margin:  1%;
    text-align: center;
  }



  .line:last-child > span:nth-child(9),     /* 最后一排的两个空格不显示边框*/
  .line:last-child > span:nth-child(10)     /* 最后一排的两个空格不显示边框*/
  {
    background: none;
    border: none;
    border-radius: 0;
    box-shadow: 0 0 0 0;
  }


  .delete {
    /*background: #FFFFFF;*/
    /*box-shadow: 0 0 5px 0 #C8C8C8;*/
    /*border-radius: 10px;*/

    /*box-sizing: border-box;*/
    /*padding: 2% 0;*/
    position: absolute;
    width: 10%;
    height: 4em;
    right: 0.4rem;
    /*font-size: 1.5rem;*/

    border-radius: 10px;
    box-shadow: 0 0 5px 0 #C8C8C8;
    background: #fff url("../assets/return.png") no-repeat center/2.5rem;} /*2.5rem表示 里面删除箭头的大小*/





</style>

