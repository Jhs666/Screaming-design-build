import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myid: 9036
  },
  mutations: {
    changemyid(state , data){
      state.myid = data
    }
  },
  actions: {

  }
})
