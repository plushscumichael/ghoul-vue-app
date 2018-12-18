import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './store/user'
import generalModule from './store/general'
import booksModule from './store/books'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    generalModule,
    userModule,
    booksModule
 }
})
