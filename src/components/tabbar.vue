<template>
  <ul class="tab-bar">
    <li ><i class="icon-Refresh"></i><span>刷新</span></li>
    <li ><i class="icon-money"></i><span>值得赚</span></li>
    <li ><i class="icon-mine"></i><span>我的</span></li>
  </ul>
</template>

<script>
    export default {
    }
</script>

<style lang="stylus" scoped>
@import "../common/stylus/mixin.styl"
  .tab-bar
    position fixed
    bottom 0
    width 100%
    height 49px
    text-align center
    border-top 0.5px solid rgb(182, 182, 182)
    background-color #fcfcfc
    display flex
    flex-direction row
    li
      flex 1
      color #999
      .icon-Refresh
        display block
        width 25px
        height 25px
        margin 3px auto
        bg-image("../common/img/icon_bar_refresh")
        background-repeat no-repeat
        background-size 25px auto
      .icon-money
        display block
        width 25px
        height 25px
        margin 3px auto
        bg-image("../common/img/icon_top_hongbao")
        background-repeat no-repeat
        background-size 25px auto
      .icon-mine
        display block
        width 25px
        height 25px
        margin 3px auto
        bg-image("../common/img/icon_money_on")
        background-repeat no-repeat
        background-size 25px auto
      span
        display: block
        font-size: 12px
</style>
