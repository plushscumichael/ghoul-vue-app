import Vue from 'vue'

let defaultUserData =  {
    books: {},
    words: {}
}

export default {
    state: {
      userData: defaultUserData
    },
    mutations: {
        SET_USER_DATA(state, payload){
            state.userData = payload
        },
        ADD_USER_BOOK(state, payload){
            Vue.set(state.userData.books, payload.bookId, payload.book)
        }
    },
    actions:{
        LOAD_USER_DATA({commit}, payload){
            commit('SET_PROCESSING', true)
            let userDataRef = Vue.$db.collection('userData').doc(payload) 
            userDataRef.get()
                .then((data) => {
                    let userData = data.exists ? data.data() : defaultUserData

                    if(!userData.books)
                        userData.books = {}

                        for(var key in userData.books){
                            if (userData.books.hasOwnProperty(key))
                                userData.books[key].addedDate = userData.books[key].addedDate.toDate()
                        }


                    commit('SET_USER_DATA', userData)
                    commit('SET_PROCESSING', false)
                })
                .catch(() => {
                    commit('SET_PROCESSING', false)
                })
        },
        ADD_USER_BOOK({commit,getters}, payload){
            commit('SET_PROCESSING', true)
            let userDataRef = Vue.$db.collection('userData').doc(getters.userId)
            let book = {
                addedDate: new Date(),
                parts:{}
            }

            userDataRef.set({
                books: {
                    [payload]: book
                }
            }, {merge: true})
            .then(() => {
                commit('ADD_USER_BOOK', {bookId: payload, book: book})
                commit('SET_PROCESSING', false)
            })
            .catch(() => {
                commit('SET_PROCESSING', false)
            })
        }
    },
    getters: {
        userData: (state) => state.userData
    }
    
  }