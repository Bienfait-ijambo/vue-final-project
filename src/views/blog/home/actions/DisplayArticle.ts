import { showError } from '@/helper/ToastNofication'
import { makeHttpReq } from '@/helper/makeHttpReq'
import { ref } from 'vue'

export type GetArticleResponseType = {
  id: number
  title: string
  post_content: string
  slug: string
  image: string
  created_at: string
}
export function useDisplayArticle() {
  const loading = ref(false)

  const posts = ref<Array<GetArticleResponseType>>()
  async function getPost() {
    try {
      loading.value = true
      const data = await makeHttpReq<undefined, Array<GetArticleResponseType>>(
        `client/posts`,
        'GET',
        undefined
      )
      posts.value = data

      loading.value = false
    } catch (error) {
      loading.value = false
      showError((error as Error).message)
    }
  }
  return { loading, posts, getPost }
}
