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
                component: () => import('@/views/secretary')
            },
                {
                    path: '/secretaryNav',
                    name: 'secretaryNav',
                    component: () => import('@/views/secretary/Nav'),
                    redirect: '/member',
                    children: [
                        {
                            path: '/member',
                            name: 'member',
                            component: () => import('@/views/secretary/Member')
                        },
                        {
                            path: '/trainee',
                            name: 'trainee',
                            component: () => import('@/views/secretary/Trainee')
                        },
                        {
                            path: '/plan',
                            name: 'plan',
                            component: () => import('@/views/secretary/Plan')
                        },
                        {
                            path: '/event',
                            name: 'event',
                            component: () => import('@/views/secretary/Event')
                        }
                    ]
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
        }
    ]
})
