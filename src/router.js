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
			path: '/nav',
			name: 'nav',
			component: () => import('@/views/Nav'),
			redirect: '/secretary',
			children: [{
					path: '/secretary',
					name: 'secretary',
					component: () => import('@/views/secretary/Nav')
				},
				{
					path: '/pr',
					name: 'pr',
					component: () => import('@/views/partyRepresentative')

				},
				{
					path: '/prEvent',
					name: 'prEvent',
					component: () => import('@/views/partyRepresentative/EventList')

				},
				{
					path: '/npc',
					name: 'npc',
					component: () => import('@/views/npcMember')

				},
				{
					path: '/npcMemberEvent',
					name: 'npcMemberEvent',
					component: () => import('@/views/npcMember/EventList')

				},
			]
		},
		// {
		// 	path: '/secretary',
		// 	name: 'secretary',
		// 	component: () => import('@/views/secretaryStudio/Nav')
		// },
		// {
		// 	path: '/secretarList',
		// 	name: 'secretarList',
		// 	component: () => import('@/views/secretaryStudio/SecretarList'),
		// },
		// {
		// 	path: '/secretarList',
		// 	name: 'secretarList',
		// 	component: () => import('@/views/secretaryStudio/Index'),
		// 	redirect: '/teamList',
		// 	children: [{
		// 		path: '/teamList',
		// 		name: 'teamList',
		// 		component: () => import('@/views/secretaryStudio/TeamList')
		// 	}]
		// },

	]
})
