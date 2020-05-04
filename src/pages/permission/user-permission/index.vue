<template>
    <el-card class="box-card">
        <div class="colum-zzj">
            <div class="search-bar">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="登录名称">
                        <el-input
                            v-model="formInline.loginName"
                            placeholder="登录名称"
                            @keyup.enter.native="onSearch()"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="text" @click="handleRest">重置</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <!-- 下面表单 -->
            <div class="tools-bar">
                <el-button
                    type="success"
                    icon="el-icon-plus"
                    size="small"
                    @click="dialogVisible = true;dialogTitle='新增用户'"
                >新增用户</el-button>
            </div>
            <div>
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%"
                    ref="singleTable"
                    highlight-current-row
                    class="colum-zzj"
                >
                    <el-table-column fixed type="index" width="60"></el-table-column>
                    <el-table-column prop="status" label="停用/禁用" min-width="100" align="center">
                        <template slot-scope="scope">
                            <el-switch
                                v-model="scope.row.status"
                                :active-value="1"
                                :inactive-value="0"
                                active-text
                                inactive-text
                                @change="handleStatus(scope.row)"
                            ></el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column prop="loginName" label="登录名" min-width="120"></el-table-column>
                    <el-table-column prop="name" label="真实名字" min-width="120"></el-table-column>
                    <el-table-column prop="mobile" label="联系电话" min-width="130"></el-table-column>
                    <el-table-column
                        prop="roleList"
                        label="权限"
                        :formatter="formatter"
                        min-width="210"
                    ></el-table-column>
                    <el-table-column prop="address" label="联系地址" min-width="200"></el-table-column>
                    <el-table-column prop="email" label="电子邮箱" width="250"></el-table-column>
                    <el-table-column
                        prop="lastLoginTime"
                        label="最后登录时间"
                        width="200"
                        :formatter="toDateTime"
                    ></el-table-column>
                    <el-table-column label="操作" fixed="right" width="170">
                        <template slot-scope="scope">
                            <el-button
                                type="text"
                                size="small"
                                @click="handleEdit(scope.$index, scope.row)"
                            >编辑</el-button>
                            <el-button
                                type="text"
                                size="small"
                                @click="handleResetPwd(scope.$index, scope.row)"
                            >重置密码</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

            <!-- 下面是 diaload -->

            <el-dialog
                title="新增用户"
                :visible.sync="dialogVisible"
                width="80%"
                :before-close="handleClose"
            >
                <el-form ref="form" :model="dataForm" label-width="80px" :rules="rules">
                    <el-form-item label="登录名" prop="loginName">
                        <template v-if="dialogTitle=='修改用户信息'">{{dataForm.loginName}}</template>
                        <el-input v-else v-model="dataForm.loginName" placeholder="登录名"></el-input>
                    </el-form-item>
                    <el-form-item label="登录名" prop="loginName">
                        <el-input v-model="dataForm.loginName" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="用户角色" prop="roleIds">
                        <el-select
                            v-model="dataForm.tempRoleIds"
                            multiple
                            placeholder="请选择"
                            style="width: 100%;"
                        >
                            <el-option
                                v-for="item in roles"
                                :key="item.id"
                                :label="item.roleName"
                                :value="item.id"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="真实姓名" prop="name">
                        <el-input v-model="dataForm.name" placeholder="真实姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" prop="mobile">
                        <el-input v-model="dataForm.mobile" placeholder="联系电话"></el-input>
                    </el-form-item>
                    <el-form-item label="联系地址" prop="address">
                        <el-input v-model="dataForm.address" placeholder="联系地址"></el-input>
                    </el-form-item>
                    <el-form-item label="电子邮箱" prop="email">
                        <el-input v-model="dataForm.email" placeholder="电子邮箱"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
            <div class="block">
                <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
            </div>
        </div>
    </el-card>
</template>

<script>
import { getUserList } from '@/api/permission'
import moment from 'moment'
export default {
    data() {
        return {
            tableData: [],
            dialogVisible: false,
            dataForm: {
                id: '',
                loginName: '',
                tempRoleIds: [],
                roleIds: '',
                name: '',
                mobile: '',
                address: '',
                email: ''
            },
            dialogTitle: '',
            // loading: true,
            formInline: {
                loginName: '',
                region: ''
            },
            roles: [
                {
                    id: 1,
                    roleName: '超级管理员'
                },
                {
                    id: 2,
                    roleName: '普通员工'
                }
            ],
            searchData: {
                loginName: ''
            },
            rules: {
                loginName: [
                    {
                        required: true,
                        message: '登录名不能为空',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 5,
                        message: '登录名长度在1 到50之间',
                        trigger: 'blur'
                    }
                ],
                name: [
                    {
                        required: true,
                        message: '真实姓名不能为空',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 5,
                        message: '真实姓名长度在1 到50之间',
                        trigger: 'blur'
                    }
                ],
                mobile: [
                    {
                        required: true,
                        message: '电话号码不能为空',
                        trigger: 'blur'
                    },
                    {
                        pattern: /^(13|15|18|14|17)[0-9]{9}$/,
                        message: '手机号码格式不对',
                        trigger: 'blur'
                    }
                ],
                email: [
                    {
                        required: true,
                        message: '请输入邮箱地址',
                        trigger: 'blur'
                    },
                    {
                        type: 'email',
                        message: '邮箱格式不对',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    async created() {
        const data = await getUserList()
        this.loading = false
        this.tableData = data
    },
    methods: {
        // toDateTime() {},
        formatter(row, column) {
            console.log(row, column)
            let newArr = row.erpMemberRoles.map((item, index) => {
                return item.roleName
            })
            console.log(newArr)
            return newArr.join(' ')
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done()
                })
                .catch(_ => {})
        },
        onSubmit() {
            console.log('submit!')
        },
        onSearch({ pageNumber = 1 } = {}) {},
        handleRest() {
            this.formInline = {
                loginName: ''
            }
            this.onSearch()
        },
        handleEdit(index, row) {
            this.dialogVisible = true
            this.dialogTitle = '修改用户信息'
            this.dataForm.tempRoleIds = []
            for (let x of Object.keys(this.dataForm)) {
                if (
                    x === 'tempRoleIds' &&
                    typeof row.roleList === 'object' &&
                    row.roleList.length > 0
                ) {
                    for (let item of row.roleList) {
                        this.dataForm.tempRoleIds.push(item.id)
                    }
                } else {
                    this.dataForm[x] = row[x]
                }
            }
        },
        handleResetPwd(index, row) {
            this.$confirm('确认重置该用户的登录密码？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {})
        },
        toDateTime(row, column, cellValue) {
            return cellValue
                ? moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
                : ''
        }
    }
}
</script>
<style>
/* .colum-zzj {
    padding-top: 70px;
    width: 80%;
    margin: 0 auto;
} */
</style>
