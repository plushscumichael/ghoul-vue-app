export default {
    state: {
      books:[
        {
            id: 'bookId1',
            title: 'Ghoul Book',
            description: '1st book',
            imageId: 'bookImageId1',
            imageSrc: 'http://classic.battle.net/war3/images/undead/units/portraits/ghoul.gif',
            parts: 3,
            level: ['L1', 'L2'],
            rating: 4.5
        },
        {
            id: 'bookId2',
            title: 'Crypt Fiend Book',
            description: '2nd book',
            imageId: 'bookImageId2',
            imageSrc: 'http://classic.battle.net/war3/images/undead/units/portraits/cryptfiend.gif',
            parts: 3,
            level: ['L1', 'L4'],
            rating: 5.0
        },
        {
            id: 'bookId3',
            title: 'Gargoyle Book',
            description: '3rd book',
            imageId: 'bookImageId3',
            imageSrc: 'http://classic.battle.net/war3/images/undead/units/portraits/gargoyle.gif',
            parts: 3,
            level: ['L1', 'L8'],
            rating: 4
        }
      ]
    },
    mutations: {
      SET_BOOKS(state, payload){
        state.books = payload
      }
    },
    getters: {
      getBooks: (state) => state.books,
    }
    
  }