import { showError, successMsg } from "@/helper/ToastNofication"
import { makeHttpReq } from "@/helper/makeHttpReq"
import { ref } from "vue"




export function useDeletePost() {
    const loading = ref(false)
 
    async function deletePost(postId:number) {
      try {
        loading.value = true
        const data = await makeHttpReq<undefined,{message:string}>(
          `posts/${postId}`,
          'DELETE',
          undefined
        )
        successMsg(data.message)
        loading.value = false
      } catch (error) {
        loading.value = false
        showError((error as Error).message)
      }
    }
    return { loading, deletePost }
  }
  