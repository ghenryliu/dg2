<template>
    <button>{{btn2Text}}</button>
</template>

<script>
    export default {

      name: "P04_searchCar",
      props:['btn2Text']
    }
</script>

<style scoped>

  button {

    margin-top: 1rem;

    height:4.5rem;
    width:100%;

    background: #FFFFFF;
    border: 1px solid rgba(219,223,227,0.30);
    box-shadow: 0 5px 12px 0 rgba(217,226,233,0.50);
    border-radius: 10px;

    font-family: PingFangSC-Regular;
    font-size: 1.6rem;
    color: #64C6E7;
    letter-spacing: 0;
  }

</style>
