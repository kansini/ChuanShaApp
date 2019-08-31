import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/secretary',
			name: 'secretary',
			component: () => import('@/views/secretaryStudio/Nav')
		},
		{
			path: '/secretarList',
			name: 'secretarList',
			component: () => import('@/views/secretaryStudio/Index'),
			redirect: '/teamList',
			children: [{
				path: '/teamList',
				name: 'teamList',
				component: () => import('@/views/secretaryStudio/TeamList')
			}]
		},

	]
})
