import Vue from 'vue';
import VueRouter from 'vue-router';
import parent from './tranistion.vue'
// import App from './App';

Vue.use(VueRouter);


const home = {
	template:`
		<div>
			<h2>home</h2>
			<p>this is home{{$route.query.a}}</p>
		</div>
	`
}
const page404 = {
	template:`
		<div>
			<h2>error:404</h2>
			<p>this is 404</p>
		</div>
	`,
	beforeRouteEnter:(to,from,next) => {
		console.log(to)
		console.log(from)
		//next()//可以 next(false)不可以
		next()
	},
	beforeRouteLeave:(to,from,next) => {
		console.log(to)
		console.log(from)
		//next()//可以 next(false)不可以
		next()
	}

}
const router = new VueRouter ({
	mode: 'history',//hash
	base: __dirname,
	routes: [
		{path:'/',component:home},
		{path:'/parent',component:parent,
			beforeEnter:(to,from,next) => {
				console.log(to)
				console.log(from)
				//next()//可以 next(false)不可以
				next()
			}
		},
		{path:'*',component:page404},


	]
})

new Vue({
	router,
	data() {
		return {
			aaa:'fade'
		}
	},
	template:`
		<div>
			<button v-on:click="houtui">后退</button>
			<button v-on:click="qianjin">前进</button>
			<button v-on:click="home">返回首页</button>
			<button v-on:click="query">query</button>
			<h1>this is transition</h1>
			<ul>
				<li><router-link to="/">/</router-link></li>
				<li><router-link to="/parent">/parent</router-link></li>
				<li><router-link to="/meiyou">meiyou</router-link></li>
			</ul>
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
			
		</div>
	`,
	methods:{
		houtui:function () {
			router.go(-1)
		},
		qianjin(){
			router.go(1)
		},
		home(){
			console.log(router)
			router.push('/')

		},
		query(){
			router.push({path:'/',query:{a:1,b:2}})
			console.log(router)
		}
	}
}).$mount('#app')