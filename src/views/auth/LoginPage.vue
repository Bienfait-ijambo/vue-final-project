<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { ref } from 'vue'
import Error from '@/components/Error.vue'
import { loginUser, type ILoginInput } from './actions/LoginUser'
import { showError, successMsg } from '@/helper/ToastNofication'
import BaseBtn from '@/components/BaseBtn.vue'

const loginInput = ref<ILoginInput>({
  email: '',
  password: ''
})

const rules = {
  email: { required, email },
  password: { required }
}

const v$ = useVuelidate(rules, loginInput.value)
const loading = ref(false)

async function submitLogin() {
  const result = await v$.value.$validate()

  if (!result) {
    return
  }
  try {
    loading.value = true
    const data = await loginUser(loginInput.value)
    v$.value.$reset()
    loading.value = false
    if (data.isLogged) {
      loginInput.value = {} as ILoginInput
      localStorage.setItem('userData', JSON.stringify(data))
      window.location.href="/admin"
    }else{
      showError(data.message)
    }

  } catch (error) {
    loading.value = false

    showError((error as Error).message)
  }
}
</script>
<template>
  <div class="row">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="card">
          <!-- {{ registerInput }} -->
          <div class="card-body">
            <h2 align="center">Login</h2>
            <form action="" @submit.prevent="submitLogin">
              <Error label="Email" :errors="v$.email.$errors">
                <input v-model="loginInput.email" class="form-control form-control-lg" />
              </Error>

              <Error label="Password" :errors="v$.password.$errors">
                <input
                  type="password"
                  v-model="loginInput.password"
                  class="form-control form-control-lg"
                />
              </Error>

              <br />
              <RouterLink to="/register">Register</RouterLink>
              <br />
              <br />
              <div class="form-group">
                <BaseBtn :loading="loading" label="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>
