<template>
    <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column width="60" type="index"></el-table-column>
        <el-table-column prop="roleName" label="角色名" width="120"></el-table-column>
        <el-table-column prop="erpMemberPermissions" label="操作权限"></el-table-column>
        <el-table-column fixed="right" label="操作" width="180"></el-table-column>
    </el-table>
</template>

<script>
import { getRoleList } from '@/api/permission.js'
export default {
    data() {
        return {
            tableData: []
        }
    },
    created() {
        getRoleList().then(res => {
            this.tableData = res || []
        })
    },
    methods: {}
}
</script>