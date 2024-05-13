import { showError } from '@/helper/ToastNofication'
import { makeHttpReq } from '@/helper/makeHttpReq'
import { ref } from 'vue'


export function useCountPost() {
  const loading = ref(false)

  const count = ref<number>()
  async function countPost() {
    try {
      loading.value = true
      const data = await makeHttpReq<undefined,{data: number}>(
        `count/posts`,
        'GET',
        undefined
      )
      count.value = data.data

      loading.value = false
    } catch (error) {
      loading.value = false
      showError((error as Error).message)
    }
  }
  return { loading,count, countPost }
}
