export default {
    get UserToken() {
       
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTg4NjA2NzI5LCJleHAiOjE1ODg2OTMxMjl9.0ls91GXbQ4WzahuNp8FylKGPVoUrjiogwHBgnH8y91k'
    },
    set UserToken(value) {
        localStorage.setItem('token', value)
    },
    /* 导航菜单是否折叠 */
    isSidebarNavCollapse: false,
    /* 面包屑导航列表 */
    crumbList: []
}
