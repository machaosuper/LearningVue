import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)




const Home = {template:'<div>Home内容</div>'}
const about = {template:'<div>about</div>'}
const users = {template: `
		<div>
			<h2>Users</h2>
			<router-view></router-view>
		</div>
	`}
const userHome = {template: `
		<div class="class">
			userHome
		</div>
	`}

const user = {template: `
		<div class="class">
			{{$route.params.username}}
			{{$route.query.aaa}}
		</div>
	`}

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:[
		{path:'/', name:'home', component:Home},
		{path:'/users', component:users,
			children:[
				{path:'/', name:'users', component: userHome},
				{path:':username', name:'user', component: user},
				{path:'about', name:'about', component: about}
			]
		}

	]
})
new Vue({
  router,
  template: `
		<div id="nav">
			<h1>导航</h1>
			<ol>
            	<li><router-link to="/">home</router-link></li>
            	<li><router-link to="/users">users</router-link></li>
            	<ol>
	            	<li><router-link :to="{path:'/users/mac', query:{aaa:'bbb'}}">mac</router-link></li>
	            	<li><router-link to="about" append>append</router-link></li>
	            	<li><router-link to="about" exact>exact</router-link></li>
				</ol>
			</ol>
        	<router-view></router-view>

		</div>
		`

}).$mount('#app')