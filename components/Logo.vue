<template>
  <div class="logo">
  </div>
</template>

<style lang='scss'>
  .logo{
    width:4rem;
    height:5rem;
    background-size:cover;
    background-position:center;
    background-image:url(../assets/img/BHlogo-01.svg);
    &:hover,&:active{
      background-image:url(../assets/img/BHlogo-02.svg);
      cursor:pointer;
      // cursor:url(../static/img/cursors/house.png), auto;
    }
  }
</style>
