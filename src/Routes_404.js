import Vue from 'vue';
import VueRouter from 'vue-router';
// import App from './App';

Vue.use(VueRouter);


const home = {
	template:`
		<div>
			<h2>home</h2>
			<p>this is home</p>
		</div>
	`
}
const parent = {
	template:`
		<div>
			<h2>parent</h2>
			<p>this is parent</p>
		</div>
	`
}
const page404 = {
	template:`
		<div>
			<h2>error:404</h2>
			<p>this is 404</p>
		</div>
	`
}

const router = new VueRouter ({
	mode: 'history',
	base: __dirname,
	routes: [
		{path:'/',component:home},
		{path:'/parent',component:parent},
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
			<h1>this is transition</h1>
			<ul>
				<li><router-link to="/">/</router-link></li>
				<li><router-link to="/parent">/parent</router-link></li>
				<li><router-link to="/meiyou">meiyou</router-link></li>

			</ul>
			<transition :name="aaa" mode="out-in">
				<router-view></router-view>
			</transition>
			
		</div>
	`,
	watch:{
		'$route'(to, from){


			if(from.path == '/parent') {
				this.aaa = 'fade1'
			}else{
				this.aaa = 'fade2'
			}
		}
	}
}).$mount('#app')