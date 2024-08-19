<script setup>
import {
    Edit,
    Delete
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const categorys = ref([
    {
        "id": 3,
        "categoryName": "美食",
        "categoryAlias": "my",
        "createTime": "2023-09-02 12:06:59",
        "updateTime": "2023-09-02 12:06:59"
    },
    {
        "id": 4,
        "categoryName": "娱乐",
        "categoryAlias": "yl",
        "createTime": "2023-09-02 12:08:16",
        "updateTime": "2023-09-02 12:08:16"
    },
    {
        "id": 5,
        "categoryName": "军事",
        "categoryAlias": "js",
        "createTime": "2023-09-02 12:08:33",
        "updateTime": "2023-09-02 12:08:33"
    }
])
//获得分类信息
import {articleCategoryListService} from '@/api/atricle.js'
const getAllArticleCategory =()=> {
    let result=articleCategoryListService();
    categorys.value=result.data;
}
// getAllArticleCategory();
const dialogVisible = ref(false)
//添加分类数据模型
const categoryModel = ref({
    categoryName: '',
    categoryAlias: '',
    id: ''
})
//添加分类表单校验
const rules = {
    categoryName: [
        { required: true, message: '请输入分类名称', trigger: 'blur' },
    ],
    categoryAlias: [
        { required: true, message: '请输入分类别名', trigger: 'blur' },
    ]
}
import { articleCategoryAddService } from '@/api/atricle.js';
import { ElMessage,ElMessageBox} from 'element-plus';
const addArticleCategory = async() => {
    categoryModel.value = {
        categoryName: '',
        categoryAlias: '',
    }
    let result = await articleCategoryAddService(categoryModel.value);
    ElMessage.success(result.message ? result.message : '添加成功');
    //刷新页面
    getAllArticleCategory();
    //关闭弹窗
    dialogVisible.value = false;
}
const title = ref('')

const Editcategory = (row) =>{
    title.value='编辑分类'
    dialogVisible.value = true;
    categoryModel.value = {
        categoryName: row.categoryName,
        categoryAlias: row.categoryAlias,
        id: row.id
    }
}
import { EditArticleCategoryService } from '@/api/atricle.js';
const EditArticleCategory = async() => {
    let result = await EditArticleCategoryService(categoryModel.value);
    ElMessage.success(result.message ? result.message : '编辑成功');
    //刷新页面
    getAllArticleCategory();
    //关闭弹窗
    dialogVisible.value = false;
}
import { deleteArticleCategoryService } from '@/api/atricle.js';
const deleteCategory = (row) => {
    ElMessageBox.confirm(
        '分类将会被彻底删除',
        '警告',
        {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
        }
    )
    .then( async() => {
        let result = await  deleteArticleCategoryService(row.id)
        ElMessage.success(result.message ? result.message : '删除成功');
        //刷新页面
        getAllArticleCategory();
    })
    .catch(() => {
    ElMessage({
        type: 'info',
        message: '删除取消',
    })
    })
}


</script>


<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <span style="font-size: 24px;">文章分类</span>
                <div class="extra">
                    <el-button type="primary" @click="getAllArticleCategory">刷新</el-button>
                    <el-button type="primary" @click="dialogVisible = true;title='添加分类';">添加分类</el-button> 
                    <!-- TODO -->
                </div>
            </div>
        </template>
        <el-table :data="categorys" style="width: 100%">
            <el-table-column label="序号" width="100" type="index"> </el-table-column>
            <el-table-column label="分类名称" prop="categoryName"></el-table-column>
            <el-table-column label="分类别名" prop="categoryAlias"></el-table-column>  
            <el-table-column label="操作" width="100">
                <template #default="{ row }">
                    <el-button :icon="Edit" circle plain type="primary" @click="Editcategory(row)"></el-button>
                    <el-button :icon="Delete" circle plain type="danger" @click="deleteCategory(row)"></el-button>
                </template>
            </el-table-column>
            <template #empty>
                <el-empty description="没有数据" />
            </template>
        </el-table>

        <el-dialog v-model="dialogVisible" :title="title" width="30%">
            <el-form :model="categoryModel" :rules="rules" label-width="100px" style="padding-right: 30px">
                <el-form-item label="分类名称" prop="categoryName">
                    <el-input v-model="categoryModel.categoryName" minlength="1" maxlength="10"></el-input>
                </el-form-item>
                <el-form-item label="分类别名" prop="categoryAlias">
                    <el-input v-model="categoryModel.categoryAlias" minlength="1" maxlength="15"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false;">取消</el-button>
                    <el-button type="primary" @click="title=='编辑分类'?addArticleCategory():EditArticleCategory()"> 确认 </el-button>
                </span>
            </template>
        </el-dialog>
    </el-card>

</template>

<style lang="scss" scoped>
.page-container {
    min-height: 100%;
    box-sizing: border-box;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>