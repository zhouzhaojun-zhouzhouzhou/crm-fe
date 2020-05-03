export default {
    get UserToken() {
       
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTg4NDMyODU2LCJleHAiOjE1ODg1MTkyNTZ9.YFOzGWKLqQA2RvliF6NV7a2ueCsG5T-89X2yYkmkl_A'
    },
    set UserToken(value) {
        localStorage.setItem('token', value)
    },
    /* 导航菜单是否折叠 */
    isSidebarNavCollapse: false,
    /* 面包屑导航列表 */
    crumbList: []
}
