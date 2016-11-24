import Vue from 'vue';
import VueRouter from 'vue-router';
// import App from './App';

Vue.use(VueRouter);
const Home = {template:'<div>Home内容fffffff {{$route.name}}{{$route.params.id}}</div>'}
const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/',component:Home},
		{path:'/params/:aaa/:bbb',component:Home},
		{path:'/params-regex/:id(\\d+)',component:Home},
	]
})
new Vue({
	router,
	template:`
		<div>
			<h1>早上好</h1>
			<ul>
				<li><router-link to="/">/</router-link></li>
				<li><router-link to="/params/111/222">/params/111/222</router-link></li>
				<li><router-link to="/params-regex/333">/params-regex/333</router-link></li>
				<li><router-link to="/params-regex/aaa">/params-regex/aaa</router-link></li>
			</ul>
			<p>显示</p>
			<router-view></router-view>
			<pre>
				<code>{{JSON.stringify($route, null, 2)}}</code>
			</pre>
		</div>
	`
}).$mount('#app')