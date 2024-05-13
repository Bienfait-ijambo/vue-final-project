import { APP } from '@/helper/APP'
import { showError } from '@/helper/ToastNofication'
import { makeHttpReq } from '@/helper/makeHttpReq'
import { ref } from 'vue'

export interface ILoginInput {
  email: string
  password: string
}

export type LoginResponseType = {
  user: {
    id:number
    name: string
    email: string
  }
  token: string
  message: string
  isLogged: boolean
}
export const loginInput = ref<ILoginInput>({
  email: '',
  password: ''
})

export function useLoginUser() {
  const loading = ref(false)
  async function loginUser() {
    try {
      loading.value = true
      const data = await makeHttpReq<ILoginInput, LoginResponseType>(
        'login',
        'POST',
        loginInput.value
      )

      loading.value = false
      if (data.isLogged) {
        loginInput.value = {} as ILoginInput
        localStorage.setItem('userData', JSON.stringify(data))
        window.location.href = '/admin'
      } else {
        showError(data.message)
      }
    } catch (error) {
      loading.value = false

      showError((error as Error).message)
    }
  }

  return { loading, loginUser }
}
