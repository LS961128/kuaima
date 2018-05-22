<template>
  <div id="app">
    <kuai-header></kuai-header>
    <div class="tab" ref="tablist">
      <ul>
        <li class="tab-item active"><router-link to="/recommend">推荐</router-link></li>
        <li class="tab-item"><router-link to="/videos">视频</router-link></li>
        <li class="tab-item"><router-link to="/xinhua">新华</router-link></li>
        <li class="tab-item"><router-link to="/thepeople">人民</router-link></li>
        <li class="tab-item"><router-link to="/world">环球</router-link></li>
        <li class="tab-item"><router-link to="/history">历史</router-link></li>
        <li class="tab-item"><router-link to="/parenting">亲子</router-link></li>
        <li class="tab-item"><router-link to="/sports">体育</router-link></li>
        <li class="tab-item"><router-link to="/automobile">汽车</router-link></li>
        <li class="tab-item"><router-link to="/healthcare">养生</router-link></li>
        <li class="tab-item"><router-link to="/Beauty">美女</router-link></li>
        <li class="tab-item"><router-link to="/entertainment">娱乐</router-link></li>
        <li class="tab-item"><router-link to="/emotion">情感</router-link></li>
        <li class="tab-item"><router-link to="/deliciousfood">美食</router-link></li>
        <li class="tab-item"><router-link to="/funny">搞笑</router-link></li>
        <li class="tab-item"><router-link to="/sociology">社会</router-link></li>
        <li class="tab-item"><router-link to="/homefurnishing">家居</router-link></li>
      </ul>
    </div>
    <div class="border-1px"></div>
    <router-view/>
    <kuai-tabbar></kuai-tabbar>
  </div>
</template>

<script>
  import KuaiHeader from './components/header'
  import KuaiTabbar from './components/tabbar'
  import IScroll from 'iscroll/build/iscroll-probe'
export default {
  name: 'App',
  components: {
    KuaiHeader,
    KuaiTabbar
  },
  data () {
    return {
      new: {}
    }
  },
  created () {
    this.$axios.get('/api/news')
      .then((res) => {
        res = res.data
        this.news = res.data
        this.$nextTick(() => {
          this._initScroll()
        })
      })
      .catch((error) => {
        alert(error)
      })
  },
  methods: {
    _initScroll () {
      this.menuScroll = new IScroll(this.$refs.tablist, {
        click: true,
        scrollX: true,
        bounce: true
      })
    }
  }
}
</script>
<style lang="stylus">
@import "common/stylus/mixin.styl"
#app
  .tab
    width 100%
    height 30px
    overflow hidden
    white-space nowrap
    ul
     display inline-block
     line-height 20px
     border-bottom: 0.2px solid #D5D5D5
     .tab-item
       display inline-block
       text-align center
       list-style none
       padding 0 12px
       & > a
         display block
         font-size 10px
         color #B0B0B0
         &.active
          font-weight 800
          color black
          border-1px(#FAEA4F)
          font-size 11px
          a
           color #060606
</style>
