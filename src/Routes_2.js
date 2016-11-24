import Vue from 'vue';
import VueRouter from 'vue-router';
// import App from './App';

Vue.use(VueRouter);


const Home = {template:'<div>Home内容fffffff {{$route.name}}</div>'}
const First = {template:'<div>first内容ffffffffff {{$route.name}}</div>'}

const Second = {template:'<div>second内容ffffffff {{$route.name}}</div>'}
const head = {template:'<div>header {{$route.name}}</div>'}
const foot = {template:'<div>footer {{$route.name}}</div>'}

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:[
		{path:'/',name:'home', components:{
			default: Home,
			header: head,
			footer: foot
		}},
		{path:'/first',name:'first',components:{
			default: First,
			header: head,
			footer: foot
		}},
		{path:'/second', name:'second', components:{
			default: Second,
			header: head,
			footer: foot
		}},

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
            	<li><router-link to="/second">Second</router-link></li>
			</ol>
        	<router-view></router-view>
        	<router-view name="header" style="width:50%;background:red;float:left;height:300px;color:#fff;"></router-view>
        	<router-view name="footer" style="width:50%;background:blue;float:right;height:300px;color:#fff;"></router-view>

		</div>
		`

}).$mount('#app')
