import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/tab/Recommend'
import Xinhua from '../components/tab/Xinhua'
import Thepeople from '../components/tab/Thepeople'
import World from '../components/tab/World'
import Videos from '../components/tab/Videos'
import History from '../components/tab/History'
import Parenting from '../components/tab/Parenting'
import Sports from '../components/tab/Sports'
import Automobile from '../components/tab/Automobile'
import Healthcare from '../components/tab/Healthcare'
import Beauty from '../components/tab/Beauty'
import Entertainment from '../components/tab/Entertainment'
import Emotion from '../components/tab/Emotion'
import Deliciousfood from '../components/tab/Deliciousfood'
import Funny from '../components/tab/Funny'
import Sociology from '../components/tab/Sociology'
import HomeFurnishing from '../components/tab/HomeFurnishing'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/xinhua',
      name: 'xinhua',
      component: Xinhua
    },
    {
      path: '/thepeople',
      name: 'thepeople',
      component: Thepeople
    },
    {
      path: '/world',
      name: 'world',
      component: World
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/parenting',
      name: 'parenting',
      component: Parenting
    },
    {
      path: '/sports',
      name: 'sports',
      component: Sports
    },
    {
      path: '/automobile',
      name: 'automobile',
      component: Automobile
    },
    {
      path: '/healthcare',
      name: 'healthcare',
      component: Healthcare
    },
    {
      path: '/beauty',
      name: 'beauty',
      component: Beauty
    },
    {
      path: '/entertainment',
      name: 'entertainment',
      component: Entertainment
    },
    {
      path: '/emotion',
      name: 'emotion',
      component: Emotion
    },
    {
      path: '/deliciousfood',
      name: 'deliciousfood',
      component: Deliciousfood
    },
    {
      path: '/funny',
      name: 'funny',
      component: Funny
    },
    {
      path: '/sociology',
      name: 'sociology',
      component: Sociology
    },
    {
      path: '/homefurnishing',
      name: 'homeFurnishing',
      component: HomeFurnishing
    }
  ]
})
