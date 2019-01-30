import Vue from 'vue'

export default {
    state: {
      books:[]
    },
    mutations: {
      SET_BOOKS(state, payload){
        state.books = payload
      },
      SET_BOOKPARTS(state, payload){
        state.bookParts = payload
      }
    },
    actions:{
      LOAD_BOOKS({commit}){
        Vue.$db.collection('books')
        .get()
        .then(querySnapshot => {
          let books = []
          querySnapshot.forEach(s => {
            const data = s.data()
            let book = {
              id: s.id,
              title: data.title,
              description: data.description,
              imageSrc: data.imageSrc,
              rating: data.rating,
              level: data.level.slice(),
              parts: []
            }

            let parts = []
            if(data.parts){
              data.parts.forEach(p => {
                let part = {
                  id: p.id,
                  title: p.title
                }

              parts.push(part)
              })
            }
            book.parts = parts

            books.push(book)
          })
          
          commit('SET_BOOKS', books)
        })
        /* .catch(error => console.log(error)) */
      }
    },
    getters: {
      getBooks: (state) => state.books
    }
    
  }