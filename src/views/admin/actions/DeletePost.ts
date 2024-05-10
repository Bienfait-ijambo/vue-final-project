

export function useGetPost() {
    const loading = ref(false)
    const query=ref<string>('')
    const posts = ref<Array<GetPostResponseType>>()
    async function getPost() {
      try {
        loading.value = true
        const data = await makeHttpReq<undefined,{data: Array<GetPostResponseType>}>(
          `posts?query=${query.value}`,
          'GET',
          undefined
        )
        posts.value = data.data
  
        loading.value = false
      } catch (error) {
        loading.value = false
        showError((error as Error).message)
      }
    }
    return { loading, posts, getPost,query }
  }
  