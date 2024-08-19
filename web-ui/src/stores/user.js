import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useUserInfoStore = defineStore('userInfo', ()=>{
    const info = ref('')

    const setinfo = (newinfo) => {
        info.value = newinfo
    }
    const removeinfo=()=>{
        info.value=''
    }


    return {
        info,
        setinfo,
        removeinfo
    }
},
{
    persist:true
}
) 