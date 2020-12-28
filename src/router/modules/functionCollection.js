import Layout from '@/layout'

const functionCollections = {
    path: '/functionCollections',
    component: Layout,
    redirect: '/functionCollections/dynamicField',
    alwaysShow: true,
    meta: {
        title: '常见功能',
        icon: 'lock',
        roles: ['admin']
    },
    children: [
        {
            path: 'dynamicField',
            component: () => import('@/views/functionCollections/dynamicField'),
            name: 'dynamicField',
            meta: {
                title: '动态设置字段',
                roles: ['admin']
            }
        },
        {
            path: 'responseTable',
            component: () => import('@/views/functionCollections/responseTable'),
            name: 'responseTable',
            meta: {
                title: '响应式表格',
                roles: ['admin']
            }
        },
        {
            path: 'extendsField',
            component: () => import('@/views/functionCollections/extendsField'),
            name: 'extendsField',
            meta: {
                title: '扩展字段',
                roles: ['admin']
            }
        },
        {
            path: 'frontRenderExcel',
            component: () => import('@/views/functionCollections/frontRenderExcel'),
            name: 'frontRenderExcel',
            meta: {
                title: '绘制excel',
                roles: ['admin']
            }
        },
        {
            path: 'dragComponent',
            component: () => import('@/views/functionCollections/dragComponent/index'),
            name: 'dragComponent',
            meta: {
                title: '拖动组件',
                roles: ['admin']
            }
        },
        {
            path: 'temperatureChart',
            component: () => import('@/views/functionCollections/temperatureChart'),
            name: 'temperatureChart',
            meta: {
                title: '体温单',
                roles: ['admin']
            }
        },
        {
            path: 'dynamicFormItem',
            component: () => import('@/views/functionCollections/dynamicFormItem'),
            name: 'dynamicFormItem',
            meta: {
                title: '动态增加表单项及验证',
                roles: ['admin']
            }
        },
        {
            path: 'clipboard',
            component: () => import('@/views/clipboard/index'),
            name: 'clipboard',
            meta: { 
                title: '剪贴板', 
                roles: ['admin']
            }
        },
        {
            path: 'theme',
            component: () => import('@/views/theme/index'),
            name: 'Theme',
            meta: { 
                title: '自定义主题',
                roles: ['admin']
            }
        },
        {
            path: '/pdfDownload',
            component: () => import('@/views/pdf/download'),
            name: 'pdfDownload',
            meta: { 
                title: 'pdf 下载',
                roles: ['admin']
            }
        },
    ]
}

export default functionCollections