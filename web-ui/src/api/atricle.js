//导入请求工具类
import request from '@/utils/request.js'
import { useTokenStore } from '@/stores/token'

//文章分类列表查询
export const articleCategoryListService = ()=>{
    const tokenStore = useTokenStore()
    return request.get('/category',{
        headers: {
            'Authorization': tokenStore.token
        }
    })
}
//添加文章分类
export const articleCategoryAddService = (categoryModel) => {
    return request.post('/category', categoryModel)
}
export const EditArticleCategoryService = (categoryModel) => {
    return request.put('/category', categoryModel)
}
export const deleteArticleCategoryService = (id) => {
    return request.delete('/category?id='+id)
}
//文章列表查询
export const articleListService = (params) => {
    return request.get('/article',{params : params})
}
//添加文章
export const articleAddService = (articleModel) => {
    return request.post('/article', articleModel)
}
