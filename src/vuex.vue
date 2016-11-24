<template>
	<div id="app">
		<h1>hello Vuex</h1>
		<p>{{$store.state.count}} - {{count}}</p>
		<p>
			<button @click="$store.commit('jia', {a:10})">+</button>
			<button @click="$store.commit('jian')">-</button>

		</p>
		<p>
			<button @click="jiaplus">+plus</button>
			<button @click="jianplus">-plus</button>

		</p>

	</div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
	export default {
		name:'app',
		data(){
			return {
				count: 0
			}
		},
		//1================
		// computed:{
		// 	count(){
		// 		return this.$store.state.count
		// 	}
		// },
		//2=================
		// computed:mapState({
		// 	// count: state => state.count
		// 	count: function(state) {
		// 		return state.count
		// 	}
		// }),
		//3================
		// computed:mapState([
		// 	"count"
		// ]),
		//改3的坑
		computed:{
			...mapState([
				"count"
			]),
			// count(){
			// 	return this.$store.getters.count
			// }
			//================================
			// ...mapGetters([
			// 	"count"
			// ])
		},
		methods:{
			...mapMutations([
				"jia",
				"jian"
			]),
			...mapActions([
				"jiaplus",
				// "jianplus"
			]),
			...mapActions({
				jianplus:'jianplus'
			})
		}
	}
</script>