<template lang="html">
  <el-card class="box-card">
    <div>
      <el-table
        v-loading.body="tableLoading"
        ref="singleTable"
        :data="tableData"
        border
        highlight-current-row
        style="width:581px">
        <el-table-column
          type="index"
          label="编号"
          width="60"
          fixed="left"
          >
        </el-table-column>  
        <el-table-column
          prop="name"
          label="名称"
          width="130"
          fixed="left">
        </el-table-column>
        <el-table-column
          prop="city"
          label="描述"
          width="100"
          fixed="left">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"         
          width="180"
          fixed="left">
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="left"
          width="110">
          <template slot-scope="scope">
    <div>
        <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button type="text" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
    </div>
          </template>
        </el-table-column>
      </el-table>    
    </div>
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" >
      <el-form  :rules="rules" label-width="80px">
            <el-form-item label="编号" prop="number">
              <el-input  placeholder="编号不能为空"></el-input>
            </el-form-item>
            <el-form-item label="名称" prop="name">
              <el-input  placeholder="名称不能为空"></el-input>
            </el-form-item>
            <el-form-item label="描述" prop="describe">
              <el-input  placeholder="描述不能为空"></el-input>
            </el-form-item>            
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="info"  v-if="dialogTitle=='修改商品信息'">保存</el-button>     
      </div>
    </el-dialog>
  </el-card>
</template>
<script>

export default {
    data() {
        return {
            tableLoading: false,
            dialogVisible: false,
            dialogTitle: '修改商品信息',
            rules: {
                number: [
                    {
                        required: true,
                        message: '编号不能为空',
                        trigger: 'blur'
                    }
                ],
                name: [
                    {
                        required: true,
                        message: '请输入正确的名称',
                        trigger: 'blur'
                    }
                ],
                describe: [
                    {
                        required: true,
                        message: '请输入正确的描述',
                        trigger: 'blur'
                    }
                ]
            },
            tableData: [
                {
                    date: '2020-05-02',
                    number: '1',
                    name: '产品一',
                    city: '好不好'
                },
                {
                    date: '2020-05-01',
                    number: '2',
                    name: '产品二',
                    city: '好不好'
                },
                {
                    date: '2020-05-01',
                    number: '3',
                    name: '产品三',
                    city: '好不好'
                },
                {
                    date: '2020-05-03',
                    number: '4',
                    name: '产品四',
                    city: '好不好'
                }
            ]
        }
    },
    methods: {
        handleDelete(index, row) {
            this.$confirm('确认删除该商品吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {})
        },
        handleEdit(index, row) {
            this.dialogVisible = true
            this.dialogTitle = '修改商品信息'
        }
    }
}
</script>

<style lang="scss">
.el-table td, .el-table th{
text-align: center;
}
</style>


