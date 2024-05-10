import { APP } from '@/helper/APP'
import { showError, successMsg } from '@/helper/ToastNofication'
import { makeHttpReq } from '@/helper/makeHttpReq'
import { ref } from 'vue'

export interface IRegisterInput {
  name: string
  email: string
  password: string
}

export type RegisterResponseType = {
  user: {
    id: number
    name: string
    email: string
  }
  message: string
}
export const registerInput = ref<IRegisterInput>({
  name: '',
  email: '',
  password: ''
})

export function useCreateUser() {
  const loading = ref(false)
  async function createUser() {
    try {
      loading.value = true
      const data = await makeHttpReq<IRegisterInput, RegisterResponseType>
      ('register', 'POST',registerInput.value)
      successMsg(data.message)

      loading.value = false
      registerInput.value = {} as IRegisterInput
    } catch (error) {
      loading.value = false

      showError((error as Error).message)
    }
  }
  return { loading, createUser }
}
