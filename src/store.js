import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './store/user'
import generalModule from './store/general'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    generalModule,
    userModule
 }
})
