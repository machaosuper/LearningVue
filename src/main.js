import Vue from 'vue';
import store from './store';
import vuex from './vuex.vue';


new Vue({
	el:'#app',
	store,
	render: h => h(vuex)
})




// import Router from './Routes';
// import tranistion from './tranistion.vue'
// new Vue({
// 	el:'#app',
// 	render: xx => xx(tranistion)
// })
// import App from './App';

// Vue.use(VueRouter);


// const Home = {template:'<div>Home内容</div>'}
// const First = {template:'<div>first</div>'}

// const router = new VueRouter({
// 	mode: 'history',
// 	base: __dirname,
// 	routes:[
// 		{path:'/',compontnt:Home},
// 		{path:'/first',compontnt:First}
// 	]
// })


// // const App = {
// // 	tempalte: `
// // 		<div>
// // 		<h1>导航</h1>
// // 			<ul>
// //             	<li><router-link to="/">home</router-link></li>
// //             	<li><router-link to="/first">First</router-link></li>
// // 			</ul>
// //         	<router-view></router-view>

// // 		</div>
// // 	`
// // }

// new Vue({
//   // el: '#app',
//   router,
//   // render: h => h(App)
//   tempalte: `
// 		<div id="nav">
// 			<h1>导航</h1>
// 			<ul>
//             	<li><router-link to="/">home</router-link></li>
//             	<li><router-link to="/first">First</router-link></li>
// 			</ul>
//         	<router-view></router-view>

// 		</div>
// 		`

// }).$mount('#app')
