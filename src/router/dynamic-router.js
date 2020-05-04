
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
        meta: {
            name: '权限管理',
            icon: 'table'
        },
        children: [
            {
                path: 'user',
                name: 'user-manage',
                component: User,
                meta: {
                    name: '用户管理',
                    icon: 'table'
                }
            },
            {
                path: 'role',
                name: 'role-manage',
                component: Role,
                meta: {
                    name: '角色管理',
                    icon: 'eye'
                }
            },
            {
                path: 'menu',
                name: 'menu-manage',
                component: Menu,
                meta: {
                    name: '菜单管理',
                    icon: 'tree'
                }
            }
        ],
    },
]

export default dynamicRoutes
