import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [],
  },
  mutations: {
  },
  getters: {
    justWeb: state =>{
      
      return state.list.filter(item => item.category == "Web")




    }

  },
  actions: {
  },
  modules: {
  }
})
