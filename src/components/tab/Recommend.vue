<template>
  <div class="horse-wrapper">
    <div class="horse-wrapper-content" ref="wrapperlist">
      <ul>
        <li v-for='(items ,index) in news.data' :key="index"  @click="selectNewsDesc(items)">
          <div class="main-content">
            <div class="horse-detail" @click="See(items.url)">{{items.title}}</div>
            <div class="horse-pic" @click="See(items.url)"><img :src="items.images[0]"><img :src="items.images[1]"><img :src="items.images[2]"></div>
            <div class="horse-bottom">
              <p>{{items.source}}</p>
              <div class="horse-close"></div>
            </div>
            <div class="bottom"></div>
          </div>
        </li>
      </ul>
    </div>
    <!--<detail ref="Detail" :newitem="items"></detail>-->
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  // import Detail from '../../components/tab/RecommendDetail'
    export default {
      data () {
        return {
          news: {},
          showStr: false,
          items: {}
        }
      },
      props: {},
      created () {
        this.$axios.get('/api/news')
          .then((res) => {
            res = res.data
            this.news = res.data
            this.$nextTick(() => {
              if (!this.scroll) {
                this._initScroll()
              } else {
                this.scroll.refresh()
              }
            })
          })
          .catch((error) => {
            alert(error)
          })
      },
      methods: {
        _initScroll () {
          this.menuScroll = new IScroll(this.$refs.wrapperlist, {
            click: true,
            scrollY: true
          })
        },
        showDetail () {
          this.showStr = !this.showStr
        },
        selectNewsDesc (items) {
          this.$refs.Detail.show()
          this.items = items
        },
        See (e) {
          window.location.href = e
        }
      },
      components: {
        // Detail
      }
    }
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin.styl"
.horse-wrapper
  width 100%
  .horse-wrapper-content
    position absolute
    height 80%
    overflow hidden
    ul
      display inline-block
      li
        display block
        margin-bottom 15px
        .horse-detail
          width 100%
          font-size 15px
          text-indent 0.5em
          color: #000
          word-wrap break-word
          margin-left 5px
        .horse-pic
          width 100%
          margin-top 20px
          img
            width 90px
            height 60px
            margin-left 5px
        .horse-bottom
          display flex
          position relative
          width 100%
          margin-left 5px
          margin-top 5px
          p
            flex 1
            font-size 10px
            color: #B4B4B4
          .horse-close
            flex 1
            position absolute
            bottom 0
            right 10%
            width 15px
            height 12px
            bg-image("../../common/img/icon_feed_close")
            background-size 15px 12px
            background-repeat no-repeat
        .bottom
          width: 98%
          margin 5px auto
          border-bottom 1px solid #F2F2F2
</style>
