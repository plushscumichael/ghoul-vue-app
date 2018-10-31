import firebase from 'firebase'

export default {
  state: {
    user: {
      isAuthenticated: false,
      uid: null
    }
  },
  mutations: {
    SET_USER(state, payload){
      state.user.isAuthenticated = true
      state.user.uid = payload
    },
    UNSET_USER(state){
      state.user = {
        isAuthenticated: false,
        uid: null
      }
    }
  },
  actions: {
    SIGNUP({commit}, payload){
      commit('SET_PROCESSING', true)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('SET_USER', user.uid)
        commit('SET_PROCESSING', false)
      })
      .catch(function(error) {
        commit('SET_PROCESSING', false),
        commit('SET_ERROR', error.message)
      });
    },
    SIGNIN({commit}, payload){
      commit('SET_PROCESSING', true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('SET_USER', user.uid)
        commit('SET_PROCESSING', false)
      })
      .catch(function(error) {
        commit('SET_PROCESSING', false),
        commit('SET_ERROR', error.message)
      });
    },
    STATE_CHANGED({commit}, payload){
      if (payload){
        commit('SET_USER', payload.uid)
      }
      else {
        commit('UNSET_USER')
      }
    }
  },
  getters: {
    isUserAuthenticated: (state) => state.user.isAuthenticated
  }
}
 