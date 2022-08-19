import { createStore } from "vuex";
import axios from 'axios';
export default createStore({
  state: {
    countriesList: []
  },
  getters: {
    getAllCountries (state) {
      return state.countriesList
    },
  },
  mutations: {
    SET_COUNTRIES_LIST (state, data) {
      state.countriesList = data
    }
  },
  actions: {
    async getCountriesList ( {commit},{type, value}={}) {
      type === 'region' && value === 'All' && (value= null)
      try {
        const search = value && type ? `/${type}/${value}` : 'all'
        const data = await axios.get(`https://restcountries.com/v2/${search}`)
        commit('SET_COUNTRIES_LIST', data.data)
        return data.data
      } catch (e){
        return false
      }
    }
  },
  modules: {},
});
