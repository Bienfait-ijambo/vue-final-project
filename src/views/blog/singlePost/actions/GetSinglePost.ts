import { showError } from '@/helper/ToastNofication'
import { makeHttpReq } from '@/helper/makeHttpReq'
import { ref } from 'vue'
import type { GetArticleResponseType } from '../../home/actions/DisplayArticle'

export function useGetSingleArtilce() {
  const loading = ref(false)

  const post = ref<GetArticleResponseType>()
  async function getPost(slug:string) {
    try {
      loading.value = true
      const data = await makeHttpReq<undefined, Array<GetArticleResponseType>>(
        `posts/${slug}`,
        'GET',
        undefined
      )
      if(data.length>0){
        post.value = data[0]
      }
   

      loading.value = false
    } catch (error) {
      loading.value = false
      showError((error as Error).message)
    }
  }
  return { loading, post, getPost }
}
