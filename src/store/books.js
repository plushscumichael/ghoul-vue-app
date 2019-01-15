export default {
    state: {
      books:[
        {
            id: 'bookId1',
            title: 'Ghoul Book',
            description: '1st book',
            imageId: 'bookImageId1',
            imageSrc: 'http://classic.battle.net/war3/images/undead/units/portraits/ghoul.gif',
            parts: [
              {
                id: 'book1PartId1',
                title: 'Attack'
              },
              {
                id: 'book1PartId2',
                title: 'Defense'
              }
            ],
            level: ['L1', 'L2'],
            rating: 4.5
        },
        {
            id: 'bookId2',
            title: 'Crypt Fiend Book',
            description: '2nd book',
            imageId: 'bookImageId2',
            imageSrc: 'http://classic.battle.net/war3/images/undead/units/portraits/cryptfiend.gif',
            parts: [
              {
                id: 'book2PartId1',
                title: 'Attack'
              },
              {
                id: 'book2PartId2',
                title: 'Defense'
              }
            ],
            level: ['L1', 'L4'],
            rating: 5.0
        }
      ],
      bookParts:[
        {
          bookId: 'bookId1',
          bookPartId: 'book1PartId1',
          bookTitle: 'Ghoul Book',
          partTitle: 'Attack',
          youtube_id: 'CyZ52RXj1B0',
          content:[
            {
              sentences:[
                {
                  origText:"Ghouls are the basic shock troops. They can be useful throughout the game, especially with upgrades and Ghoul Frenzy. Be sure to research Cannibalize and use it after battles with the enemy and Creeps to heal your Ghouls. At later stages of the game Ghouls can be easily killed by higher level units. You should either be focusing on having a LOT of Ghouls or moving up to Abominations or Necromancers. ",
                  transText:"advance1"
                }
              ]
            },
            {
              sentences:[
                {
                  origText: "Ghouls are best when combined with the Death Knight's Unholy Aura and the Dread Lord's Vampiric Aura. ",
                  transText:"advance2"
                }
              ]
            },
            {
              sentences:[
                {
                  origText:"Don't continue to focus on Ghouls when it is clear that they are not cutting it. Instead build up to Abominations, Necromancers, or Frost Wyrms. ",
                  transText:"advance3"
                }
              ]
            }
          ],
          words:[
            {
              origWord: "Attack Type",
              transWord: "Normal"
            },
            {
              origWord: "Weapon Type",
              transWord: "Normal"
            },
            {
              origWord: "Range",
              transWord: "Melee"
            }
          ]
        },
        {
          bookId: 'bookId1',
          bookPartId: 'book1PartId2',
          bookTitle: 'Ghoul Book',
          partTitle: 'Defense',
          youtube_id: 'CyZ52RXj1B0',
          content:[
            {
              sentences:[
                {
                  origText:"Ghouls are the basic shock troops. They can be useful throughout the game, especially with upgrades and Ghoul Frenzy. Be sure to research Cannibalize and use it after battles with the enemy and Creeps to heal your Ghouls. At later stages of the game Ghouls can be easily killed by higher level units. You should either be focusing on having a LOT of Ghouls or moving up to Abominations or Necromancers. ",
                  transText:"advance1"
                }
              ]
            },
            {
              sentences:[
                {
                  origText: "Ghouls are best when combined with the Death Knight's Unholy Aura and the Dread Lord's Vampiric Aura. ",
                  transText:"advance2"
                }
              ]
            },
            {
              sentences:[
                {
                  origText:"Don't continue to focus on Ghouls when it is clear that they are not cutting it. Instead build up to Abominations, Necromancers, or Frost Wyrms. ",
                  transText:"advance3"
                }
              ]
            }
          ], 
          words:[
            {
              origWord:'Armor Type',
              transWord:'Heavy'
            },
            {
              origWord: 'Armor',
              transWord:'0'
            }
          ]
        },
        {
          bookId: 'bookId2',
          bookPartId: 'book2PartId1',
          bookTitle: 'Crypt Fiend Book',
          partTitle: 'Attack',
          youtube_id: 'JbWzs5DjcDY',
          content:[
            {
              sentences:[
                {
                  origText:"Crypt Fiends are great additions to a melee force. You should use Crypt Fiends when facing air units, as they are the main defense against air units besides Gargoyles because of their Web Ability, which allows Crypt Fiends to bring air units down to earth. Crypt Fiends do not have an air attack but their Web ability allows them and other melee units to attack a webbed air unit.  ",
                  transText:"advance1"
                }
              ]
            },
            {
              sentences:[
                {
                  origText: "Players sometimes focus entirely on Crypt Fiends in team games. This can be an effective strategy. Be reminded that Vampiric Aura does not work with Crypt Fiends. Proper Crypt Fiend usage involves a lot of running. ",
                  transText:"advance2"
                }
              ]
            }
          ],
          words:[
            {
              origWord:'Attack Type',
              transWord:'Pierce'
            },
            {
              origWord: 'Weapon Type',
              transWord:'Missile'
            },
            {
              origWord:'Range',
              transWord:'55'
            }
          ]
        },
        {
          bookId: 'bookId2',
          bookPartId: 'book2PartId2',
          bookTitle: 'Crypt Fiend Book',
          partTitle: 'Defense',
          youtube_id: 'JbWzs5DjcDY',
          content:[
            {
              sentences:[
                {
                  origText:"Crypt Fiends are great additions to a melee force. You should use Crypt Fiends when facing air units, as they are the main defense against air units besides Gargoyles because of their Web Ability, which allows Crypt Fiends to bring air units down to earth. Crypt Fiends do not have an air attack but their Web ability allows them and other melee units to attack a webbed air unit.  ",
                  transText:"advance1"
                }
              ]
            },
            {
              sentences:[
                {
                  origText: "Players sometimes focus entirely on Crypt Fiends in team games. This can be an effective strategy. Be reminded that Vampiric Aura does not work with Crypt Fiends. Proper Crypt Fiend usage involves a lot of running. ",
                  transText:"advance2"
                }
              ]
            }
          ],
          words:[
            {
              origWord:'Armor Type',
              transWord:'Medium'
            },
            {
              origWord: 'Armor',
              transWord:'0'
            }
          ],
        }
      ]
    },
    mutations: {
      SET_BOOKS(state, payload){
        state.books = payload
      },
      SET_BOOKPARTS(state, payload){
        state.bookParts = payload
      }
    },
    getters: {
      getBooks: (state) => state.books,
      getParts: (state) => state.bookParts
    }
    
  }