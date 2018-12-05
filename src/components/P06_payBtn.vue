<template>
  <div @click="submit">{{btnText}}</div>
</template>

<script>
  export default {
    name: "P03_feeBtn",
    props:['btnText'],//需要和父组件交互
// data(){
//     return{
//       btnText:'车牌缴费'
//     }
// },
    methods:{
      submit(){

        this.$emit('submit')
      }
    }


  }
</script>

<style scoped>
  div{
    margin-bottom: 5rem;

    width: 86.2%;
    height:4.5rem;


    background: #64C6E7;
    box-shadow: 0 5px 12px 0 rgba(217,226,233,0.50);
    border-radius: 10px;
    /*border:none;*/

    font-family: PingFangSC-Regular;
    font-size:1.6rem;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 4.5rem;
    text-align: center;

  }

</style>
