import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[],
    title:'My custom title',
    links:[
      "abc",
      "efg",
      "sdf"
    ]

  },
  getters:{
    countLinks: state => {
    return state.links.length
    }
  },
  mutations: {
    ADD_LINK: (state, link)=>{
      state.links.push(link)

    },
    REMOVE_LINK: (state, link) => {        // Add this:
      state.links.splice(link, 1)
    },
    REMOVE_ALL: (state) => {                     // Add this
      state.links = []
    },
    addToCart( state, item){
          state.cart.push(item)


    }
  
    

  },
  actions: {
removeLink: (context, link) => {
  context.commit("REMOVE_LINK",link)
},
removeAll ({commit}) {                       // Add this
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      commit('REMOVE_ALL')
      resolve()
    }, 1500)
  })
}
  }
})
