import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { GetPostResponseType } from '@/views/admin/postList/actions/GetPost'
import type { ICreateOrUpdatePostInput } from '@/views/admin/actions/CreatePost'

export const usePostStore = defineStore('post', () => {
  const postData =ref<ICreateOrUpdatePostInput>({
    id:'',
    title:'',
    post_content:'',
  })

  const edit=ref(false)
  //if is true
 

  return { postData,edit }
})


