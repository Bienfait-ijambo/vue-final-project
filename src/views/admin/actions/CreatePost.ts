import { APP } from '@/helper/APP'
import { showError, successMsg } from '@/helper/ToastNofication'
import { makeHttpReq } from '@/helper/makeHttpReq'
import { ref } from 'vue'

export interface ICreatePostInput {
  title: string
  post_content: string
}

export const postInput = ref<ICreatePostInput>({
  title: '',
  post_content: ''
})
export function useCreatePost() {
  const loading = ref(false)
  async function createPost() {
    try {
      loading.value = true
      const data = await makeHttpReq<ICreatePostInput, { message: string }>(
        'posts',
        'POST',
        postInput.value
      )
      successMsg(data.message)

      loading.value = false
      postInput.value = {} as ICreatePostInput
    } catch (error) {
      loading.value = false
      showError((error as Error).message)
    }
  }
  return { loading, createPost }
}
