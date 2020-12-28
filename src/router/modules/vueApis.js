import Layout from '@/layout'

const vueApis = {
	path: '/vueApis',
	component: Layout,
	redirect: '/vueApis/watch',
	alwaysShow: true,
	meta: {
		title: 'vue api高级用法',
		icon: 'lock',
		roles: ['admin']
	},
	children: [
		{
			path: 'watch',
			component: () => import('@/views/vueApis/watch'),
			name: 'watch',
			meta: {
				title: 'watch高级用法',
				roles: ['admin']
			}
		},
		{
			path: 'key',
			component: () => import('@/views/vueApis/key'),
			name: 'key',
			meta: {
				title: 'key管理',
				roles: ['admin']
			}
		},
		{
			path: 'broadcast',
			component: () => import('@/views/vueApis/broadcast/index'),
			name: 'broadcast',
			meta: {
				title: '事件派发管理',
				roles: ['admin']
			}
		},
		{
			path: 'provideAndInject',
			component: () => import('@/views/vueApis/provideAndInject/index'),
			name: 'provideAndInject',
			meta: {
				title: 'provide inject',
				roles: ['admin']
			}
		},
		{
			path: 'inheritAttrs',
			component: () => import('@/views/vueApis/inheritAttrs/index'),
			name: 'inheritAttrs',
			meta: {
				title: 'attrs属性',
				roles: ['admin']
			}
		},
		{
			path: 'renderFunction',
			component: () => import('@/views/vueApis/render/index'),
			name: 'renderFunction',
			meta: {
				title: '渲染函数',
				roles: ['admin']
			}
		},
	]
}

export default vueApis