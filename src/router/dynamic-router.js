
const Permission=()=>import('@/pages/permission')
const Menu=()=>import("@/pages/permission/menu-permission")
const User=()=>import("@/pages/permission/user-permission")
const Role=()=>import("@/pages/permission/role-permission")


/* 需要权限判断的路由 */
const dynamicRoutes = [
    
    {
        path: '/permission',
        component: Permission,
        name: 'permission',
        children: [
            {
                path: 'menu',
                component: Menu,
                name: 'menu-permission',
            },
            {
                path: 'role',
                component: Role,
                name: 'role-permission',
                meta: {
                    name: '角色管理',
                    icon: 'eye'
                }
            },
            {
                path: 'user',
                component: User,
                name: 'user-permission',
            },
        ],
    },
]

export default dynamicRoutes
