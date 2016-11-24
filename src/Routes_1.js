import Vue from 'vue';
import VueRouter from 'vue-router';
// import App from './App';

Vue.use(VueRouter);


const Home = {template:'<div>Home内容fffffff {{$route.name}}</div>'}
const First = {template:'<div>first内容ffffffffff {{$route.name}}</div>'}
const First_first = {template:'<div>First_first内容ffffffffff {{$route.name}} {{$route.params.id}}</div>'}
const First_second = {template:'<div>First_second内容ffffffffff {{$route.name}} {{$route.params.id}}</div>'}

const Second = {template:'<div>second内容ffffffff {{$route.name}}</div>'}
const temp = {template: `
		<div class="class">
			<h2>子路由 {{$route.name}}</h2>
			<router-view></router-view>
		</div>
	`}

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:[
		{path:'/',name:'home', component:Home},
		{path:'/first',component:temp,
			children:[
				{path:'/', name:'first', component: First},
				{path:'first', name:'first-first', component: First_first},
				{path:'second', name:'first-second', component: First_second}
			]
		},
		{path:'/second', name:'second', component:Second}

	]
})


// const App = {
// 	tempalte: `
// 		<div>
// 		<h1>导航</h1>
// 			<ul>
//             	<li><router-link to="/">home</router-link></li>
//             	<li><router-link to="/first">First</router-link></li>
// 			</ul>
//         	<router-view></router-view>

// 		</div>
// 	`
// }

new Vue({
  // el: '#app',
  router,
  // render: h => h(App)
  // tempalte: '<div>99999</div>'
  template: `
		<div id="nav">
			<h1>导航</h1>
			<p>{{$route.name}} {{$route.params.id}}</p>
			<ol>
            	<li><router-link to="/">home</router-link></li>
            	<li><router-link to="/first">First</router-link></li>
            	<ol>
	            	<li><router-link :to="{name:'first-first', params:{id: 123}}">First-first</router-link></li>
	            	<li><router-link :to="{name:'first-second', params:{id: 321}}">first-Second</router-link></li>
				</ol>
            	<li><router-link to="/second">Second</router-link></li>
			</ol>
        	<router-view></router-view>

		</div>
		`

}).$mount('#app')
