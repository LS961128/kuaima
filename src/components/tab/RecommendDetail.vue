<template>
  <transition name="show">
    <div class="news-desc" v-show="showFlag">
      <div class="news-top">
        <div class="back"></div>
        <div class="news-title">{{newitem.title}}</div>
      </div>
      <div class="news-content">
        <span @click="See(newitem.url)">360全景看房</span>
      </div>
    </div>
  </transition>
</template>

<script>
  // import IScroll from 'iscroll/build/iscroll-probe'
    export default {
      props: {
        newitem: {
          type: Object
        }
      },
      data () {
        return {
          showFlag: false
        }
      },
      methods: {
        show () {
          this.showFlag = !this.showflag
        },
        See (e) {
          window.location.href = e
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .news-desc
    height 100%
    width 100%
    background-color #f6f6f6
    transition all .2s linear
    position fixed
    top 0
    left 0
    z-index 30
    &.show-enter, &.show-leave-to
      transform translateX(100%)
</style>
