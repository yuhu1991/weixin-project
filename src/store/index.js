import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    title: '微信',
    show: 'true'
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})