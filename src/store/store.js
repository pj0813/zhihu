import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cur:'OFF',
  },
  actions: {
    changeCur (ctx,cur) {
      ctx.commit('changeCueMutations',cur)
    }
  },
  mutations: {
    changeCueMutations (state,cur) {
      cur == 'OFF' ? state.cur = 'ON' :state.cur = 'OFF'
    }
  }
})