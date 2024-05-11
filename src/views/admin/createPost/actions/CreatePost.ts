import { APP } from '@/helper/APP'
import { showError, successMsg } from '@/helper/ToastNofication'
import { makeHttpReq } from '@/helper/makeHttpReq'
import { usePostStore } from '@/stores/postStore'
import { ref } from 'vue'

export interface ICreateOrUpdatePostInput {
  id:number
  title: string
  post_content: string
}

const postStore=usePostStore()

export function useCreateOrUpdatePost() {
  const loading = ref(false)
  async function createOrUpdate() {
    try {
      loading.value = true

      const data=postStore.edit?
     await updatePost()
      : await createPost()
     
      successMsg(data.message)

      loading.value = false
      postStore.postData = {} as ICreateOrUpdatePostInput
    } catch (error) {
      loading.value = false
      showError((error as Error).message)
    }
  }
  return { loading, createOrUpdate }
}


async function createPost(){
  const postData=postStore.postData
  const {id,...restProps}=postData
  const data = await makeHttpReq<Omit<ICreateOrUpdatePostInput,'id'>, { message: string }>(
    'posts',
    'POST',
    restProps
  )
  postStore.edit=false
  
  return data
}

async function updatePost(){
  const postData=postStore.postData
  const {id,...restProps}=postData
  const data = await makeHttpReq<Omit<ICreateOrUpdatePostInput,'id'>, { message: string }>(
    `posts/${id}`,
    'PUT',
    restProps
  )
  postStore.edit=false
  return data
}