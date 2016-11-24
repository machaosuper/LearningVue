import Vue from 'Vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)




const Home = {template:'<div>Home内容</div>'}
const users = {template: `
		<div class="class">
			<h2>Users</h2>
			<router-view></router-view>
		</div>
	`}

const user = {template: `
		<div class="class">
			{{$route.params.username}}
		</div>
	`}

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:[
		{path:'/',name:'home', component:Home},
		{path:'/uesrs',component:users,
			children:[
				// {path:'/', name:'users', component: user},
				{path:':username', name:'user', component: user}
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
            	<li><router-link to="/uesrs">First</router-link></li>
            	<ol>
	            	<li><router-link :to="{path:'/users/mac', query:{aaa:'bbb'}}">mac</router-link></li>
				</ol>
			</ol>
        	<router-view></router-view>

		</div>
		`

}).$mount('#app')