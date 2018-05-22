<template>
<div class="header">
  <div class="h-left">
    <input class="inp" placeholder="乱世霸业"/>
    <div class="icon"></div>
  </div>
</div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" scoped>
  @import "../common/stylus/mixin.styl"
  .header
    display flex
    width: 100%
    height: 40px
    background: #FBEB50
    float: left
    .h-left
      position relative
      width 80%
      height 20px
      margin
      border 0
      -webkit-border-radius 15px
      -moz-border-radius 15px
      background white
      top 25%
      left 9%
      .inp
        display inline-block
        width 90%
        height 15px
        border none
        outline none
        margin-left 5px
        z-index 1
      .icon
        position absolute
        width: 15px
        height: 15px
        right 8px
        bottom 2px
        bg-image("../common/img/icon_saomiao")
        background-size 12px 12px
        background-repeat no-repeat
        z-index 2
    .h-right
      flex 1
</style>
