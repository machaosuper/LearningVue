import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)


const state = {
	count: 44
}
//触发状态
const mutations = {
	jia(state,n){
		state.count += n.a
	},
	jian(state){
		state.count --
	}
}
const actions = {
	jiaplus (context){
		context.commit('jia', {a:1})
		setTimeout(() => {
			context.commit('jian')
		},3000)
		console.log('我执行了')
	},
	jianplus({commit}){
		commit('jian')
	}
}
const getters = {
	count:function(state) {
		return state.count += 0
	}
}
const moduleA = {
	
}
export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})